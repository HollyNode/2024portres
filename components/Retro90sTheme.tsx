"use client";

import { useEffect, useState } from 'react';

interface Retro90sThemeProps {
  isActive: boolean;
}

export default function Retro90sTheme({ isActive }: Retro90sThemeProps) {
  const [visitorCount, setVisitorCount] = useState(0);
  const [floatingElements, setFloatingElements] = useState<Array<{ id: number; x: number; y: number; element: string; speed: number }>>([]);

  // Generate classic 90s floating elements
  useEffect(() => {
    if (isActive) {
      const elements = ['✨', '🌟', '💫', '⭐', '🔥', '💎', '🚀', '📧', '@', '🎵'];
      const newElements = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        element: elements[Math.floor(Math.random() * elements.length)],
        speed: Math.random() * 3 + 1
      }));
      setFloatingElements(newElements);

      // Simulate visitor counter
      const count = Math.floor(Math.random() * 999999) + 100000;
      setVisitorCount(count);
    }
  }, [isActive]);

  // Apply theme styles
  useEffect(() => {
    if (isActive) {
      const body = document.body;
      const root = document.documentElement;
      
      // Remove existing theme classes
      body.className = body.className.replace(/theme-\w+/g, '');
      body.classList.add('theme-retro90s');
      
      // Apply CSS variables
      root.style.setProperty('--theme-bg-primary', '#c0c0c0');
      root.style.setProperty('--theme-bg-secondary', '#ffffff');
      root.style.setProperty('--theme-text-primary', '#000000');
      root.style.setProperty('--theme-text-secondary', '#0000ff');
      root.style.setProperty('--theme-border', '#808080');
      root.style.setProperty('--theme-accent', '#ff00ff');
    }
  }, [isActive]);

  if (!isActive) return null;

  return (
    <>
      {/* 90s Floating Elements */}
      <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="retro-float absolute text-xl"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              animationDuration: `${element.speed}s`,
              color: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'][element.id % 6]
            }}
          >
            {element.element}
          </div>
        ))}
      </div>

      {/* Visitor Counter */}
      <div className="fixed bottom-4 left-4 z-30 visitor-counter">
        <div className="retro-counter-box">
          <div className="counter-text">You are visitor #</div>
          <div className="counter-number">{visitorCount.toLocaleString()}</div>
          <div className="counter-subtext">Since 1995!</div>
        </div>
      </div>

      {/* Under Construction Banner */}
      <div className="fixed top-20 right-4 z-30 construction-banner">
        <div className="construction-box">
          <div className="construction-text">🚧 UNDER CONSTRUCTION 🚧</div>
          <div className="construction-blink">✨ Always Updating! ✨</div>
        </div>
      </div>

      {/* Best Viewed In Badge */}
      <div className="fixed bottom-4 right-4 z-30 browser-badge">
        <div className="badge-box">
          <div className="badge-text">Best viewed in</div>
          <div className="badge-browser">Netscape Navigator 4.0</div>
          <div className="badge-resolution">800x600</div>
        </div>
      </div>

      {/* Web 1.0 Retro 90s Styles */}
      <style jsx global>{`
        /* 90s Floating Elements */
        .retro-float {
          animation: retro-float 8s linear infinite;
          font-family: 'MS Sans Serif', sans-serif;
          text-shadow: 1px 1px 0px #000;
          image-rendering: pixelated;
        }

        @keyframes retro-float {
          0% {
            transform: translateY(100vh) rotate(0deg);
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
          }
        }

        /* Visitor Counter */
        .visitor-counter {
          font-family: 'MS Sans Serif', sans-serif;
        }

        .retro-counter-box {
          background: #c0c0c0;
          border: 3px outset #c0c0c0;
          padding: 8px;
          font-size: 12px;
          box-shadow: 2px 2px 4px #808080;
        }

        .counter-text {
          color: #000;
          font-weight: bold;
        }

        .counter-number {
          color: #ff0000;
          font-weight: bold;
          font-size: 16px;
          font-family: 'Courier New', monospace;
          animation: counter-blink 1s infinite;
        }

        .counter-subtext {
          color: #0000ff;
          font-size: 10px;
        }

        @keyframes counter-blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0.5; }
        }

        /* Construction Banner */
        .construction-banner {
          font-family: 'MS Sans Serif', sans-serif;
        }

        .construction-box {
          background: linear-gradient(45deg, #ffff00 25%, #ff0000 25%, #ff0000 50%, #ffff00 50%, #ffff00 75%, #ff0000 75%);
          background-size: 20px 20px;
          border: 3px solid #000;
          padding: 8px;
          animation: construction-flash 2s infinite;
        }

        .construction-text {
          color: #000;
          font-weight: bold;
          font-size: 12px;
          text-align: center;
        }

        .construction-blink {
          color: #0000ff;
          font-size: 10px;
          text-align: center;
          animation: text-blink 1s infinite;
        }

        @keyframes construction-flash {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.3); }
        }

        @keyframes text-blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        /* Browser Badge */
        .browser-badge {
          font-family: 'MS Sans Serif', sans-serif;
        }

        .badge-box {
          background: #ffffff;
          border: 2px inset #c0c0c0;
          padding: 6px;
          font-size: 10px;
          box-shadow: 1px 1px 2px #808080;
        }

        .badge-text {
          color: #000;
        }

        .badge-browser {
          color: #0000ff;
          font-weight: bold;
        }

        .badge-resolution {
          color: #008000;
        }

        /* Web 1.0 Retro 90s Theme Styles */
        .theme-retro90s {
          background: #c0c0c0 !important;
          color: #000 !important;
          font-family: 'MS Sans Serif', sans-serif !important;
          image-rendering: pixelated !important;
        }
        
        .theme-retro90s * {
          color: #000 !important;
          image-rendering: pixelated !important;
        }
        
        .theme-retro90s main {
          background: linear-gradient(45deg, #c0c0c0 25%, #d0d0d0 25%, #d0d0d0 50%, #c0c0c0 50%, #c0c0c0 75%, #d0d0d0 75%) !important;
          background-size: 4px 4px;
        }

        /* 90s fonts for headers */
        .theme-retro90s h1, 
        .theme-retro90s h2, 
        .theme-retro90s h3,
        .theme-retro90s .heading {
          font-family: 'Comic Sans MS', 'MS Sans Serif', cursive !important;
          color: #0000ff !important;
          text-shadow: 
            1px 1px 0px #ff00ff,
            2px 2px 0px #00ff00,
            3px 3px 0px #ffff00 !important;
          font-weight: bold !important;
          text-transform: uppercase !important;
          letter-spacing: 2px !important;
          animation: retro-text-glow 3s ease-in-out infinite;
        }
        
        @keyframes retro-text-glow {
          0%, 100% { 
            text-shadow: 
              1px 1px 0px #ff00ff,
              2px 2px 0px #00ff00,
              3px 3px 0px #ffff00;
          }
          33% { 
            text-shadow: 
              1px 1px 0px #00ff00,
              2px 2px 0px #ffff00,
              3px 3px 0px #ff00ff;
          }
          66% { 
            text-shadow: 
              1px 1px 0px #ffff00,
              2px 2px 0px #ff00ff,
              3px 3px 0px #00ff00;
          }
        }
        
        /* Navigation styling */
        .theme-retro90s nav > div {
          background: #c0c0c0 !important;
          border: 3px outset #c0c0c0 !important;
          border-radius: 0px !important;
          box-shadow: 2px 2px 4px #808080 !important;
          backdrop-filter: none !important;
        }
        
        .theme-retro90s nav a {
          color: #0000ff !important;
          font-weight: bold !important;
          text-transform: uppercase !important;
          letter-spacing: 1px !important;
          font-family: 'MS Sans Serif', sans-serif !important;
          text-decoration: underline !important;
          transition: all 0.1s ease !important;
        }
        
        .theme-retro90s nav a:hover {
          color: #ff00ff !important;
          background: #ffff00 !important;
          text-decoration: none !important;
          animation: retro-link-flash 0.5s ease-in-out !important;
        }
        
        @keyframes retro-link-flash {
          0%, 100% { background: #ffff00; }
          50% { background: #00ff00; }
        }
        
        .theme-retro90s nav button {
          background: linear-gradient(to bottom, #ffffff 0%, #c0c0c0 100%) !important;
          color: #000 !important;
          border: 2px outset #c0c0c0 !important;
          border-radius: 0px !important;
          font-weight: bold !important;
          font-family: 'MS Sans Serif', sans-serif !important;
          box-shadow: 1px 1px 2px #808080 !important;
          text-transform: uppercase !important;
          padding: 4px 8px !important;
        }
        
        .theme-retro90s nav button:hover {
          background: linear-gradient(to bottom, #ffff00 0%, #ff00ff 100%) !important;
          border: 2px inset #c0c0c0 !important;
          animation: retro-button-press 0.2s ease-in-out !important;
        }
        
        .theme-retro90s nav button:active {
          border: 2px inset #c0c0c0 !important;
          background: #808080 !important;
        }
        
        @keyframes retro-button-press {
          0% { transform: scale(1); }
          50% { transform: scale(0.95); }
          100% { transform: scale(1); }
        }
        
        /* Dropdown styling */
        .theme-retro90s nav button + div {
          background: #ffffff !important;
          border: 3px outset #c0c0c0 !important;
          border-radius: 0px !important;
          box-shadow: 3px 3px 6px #808080 !important;
          backdrop-filter: none !important;
        }
        
        .theme-retro90s nav button + div button {
          background: transparent !important;
          border: 1px solid transparent !important;
          box-shadow: none !important;
          color: #0000ff !important;
          font-family: 'MS Sans Serif', sans-serif !important;
          text-decoration: underline !important;
        }
        
        .theme-retro90s nav button + div button:hover {
          background: #0000ff !important;
          color: #ffffff !important;
          text-decoration: none !important;
          border: 1px solid #000080 !important;
          animation: none !important;
        }
        
        /* Cards and components */
        .theme-retro90s .glass-card,
        .theme-retro90s [class*="bg-white"],
        .theme-retro90s [class*="backdrop-blur"] {
          background: #ffffff !important;
          border: 3px outset #c0c0c0 !important;
          border-radius: 0px !important;
          box-shadow: 2px 2px 4px #808080 !important;
          backdrop-filter: none !important;
          position: relative;
        }

        .theme-retro90s .glass-card::before,
        .theme-retro90s [class*="bg-white"]::before,
        .theme-retro90s [class*="backdrop-blur"]::before {
          content: '';
          position: absolute;
          top: 2px;
          left: 2px;
          right: 4px;
          bottom: 4px;
          border: 1px solid #808080;
          pointer-events: none;
        }
        
        .theme-retro90s .glass-card:hover {
          border: 3px inset #c0c0c0 !important;
          box-shadow: inset 1px 1px 2px #808080 !important;
          animation: retro-card-press 0.3s ease-in-out !important;
        }
        
        @keyframes retro-card-press {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(0.98); }
        }
        
        /* Secret menu styling */
        .theme-retro90s .fixed.inset-0.bg-black\\/60 {
          background: 
            radial-gradient(circle, #c0c0c0 20%, #808080 20%, #808080 40%, #c0c0c0 40%, #c0c0c0 60%, #808080 60%, #808080 80%, #c0c0c0 80%),
            linear-gradient(45deg, #ffffff 25%, transparent 25%, transparent 75%, #ffffff 75%) !important;
          background-size: 20px 20px, 4px 4px;
          animation: retro-pattern-scroll 10s linear infinite;
        }

        @keyframes retro-pattern-scroll {
          0% { background-position: 0px 0px, 0px 0px; }
          100% { background-position: 20px 20px, 4px 4px; }
        }
        
        .theme-retro90s .fixed.inset-0.bg-black\\/60 > div > div {
          background: #ffffff !important;
          border: 4px outset #c0c0c0 !important;
          border-radius: 0px !important;
          box-shadow: 4px 4px 8px #808080 !important;
        }
        
        .theme-retro90s .fixed.inset-0.bg-black\\/60 h1,
        .theme-retro90s .fixed.inset-0.bg-black\\/60 h2 {
          animation: retro-rainbow-text 2s ease-in-out infinite !important;
        }
        
        @keyframes retro-rainbow-text {
          0% { color: #ff0000 !important; }
          16% { color: #ff8000 !important; }
          33% { color: #ffff00 !important; }
          50% { color: #00ff00 !important; }
          66% { color: #0080ff !important; }
          83% { color: #8000ff !important; }
          100% { color: #ff0000 !important; }
        }
        
        .theme-retro90s .fixed.inset-0.bg-black\\/60 [class*="bg-white\\/5"] {
          background: #f0f0f0 !important;
          border: 2px outset #c0c0c0 !important;
          border-radius: 0px !important;
          box-shadow: 1px 1px 2px #808080 !important;
        }
        
        .theme-retro90s .fixed.inset-0.bg-black\\/60 [class*="bg-white\\/5"]:hover {
          background: #e0e0e0 !important;
          border: 2px inset #c0c0c0 !important;
          box-shadow: inset 1px 1px 2px #808080 !important;
          animation: retro-click-effect 0.2s ease-in-out !important;
        }
        
        @keyframes retro-click-effect {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(0.95); }
        }

        /* Button styling */
        .theme-retro90s button {
          transition: none !important;
          font-family: 'MS Sans Serif', sans-serif !important;
          image-rendering: pixelated !important;
        }
        
        .theme-retro90s button:active {
          transform: none !important;
          filter: none !important;
        }

        /* Text effects */
        .theme-retro90s p,
        .theme-retro90s div {
          font-family: 'MS Sans Serif', sans-serif !important;
        }

        /* Marquee effect for special elements */
        .theme-retro90s .animate-pulse {
          animation: retro-marquee 5s linear infinite !important;
        }

        @keyframes retro-marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }

        /* Starfield background effect */
        .theme-retro90s::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(1px 1px at 20px 30px, #000, transparent),
            radial-gradient(1px 1px at 40px 70px, #000, transparent),
            radial-gradient(1px 1px at 90px 40px, #000, transparent),
            radial-gradient(1px 1px at 130px 80px, #000, transparent),
            radial-gradient(1px 1px at 160px 30px, #000, transparent);
          background-repeat: repeat;
          background-size: 200px 200px;
          animation: starfield 30s linear infinite;
          opacity: 0.1;
          pointer-events: none;
          z-index: 1;
        }

        @keyframes starfield {
          0% { transform: translateY(0px); }
          100% { transform: translateY(200px); }
        }

        /* Web-safe color palette text */
        .theme-retro90s .text-pink-300 { color: #ff00ff !important; }
        .theme-retro90s .text-orange-300 { color: #ff8000 !important; }
        .theme-retro90s .text-cyan-400 { color: #00ffff !important; }
        .theme-retro90s .text-yellow-400 { color: #ffff00 !important; }
        .theme-retro90s .text-green-400 { color: #00ff00 !important; }
        .theme-retro90s .text-blue-400 { color: #0000ff !important; }
        .theme-retro90s .text-red-500 { color: #ff0000 !important; }
        .theme-retro90s .text-white { color: #000000 !important; }
        .theme-retro90s .text-gray-300 { color: #808080 !important; }
      `}</style>
    </>
  );
}