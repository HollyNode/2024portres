"use client";

interface Retro90sToastProps {
  onClose: () => void;
}

export default function Retro90sToast({ onClose }: Retro90sToastProps) {
  return (
    <div className="fixed top-6 right-6 z-40 animate-retro-slide-in">
      <div 
        className="retro-toast relative"
        style={{
          background: '#c0c0c0',
          border: '3px outset #c0c0c0',
          borderRadius: '0px',
          padding: '12px',
          maxWidth: '320px',
          boxShadow: '3px 3px 6px #808080',
          fontFamily: 'MS Sans Serif, sans-serif'
        }}
      >
        {/* Classic 90s header bar */}
        <div className="retro-title-bar" style={{
          background: 'linear-gradient(to right, #000080, #0000ff)',
          color: '#ffffff',
          padding: '2px 6px',
          margin: '-12px -12px 8px -12px',
          fontSize: '11px',
          fontWeight: 'bold',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <span>📧 New Message - Internet Explorer</span>
          <button 
            onClick={onClose}
            style={{
              background: '#c0c0c0',
              border: '1px outset #c0c0c0',
              color: '#000',
              width: '16px',
              height: '14px',
              fontSize: '10px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            ×
          </button>
        </div>
        
        {/* Header with classic elements */}
        <div className="flex items-center gap-3 mb-3">
          {/* Animated @ symbol */}
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="text-2xl font-bold text-blue-600 animate-spin-slow">@</div>
            <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 bg-lime-500 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
          </div>
          
          <div className="flex-1">
            <div 
              className="text-blue-600 font-bold text-sm"
              style={{ 
                fontFamily: 'MS Sans Serif, sans-serif',
                textDecoration: 'underline'
              }}
            >
              WELCOME TO THE WEB!
            </div>
            <div 
              className="text-black text-xs mt-1"
              style={{ 
                fontFamily: 'MS Sans Serif, sans-serif'
              }}
            >
              Connecting at 56k...
            </div>
          </div>
        </div>
        
        {/* Message with 90s styling */}
        <div className="mb-3" style={{ fontFamily: 'MS Sans Serif, sans-serif' }}>
          <div className="text-black font-bold mb-2 text-sm">
            You've entered the <span className="retro-blink text-magenta-600">WORLD WIDE WEB</span>!
          </div>
          <div className="text-black text-xs leading-relaxed">
            Experience the internet like it's 1995! Complete with visitor counters, under construction banners, and web-safe colors! 🌐💾
          </div>
        </div>
        
        {/* Classic 90s elements */}
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            {['🌟', '✨', '💫', '🔥'].map((symbol, i) => (
              <div 
                key={i} 
                className="text-sm font-bold retro-bounce" 
                style={{
                  color: ['#ff0000', '#00ff00', '#0000ff', '#ffff00'][i],
                  animationDelay: `${i * 200}ms`,
                  fontFamily: 'MS Sans Serif, sans-serif',
                  textShadow: '1px 1px 0px #000'
                }}
              >
                {symbol}
              </div>
            ))}
          </div>
          <div 
            className="text-xs text-gray-600 font-bold" 
            style={{ 
              fontFamily: 'Courier New, monospace'
            }}
          >
            EST. 1995
          </div>
        </div>

        {/* Retro window controls */}
        <div className="absolute top-1 right-1 flex gap-1">
          <div style={{
            width: '12px',
            height: '11px',
            background: '#c0c0c0',
            border: '1px outset #c0c0c0',
            fontSize: '8px',
            textAlign: 'center',
            lineHeight: '9px'
          }}>_</div>
          <div style={{
            width: '12px',
            height: '11px',
            background: '#c0c0c0',
            border: '1px outset #c0c0c0',
            fontSize: '8px',
            textAlign: 'center',
            lineHeight: '9px'
          }}>□</div>
        </div>

        {/* Animated border decoration */}
        <div className="rainbow-border"></div>
      </div>

      <style jsx>{`
        .retro-toast {
          position: relative;
          animation: retro-window-open 0.5s ease-out;
          image-rendering: pixelated;
        }

        .retro-blink {
          animation: retro-text-blink 1s infinite;
        }

        .retro-bounce {
          animation: retro-element-bounce 1.5s ease-in-out infinite;
        }

        .rainbow-border {
          position: absolute;
          bottom: -3px;
          left: -3px;
          right: -3px;
          height: 3px;
          background: linear-gradient(90deg, 
            #ff0000 0%, 
            #ff8000 14%, 
            #ffff00 28%, 
            #00ff00 42%, 
            #00ffff 56%, 
            #0000ff 70%, 
            #8000ff 84%, 
            #ff0000 100%);
          animation: rainbow-scroll 2s linear infinite;
        }

        @keyframes retro-window-open {
          0% {
            transform: scale(0) rotate(5deg);
            opacity: 0;
          }
          50% {
            transform: scale(1.1) rotate(-2deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }

        @keyframes retro-text-blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0.3; }
        }

        @keyframes retro-element-bounce {
          0%, 100% { 
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
          50% { 
            transform: scale(1.3) rotate(10deg);
            opacity: 0.8;
          }
        }

        @keyframes rainbow-scroll {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .animate-retro-slide-in {
          animation: retro-slide-in 0.8s ease-out;
        }

        @keyframes retro-slide-in {
          0% {
            transform: translateX(100%) translateY(-30px) scale(0.8);
            opacity: 0;
          }
          100% {
            transform: translateX(0) translateY(0) scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}