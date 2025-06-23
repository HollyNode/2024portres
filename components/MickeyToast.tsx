"use client";

interface MickeyToastProps {
  onClose: () => void;
}

export default function MickeyToast({ onClose }: MickeyToastProps) {
  return (
    <div className="fixed top-6 right-6 z-40 animate-slide-in">
      <div 
        className="bg-white border-4 border-black rounded-3xl p-4 shadow-lg max-w-xs speech-bubble" 
        style={{ boxShadow: '8px 8px 0px #000' }}
      >
        {/* Mickey-style header */}
        <div className="flex items-center gap-3 mb-3">
          {/* Mickey ears icon */}
          <div className="relative w-10 h-10">
            <div className="w-6 h-6 bg-black rounded-full absolute top-0 left-0 animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-6 h-6 bg-black rounded-full absolute top-0 right-0 animate-bounce" style={{animationDelay: '0.3s'}}></div>
            <div className="w-8 h-8 bg-black rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-1 bg-white rounded-full absolute bottom-2 left-1/2 transform -translate-x-1/2"></div>
            <div className="w-1 h-1 bg-white rounded-full absolute bottom-3 left-4"></div>
            <div className="w-1 h-1 bg-white rounded-full absolute bottom-3 right-4"></div>
          </div>
          
          <div className="flex-1">
            <div 
              className="text-black font-bold text-sm tracking-wider" 
              style={{ 
                fontFamily: 'Mickey, Cooper Black, Arial Black, sans-serif',
                textShadow: '1px 1px 0px #ccc'
              }}
            >
              HOT DOG!
            </div>
          </div>
          
          <button 
            onClick={onClose}
            className="text-black hover:text-gray-600 text-lg font-bold transition-all hover:scale-110"
          >
            ×
          </button>
        </div>
        
        {/* Message */}
        <div className="text-black text-sm mb-3" style={{ fontFamily: 'Times New Roman, serif' }}>
          <div className="font-bold mb-1">
            Welcome to the <span className="text-lg font-black">STEAMBOAT WILLIE</span> era!
          </div>
          <div className="text-xs italic text-gray-700">
            &ldquo;That&apos;s all folks!&rdquo; - 1928 animation style ♪
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            {['♪', '♫', '♬'].map((note, i) => (
              <div 
                key={i} 
                className="text-lg text-black font-bold animate-bounce" 
                style={{
                  animationDelay: `${i * 300}ms`,
                  textShadow: '1px 1px 0px #fff'
                }}
              >
                {note}
              </div>
            ))}
          </div>
          <div 
            className="text-xs text-black font-bold" 
            style={{ fontFamily: 'Times New Roman, serif' }}
          >
            EST. 1928
          </div>
        </div>

        {/* Speech bubble tail */}
        <div 
          className="absolute -bottom-2 left-8 w-0 h-0"
          style={{
            borderLeft: '12px solid transparent',
            borderRight: '12px solid transparent', 
            borderTop: '12px solid #fff',
            filter: 'drop-shadow(2px 2px 0px #000)'
          }}
        ></div>
      </div>

      <style jsx>{`
        .speech-bubble {
          position: relative;
          animation: speech-bubble-pop 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        @keyframes speech-bubble-pop {
          0% {
            transform: scale(0) rotate(-5deg);
            opacity: 0;
          }
          50% {
            transform: scale(1.1) rotate(2deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }

        .animate-slide-in {
          animation: slide-in 0.8s ease-out;
        }

        @keyframes slide-in {
          0% {
            transform: translateX(100%) translateY(20px) rotate(10deg);
            opacity: 0;
          }
          100% {
            transform: translateX(0) translateY(0) rotate(0deg);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}