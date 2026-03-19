import React from 'react';
import { useChat } from '../context/ChatContext';
import { Heart } from 'lucide-react';

export default function EffectsOverlay() {
  const { activeEffects } = useChat();

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {activeEffects.map((effect) => (
        <React.Fragment key={effect.id}>
          {/* Эффект Сердец */}
          {effect.type === 'hearts' && (
            <div className="absolute inset-0">
              {[...Array(15)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute animate-float-up text-rose-500/40"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `110%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${3 + Math.random() * 4}s`
                  }}
                >
                  <Heart size={20 + Math.random() * 30} fill="currentColor" />
                </div>
              ))}
            </div>
          )}

          {/* Эффект Огня (Свечение по краям) */}
          {effect.type === 'fire' && (
            <div className="absolute inset-0 animate-pulse-fast bg-gradient-to-t from-orange-600/20 via-transparent to-transparent shadow-[inset_0_-50px_100px_rgba(249,115,22,0.2)]" />
          )}

          {/* Эффект Звезд */}
          {effect.type === 'stars' && (
            <div className="absolute inset-0">
              {[...Array(30)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute animate-twinkle bg-yellow-400 rounded-full shadow-[0_0_10px_rgba(250,204,21,0.8)]"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: `${2 + Math.random() * 3}px`,
                    height: `${2 + Math.random() * 3}px`,
                    animationDelay: `${Math.random() * 3}s`
                  }}
                />
              ))}
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
