import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import { AuthProvider } from './context/AuthContext'
import { ChatProvider } from './context/ChatContext'

console.log('--- APP VERSION 3.0.0 LOADED ---');

// Регистрация Service Worker для PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Используем относительный путь для корректной работы на GitHub Pages
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('SW registered v1.2.1-ULTRA-FORCE'))
      .catch(err => console.log('SW reg error', err));
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ChatProvider>
        <App />
      </ChatProvider>
    </AuthProvider>
  </React.StrictMode>,
)
