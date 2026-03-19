import React, { createContext, useContext, useState, useMemo, useEffect } from 'react';
import { 
  collection, 
  addDoc, 
  query, 
  where, 
  orderBy, 
  onSnapshot,
  serverTimestamp,
  updateDoc,
  doc,
  getDocs,
  deleteDoc
} from 'firebase/firestore';
import { db } from '../firebase';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useAuth } from './AuthContext';

const ChatContext = createContext();

export function ChatProvider({ children }) {
  const { user } = useAuth();
  const [chats, setChats] = useState([]);
  const [storedActiveChatId, setStoredActiveChatId] = useLocalStorage('activeChatId', null);
  const [activeChatId, setActiveChatIdState] = useState(storedActiveChatId);
  const [messages, setMessages] = useState([]);
  const [activeEffects, setActiveEffects] = useState([]);

  const setActiveChatId = (chatId) => {
    setActiveChatIdState(chatId);
    setStoredActiveChatId(chatId);
  };

  // Слушаем список чатов пользователя
  useEffect(() => {
    if (!user) {
      setChats([]);
      return;
    }

    const q = query(
      collection(db, 'chats'),
      where('participants', 'array-contains', user.id)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const chatList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setChats(chatList);
    });

    return unsubscribe;
  }, [user]);

  // Слушаем сообщения активного чата
  useEffect(() => {
    if (!activeChatId) {
      setMessages([]);
      return;
    }

    const q = query(
      collection(db, `chats/${activeChatId}/messages`),
      orderBy('timestamp', 'asc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMessages(msgList);
    });

    return unsubscribe;
  }, [activeChatId]);

  const startPrivateChat = async (targetUser) => {
    if (!user) return;
    
    // Проверяем локально, есть ли уже чат
    const existing = chats.find(c => 
      c.type === 'dm' && 
      c.participants.includes(targetUser.id)
    );

    if (existing) {
      setActiveChatId(existing.id);
      return;
    }

    // Создаем новый чат в Firestore
    const chatData = {
      type: 'dm',
      name: targetUser.username,
      participants: [user.id, targetUser.id],
      lastMessage: null,
      createdAt: serverTimestamp()
    };

    const docRef = await addDoc(collection(db, 'chats'), chatData);
    setActiveChatId(docRef.id);
  };

  const createGroup = async (name, participants) => {
    const chatData = {
      type: 'group',
      name,
      participants: [...participants, user.id],
      ownerId: user.id,
      lastMessage: 'Группа создана',
      createdAt: serverTimestamp()
    };
    const docRef = await addDoc(collection(db, 'chats'), chatData);
    setActiveChatId(docRef.id);
  };

  const createChannel = async (name, participants) => {
    const chatData = {
      type: 'channel',
      name,
      participants: [...participants, user.id],
      ownerId: user.id,
      lastMessage: 'Канал создан',
      createdAt: serverTimestamp()
    };
    const docRef = await addDoc(collection(db, 'chats'), chatData);
    setActiveChatId(docRef.id);
  };

  const sendMessage = async (text, type = 'text', metadata = {}) => {
    if (!user || !activeChatId) return;

    const messageData = {
      chatId: activeChatId,
      text,
      senderId: user.id,
      senderName: user.username,
      type,
      metadata,
      timestamp: serverTimestamp()
    };

    await addDoc(collection(db, `chats/${activeChatId}/messages`), messageData);
    
    // Обновляем последнее сообщение в чате
    await updateDoc(doc(db, 'chats', activeChatId), {
      lastMessage: text,
      lastUpdated: serverTimestamp()
    });
  };

  const applyEffect = (effectType, duration = 8000) => {
    const id = Date.now();
    setActiveEffects(prev => [...prev, { id, type: effectType }]);
    setTimeout(() => setActiveEffects(prev => prev.filter(e => e.id !== id)), duration);
  };

  const toggleReaction = async (messageId, emoji) => {
    if (!user || !activeChatId || !messageId) return;
    try {
      const msg = messages.find((m) => m.id === messageId);
      const existing = Array.isArray(msg?.reactions) ? msg.reactions : [];
      const hasReacted = existing.some((r) => r.emoji === emoji && r.userId === user.id);
      const next = hasReacted
        ? existing.filter((r) => !(r.emoji === emoji && r.userId === user.id))
        : [...existing, { emoji, userId: user.id }];
      await updateDoc(doc(db, `chats/${activeChatId}/messages`, messageId), {
        reactions: next
      });
    } catch (e) {
      console.error('Reaction error', e);
    }
  };

  const deleteChat = async (chatId) => {
    if (!chatId) return;
    try {
      const messagesRef = collection(db, `chats/${chatId}/messages`);
      const snapshot = await getDocs(messagesRef);
      const deletes = snapshot.docs.map((d) => deleteDoc(d.ref));
      await Promise.all(deletes);
      await deleteDoc(doc(db, 'chats', chatId));
      if (activeChatId === chatId) {
        setActiveChatId(null);
      }
    } catch (e) {
      console.error('Error deleting chat', e);
    }
  };

  return (
    <ChatContext.Provider value={{ 
      chats, 
      activeChatId, 
      setActiveChatId, 
      messages, 
      sendMessage, 
      startPrivateChat,
      createGroup,
      createChannel,
      toggleReaction,
      deleteChat,
      activeEffects,
      applyEffect
    }}>
      {children}
    </ChatContext.Provider>
  );
}

export const useChat = () => useContext(ChatContext);
