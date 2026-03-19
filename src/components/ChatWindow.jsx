import React, { useRef, useEffect, useMemo, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useChat } from '../context/ChatContext';
import MessageInput from './MessageInput';
import { Info, Phone, Video, Search, ChevronLeft, Gift, Smile } from 'lucide-react';

export default function ChatWindow() {
  const { user, allUsers } = useAuth();
  const { messages, chats, activeChatId, setActiveChatId, applyEffect, activeEffects, sendMessage, toggleReaction, joinChat } = useChat();
  const scrollRef = useRef();
  const processedGifts = useRef(new Set());
  
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const activeChat = chats.find(c => c.id === activeChatId);
  const isDirectChat = activeChat?.type === 'dm';
  
  const opponentId = activeChat?.participants?.find(id => id !== user.id);
  const opponent = allUsers.find(u => u.id === opponentId);

  const chatName = isDirectChat ? (opponent ? (opponent.displayName || opponent.username) : (activeChat?.name || "Чат")) : (activeChat?.name || "Чат");
  const chatUsername = isDirectChat ? (opponent?.username ? `@${opponent.username}` : '') : '';
  const chatAvatar = opponent ? opponent.avatar : null;
  const isOnline = opponent?.lastSeen === 'online';
  const membersCount = activeChat?.participants?.length || 0;
  const chatStatus = isDirectChat
    ? (isOnline
      ? 'В сети'
      : (opponent?.lastSeen ? `Был(а) ${new Date(opponent.lastSeen).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}` : 'Не в сети'))
    : (activeChat?.type === 'group'
      ? `${membersCount} участников`
      : `${membersCount} подписчиков`);

  // Фильтрация сообщений при поиске
  const filteredMessages = useMemo(() => {
    if (!searchQuery) return messages;
    return messages.filter(m => m.text?.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [messages, searchQuery]);

  const handleCall = async (type) => {
    const icon = type === 'video' ? '📹' : '📞';
    const text = type === 'video' ? 'видеозвонок' : 'голосовой звонок';
    // Проверяем доступ к микрофону перед звонком
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getTracks().forEach(track => track.stop());
    } catch (error) {
      alert('Нет доступа к микрофону. Разрешите микрофон в браузере, чтобы звонить.');
      return;
    }

    // Находим собеседника
    const chat = chats.find(c => c.id === activeChatId);
    if (!chat || chat.type !== 'dm') return;
    
    const participantId = chat.participants.find(id => id !== user.id);
    const targetUser = allUsers.find(u => u.id === participantId);
    
    if (!targetUser) return;
    
    // Сразу отправляем сообщение о звонке (статус «звонит»)
    await sendMessage(`${icon} ${user.displayName} начал ${text}!`, 'call', {
      callType: type,
      callerId: user.id,
      callerName: user.displayName,
      targetId: participantId,
      timestamp: Date.now(),
      status: 'ringing',
      chatId: activeChatId
    });
  };

  // Sync gift effects from messages
  useEffect(() => {
    if (!messages || messages.length === 0) return;
    
    try {
      const now = Date.now();
      messages.forEach(msg => {
        if (msg.type !== 'gift' || !msg.timestamp || processedGifts.current.has(msg.id)) return;
        
        const time = (msg.timestamp && typeof msg.timestamp.toMillis === 'function') 
          ? msg.timestamp.toMillis() 
          : (msg.timestamp ? new Date(msg.timestamp).getTime() : Date.now());
        const isRecent = now - time < 60000; 
        
        if (isRecent && msg.metadata?.effect) {
          processedGifts.current.add(msg.id);
          applyEffect(msg.metadata.effect);
        }
      });
    } catch (e) {
      console.error("Gift sync error:", e);
    }
  }, [messages, applyEffect]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  if (!activeChatId) {
    return (
      <div className="h-full flex flex-col items-center justify-center bg-[#09090b] text-zinc-500 animate-in fade-in duration-500">
        <div className="w-16 h-16 rounded-3xl bg-emerald-500/5 flex items-center justify-center mb-4 border border-emerald-500/10 shadow-inner">
          <ChevronLeft className="w-8 h-8 opacity-20 rotate-180" />
        </div>
        <p className="text-sm font-medium tracking-wide uppercase opacity-40">Выберите чат для общения</p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-[#09090b] relative">
      {/* Header */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-zinc-800/50 bg-[#09090b]/80 backdrop-blur-md sticky top-0 z-40">
        <div className="flex items-center gap-3 min-w-0">
          <button 
            onClick={() => setActiveChatId(null)}
            className="p-2 -ml-2 hover:bg-zinc-800 rounded-lg text-zinc-500 md:hidden"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div 
            onClick={() => setIsProfileModalOpen(true)}
            className="w-9 h-9 rounded-xl bg-emerald-500/10 flex-shrink-0 flex items-center justify-center text-emerald-500 font-bold overflow-hidden border border-emerald-500/20 shadow-sm cursor-pointer hover:scale-105 transition-transform"
          >
            {chatAvatar ? (
              <img src={chatAvatar} className="w-full h-full object-cover" alt="avatar" />
            ) : (
              chatName ? chatName[0].toUpperCase() : '?'
            )}
          </div>
          <div 
            onClick={() => setIsProfileModalOpen(true)}
            className="min-w-0 cursor-pointer"
          >
            <div className="text-sm font-semibold text-zinc-100 truncate hover:text-emerald-500 transition-colors">{chatName}</div>
            {isDirectChat && chatUsername && (
              <div className="text-[10px] text-zinc-500 truncate">{chatUsername}</div>
            )}
            <div className={`text-[10px] flex items-center gap-1 ${isDirectChat && isOnline ? 'text-emerald-500' : 'text-zinc-500'}`}>
              {isDirectChat && isOnline ? (
                <>
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  {chatStatus}
                </>
              ) : (
                <>
                  <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full" />
                  {chatStatus}
                </>
              )}
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-1">
          {isSearchOpen ? (
            <div className="flex items-center gap-2 bg-zinc-900/50 border border-zinc-700/50 rounded-lg px-2 py-1 animate-in slide-in-from-right-2">
              <input 
                autoFocus
                type="text"
                placeholder="Поиск..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none outline-none text-xs text-zinc-100 w-24 md:w-40"
              />
              <button onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }} className="text-zinc-500 hover:text-zinc-100 text-[10px]">✕</button>
            </div>
          ) : (
            <button onClick={() => setIsSearchOpen(true)} className="p-2 hover:bg-zinc-800 rounded-lg text-zinc-500">
              <Search className="w-4 h-4" />
            </button>
          )}
          {isDirectChat && (
            <>
              <button onClick={() => handleCall('audio')} className="p-2 hover:bg-zinc-800 rounded-lg text-zinc-500">
                <Phone className="w-4 h-4" />
              </button>
              <button onClick={() => handleCall('video')} className="p-2 hover:bg-zinc-800 rounded-lg text-zinc-500">
                <Video className="w-4 h-4" />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Profile Modal */}
      {isProfileModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="w-full max-w-xs bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl animate-zoom-in">
            <div className="h-24 bg-gradient-to-br from-emerald-600/20 to-zinc-900" />
            <div className="px-6 pb-6 -mt-12 flex flex-col items-center">
              <div className="w-24 h-24 rounded-3xl bg-zinc-800 border-4 border-zinc-900 overflow-hidden shadow-xl mb-3">
                {chatAvatar ? <img src={chatAvatar} className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-emerald-500">{chatName[0].toUpperCase()}</div>}
              </div>
              <h3 className="text-lg font-bold text-zinc-100">{chatName}</h3>
              {isDirectChat && chatUsername && <p className="text-xs text-zinc-400 mb-1">{chatUsername}</p>}
              <p className="text-xs text-zinc-500 mb-4">{chatStatus}</p>
              
              <div className="w-full space-y-3">
                <div className="p-3 bg-zinc-800/50 rounded-2xl border border-zinc-700/30">
                  <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">О себе</div>
                  <p className="text-sm text-zinc-300 leading-relaxed">{isDirectChat ? (opponent?.bio || 'Этот пользователь не заполнил раздел "О себе"') : 'Информация о сообществе доступна в управлении чатом.'}</p>
                </div>
                <div className="flex gap-2">
                  <div className="flex-1 p-3 bg-zinc-800/50 rounded-2xl border border-zinc-700/30 text-center">
                    <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">{isDirectChat ? 'Монеты' : 'Участники'}</div>
                    <div className="text-sm font-bold text-emerald-500">{isDirectChat ? `🪙 ${opponent?.coins || 0}` : membersCount}</div>
                  </div>
                  <div className="flex-1 p-3 bg-zinc-800/50 rounded-2xl border border-zinc-700/30 text-center">
                    <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">{isDirectChat ? 'Ранг' : 'Тип'}</div>
                    <div className="text-sm font-bold text-amber-500 uppercase">{isDirectChat ? (opponent?.role || 'user') : activeChat?.type}</div>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsProfileModalOpen(false)}
                className="w-full mt-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-xl text-sm font-bold transition-colors"
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Messages */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-zinc-900/10"
      >
        {filteredMessages.map((msg) => {
          const isMe = msg.senderId === user.id;
          const isSystem = msg.type === 'system';
          const reactionsMap = (msg.reactions || []).reduce((acc, r) => {
            acc[r.emoji] = (acc[r.emoji] || 0) + 1;
            return acc;
          }, {});
          
          if (isSystem) {
            return (
              <div key={msg.id} className="flex justify-center my-2">
                <div className="px-3 py-1 bg-zinc-800/50 text-zinc-500 text-[10px] uppercase tracking-widest rounded-full border border-zinc-700/30">
                  {msg.text}
                </div>
              </div>
            );
          }

          return (
            <div 
              key={msg.id}
              className={`flex ${isMe ? 'justify-end' : 'justify-start'} animate-message-pop`}
            >
              <div className={`flex flex-col max-w-[85%] ${isMe ? 'items-end' : 'items-start'} group mb-1`}>
                <div className={`px-4 py-2.5 rounded-2xl text-[14.5px] leading-relaxed shadow-sm relative transition-all duration-300 ${
                  msg.type === 'gift' 
                    ? 'gift-bubble border border-zinc-800/50 py-3'
                    : msg.type === 'call'
                      ? 'bg-blue-600/20 border border-blue-500/30 text-blue-300'
                      : msg.type === 'invite'
                        ? 'bg-violet-600/15 border border-violet-500/30 text-violet-100'
                      : msg.type === 'image' || msg.type === 'video'
                        ? 'p-1.5 bg-zinc-800/80 border border-zinc-700/30'
                        : isMe 
                          ? 'bg-emerald-600 text-white rounded-tr-none shadow-emerald-900/10' 
                          : 'bg-zinc-800 text-zinc-100 rounded-tl-none border border-zinc-700/30'
                }`}>
                  {msg.type === 'gift' && (
                    <div className="flex flex-col items-center text-center gap-2">
                      <div className="w-12 h-12 rounded-full bg-zinc-800/50 flex items-center justify-center border border-zinc-700/30">
                        <Gift className="w-6 h-6 text-emerald-500/80" strokeWidth={1.5} />
                      </div>
                      <div className="text-zinc-400 text-[11px] uppercase tracking-widest font-bold opacity-60">Особое внимание</div>
                      <div className="text-zinc-100 font-light tracking-wide">{msg.text}</div>
                    </div>
                  )}

                  {msg.type === 'call' && (
                    <div className="flex flex-col items-center text-center gap-2">
                      <div className="text-2xl mb-1">
                        {msg.text?.split(' ')[0] || (msg.metadata?.callType === 'video' ? '📹' : '📞')}
                      </div>
                      <div className="text-sm font-medium">
                        {msg.metadata?.status === 'ringing' && (msg.metadata?.callerId === user.id)
                          ? 'Вы звоните...'
                          : msg.metadata?.status === 'ringing'
                            ? 'Вам звонят...'
                            : msg.metadata?.status === 'accepted'
                              ? 'Звонок принят'
                              : msg.metadata?.status === 'declined'
                                ? 'Звонок отклонен'
                                : msg.text?.replace(/^[📹📞]\s*/, '')}
                      </div>
                      <div className="text-xs opacity-50">
                        {msg.metadata?.status === 'ringing'
                          ? 'Ожидание ответа'
                          : 'История звонка'}
                      </div>
                    </div>
                  )}
                  
                  {msg.type === 'image' && (
                    <img 
                      src={msg.metadata.url} 
                      alt="attachment" 
                      className="max-w-full rounded-xl object-cover cursor-pointer hover:opacity-90 transition-opacity" 
                      onClick={() => window.open(msg.metadata.url, '_blank')}
                    />
                  )}

                  {msg.type === 'video' && (
                    <video 
                      src={msg.metadata.url} 
                      controls 
                      className="max-w-full rounded-xl overflow-hidden" 
                    />
                  )}

                  {msg.type === 'voice' && (
                    <div className="flex items-center gap-3 py-1 min-w-[200px]">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <Phone className="w-4 h-4 text-emerald-500" />
                      </div>
                      <audio src={msg.metadata.url} controls className="h-8 w-full custom-audio-player" />
                    </div>
                  )}

                  {msg.type === 'invite' && (
                    <div className="space-y-2 min-w-[220px]">
                      <div className="text-xs text-violet-200/80">
                        {msg.metadata?.invitedByName || msg.senderName} приглашает вас в {msg.metadata?.targetChatType === 'group' ? 'группу' : 'канал'}
                      </div>
                      <div className="text-sm font-semibold text-violet-100">
                        {msg.metadata?.targetChatName || 'Сообщество'}
                      </div>
                      {msg.metadata?.inviteUrl && (
                        <a
                          href={msg.metadata.inviteUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="block text-[11px] text-violet-300 hover:text-violet-200 underline break-all"
                        >
                          {msg.metadata.inviteUrl}
                        </a>
                      )}
                      <button
                        onClick={() => joinChat(msg.metadata?.targetChatId)}
                        className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-violet-500/30 hover:bg-violet-500/40 text-violet-100 border border-violet-400/40"
                      >
                        Вступить
                      </button>
                    </div>
                  )}

                  {(msg.type === 'text' || msg.type === 'gift' || msg.type === 'call') && msg.text}
                </div>
                <div className="flex items-center gap-2 mt-1.5 px-1">
                  <span className="text-[10px] text-zinc-600 font-medium">
                    {msg.timestamp 
                      ? (msg.timestamp.toDate 
                          ? msg.timestamp.toDate().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
                          : new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))
                      : new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                    }
                  </span>
                  <div className="flex items-center gap-1 ml-2">
                    {Object.entries(reactionsMap).map(([emoji, count]) => (
                      <button
                        key={emoji}
                        onClick={() => toggleReaction(msg.id, emoji)}
                        className="px-1.5 py-0.5 rounded-full bg-zinc-800 text-[10px] text-zinc-200 flex items-center gap-1 hover:bg-zinc-700"
                      >
                        <span>{emoji}</span>
                        <span className="text-[9px] opacity-70">{count}</span>
                      </button>
                    ))}
                    <div className="flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                      {['👍', '❤️', '🔥', '😂', '😢'].map(emoji => (
                        <button
                          key={emoji}
                          onClick={() => toggleReaction(msg.id, emoji)}
                          className="w-6 h-6 flex items-center justify-center rounded-full text-[14px] text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200 transition-colors"
                          title={emoji}
                        >
                          {emoji}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Input Area */}
      <div className="p-6 bg-gradient-to-t from-[#09090b] to-transparent">
        <MessageInput />
        <p className="text-[10px] text-center text-zinc-600 mt-3 uppercase tracking-widest">
          End-to-end encryption active
        </p>
      </div>
    </div>
  );
}
