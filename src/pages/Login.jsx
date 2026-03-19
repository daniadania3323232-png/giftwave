import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Shield, UserPlus, LogIn, Sparkles, Lock, Mail, ExternalLink, RefreshCcw, Zap } from 'lucide-react';

export default function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [isWaitingEmail, setIsWaitingEmail] = useState(false);
  const [username, setUsername] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState('');
  const [error, setError] = useState('');
  const { login, register, checkVerification, logout, user } = useAuth();

  useEffect(() => {
    if (user && !user.isVerified) {
      setIsWaitingEmail(true);
    } else {
      setIsWaitingEmail(false);
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (isRegister) {
      // Проверка юзернейма на латиницу
      if (!/^[a-zA-Z0-9_]+$/.test(username)) {
        setError('Юзернейм может содержать только латинские буквы, цифры и подчеркивание.');
        return;
      }
      const res = await register(username, password, bio, email, displayName);
      if (res.error) setError(res.error);
    } else {
      const res = await login(email, password);
      if (res.error) setError(res.error);
    }
  };

  const handleRefresh = async () => {
    const verified = await checkVerification();
    if (!verified) {
      setError('Письмо еще не подтверждено. Проверьте почту и папку Спам!');
    }
  };

  const handleCancel = async () => {
    await logout();
    setIsWaitingEmail(false);
    setIsRegister(false);
  };

  if (isWaitingEmail) {
    return (
      <div className="flex min-h-screen bg-[#09090b] text-zinc-100 font-sans">
        <div className="flex flex-col justify-center w-full max-w-md px-8 py-12 mx-auto text-center">
          <div className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl backdrop-blur-xl shadow-2xl space-y-6">
            <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto animate-pulse">
              <Mail className="w-10 h-10 text-emerald-500" />
            </div>
            <h2 className="text-2xl font-bold">Подтвердите почту</h2>
            <p className="text-sm text-zinc-500">
              Мы отправили ссылку на <b>{user?.email}</b>. Пожалуйста, перейдите по ней, чтобы активировать аккаунт.
            </p>
            <div className="space-y-3 pt-4">
              <button
                onClick={handleRefresh}
                className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl transition-all"
              >
                <RefreshCcw className="w-4 h-4" />
                Я подтвердил! Войти
              </button>
              
              <button
                onClick={handleCancel}
                className="w-full flex items-center justify-center gap-2 py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-semibold rounded-xl transition-all"
              >
                Отмена / Выйти
              </button>

              <p className="text-[10px] text-zinc-600 uppercase tracking-widest pt-2">Не забудьте проверить папку Спам</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#09090b] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="w-full max-w-md animate-slide-in-up">
        <div className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 p-8 rounded-[2rem] shadow-2xl relative z-10">
          <div className="flex flex-col items-center mb-8">
            <div className="w-20 h-20 bg-emerald-500/10 rounded-3xl flex items-center justify-center mb-4 border border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.1)] hover:scale-110 transition-transform duration-500">
              <Zap className="w-10 h-10 text-emerald-500 fill-emerald-500/20" />
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight mb-1">GiftWave</h1>
            <p className="text-zinc-500 text-sm font-medium">Новое поколение мессенджеров</p>
          </div>
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold">{isRegister ? 'Создать аккаунт' : 'С возвращением'}</h2>
            <p className="text-sm text-zinc-500 mt-1">
              {isRegister ? 'Используйте реальную почту для активации' : 'Введите данные для входа'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {isRegister && (
              <>
                <div>
                  <label className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1.5 block">Имя (Отображаемое)</label>
                  <input
                    type="text"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    placeholder="Иван Иванов"
                    className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1.5 block">Юзернейм (@username)</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="ivan_dev"
                    className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl outline-none"
                    required
                  />
                  <p className="text-[10px] text-zinc-500 mt-1 ml-1">Только латиница, цифры и _</p>
                </div>
              </>
            )}

            <div>
              <label className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1.5 block">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="alex@example.com"
                className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl outline-none"
                required
              />
            </div>

            <div>
              <label className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1.5 block">Пароль</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl outline-none"
                  required
                  minLength={6}
                />
              </div>
            </div>

            {error && <p className="text-xs text-red-400 bg-red-400/10 p-2 rounded-lg text-center">{error}</p>}

            <button
              type="submit"
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-emerald-600/20"
            >
              {isRegister ? 'Отправить ссылку активации' : 'Войти в систему'}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-zinc-800 text-center">
            <button
              onClick={() => setIsRegister(!isRegister)}
              className="text-sm text-zinc-400 hover:text-emerald-500 transition-colors"
            >
              {isRegister ? 'Уже есть аккаунт? Войти' : 'Нет аккаунта? Создать сейчас'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
