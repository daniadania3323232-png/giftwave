import React, { useState, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { useChat } from '../context/ChatContext';
import { Send, Gift, Paperclip, Smile, Mic, Image as ImageIcon, Video, StopCircle, X } from 'lucide-react';
import GiftShop from './GiftShop';
import { uploadToCloudinary } from '../utils/cloudinary';

export default function MessageInput() {
  const [text, setText] = useState('');
  const [showShop, setShowShop] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [uploading, setUploading] = useState(false);
  const { user, updateUser } = useAuth();
  const { sendMessage, applyEffect, activeChatId } = useChat();
  
  const fileInputRef = useRef();
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const handleSend = (e) => {
    e.preventDefault();
    if (text.trim() && !uploading) {
      sendMessage(text);
      setText('');
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file || !activeChatId) return;

    const MAX_FILE_SIZE_MB = 30;
    const maxSizeBytes = MAX_FILE_SIZE_MB * 1024 * 1024;
    if (file.size > maxSizeBytes) {
      alert(`Файл слишком большой. Максимальный размер: ${MAX_FILE_SIZE_MB}MB.`);
      e.target.value = '';
      return;
    }

    setUploading(true);
    try {
      const type = file.type.startsWith('image/') ? 'image' : file.type.startsWith('video/') ? 'video' : 'file';
      const url = await uploadToCloudinary(file, type === 'video' ? 'video' : 'image');
      
      await sendMessage(file.name, type, { url, fileName: file.name, fileSize: file.size });
    } catch (error) {
      alert("Ошибка загрузки: " + error.message);
    } finally {
      setUploading(false);
      fileInputRef.current.value = '';
    }
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        const file = new File([audioBlob], `voice_${Date.now()}.webm`, { type: 'audio/webm' });
        
        setUploading(true);
        try {
          const url = await uploadToCloudinary(file, 'video'); // Cloudinary treats audio as video resource type often
          await sendMessage('Голосовое сообщение', 'voice', { url, duration: 0 });
        } catch (error) {
          alert("Ошибка отправки голосового: " + error.message);
        } finally {
          setUploading(false);
        }
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (error) {
      alert("Доступ к микрофону отклонен: " + error.message);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
    }
  };

  const handleGift = async (gift) => {
    if (user.coins >= gift.price) {
      try {
        const newCoins = user.coins - gift.price;
        const res = await updateUser({ coins: newCoins });
        
        if (res?.error) {
          alert(res.error);
          return;
        }

        // Отправляем сообщение о подарке
        await sendMessage(`🎁 Отправил подарок: ${gift.name}! ✨`, 'gift', { 
          giftId: gift.id,
          giftName: gift.name,
          effect: gift.effect
        });

        // Применяем визуальный эффект
        applyEffect(gift.effect);
        setShowShop(false);
      } catch (error) {
        console.error("Gift error:", error);
        alert("Ошибка при покупке подарка: " + error.message);
      }
    } else {
      alert(`Недостаточно монет! Стоимость подарка: ${gift.price}, у вас: ${user.coins}`);
    }
  };

  return (
    <div className="relative">
      {showShop && (
        <div className="absolute bottom-full left-0 right-0 mb-4 z-20 animate-in fade-in zoom-in-95 duration-200">
          <GiftShop onSelect={handleGift} onClose={() => setShowShop(false)} />
        </div>
      )}
      
      <div className="flex flex-col gap-2">
        {uploading && (
          <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-xl animate-pulse">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" />
            <span className="text-xs text-zinc-400">Отправка файла...</span>
          </div>
        )}

        <form onSubmit={handleSend} className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 p-2 pl-4 rounded-2xl shadow-xl focus-within:border-emerald-500/50 focus-within:ring-4 focus-within:ring-emerald-500/10 transition-all">
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileUpload} 
            className="hidden" 
            accept="image/*,video/*"
          />
          
          <button 
            type="button" 
            onClick={() => fileInputRef.current.click()}
            className="p-2 text-zinc-500 hover:text-zinc-200 transition-colors"
          >
            <Paperclip className="w-5 h-5" />
          </button>
          
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={isRecording ? "Идет запись голоса..." : "Напишите сообщение..."}
            disabled={isRecording}
            className="flex-1 bg-transparent border-none outline-none text-sm text-zinc-100 placeholder:text-zinc-600 py-2"
          />

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={isRecording ? stopRecording : startRecording}
              className={`p-2 rounded-xl transition-all ${
                isRecording ? 'bg-red-500 text-white animate-pulse' : 'text-zinc-500 hover:text-zinc-200'
              }`}
            >
              {isRecording ? <StopCircle className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
            </button>
            
            <button
              type="button"
              onClick={() => setShowShop(!showShop)}
              className={`p-2 rounded-xl transition-all ${
                showShop ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' : 'text-amber-500 hover:bg-amber-500/10'
              }`}
            >
              <Gift className="w-5 h-5" />
            </button>

            <button
              type="submit"
              disabled={!text.trim() || uploading}
              className="p-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-500 disabled:opacity-20 disabled:grayscale transition-all shadow-lg shadow-emerald-600/20"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
