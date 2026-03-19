import React, { useMemo, useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useChat } from '../context/ChatContext';
import { Phone, Video, X } from 'lucide-react';

export default function CallOverlay() {
  const { user } = useAuth();
  const { messages, activeChatId, sendMessage } = useChat();

  const [seconds, setSeconds] = useState(0);

  const activeCall = useMemo(() => {
    if (!user || !activeChatId || !messages?.length) return null;
    const now = Date.now();

    const calls = messages.filter((msg) => {
      if (msg.type !== 'call') return false;
      if (!msg.metadata) return false;
      if (msg.metadata.status !== 'ringing') return false;
      if (msg.metadata.chatId && msg.metadata.chatId !== activeChatId) return false;

      const time = msg.timestamp && typeof msg.timestamp.toMillis === 'function'
        ? msg.timestamp.toMillis()
        : msg.timestamp
          ? new Date(msg.timestamp).getTime()
          : now;
      if (now - time > 60000) return false;

      return msg.metadata.callerId === user.id || msg.metadata.targetId === user.id;
    });

    if (!calls.length) return null;
    return calls[calls.length - 1];
  }, [user, activeChatId, messages]);

  useEffect(() => {
    if (!activeCall) return;
    setSeconds(0);
    const interval = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    const timeout = setTimeout(() => {
      // Автоотмена звонка через 30 секунд ожидания
      handleUpdateStatus('cancelled');
    }, 30000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [activeCall]);

  if (!activeCall) return null;

  const isCaller = activeCall.metadata?.callerId === user.id;
  const isVideo = activeCall.metadata?.callType === 'video';

  const handleUpdateStatus = async (status) => {
    if (!activeCall) return;
    const icon = isVideo ? '📹' : '📞';
    const baseText = isVideo ? 'видеозвонок' : 'голосовой звонок';

    await sendMessage(
      `${icon} Звонок ${baseText} ${status === 'accepted' ? 'принят' : status === 'declined' ? 'отклонен' : 'отменен'}.`,
      'call',
      {
        ...activeCall.metadata,
        targetId: status === 'cancelled' ? activeCall.metadata?.targetId : user.id,
        status,
        timestamp: Date.now()
      }
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="w-full max-w-sm mx-4 bg-[#09090b] border border-zinc-800 rounded-3xl p-6 shadow-2xl flex flex-col items-center gap-4">
        <div className="w-14 h-1 rounded-full bg-zinc-800 mb-2" />
        <div className="w-20 h-20 rounded-3xl bg-zinc-900 flex items-center justify-center mb-2">
          {isVideo ? (
            <Video className="w-10 h-10 text-emerald-400" />
          ) : (
            <Phone className="w-10 h-10 text-emerald-400" />
          )}
        </div>
        <div className="text-sm text-zinc-500 uppercase tracking-widest">
          {isCaller ? 'Исходящий звонок' : 'Входящий звонок'}
        </div>
        <div className="text-lg font-semibold text-zinc-100 text-center">
          {activeCall.metadata?.callerName || 'Неизвестный пользователь'}
        </div>
        <div className="text-xs text-zinc-500 mb-1">
          {isVideo ? 'Видеозвонок через GiftWave' : 'Голосовой звонок через GiftWave'}
        </div>
        <div className="text-[11px] text-zinc-500">
          {String(Math.floor(seconds / 60)).padStart(2, '0')}:
          {String(seconds % 60).padStart(2, '0')}
        </div>

        <div className="flex items-center gap-4 mt-2">
          {!isCaller && (
            <button
              onClick={() => handleUpdateStatus('declined')}
              className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center text-white shadow-lg shadow-red-600/40"
            >
              <X className="w-7 h-7" />
            </button>
          )}
          <button
            onClick={() => handleUpdateStatus(isCaller ? 'cancelled' : 'accepted')}
            className={`w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg ${
              isCaller ? 'bg-zinc-600 shadow-zinc-600/40' : 'bg-emerald-500 shadow-emerald-500/40'
            }`}
          >
            {isCaller ? <Phone className="w-7 h-7 rotate-135" /> : <Phone className="w-7 h-7 -rotate-45" />}
          </button>
        </div>

        <div className="text-[10px] text-zinc-500 uppercase tracking-widest mt-4">
          {isCaller ? 'Ожидание ответа собеседника' : 'Разрешите доступ к микрофону, чтобы ответить'}
        </div>
      </div>
    </div>
  );
}

