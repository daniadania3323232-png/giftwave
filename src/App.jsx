import React from 'react';
import { useAuth } from './context/AuthContext';
import { useChat } from './context/ChatContext';
import Login from './pages/Login';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import EffectsOverlay from './components/EffectsOverlay';
import CallOverlay from './components/CallOverlay';
import { twMerge } from 'tailwind-merge';

// Простой предохранитель от ошибок
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("App Crash:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="h-screen bg-[#09090b] flex flex-col items-center justify-center p-6 text-center">
          <h1 className="text-xl font-bold text-white mb-4">Ой! Что-то пошло не так</h1>
          <p className="text-zinc-400 text-sm mb-6">Возможно, это из-за старого кэша приложения.</p>
          <button 
            onClick={() => {
              localStorage.clear();
              sessionStorage.clear();
              window.location.href = window.location.pathname + '?clear=true';
            }}
            className="px-6 py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-500 transition-all"
          >
            Очистить кэш и исправить
          </button>
        </div>
      );
    }

    return this.props.children; 
  }
}

function AppContent() {
  const { user, loading } = useAuth();
  const { activeChatId } = useChat();

  if (loading) return (
    <div className="h-screen bg-[#09090b] flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin" />
    </div>
  );

  if (!user || !user.isVerified) return <Login />;

  return (
    <div className="flex h-screen bg-[#09090b] text-zinc-100 font-sans overflow-hidden">
      {/* На мобилках показываем Либо сайдбар, Либо чат */}
      <div className={twMerge(
        "flex-1 flex",
        activeChatId ? "mobile-chat-active" : "mobile-sidebar-active"
      )}>
        <div className={twMerge(
          "w-80 md:w-80 border-r border-zinc-800/50 flex-shrink-0 transition-all duration-300",
          activeChatId ? "hidden md:flex" : "w-full md:w-80 flex"
        )}>
          <Sidebar />
        </div>
        
        <main className={twMerge(
          "flex-1 flex flex-col relative transition-all duration-300",
          !activeChatId ? "hidden md:flex" : "flex"
        )}>
          {activeChatId ? (
            <ChatWindow />
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-zinc-600 bg-[#0c0c0e]">
              <div className="p-6 bg-zinc-900/30 rounded-full mb-4">
                <img src={user.avatar} className="w-24 h-24 opacity-20 grayscale rounded-2xl object-cover" alt="logo" />
              </div>
              <h3 className="text-xl font-medium text-zinc-400 text-center px-4">Выберите чат, чтобы начать общение</h3>
            </div>
          )}
          <EffectsOverlay />
          <CallOverlay />
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <AppContent />
    </ErrorBoundary>
  );
}
