import React from 'react';
import { useChat } from '../context/ChatContext';
import { Heart } from 'lucide-react';

export default function EffectsOverlay() {
  const { activeEffects } = useChat();

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {activeEffects.map((effect) => (
        <React.Fragment key={effect.id}>
          {effect.type === 'hearts' && (
            <div className="absolute inset-0">
              {[...Array(24)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute effect-heart text-rose-500/50"
                  style={{
                    left: `${Math.random() * 100}%`,
                    '--heart-delay': `${Math.random() * 1.4}s`,
                    '--heart-duration': `${2.4 + Math.random() * 1.8}s`,
                    '--heart-size': `${16 + Math.random() * 28}px`,
                    '--heart-drift': `${-30 + Math.random() * 60}px`
                  }}
                >
                  <Heart size={20} fill="currentColor" />
                </div>
              ))}
            </div>
          )}

          {effect.type === 'fire' && (
            <div className="absolute inset-0">
              <div className="absolute inset-0 effect-fire-glow" />
              <div className="absolute inset-x-0 bottom-0 h-48 effect-fire-wave" />
              {[...Array(18)].map((_, i) => (
                <div
                  key={i}
                  className="absolute effect-fire-spark"
                  style={{
                    left: `${Math.random() * 100}%`,
                    '--spark-delay': `${Math.random() * 1.2}s`,
                    '--spark-duration': `${0.9 + Math.random() * 1.4}s`,
                    '--spark-size': `${2 + Math.random() * 5}px`,
                    '--spark-drift': `${-24 + Math.random() * 48}px`
                  }}
                />
              ))}
            </div>
          )}

          {effect.type === 'stars' && (
            <div className="absolute inset-0">
              {[...Array(40)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute effect-star-dot"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: `${2 + Math.random() * 4}px`,
                    height: `${2 + Math.random() * 4}px`,
                    '--star-delay': `${Math.random() * 1.4}s`,
                    '--star-duration': `${0.8 + Math.random() * 1.6}s`
                  }}
                />
              ))}
              {[...Array(6)].map((_, i) => (
                <div
                  key={`shoot-${i}`}
                  className="absolute effect-shooting-star"
                  style={{
                    top: `${Math.random() * 45}%`,
                    left: `${-20 + Math.random() * 40}%`,
                    '--shoot-delay': `${Math.random() * 1.8}s`,
                    '--shoot-duration': `${1.1 + Math.random() * 0.8}s`
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
