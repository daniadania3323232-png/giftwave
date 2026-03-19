import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut,
  sendEmailVerification
} from 'firebase/auth';
import { 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc, 
  collection, 
  getDocs,
  query,
  where,
  onSnapshot
} from 'firebase/firestore';
import { auth, db } from '../firebase';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Следим за состоянием авторизации
  useEffect(() => {
    // Ультра-надежный таймер: если за 3 секунды ничего не загрузилось - показываем экран входа
    const safetyTimer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      try {
        if (firebaseUser) {
          const userRef = doc(db, 'users', firebaseUser.uid);
          const userDoc = await getDoc(userRef);
          if (userDoc.exists()) {
            const isVerified = firebaseUser.emailVerified;
            const userData = { id: firebaseUser.uid, ...userDoc.data(), isVerified };
            setCurrentUser(userData);
            
            // Ставим статус "В сети"
            await updateDoc(userRef, { lastSeen: 'online' });
          }
        } else {
          // Если пользователь выходит, ставим время последнего входа
          if (currentUser) {
            await updateDoc(doc(db, 'users', currentUser.id), { 
              lastSeen: new Date().toISOString() 
            });
          }
          setCurrentUser(null);
        }
      } catch (err) {
        console.error("Auth error:", err);
      } finally {
        clearTimeout(safetyTimer);
        setLoading(false);
      }
    }, (error) => {
      console.error("Auth state error:", error);
      clearTimeout(safetyTimer);
      setLoading(false);
    });

    // Обработка закрытия вкладки
    const handleTabClose = () => {
      if (auth.currentUser) {
        updateDoc(doc(db, 'users', auth.currentUser.uid), { 
          lastSeen: new Date().toISOString() 
        });
      }
    };
    window.addEventListener('beforeunload', handleTabClose);

    return () => {
      unsubscribe();
      clearTimeout(safetyTimer);
      window.removeEventListener('beforeunload', handleTabClose);
    };
  }, []);

  useEffect(() => {
    if (currentUser && currentUser.isVerified) {
      const q = query(collection(db, 'users'));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setAllUsers(users);
      });
      return unsubscribe;
    }
  }, [currentUser]);

  const register = async (username, password, bio, email, displayName) => {
    try {
      // 1. Проверяем, не занят ли username (уникальный ID)
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('username', '==', username));
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        return { error: 'Этот юзернейм уже занят. Выберите другой.' };
      }

      // 2. Регистрируем через Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredential.user;

      await sendEmailVerification(firebaseUser);

      const userData = {
        username: username.toLowerCase(),
        displayName: displayName || username,
        bio,
        email,
        phone: '',
        birthday: '',
        nameColor: '#ffffff',
        isVerified: false,
        role: username.toLowerCase() === 'admin' ? 'admin' : 'user',
        avatar: `https://api.dicebear.com/7.x/shapes/svg?seed=${username}`,
        coins: 500,
        createdAt: new Date().toISOString()
      };

      await setDoc(doc(db, 'users', firebaseUser.uid), userData);
      
      setCurrentUser({ id: firebaseUser.uid, ...userData });
      return { success: true };
    } catch (error) {
      let errorMsg = error.message;
      if (error.code === 'auth/email-already-in-use') {
        errorMsg = 'Пользователь с такой почтой уже зарегистрирован.';
      }
      return { error: errorMsg };
    }
  };

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return { success: true };
    } catch (error) {
      return { error: 'Неверный логин или пароль' };
    }
  };

  const checkVerification = async () => {
    if (!auth.currentUser) return;
    await auth.currentUser.reload();
    const isVerified = auth.currentUser.emailVerified;
    if (isVerified) {
      await updateDoc(doc(db, 'users', auth.currentUser.uid), { isVerified: true });
      setCurrentUser(prev => ({ ...prev, isVerified: true }));
    }
    return isVerified;
  };

  const giveCoins = async (userId, amount) => {
    if (currentUser?.role !== 'admin') return { error: 'Access denied' };
    try {
      const targetUser = allUsers.find(u => u.id === userId);
      const newCoins = (targetUser.coins || 0) + parseInt(amount);
      await updateDoc(doc(db, 'users', userId), { coins: newCoins });
      setAllUsers(prev => prev.map(u => u.id === userId ? { ...u, coins: newCoins } : u));
      return { success: true };
    } catch (error) {
      return { error: error.message };
    }
  };

  const logout = () => signOut(auth);

  const updateUser = async (updates) => {
    if (!currentUser) return;
    try {
      // Если меняется юзернейм, проверяем его уникальность
      if (updates.username && updates.username !== currentUser.username) {
        const usersRef = collection(db, 'users');
        const q = query(usersRef, where('username', '==', updates.username));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          return { error: 'Этот юзернейм уже занят.' };
        }
      }

      const userRef = doc(db, 'users', currentUser.id);
      await updateDoc(userRef, updates);
      setCurrentUser(prev => ({ ...prev, ...updates }));
      return { success: true };
    } catch (error) {
      console.error("Error updating user:", error);
      return { error: error.message };
    }
  };

  return (
    <AuthContext.Provider value={{ 
      user: currentUser, 
      allUsers, 
      register, 
      login, 
      logout, 
      checkVerification,
      giveCoins,
      updateUser,
      loading 
    }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
