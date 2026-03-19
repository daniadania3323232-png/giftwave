import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useChat } from '../context/ChatContext';
import { 
  MessageSquare, 
  Users, 
  Hash, 
  Settings, 
  Search, 
  Plus,
  LogOut,
  Coins,
  Mail,
  Phone,
  Check,
  ShieldAlert,
  Terminal,
  RefreshCcw,
  UserPlus,
  Send
} from 'lucide-react';
import Modal from './Modal';
import { uploadToCloudinary } from '../utils/cloudinary';

export default function Sidebar() {
  const { user, allUsers, logout, updateUser, giveCoins } = useAuth();
  const { chats, availableCommunities, activeChatId, setActiveChatId, startPrivateChat, createGroup, createChannel, joinChat, sendChatInvite, removeChatMember, updateChatSettings, deleteChat } = useChat();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('messages');
  
  // Modal states
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isCreateGroupOpen, setIsCreateGroupOpen] = useState(false);
  const [isCreateChannelOpen, setIsCreateChannelOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);

  // Admin form states
  const [adminTargetId, setAdminTargetId] = useState('');
  const [adminAmount, setAdminAmount] = useState(100);

  // Form states
  const [newGroupName, setNewGroupName] = useState('');
  const [newChannelName, setNewChannelName] = useState('');
  const [profileDisplayName, setProfileDisplayName] = useState(user.displayName || '');
  const [profileUsername, setProfileUsername] = useState(user.username || '');
  const [profileEmail, setProfileEmail] = useState(user.email || '');
  const [profilePhone, setProfilePhone] = useState(user.phone || '');
  const [profileBio, setProfileBio] = useState(user.bio || '');
  const [profileBirthday, setProfileBirthday] = useState(user.birthday || '');
  const [profileNameColor, setProfileNameColor] = useState(user.nameColor || '#ffffff');
  const [avatarFile, setAvatarFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [isManageChatOpen, setIsManageChatOpen] = useState(false);
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [manageChatId, setManageChatId] = useState(null);
  const [manageChatName, setManageChatName] = useState('');
  const [selectedAdminIds, setSelectedAdminIds] = useState([]);
  const [adminPermissions, setAdminPermissions] = useState({
    manageInfo: true,
    manageMembers: false,
    deleteMessages: false
  });

  const pluralize = (count, one, few, many) => {
    const mod10 = count % 10;
    const mod100 = count % 100;
    if (mod10 === 1 && mod100 !== 11) return one;
    if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return few;
    return many;
  };

  const managedChat = chats.find(chat => chat.id === manageChatId) || null;
  const managedMembers = (managedChat?.participants || [])
    .map((memberId) => allUsers.find((u) => u.id === memberId))
    .filter(Boolean);
  const managedAdminIds = managedChat?.adminIds || [managedChat?.ownerId].filter(Boolean);
  const managedPermissions = {
    manageInfo: managedChat?.adminPermissions?.manageInfo ?? true,
    manageMembers: managedChat?.adminPermissions?.manageMembers ?? false,
    deleteMessages: managedChat?.adminPermissions?.deleteMessages ?? false
  };
  const isManagedOwner = managedChat?.ownerId === user.id;
  const isManagedAdmin = managedAdminIds.includes(user.id);
  const canManageInfo = isManagedOwner || (isManagedAdmin && managedPermissions.manageInfo);
  const canManageMembers = isManagedOwner || (isManagedAdmin && managedPermissions.manageMembers);
  const personalChats = chats.filter((chat) => chat.type === 'dm');
  const getDmCompanion = (chat) => {
    const companionId = chat.participants?.find((id) => id !== user.id);
    return allUsers.find((u) => u.id === companionId);
  };

  const openManageChat = (chat) => {
    setManageChatId(chat.id);
    setManageChatName(chat.name || '');
    setSelectedAdminIds(chat.adminIds || [chat.ownerId].filter(Boolean));
    setAdminPermissions({
      manageInfo: chat.adminPermissions?.manageInfo ?? true,
      manageMembers: chat.adminPermissions?.manageMembers ?? false,
      deleteMessages: chat.adminPermissions?.deleteMessages ?? false
    });
    setIsManageChatOpen(true);
  };

  const toggleAdmin = (adminId) => {
    if (!isManagedOwner || !managedChat) return;
    if (adminId === managedChat.ownerId) return;
    setSelectedAdminIds((prev) => (
      prev.includes(adminId)
        ? prev.filter((id) => id !== adminId)
        : [...prev, adminId]
    ));
  };

  const handleSaveManageSettings = async (e) => {
    e.preventDefault();
    if (!managedChat) return;
    const updates = {};
    if (canManageInfo) {
      updates.name = manageChatName;
    }
    if (isManagedOwner) {
      updates.adminIds = selectedAdminIds;
      updates.adminPermissions = adminPermissions;
    }
    await updateChatSettings(manageChatId, updates);
    setIsManageChatOpen(false);
  };

  const handleSendInvite = async (directChatId) => {
    if (!manageChatId) return;
    await sendChatInvite(directChatId, manageChatId);
    setIsInviteModalOpen(false);
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    if (uploading) return;
    
    setUploading(true);
    try {
      let avatarUrl = user.avatar;

      if (avatarFile) {
        avatarUrl = await uploadToCloudinary(avatarFile, 'image');
      }

      const res = await updateUser({ 
        displayName: profileDisplayName, 
        username: profileUsername.toLowerCase().trim(),
        email: profileEmail, 
        avatar: avatarUrl,
        bio: profileBio,
        birthday: profileBirthday,
        nameColor: profileNameColor
      });

      if (res?.error) {
        alert(res.error);
      } else {
        setIsProfileOpen(false);
        setAvatarFile(null);
      }
    } catch (error) {
      console.error("Profile update error:", error);
      alert("Ошибка при обновлении профиля: " + error.message);
    } finally {
      setUploading(false);
    }
  };

  const filteredUsers = allUsers.filter(u => 
    u.id !== user.id && 
    (u.username.toLowerCase().includes(searchTerm.toLowerCase()) || 
     u.displayName?.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleAdminGiveCoins = (e) => {
    e.preventDefault();
    if (adminTargetId && adminAmount) {
      giveCoins(adminTargetId, adminAmount);
      alert('Монеты успешно выданы!');
    }
  };

  const handleCreateGroup = (e) => {
    e.preventDefault();
    if (newGroupName.trim()) {
      createGroup(newGroupName, [user.id]);
      setNewGroupName('');
      setIsCreateGroupOpen(false);
    }
  };

  const handleCreateChannel = (e) => {
    e.preventDefault();
    if (newChannelName.trim()) {
      createChannel(newChannelName, [user.id]);
      setNewChannelName('');
      setIsCreateChannelOpen(false);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col bg-[#18181b] border-r border-zinc-800/50">
      {/* User Profile Header */}
      <div className="p-4 flex items-center justify-between border-b border-zinc-800/50 bg-[#18181b]/50 backdrop-blur-md">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="relative shrink-0">
            <img src={user.avatar} className="w-10 h-10 rounded-xl bg-zinc-800 object-cover" alt="me" />
            <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#18181b] rounded-full" />
          </div>
          <div className="flex-1 min-w-0 pr-2">
            <div className="font-semibold text-sm truncate flex items-center gap-1" style={{ color: user.nameColor || '#e4e4e7' }}>
              <span className="truncate">{user.displayName || user.username}</span>
              {user.role === 'admin' && <ShieldAlert className="w-3 h-3 text-red-500 shrink-0" title="Admin" />}
            </div>
            <div className="text-[10px] text-zinc-500 truncate">@{user.username}</div>
            <div className="flex items-center gap-1 text-[10px] text-amber-500 font-bold uppercase tracking-tighter">
              <Coins className="w-2.5 h-2.5" />
              {user.coins} credits
            </div>
          </div>
        </div>
        <button onClick={logout} className="p-2 hover:bg-zinc-800 rounded-lg text-zinc-500 transition-colors">
          <LogOut className="w-4 h-4" />
        </button>
      </div>

      {/* Search */}
      <div className="p-4">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-emerald-500 transition-colors" />
          <input 
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Поиск людей..."
            className="w-full pl-10 pr-4 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-sm focus:border-emerald-500/50 outline-none transition-all"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex px-4 mb-2 gap-1">
        {[
          { id: 'messages', icon: MessageSquare, label: 'Чаты' },
          { id: 'groups', icon: Users, label: 'Группы' },
          { id: 'channels', icon: Hash, label: 'Каналы' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 flex flex-col items-center py-2 rounded-lg transition-all ${
              activeTab === tab.id ? 'bg-emerald-500/10 text-emerald-500' : 'text-zinc-500 hover:bg-zinc-800/50'
            }`}
          >
            <tab.icon className="w-4 h-4 mb-1" />
            <span className="text-[10px] font-medium">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {searchTerm ? (
          <div className="p-2 space-y-1">
            <div className="px-3 py-1 text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Результаты поиска</div>
            {filteredUsers.map(u => (
              <button
                key={u.id}
                onClick={() => {
                  startPrivateChat(u);
                  setSearchTerm('');
                }}
                className="w-full flex items-center gap-3 p-3 hover:bg-zinc-800/50 rounded-xl transition-all group"
              >
                <img src={u.avatar} className="w-10 h-10 rounded-xl bg-zinc-900" alt={u.username} />
                <div className="text-left">
                  <div className="text-sm font-medium text-zinc-200 group-hover:text-emerald-400 transition-colors">{u.username}</div>
                  <div className="text-xs text-zinc-500 truncate w-32">{u.bio || 'Нет описания'}</div>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="p-2 space-y-1">
            {chats.filter(c => 
              (activeTab === 'messages' && c.type === 'dm') ||
              (activeTab === 'groups' && c.type === 'group') ||
              (activeTab === 'channels' && c.type === 'channel')
            ).map(chat => {
              const otherUserId = chat.participants?.find(id => id !== user.id);
              const otherUser = chat.type === 'dm' ? allUsers.find(u => u.id === otherUserId) : null;
              const chatDisplayName = otherUser ? (otherUser.displayName || otherUser.username) : chat.name;
              const chatAvatar = otherUser ? otherUser.avatar : null;
              const isOnline = otherUser?.lastSeen === 'online';
              const memberCount = chat.participants?.length || 0;
              const communityStatus = chat.type === 'group'
                ? `${memberCount} ${pluralize(memberCount, 'участник', 'участника', 'участников')}`
                : `${memberCount} ${pluralize(memberCount, 'подписчик', 'подписчика', 'подписчиков')}`;
              const adminIds = chat.adminIds || [chat.ownerId].filter(Boolean);
              const isOwner = chat.ownerId === user.id;
              const isAdmin = adminIds.includes(user.id);
              const canManageInfoChat = isOwner || (isAdmin && (chat.adminPermissions?.manageInfo ?? true));
              const canManageMembersChat = isOwner || (isAdmin && (chat.adminPermissions?.manageMembers ?? false));
              const canManageChat = chat.type !== 'dm' && (canManageInfoChat || canManageMembersChat);
              const canDelete = chat.type !== 'dm' && (chat.ownerId === user.id || user.role === 'admin');

              return (
                <div
                  key={chat.id}
                  className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover-lift ${
                    activeChatId === chat.id 
                      ? 'bg-emerald-500/10 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]' 
                      : 'hover:bg-zinc-800/50 border border-transparent'
                  }`}
                >
                  <button
                    onClick={() => setActiveChatId(chat.id)}
                    className="flex items-center gap-3 flex-1 min-w-0 text-left"
                  >
                    <div className="relative w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center font-bold text-zinc-500 overflow-hidden">
                    {chatAvatar ? (
                      <img src={chatAvatar} className="w-full h-full object-cover" alt="avatar" />
                    ) : (
                      chatDisplayName[0].toUpperCase()
                    )}
                    {chat.type === 'dm' && isOnline && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-[#18181b] rounded-full" />
                    )}
                    </div>
                    <div className="text-left flex-1 min-w-0">
                      <div className="text-sm font-medium text-zinc-200 truncate">{chatDisplayName}</div>
                      <div className="text-xs text-zinc-500 truncate">{chat.type === 'dm' ? (chat.lastMessage || 'Нет сообщений') : communityStatus}</div>
                    </div>
                  </button>
                  {canManageChat && (
                    <button
                      onClick={() => openManageChat(chat)}
                      className="ml-1 px-2 py-1 rounded-lg text-[10px] text-emerald-400 hover:bg-emerald-500/10"
                    >
                      Управление
                    </button>
                  )}
                  {canDelete && (
                    <button
                      onClick={() => {
                        if (window.confirm('Удалить этот чат вместе со всеми сообщениями?')) {
                          deleteChat(chat.id);
                        }
                      }}
                      className="ml-1 px-2 py-1 rounded-lg text-[10px] text-red-400 hover:bg-red-500/10"
                    >
                      Удалить
                    </button>
                  )}
                </div>
              );
            })}

            {activeTab !== 'messages' && availableCommunities
              .filter(chat => (activeTab === 'groups' && chat.type === 'group') || (activeTab === 'channels' && chat.type === 'channel'))
              .map(chat => (
                <div key={chat.id} className="w-full p-3 rounded-xl border border-dashed border-zinc-700 bg-zinc-900/30">
                  <div className="flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <div className="text-sm font-medium text-zinc-200 truncate">{chat.name}</div>
                      <div className="text-xs text-zinc-500">
                        {(chat.participants?.length || 0)} {chat.type === 'group'
                          ? pluralize(chat.participants?.length || 0, 'участник', 'участника', 'участников')
                          : pluralize(chat.participants?.length || 0, 'подписчик', 'подписчика', 'подписчиков')}
                      </div>
                    </div>
                    <button
                      onClick={() => joinChat(chat.id)}
                      className="px-2.5 py-1.5 rounded-lg text-[11px] font-semibold text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/10 flex items-center gap-1"
                    >
                      <UserPlus className="w-3.5 h-3.5" />
                      Вступить
                    </button>
                  </div>
                </div>
              ))}
            
            {activeTab !== 'messages' && (
              <button 
                onClick={() => {
                  if (activeTab === 'groups') setIsCreateGroupOpen(true);
                  if (activeTab === 'channels') setIsCreateChannelOpen(true);
                }}
                className="w-full flex items-center gap-3 p-3 text-emerald-500 hover:bg-emerald-500/5 rounded-xl transition-all border border-dashed border-emerald-500/20 mt-4"
              >
                <Plus className="w-5 h-5" />
                <span className="text-sm font-semibold">
                  {activeTab === 'groups' ? 'Создать группу' : 'Создать канал'}
                </span>
              </button>
            )}
          </div>
        )}
      </div>

      {/* Footer Settings */}
      <div className="p-4 border-t border-zinc-800/50 space-y-1">
        {user.role === 'admin' && (
          <button 
            onClick={() => setIsAdminPanelOpen(true)}
            className="w-full flex items-center gap-3 p-2 text-red-400 hover:bg-red-400/10 rounded-lg transition-colors text-sm font-medium"
          >
            <Terminal className="w-4 h-4" />
            Панель разработчика
          </button>
        )}
        <button 
          onClick={() => setIsProfileOpen(true)}
          className="w-full flex items-center gap-3 p-2 text-zinc-500 hover:text-zinc-200 transition-colors text-sm font-medium"
        >
          <Settings className="w-4 h-4" />
          Настройки профиля
        </button>
      </div>

      {/* Modals */}
      <Modal isOpen={isAdminPanelOpen} onClose={() => setIsAdminPanelOpen(false)} title="Console: Developer Panel">
        <form onSubmit={handleAdminGiveCoins} className="space-y-4">
          <div>
            <label className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1.5 block">Выбрать пользователя</label>
            <select 
              value={adminTargetId}
              onChange={(e) => setAdminTargetId(e.target.value)}
              className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-sm focus:border-red-500/50 outline-none transition-all"
              required
            >
              <option value="">Выберите аккаунт</option>
              {allUsers.map(u => (
                <option key={u.id} value={u.id}>{u.username} (ID: {u.id})</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1.5 block">Количество монет</label>
            <input
              type="number"
              value={adminAmount}
              onChange={(e) => setAdminAmount(e.target.value)}
              className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-sm focus:border-red-500/50 outline-none transition-all"
              required
            />
          </div>
          <button type="submit" className="w-full py-2.5 bg-red-600 text-white rounded-xl hover:bg-red-500 transition-all font-bold uppercase tracking-widest text-xs">
            Выдать валюту
          </button>
        </form>
      </Modal>

      {/* Profile, Group, Channel modals remain same as before but inside this Sidebar */}
      <Modal isOpen={isSearchModalOpen} onClose={() => setIsSearchModalOpen(false)} title="Найти собеседника">
        <div className="space-y-2 max-h-96 overflow-y-auto custom-scrollbar">
          {allUsers.filter(u => u.id !== user.id).map(u => (
            <button
              key={u.id}
              onClick={() => {
                startPrivateChat(u);
                setIsSearchModalOpen(false);
              }}
              className="w-full flex items-center gap-3 p-3 hover:bg-zinc-800 rounded-xl transition-all"
            >
              <img src={u.avatar} className="w-10 h-10 rounded-xl bg-zinc-900" alt={u.username} />
              <div className="text-left">
                <div className="text-sm font-medium text-zinc-200">{u.username}</div>
                <div className="text-xs text-zinc-500">{u.bio || 'Нет описания'}</div>
              </div>
            </button>
          ))}
        </div>
      </Modal>

      <Modal isOpen={isCreateGroupOpen} onClose={() => setIsCreateGroupOpen(false)} title="Создать группу">
        <form onSubmit={handleCreateGroup} className="space-y-4">
          <input
            type="text"
            value={newGroupName}
            onChange={(e) => setNewGroupName(e.target.value)}
            placeholder="Название группы"
            className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl focus:border-emerald-500/50 outline-none"
            required
          />
          <button type="submit" className="w-full py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-500 transition-all">
            Создать
          </button>
        </form>
      </Modal>

      <Modal isOpen={isCreateChannelOpen} onClose={() => setIsCreateChannelOpen(false)} title="Создать канал">
        <form onSubmit={handleCreateChannel} className="space-y-4">
          <input
            type="text"
            value={newChannelName}
            onChange={(e) => setNewChannelName(e.target.value)}
            placeholder="Название канала"
            className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl focus:border-emerald-500/50 outline-none"
            required
          />
          <button type="submit" className="w-full py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-500 transition-all">
            Создать
          </button>
        </form>
      </Modal>

      <Modal isOpen={isManageChatOpen} onClose={() => setIsManageChatOpen(false)} title={managedChat?.type === 'group' ? 'Управление группой' : 'Управление каналом'}>
        {managedChat ? (
          <form onSubmit={handleSaveManageSettings} className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs text-zinc-500">Название</label>
              <input
                type="text"
                value={manageChatName}
                onChange={(e) => setManageChatName(e.target.value)}
                disabled={!canManageInfo}
                className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl focus:border-emerald-500/50 outline-none disabled:opacity-50"
              />
            </div>

            {isManagedOwner && (
              <div className="space-y-2">
                <label className="text-xs text-zinc-500">Админы</label>
                <div className="max-h-36 overflow-y-auto custom-scrollbar space-y-1 pr-1">
                  {managedMembers.map((member) => (
                    <button
                      type="button"
                      key={member.id}
                      onClick={() => toggleAdmin(member.id)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg border text-xs ${
                        selectedAdminIds.includes(member.id)
                          ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300'
                          : 'border-zinc-700 text-zinc-300 hover:bg-zinc-800'
                      }`}
                    >
                      <span>{member.displayName || member.username}</span>
                      <span>{member.id === managedChat.ownerId ? 'Владелец' : (selectedAdminIds.includes(member.id) ? 'Админ' : 'Участник')}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {isManagedOwner && (
              <div className="space-y-2">
                <label className="text-xs text-zinc-500">Права админов</label>
                <div className="space-y-2">
                  <label className="flex items-center justify-between text-xs text-zinc-300">
                    <span>Редактирование информации</span>
                    <input type="checkbox" checked={adminPermissions.manageInfo} onChange={(e) => setAdminPermissions(prev => ({ ...prev, manageInfo: e.target.checked }))} />
                  </label>
                  <label className="flex items-center justify-between text-xs text-zinc-300">
                    <span>Управление участниками</span>
                    <input type="checkbox" checked={adminPermissions.manageMembers} onChange={(e) => setAdminPermissions(prev => ({ ...prev, manageMembers: e.target.checked }))} />
                  </label>
                  <label className="flex items-center justify-between text-xs text-zinc-300">
                    <span>Удаление сообщений</span>
                    <input type="checkbox" checked={adminPermissions.deleteMessages} onChange={(e) => setAdminPermissions(prev => ({ ...prev, deleteMessages: e.target.checked }))} />
                  </label>
                </div>
              </div>
            )}

            {canManageMembers && (
              <div className="space-y-2">
                <label className="text-xs text-zinc-500">Приглашения</label>
                <button
                  type="button"
                  onClick={() => setIsInviteModalOpen(true)}
                  className="w-full px-3 py-2.5 text-xs rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  Отправить приглашение
                </button>
              </div>
            )}

            <div className="space-y-2">
              <label className="text-xs text-zinc-500">Участники</label>
              <div className="max-h-40 overflow-y-auto custom-scrollbar space-y-1 pr-1">
                {managedMembers.map((member) => (
                  <div key={member.id} className="flex items-center justify-between px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-xs">
                    <span className="text-zinc-200 truncate pr-2">{member.displayName || member.username}</span>
                    <div className="flex items-center gap-2 shrink-0">
                      {member.id === managedChat.ownerId && <span className="text-amber-500">Owner</span>}
                      {member.id !== managedChat.ownerId && managedAdminIds.includes(member.id) && <span className="text-emerald-500">Admin</span>}
                      {canManageMembers && member.id !== managedChat.ownerId && (
                        <button type="button" onClick={() => removeChatMember(manageChatId, member.id)} className="text-red-400 hover:text-red-300">
                          Удалить
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button type="submit" className="w-full py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-500 transition-all font-medium">
              Сохранить
            </button>
          </form>
        ) : null}
      </Modal>

      <Modal isOpen={isInviteModalOpen} onClose={() => setIsInviteModalOpen(false)} title="Отправить приглашение">
        <div className="space-y-2 max-h-96 overflow-y-auto custom-scrollbar">
          {personalChats.length === 0 && (
            <div className="text-xs text-zinc-500 px-1">Нет личных чатов для отправки приглашения</div>
          )}
          {personalChats.map((chat) => {
            const companion = getDmCompanion(chat);
            return (
              <div key={chat.id} className="flex items-center justify-between gap-2 p-2 rounded-lg border border-zinc-800 bg-zinc-900/40">
                <div className="min-w-0">
                  <div className="text-xs text-zinc-200 truncate">{companion?.displayName || companion?.username || 'Пользователь'}</div>
                  <div className="text-[10px] text-zinc-500 truncate">@{companion?.username || 'unknown'}</div>
                </div>
                <button
                  type="button"
                  onClick={() => handleSendInvite(chat.id)}
                  className="px-2.5 py-1.5 rounded-md text-[11px] font-semibold text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/10"
                >
                  Отправить
                </button>
              </div>
            );
          })}
        </div>
      </Modal>

      <Modal isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} title="Настройки профиля">
        <form onSubmit={handleUpdateProfile} className="space-y-4">
          <div className="flex flex-col items-center gap-3 mb-4">
            <div className="relative group">
              <img 
                src={avatarFile ? URL.createObjectURL(avatarFile) : user.avatar} 
                className="w-24 h-24 rounded-2xl bg-zinc-900 object-cover border-2 border-zinc-800" 
                alt="Avatar" 
              />
              <label className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 rounded-2xl cursor-pointer transition-opacity">
                <Plus className="w-8 h-8 text-white" />
                <input 
                  type="file" 
                  className="hidden" 
                  accept="image/*" 
                  onChange={(e) => setAvatarFile(e.target.files[0])}
                />
              </label>
            </div>
            <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Нажмите, чтобы изменить фото</p>
          </div>

          <div className="space-y-2">
            <label className="text-xs text-zinc-500">Отображаемое имя (русский доступен)</label>
            <input
              type="text"
              value={profileDisplayName}
              onChange={(e) => setProfileDisplayName(e.target.value)}
              className="w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl outline-none focus:border-emerald-500/50"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs text-zinc-500">Цвет имени</label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={profileNameColor}
                onChange={(e) => setProfileNameColor(e.target.value)}
                className="w-10 h-10 rounded-xl border border-zinc-800 bg-zinc-950 cursor-pointer"
              />
              <span className="text-xs text-zinc-400">{profileNameColor}</span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs text-zinc-500">Дата рождения</label>
            <input
              type="date"
              value={profileBirthday}
              onChange={(e) => setProfileBirthday(e.target.value)}
              className="w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl outline-none focus:border-emerald-500/50"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs text-zinc-500">О себе</label>
            <textarea
              value={profileBio}
              onChange={(e) => setProfileBio(e.target.value)}
              rows={3}
              className="w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl outline-none focus:border-emerald-500/50 resize-none text-sm"
              placeholder="Расскажите немного о себе..."
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs text-zinc-500">Юзернейм (@username)</label>
            <input
              type="text"
              value={profileUsername}
              onChange={(e) => setProfileUsername(e.target.value)}
              className="w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl outline-none focus:border-emerald-500/50"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs text-zinc-500">Email</label>
            <input
              type="email"
              value={profileEmail}
              onChange={(e) => setProfileEmail(e.target.value)}
              className="w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl outline-none"
            />
          </div>

          <button 
            type="submit" 
            disabled={uploading}
            className="w-full py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-500 transition-all font-medium flex items-center justify-center gap-2"
          >
            {uploading ? (
              <>
                <RefreshCcw className="w-4 h-4 animate-spin" />
                Загрузка...
              </>
            ) : (
              <>
                <Check className="w-4 h-4" />
                Сохранить изменения
              </>
            )}
          </button>
        </form>
      </Modal>
    </div>
  );
}
