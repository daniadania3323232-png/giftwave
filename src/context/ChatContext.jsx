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
  deleteDoc,
  arrayUnion,
  arrayRemove
} from 'firebase/firestore';
import { db } from '../firebase';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useAuth } from './AuthContext';

const ChatContext = createContext();
const CHAT_PERMISSION_DEFAULTS = {
  manageInfo: true,
  manageMembers: false,
  deleteMessages: false
};

export function ChatProvider({ children }) {
  const { user } = useAuth();
  const [chats, setChats] = useState([]);
  const [availableCommunities, setAvailableCommunities] = useState([]);
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

  useEffect(() => {
    if (!user) {
      setAvailableCommunities([]);
      return;
    }

    const q = query(
      collection(db, 'chats'),
      where('type', 'in', ['group', 'channel'])
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const communities = snapshot.docs
        .map((chatDoc) => ({ id: chatDoc.id, ...chatDoc.data() }))
        .filter((chat) => !chat.participants?.includes(user.id));
      setAvailableCommunities(communities);
    });

    return unsubscribe;
  }, [user]);

  const getChatById = (chatId) => {
    return chats.find((chat) => chat.id === chatId) || availableCommunities.find((chat) => chat.id === chatId);
  };

  const getChatAccess = (chat) => {
    if (!user || !chat) {
      return {
        isOwner: false,
        isAdmin: false,
        canManageInfo: false,
        canManageMembers: false,
        canDeleteMessages: false
      };
    }

    const isOwner = chat.ownerId === user.id;
    const adminIds = Array.isArray(chat.adminIds) ? chat.adminIds : [chat.ownerId].filter(Boolean);
    const adminPermissions = { ...CHAT_PERMISSION_DEFAULTS, ...(chat.adminPermissions || {}) };
    const isAdmin = adminIds.includes(user.id);

    return {
      isOwner,
      isAdmin,
      canManageInfo: isOwner || (isAdmin && adminPermissions.manageInfo),
      canManageMembers: isOwner || (isAdmin && adminPermissions.manageMembers),
      canDeleteMessages: isOwner || (isAdmin && adminPermissions.deleteMessages)
    };
  };

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
    const uniqueParticipants = [...new Set([...(participants || []), user.id])];
    const chatData = {
      type: 'group',
      name,
      participants: uniqueParticipants,
      ownerId: user.id,
      adminIds: [user.id],
      adminPermissions: CHAT_PERMISSION_DEFAULTS,
      lastMessage: 'Группа создана',
      createdAt: serverTimestamp()
    };
    const docRef = await addDoc(collection(db, 'chats'), chatData);
    setActiveChatId(docRef.id);
  };

  const createChannel = async (name, participants) => {
    const uniqueParticipants = [...new Set([...(participants || []), user.id])];
    const chatData = {
      type: 'channel',
      name,
      participants: uniqueParticipants,
      ownerId: user.id,
      adminIds: [user.id],
      adminPermissions: CHAT_PERMISSION_DEFAULTS,
      lastMessage: 'Канал создан',
      createdAt: serverTimestamp()
    };
    const docRef = await addDoc(collection(db, 'chats'), chatData);
    setActiveChatId(docRef.id);
  };

  const sendMessageToChat = async (chatId, text, type = 'text', metadata = {}) => {
    if (!user || !chatId) return;

    const messageData = {
      chatId,
      text,
      senderId: user.id,
      senderName: user.username,
      type,
      metadata,
      timestamp: serverTimestamp()
    };

    await addDoc(collection(db, `chats/${chatId}/messages`), messageData);
    
    await updateDoc(doc(db, 'chats', chatId), {
      lastMessage: text,
      lastUpdated: serverTimestamp()
    });
  };

  const sendMessage = async (text, type = 'text', metadata = {}) => {
    if (!activeChatId) return;
    await sendMessageToChat(activeChatId, text, type, metadata);
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

  const joinChat = async (chatId) => {
    if (!user || !chatId) return;
    try {
      const chat = getChatById(chatId);
      if (!chat || !['group', 'channel'].includes(chat.type)) return;
      await updateDoc(doc(db, 'chats', chatId), {
        participants: arrayUnion(user.id),
        lastUpdated: serverTimestamp()
      });
      await addDoc(collection(db, `chats/${chatId}/messages`), {
        chatId,
        text: `${user.displayName || user.username} присоединился(ась)`,
        senderId: user.id,
        senderName: user.username,
        type: 'system',
        metadata: {},
        timestamp: serverTimestamp()
      });
      setActiveChatId(chatId);
    } catch (e) {
      console.error('Join chat error', e);
    }
  };

  const addChatMembers = async (chatId, userIds = []) => {
    if (!user || !chatId || userIds.length === 0) return;
    try {
      const chat = getChatById(chatId);
      if (!chat) return;
      const { canManageMembers } = getChatAccess(chat);
      if (!canManageMembers) return;
      const idsToAdd = userIds.filter(Boolean);
      if (idsToAdd.length === 0) return;
      await updateDoc(doc(db, 'chats', chatId), {
        participants: arrayUnion(...idsToAdd),
        lastUpdated: serverTimestamp()
      });
    } catch (e) {
      console.error('Add members error', e);
    }
  };

  const sendChatInvite = async (directChatId, communityChatId) => {
    if (!user || !directChatId || !communityChatId) return;
    try {
      const directChat = chats.find((chat) => chat.id === directChatId && chat.type === 'dm');
      const communityChat = getChatById(communityChatId);
      if (!directChat || !communityChat || !['group', 'channel'].includes(communityChat.type)) return;

      const { canManageMembers } = getChatAccess(communityChat);
      if (!canManageMembers) return;

      const inviteUrl = `${window.location.origin}${window.location.pathname}#invite=${communityChat.id}`;
      const inviteType = communityChat.type === 'group' ? 'группу' : 'канал';

      await sendMessageToChat(
        directChatId,
        `Приглашение в ${inviteType} «${communityChat.name}»`,
        'invite',
        {
          targetChatId: communityChat.id,
          targetChatName: communityChat.name,
          targetChatType: communityChat.type,
          inviteUrl,
          invitedById: user.id,
          invitedByName: user.displayName || user.username
        }
      );
    } catch (e) {
      console.error('Send invite error', e);
    }
  };

  const removeChatMember = async (chatId, userIdToRemove) => {
    if (!user || !chatId || !userIdToRemove) return;
    try {
      const chat = getChatById(chatId);
      if (!chat || chat.ownerId === userIdToRemove) return;
      const { canManageMembers } = getChatAccess(chat);
      if (!canManageMembers && user.id !== userIdToRemove) return;
      await updateDoc(doc(db, 'chats', chatId), {
        participants: arrayRemove(userIdToRemove),
        lastUpdated: serverTimestamp()
      });
      if (user.id === userIdToRemove && activeChatId === chatId) {
        setActiveChatId(null);
      }
    } catch (e) {
      console.error('Remove member error', e);
    }
  };

  const updateChatSettings = async (chatId, updates = {}) => {
    if (!user || !chatId || !updates) return;
    try {
      const chat = getChatById(chatId);
      if (!chat) return;
      const { isOwner, canManageInfo } = getChatAccess(chat);
      const nextData = {};

      if (typeof updates.name === 'string' && canManageInfo) {
        const nextName = updates.name.trim();
        if (nextName) nextData.name = nextName;
      }

      if (isOwner && Array.isArray(updates.adminIds)) {
        nextData.adminIds = [...new Set([chat.ownerId, ...updates.adminIds.filter(Boolean)])];
      }

      if (isOwner && updates.adminPermissions) {
        nextData.adminPermissions = {
          ...CHAT_PERMISSION_DEFAULTS,
          ...updates.adminPermissions
        };
      }

      if (Object.keys(nextData).length === 0) return;

      await updateDoc(doc(db, 'chats', chatId), {
        ...nextData,
        lastUpdated: serverTimestamp()
      });
    } catch (e) {
      console.error('Update chat settings error', e);
    }
  };

  return (
    <ChatContext.Provider value={{ 
      chats, 
      availableCommunities,
      activeChatId, 
      setActiveChatId, 
      messages, 
      sendMessage, 
      startPrivateChat,
      createGroup,
      createChannel,
      joinChat,
      sendChatInvite,
      addChatMembers,
      removeChatMember,
      updateChatSettings,
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
