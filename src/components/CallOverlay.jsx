import React, { useMemo, useEffect, useRef, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useChat } from '../context/ChatContext';
import { Phone, X } from 'lucide-react';

export default function CallOverlay() {
  const { user } = useAuth();
  const { messages, activeChatId, sendMessage } = useChat();

  const [seconds, setSeconds] = useState(0);
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);

  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const peerRef = useRef(null);
  const processedSignalsRef = useRef(new Set());
  const connectedCallIdRef = useRef(null);
  const pendingIceRef = useRef([]);

  const activeCall = useMemo(() => {
    if (!user || !activeChatId || !messages?.length) return null;
    const relatedCalls = messages.filter((msg) => {
      if (msg.type !== 'call' || !msg.metadata) return false;
      if (msg.metadata.chatId && msg.metadata.chatId !== activeChatId) return false;
      return msg.metadata.callerId === user.id || msg.metadata.targetId === user.id;
    });

    if (!relatedCalls.length) return null;

    const byCallId = new Map();
    relatedCalls.forEach((msg) => {
      const callId = msg.metadata.callId || msg.id;
      byCallId.set(callId, msg);
    });

    const terminalStatuses = ['declined', 'cancelled', 'ended', 'missed'];
    const activeCalls = Array.from(byCallId.values()).filter((msg) => !terminalStatuses.includes(msg.metadata?.status));
    if (!activeCalls.length) return null;
    return activeCalls[activeCalls.length - 1];
  }, [user, activeChatId, messages]);

  useEffect(() => {
    if (!activeCall || !['accepted', 'connected'].includes(activeCall.metadata?.status)) {
      setSeconds(0);
      return;
    }
    const interval = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [activeCall]);

  const callId = activeCall?.metadata?.callId || activeCall?.id || null;
  const isCaller = activeCall?.metadata?.callerId === user?.id;
  const isVideo = activeCall?.metadata?.callType === 'video';
  const status = activeCall?.metadata?.status;
  const targetId = isCaller ? activeCall?.metadata?.targetId : activeCall?.metadata?.callerId;

  const cleanupConnection = () => {
    if (peerRef.current) {
      peerRef.current.ontrack = null;
      peerRef.current.onicecandidate = null;
      peerRef.current.onconnectionstatechange = null;
      peerRef.current.close();
      peerRef.current = null;
    }
    if (localStream) {
      localStream.getTracks().forEach((track) => track.stop());
    }
    setLocalStream(null);
    setRemoteStream(null);
    pendingIceRef.current = [];
    connectedCallIdRef.current = null;
  };

  const handleUpdateStatus = async (status) => {
    if (!activeCall || !callId) return;
    const icon = isVideo ? '📹' : '📞';
    const baseText = isVideo ? 'видеозвонок' : 'голосовой звонок';

    await sendMessage(
      `${icon} Звонок ${baseText} ${status === 'accepted' ? 'принят' : status === 'declined' ? 'отклонен' : status === 'ended' ? 'завершен' : 'отменен'}.`,
      'call',
      {
        ...activeCall.metadata,
        callId,
        targetId: status === 'cancelled' ? activeCall.metadata?.targetId : user.id,
        status,
        timestamp: Date.now()
      }
    );

    if (['declined', 'cancelled', 'ended'].includes(status)) {
      cleanupConnection();
    }
  };

  const ensurePeerConnection = async () => {
    if (!callId || !targetId) return null;
    if (peerRef.current) return peerRef.current;

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: isVideo });
    setLocalStream(stream);

    const peer = new RTCPeerConnection({
      iceServers: [
        { urls: 'stun:stun.l.google.com:19302' },
        { urls: 'stun:stun1.l.google.com:19302' }
      ]
    });

    stream.getTracks().forEach((track) => peer.addTrack(track, stream));

    peer.ontrack = (event) => {
      const [incomingStream] = event.streams;
      if (incomingStream) {
        setRemoteStream(incomingStream);
      }
    };

    peer.onicecandidate = async (event) => {
      if (!event.candidate) return;
      await sendMessage('', 'call-signal', {
        callId,
        chatId: activeChatId,
        fromId: user.id,
        targetId,
        signalType: 'ice',
        candidate: event.candidate.toJSON()
      });
    };

    peer.onconnectionstatechange = async () => {
      if (peer.connectionState === 'connected') {
        connectedCallIdRef.current = callId;
      }
      if (['failed', 'disconnected', 'closed'].includes(peer.connectionState)) {
        if (connectedCallIdRef.current === callId) {
          await handleUpdateStatus('ended');
        } else {
          cleanupConnection();
        }
      }
    };

    peerRef.current = peer;
    return peer;
  };

  useEffect(() => {
    if (!activeCall || !callId) {
      cleanupConnection();
      return;
    }

    const terminalStatuses = ['declined', 'cancelled', 'ended', 'missed'];
    if (terminalStatuses.includes(status)) {
      cleanupConnection();
      return;
    }
  }, [activeCall, callId, status]);

  useEffect(() => {
    if (!activeCall || !callId || !isCaller || status !== 'accepted') return;
    if (connectedCallIdRef.current === callId) return;

    const startOutgoingConnection = async () => {
      try {
        const peer = await ensurePeerConnection();
        if (!peer) return;
        const offer = await peer.createOffer();
        await peer.setLocalDescription(offer);
        await sendMessage('', 'call-signal', {
          callId,
          chatId: activeChatId,
          fromId: user.id,
          targetId,
          signalType: 'offer',
          sdp: offer
        });
      } catch (e) {
        console.error('Offer creation error', e);
      }
    };

    startOutgoingConnection();
  }, [activeCall, callId, isCaller, status]);

  useEffect(() => {
    if (!activeCall || !callId) return;

    const signals = messages.filter((msg) => {
      if (msg.type !== 'call-signal' || !msg.metadata) return false;
      if (msg.metadata.callId !== callId) return false;
      if (msg.metadata.fromId === user.id) return false;
      return true;
    });

    const processSignals = async () => {
      for (const signalMsg of signals) {
        if (processedSignalsRef.current.has(signalMsg.id)) continue;
        processedSignalsRef.current.add(signalMsg.id);
        const data = signalMsg.metadata;

        try {
          if (data.signalType === 'offer') {
            const peer = await ensurePeerConnection();
            if (!peer) continue;
            await peer.setRemoteDescription(new RTCSessionDescription(data.sdp));
            const answer = await peer.createAnswer();
            await peer.setLocalDescription(answer);
            await sendMessage('', 'call-signal', {
              callId,
              chatId: activeChatId,
              fromId: user.id,
              targetId,
              signalType: 'answer',
              sdp: answer
            });
            while (pendingIceRef.current.length) {
              const candidate = pendingIceRef.current.shift();
              await peer.addIceCandidate(new RTCIceCandidate(candidate));
            }
          }

          if (data.signalType === 'answer' && peerRef.current) {
            await peerRef.current.setRemoteDescription(new RTCSessionDescription(data.sdp));
            while (pendingIceRef.current.length) {
              const candidate = pendingIceRef.current.shift();
              await peerRef.current.addIceCandidate(new RTCIceCandidate(candidate));
            }
          }

          if (data.signalType === 'ice') {
            if (!peerRef.current || !peerRef.current.remoteDescription) {
              pendingIceRef.current.push(data.candidate);
            } else {
              await peerRef.current.addIceCandidate(new RTCIceCandidate(data.candidate));
            }
          }
        } catch (e) {
          console.error('Signal processing error', e);
        }
      }
    };

    processSignals();
  }, [messages, activeCall, callId]);

  useEffect(() => {
    if (localVideoRef.current) {
      localVideoRef.current.srcObject = localStream || null;
    }
  }, [localStream]);

  useEffect(() => {
    if (remoteVideoRef.current) {
      remoteVideoRef.current.srcObject = remoteStream || null;
    }
  }, [remoteStream]);

  useEffect(() => {
    return () => {
      cleanupConnection();
    };
  }, []);

  useEffect(() => {
    if (!activeCall || status !== 'ringing' || !isCaller) return;
    const timeout = setTimeout(() => {
      handleUpdateStatus('cancelled');
    }, 30000);
    return () => clearTimeout(timeout);
  }, [activeCall, status, isCaller]);

  if (!activeCall) return null;

  const canAccept = !isCaller && status === 'ringing';
  const canDecline = !isCaller && ['ringing', 'accepted'].includes(status);
  const canCancel = isCaller && status === 'ringing';
  const canEnd = ['accepted', 'connected'].includes(status);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="w-full max-w-sm mx-4 bg-[#09090b] border border-zinc-800 rounded-3xl p-6 shadow-2xl flex flex-col items-center gap-4">
        <div className="w-14 h-1 rounded-full bg-zinc-800 mb-2" />
        <div className="w-full rounded-2xl bg-zinc-900/70 border border-zinc-800 p-2">
          {isVideo ? (
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-zinc-950">
              {remoteStream ? (
                <video ref={remoteVideoRef} autoPlay playsInline className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-zinc-500 text-xs">Ожидание видео...</div>
              )}
              <video ref={localVideoRef} autoPlay playsInline muted className="absolute bottom-2 right-2 w-24 h-16 object-cover rounded-lg border border-zinc-700 bg-zinc-900" />
            </div>
          ) : (
            <div className="w-full h-28 rounded-xl flex items-center justify-center">
              <Phone className="w-10 h-10 text-emerald-400" />
            </div>
          )}
        </div>
        <div className="text-sm text-zinc-500 uppercase tracking-widest">
          {canAccept ? 'Входящий звонок' : isCaller ? 'Исходящий звонок' : 'Звонок'}
        </div>
        <div className="text-lg font-semibold text-zinc-100 text-center">
          {isCaller ? 'Собеседник' : activeCall.metadata?.callerName || 'Неизвестный пользователь'}
        </div>
        <div className="text-xs text-zinc-500 mb-1">
          {isVideo ? 'Видеозвонок через GiftWave' : 'Голосовой звонок через GiftWave'}
        </div>
        <div className="text-[11px] text-zinc-500">
          {String(Math.floor(seconds / 60)).padStart(2, '0')}:
          {String(seconds % 60).padStart(2, '0')}
        </div>

        <div className="flex items-center gap-4 mt-2">
          {canDecline && (
            <button
              onClick={() => handleUpdateStatus('declined')}
              className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center text-white shadow-lg shadow-red-600/40"
            >
              <X className="w-7 h-7" />
            </button>
          )}
          {canAccept && (
            <button
              onClick={() => handleUpdateStatus('accepted')}
              className="w-16 h-16 rounded-full bg-emerald-500 shadow-emerald-500/40 flex items-center justify-center text-white shadow-lg"
            >
              <Phone className="w-7 h-7 -rotate-45" />
            </button>
          )}
          {canCancel && (
            <button
              onClick={() => handleUpdateStatus('cancelled')}
              className="w-16 h-16 rounded-full bg-zinc-600 shadow-zinc-600/40 flex items-center justify-center text-white shadow-lg"
            >
              <Phone className="w-7 h-7 rotate-135" />
            </button>
          )}
          {canEnd && (
            <button
              onClick={() => handleUpdateStatus('ended')}
              className="w-16 h-16 rounded-full bg-red-600 shadow-red-600/40 flex items-center justify-center text-white shadow-lg"
            >
              <Phone className="w-7 h-7 rotate-135" />
            </button>
          )}
        </div>

        <div className="text-[10px] text-zinc-500 uppercase tracking-widest mt-4">
          {status === 'ringing'
            ? (isCaller ? 'Ожидание ответа собеседника' : 'Примите звонок, чтобы подключиться')
            : status === 'accepted'
              ? 'Идет реальное соединение'
              : 'Управление звонком'}
        </div>
      </div>
    </div>
  );
}

