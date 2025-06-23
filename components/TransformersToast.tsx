"use client";

interface TransformersToastProps {
  onClose: () => void;
}

export default function TransformersToast({ onClose }: TransformersToastProps) {
  return (
    <div className="fixed top-6 right-6 z-40 animate-transform-slide-in">
      <div 
        className="transformers-toast relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.2) 0%, rgba(30, 41, 59, 0.9) 50%, rgba(220, 38, 38, 0.2) 100%)',
          border: '3px solid #ffd700',
          borderRadius: '0px',
          padding: '16px',
          maxWidth: '350px',
          boxShadow: '0 0 30px rgba(255, 215, 0, 0.6), inset 0 0 30px rgba(220, 38, 38, 0.1), 0 6px 0px #ff8800, 0 8px 12px rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(15px)'
        }}
      >
        {/* Energy sweep overlay */}
        <div className="absolute top-0 left-0 right-0 h-1 energy-sweep-bar"></div>
        
        {/* Header */}
        <div className="relative z-10 flex items-center gap-3 mb-3">
          {/* Autobot insignia */}
          <div className="relative w-12 h-12 flex items-center justify-center autobot-symbol">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 transform rotate-45" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
            <div className="relative w-6 h-6 bg-slate-800 transform rotate-45 flex items-center justify-center">
              <div className="w-2 h-2 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
            </div>
            {/* Energy sparks */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 transform rotate-45 animate-ping"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-red-500 transform rotate-45 animate-ping" style={{animationDelay: '0.5s'}}></div>
          </div>
          
          <div className="flex-1">
            <div 
              className="text-yellow-400 font-bold text-sm tracking-widest"
              style={{ 
                fontFamily: 'Audiowide, monospace',
                textShadow: '0 0 10px #ffd700, 2px 2px 0px #000'
              }}
            >
              AUTOBOTS ONLINE
            </div>
            <div 
              className="text-blue-400 text-xs mt-1 tracking-wide"
              style={{ 
                fontFamily: 'Exo 2, sans-serif',
                textShadow: '0 0 5px #4488ff'
              }}
            >
              SYSTEMS OPERATIONAL
            </div>
          </div>
          
          <button 
            onClick={onClose}
            className="text-yellow-400 hover:text-red-500 text-lg font-bold transition-all hover:scale-110 relative z-10 transform-close-btn"
            style={{ 
              textShadow: '0 0 10px currentColor',
              fontFamily: 'Audiowide, monospace'
            }}
          >
            ✕
          </button>
        </div>
        
        {/* Message */}
        <div className="relative z-10 mb-3" style={{ fontFamily: 'Exo 2, sans-serif' }}>
          <div className="text-white font-bold mb-2 text-sm">
            Welcome to the <span className="text-yellow-400 mech-text" style={{textShadow: '0 0 10px #ffd700'}}>80s MECH ERA</span>!
          </div>
          <div className="text-slate-300 text-xs leading-relaxed">
            Transform and roll out with metallic surfaces, chrome gradients, and robotic precision ⚡◈
          </div>
        </div>
        
        {/* Mechanical elements */}
        <div className="relative z-10 flex justify-between items-center">
          <div className="flex gap-2">
            {['⚡', '◈', '◊', '●'].map((symbol, i) => (
              <div 
                key={i} 
                className="text-lg font-bold animate-bounce mechanical-symbol" 
                style={{
                  color: ['#ffd700', '#ff4444', '#4488ff', '#ffffff'][i],
                  animationDelay: `${i * 150}ms`,
                  textShadow: `0 0 10px ${['#ffd700', '#ff4444', '#4488ff', '#ffffff'][i]}`,
                  fontFamily: 'Audiowide, monospace'
                }}
              >
                {symbol}
              </div>
            ))}
          </div>
          <div 
            className="text-xs text-yellow-400 font-bold tracking-wider" 
            style={{ 
              fontFamily: 'Michroma, monospace',
              textShadow: '0 0 5px #ffd700'
            }}
          >
            EST. 1984
          </div>
        </div>

        {/* Mechanical frame borders */}
        <div className="absolute inset-0 mechanical-frame"></div>
      </div>

      <style jsx>{`
        .transformers-toast {
          position: relative;
          animation: transform-toast-entry 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .energy-sweep-bar {
          background: linear-gradient(90deg, 
            transparent 0%, 
            #ffd700 20%, 
            #ff4444 50%, 
            #4488ff 80%, 
            transparent 100%);
          animation: energy-sweep 3s ease-in-out infinite;
        }

        .autobot-symbol {
          animation: autobot-spin 4s linear infinite;
        }

        .mechanical-frame {
          background: 
            linear-gradient(90deg, #ffd700 0%, #ffd700 2px, transparent 2px, transparent calc(100% - 2px), #ffd700 calc(100% - 2px)),
            linear-gradient(0deg, #ffd700 0%, #ffd700 2px, transparent 2px, transparent calc(100% - 2px), #ffd700 calc(100% - 2px));
          background-size: 20px 100%, 100% 20px;
          background-repeat: repeat-x, repeat-y;
          animation: frame-pulse 2s ease-in-out infinite;
        }

        .mech-text {
          animation: mech-flicker 3s ease-in-out infinite;
        }

        .mechanical-symbol {
          animation: mech-bounce 1.2s ease-in-out infinite;
        }

        .transform-close-btn:hover {
          animation: transform-spin 0.6s ease-in-out;
        }

        @keyframes transform-toast-entry {
          0% {
            transform: scale(0) rotate(-45deg) translateX(200px);
            opacity: 0;
            filter: brightness(0);
          }
          50% {
            transform: scale(1.2) rotate(10deg) translateX(-20px);
            filter: brightness(1.5);
          }
          100% {
            transform: scale(1) rotate(0deg) translateX(0px);
            opacity: 1;
            filter: brightness(1);
          }
        }

        @keyframes energy-sweep {
          0%, 100% { transform: translateX(-100%); opacity: 0; }
          50% { transform: translateX(100%); opacity: 1; }
        }

        @keyframes autobot-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes frame-pulse {
          0%, 100% { 
            opacity: 0.8; 
            filter: brightness(1);
          }
          50% { 
            opacity: 1; 
            filter: brightness(1.3);
          }
        }

        @keyframes mech-flicker {
          0%, 100% { 
            text-shadow: 0 0 10px #ffd700;
            filter: hue-rotate(0deg);
          }
          25% { 
            text-shadow: 0 0 15px #ff4444;
            filter: hue-rotate(45deg);
          }
          50% { 
            text-shadow: 0 0 12px #4488ff;
            filter: hue-rotate(90deg);
          }
          75% { 
            text-shadow: 0 0 15px #ffd700;
            filter: hue-rotate(45deg);
          }
        }

        @keyframes mech-bounce {
          0%, 100% { 
            transform: scale(1) rotate(0deg);
            opacity: 0.9;
          }
          50% { 
            transform: scale(1.3) rotate(180deg);
            opacity: 1;
          }
        }

        @keyframes transform-spin {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.2); }
          100% { transform: rotate(360deg) scale(1); }
        }

        .animate-transform-slide-in {
          animation: transform-slide-in 1.2s ease-out;
        }

        @keyframes transform-slide-in {
          0% {
            transform: translateX(100%) translateY(-50px) rotate(20deg) scale(0.8);
            opacity: 0;
            filter: hue-rotate(180deg) brightness(2);
          }
          50% {
            transform: translateX(-10px) translateY(10px) rotate(-5deg) scale(1.1);
            filter: hue-rotate(90deg) brightness(1.5);
          }
          100% {
            transform: translateX(0) translateY(0) rotate(0deg) scale(1);
            opacity: 1;
            filter: hue-rotate(0deg) brightness(1);
          }
        }
      `}</style>
    </div>
  );
}