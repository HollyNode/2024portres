"use client";

interface CyberpunkToastProps {
  onClose: () => void;
}

export default function CyberpunkToast({ onClose }: CyberpunkToastProps) {
  return (
    <div className="fixed top-6 right-6 z-40 animate-cyber-slide-in">
      <div 
        className="cyber-toast relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.2) 0%, rgba(255, 0, 255, 0.2) 100%)',
          border: '2px solid #00ffff',
          borderRadius: '0px',
          padding: '16px',
          maxWidth: '320px',
          boxShadow: '0 0 30px rgba(0, 255, 255, 0.6), inset 0 0 30px rgba(255, 0, 255, 0.1)',
          backdropFilter: 'blur(15px) saturate(200%)'
        }}
      >
        {/* Glitch overlay */}
        <div className="absolute inset-0 glitch-overlay"></div>
        
        {/* Header */}
        <div className="relative z-10 flex items-center gap-3 mb-3">
          {/* Cyberpunk icon */}
          <div className="relative w-12 h-12 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-spin" style={{animationDuration: '3s'}}></div>
            <div className="relative w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-pulse"></div>
            </div>
            {/* Digital sparks */}
            <div className="absolute top-0 right-0 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
            <div className="absolute bottom-0 left-0 w-1 h-1 bg-green-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
          </div>
          
          <div className="flex-1">
            <div 
              className="text-cyan-400 font-bold text-sm tracking-widest cyber-text"
              style={{ 
                fontFamily: 'Orbitron, monospace',
                textShadow: '0 0 10px #00ffff'
              }}
            >
              SYSTEM ONLINE
            </div>
            <div 
              className="text-purple-400 text-xs mt-1"
              style={{ 
                fontFamily: 'Share Tech Mono, monospace',
                textShadow: '0 0 5px #ff00ff'
              }}
            >
              NEURAL LINK ESTABLISHED
            </div>
          </div>
          
          <button 
            onClick={onClose}
            className="text-cyan-400 hover:text-purple-400 text-lg font-bold transition-all hover:scale-110 relative z-10"
            style={{ textShadow: '0 0 10px currentColor' }}
          >
            ×
          </button>
        </div>
        
        {/* Message */}
        <div className="relative z-10 mb-3" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
          <div className="text-white font-bold mb-2 text-sm">
            Welcome to the <span className="text-yellow-400 cyber-glitch" style={{textShadow: '0 0 10px #ffff00'}}>CYBER CARNIVAL</span>!
          </div>
          <div className="text-cyan-300 text-xs leading-relaxed">
            Enter the neon-lit digital circus where reality bends and pixels dance ◆◇●○
          </div>
        </div>
        
        {/* Digital elements */}
        <div className="relative z-10 flex justify-between items-center">
          <div className="flex gap-2">
            {['◆', '◇', '●', '○'].map((symbol, i) => (
              <div 
                key={i} 
                className="text-lg font-bold animate-bounce digital-symbol" 
                style={{
                  color: ['#00ffff', '#ff00ff', '#00ff00', '#ffff00'][i],
                  animationDelay: `${i * 200}ms`,
                  textShadow: `0 0 10px ${['#00ffff', '#ff00ff', '#00ff00', '#ffff00'][i]}`
                }}
              >
                {symbol}
              </div>
            ))}
          </div>
          <div 
            className="text-xs text-purple-400 font-bold tracking-wider" 
            style={{ 
              fontFamily: 'Share Tech Mono, monospace',
              textShadow: '0 0 5px #ff00ff'
            }}
          >
            EST. 2077
          </div>
        </div>

        {/* Animated border */}
        <div className="absolute inset-0 animated-border"></div>
      </div>

      <style jsx>{`
        .cyber-toast {
          position: relative;
          animation: cyber-toast-pop 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .glitch-overlay {
          background: repeating-linear-gradient(
            90deg,
            transparent,
            transparent 2px,
            rgba(0, 255, 255, 0.1) 2px,
            rgba(0, 255, 255, 0.1) 4px
          );
          animation: glitch-move 2s linear infinite;
        }

        .animated-border {
          background: linear-gradient(
            90deg,
            #00ffff 0%,
            #ff00ff 25%,
            #00ff00 50%,
            #ffff00 75%,
            #00ffff 100%
          );
          background-size: 400% 400%;
          animation: border-flow 3s ease infinite;
          mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
          mask-composite: xor;
          -webkit-mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          padding: 2px;
        }

        .cyber-glitch {
          animation: text-glitch-effect 2s ease-in-out infinite;
        }

        .digital-symbol {
          animation: digital-pulse 1.5s ease-in-out infinite;
        }

        @keyframes cyber-toast-pop {
          0% {
            transform: scale(0) rotate(-10deg) translateX(100px);
            opacity: 0;
          }
          50% {
            transform: scale(1.1) rotate(5deg) translateX(-10px);
          }
          100% {
            transform: scale(1) rotate(0deg) translateX(0px);
            opacity: 1;
          }
        }

        @keyframes glitch-move {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes border-flow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes text-glitch-effect {
          0%, 100% { 
            transform: translateX(0);
            filter: hue-rotate(0deg);
          }
          10% { 
            transform: translateX(-2px);
            filter: hue-rotate(90deg);
          }
          20% { 
            transform: translateX(2px);
            filter: hue-rotate(180deg);
          }
          30% { 
            transform: translateX(-1px);
            filter: hue-rotate(270deg);
          }
          40% { 
            transform: translateX(1px);
            filter: hue-rotate(360deg);
          }
        }

        @keyframes digital-pulse {
          0%, 100% { 
            transform: scale(1) rotate(0deg);
            opacity: 0.8;
          }
          50% { 
            transform: scale(1.2) rotate(180deg);
            opacity: 1;
          }
        }

        .animate-cyber-slide-in {
          animation: cyber-slide-in 1s ease-out;
        }

        @keyframes cyber-slide-in {
          0% {
            transform: translateX(100%) translateY(-20px) rotate(10deg);
            opacity: 0;
            filter: hue-rotate(180deg);
          }
          100% {
            transform: translateX(0) translateY(0) rotate(0deg);
            opacity: 1;
            filter: hue-rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
}