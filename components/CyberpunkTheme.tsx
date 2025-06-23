"use client";

import { useEffect, useState } from 'react';

interface CyberpunkThemeProps {
  isActive: boolean;
}

export default function CyberpunkTheme({ isActive }: CyberpunkThemeProps) {
  const [digitalParticles, setDigitalParticles] = useState<Array<{ id: number; x: number; y: number; delay: number; char: string; color: string }>>([]);

  // Generate random digital particles
  useEffect(() => {
    if (isActive) {
      const chars = ['0', '1', '█', '▓', '▒', '░', '◆', '◇', '●', '○', '▲', '△'];
      const colors = ['#00ffff', '#ff00ff', '#00ff00', '#ffff00', '#ff0080'];
      const newParticles = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 3,
        char: chars[Math.floor(Math.random() * chars.length)],
        color: colors[Math.floor(Math.random() * colors.length)]
      }));
      setDigitalParticles(newParticles);
    }
  }, [isActive]);

  // Apply theme styles
  useEffect(() => {
    if (isActive) {
      const body = document.body;
      const root = document.documentElement;
      
      // Remove existing theme classes
      body.className = body.className.replace(/theme-\w+/g, '');
      body.classList.add('theme-cyberpunk');
      
      // Apply CSS variables
      root.style.setProperty('--theme-bg-primary', '#0a0014');
      root.style.setProperty('--theme-bg-secondary', '#1a0028');
      root.style.setProperty('--theme-text-primary', '#00ffff');
      root.style.setProperty('--theme-text-secondary', '#ff00ff');
      root.style.setProperty('--theme-border', '#00ff00');
      root.style.setProperty('--theme-accent', '#ffff00');
    }
  }, [isActive]);

  if (!isActive) return null;

  return (
    <>
      {/* Load Cyberpunk Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;600;700&family=Share+Tech+Mono&display=swap"
        rel="stylesheet"
      />

      {/* Digital Particles */}
      <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
        {digitalParticles.map((particle) => (
          <div
            key={particle.id}
            className="digital-particle absolute text-2xl font-mono font-bold"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              color: particle.color,
              animationDelay: `${particle.delay}s`,
              textShadow: `0 0 10px ${particle.color}, 0 0 20px ${particle.color}, 0 0 30px ${particle.color}`
            }}
          >
            {particle.char}
          </div>
        ))}
      </div>

      {/* Scan Lines Overlay */}
      <div className="fixed inset-0 pointer-events-none z-15 scan-lines"></div>

      {/* Cyberpunk Theme Styles */}
      <style jsx global>{`
        /* Digital Particles Animation */
        .digital-particle {
          animation: digital-float 4s ease-in-out infinite, glitch-flicker 2s infinite;
          opacity: 0.8;
        }

        @keyframes digital-float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg) scale(1);
            opacity: 0.8;
          }
          25% {
            transform: translateY(-20px) rotate(90deg) scale(1.2);
            opacity: 1;
          }
          50% {
            transform: translateY(10px) rotate(180deg) scale(0.8);
            opacity: 0.6;
          }
          75% {
            transform: translateY(-10px) rotate(270deg) scale(1.1);
            opacity: 0.9;
          }
        }

        @keyframes glitch-flicker {
          0%, 100% { opacity: 0.8; }
          2% { opacity: 1; }
          4% { opacity: 0.3; }
          6% { opacity: 1; }
          8% { opacity: 0.8; }
        }

        /* Scan Lines Effect */
        .scan-lines {
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 255, 255, 0.03) 2px,
            rgba(0, 255, 255, 0.03) 4px
          );
          animation: scan-line-move 2s linear infinite;
        }

        @keyframes scan-line-move {
          0% { transform: translateY(0px); }
          100% { transform: translateY(4px); }
        }

        /* Cyberpunk Carnival Theme Styles */
        .theme-cyberpunk {
          background: #0a0014 !important;
          color: #00ffff !important;
          font-family: 'Rajdhani', sans-serif !important;
        }
        
        .theme-cyberpunk * {
          color: #00ffff !important;
        }
        
        .theme-cyberpunk main {
          background: linear-gradient(135deg, #0a0014 0%, #1a0028 50%, #0a0014 100%) !important;
          position: relative;
        }

        /* Cyberpunk fonts for headers */
        .theme-cyberpunk h1, 
        .theme-cyberpunk h2, 
        .theme-cyberpunk h3,
        .theme-cyberpunk .heading {
          font-family: 'Orbitron', 'Rajdhani', monospace !important;
          color: #fff !important;
          text-shadow: 
            0 0 5px #00ffff,
            0 0 10px #00ffff,
            0 0 15px #00ffff,
            0 0 20px #ff00ff,
            0 0 35px #ff00ff !important;
          font-weight: 900 !important;
          text-transform: uppercase !important;
          letter-spacing: 4px !important;
          animation: hologram-flicker 3s ease-in-out infinite;
        }
        
        @keyframes hologram-flicker {
          0%, 100% { 
            text-shadow: 
              0 0 5px #00ffff,
              0 0 10px #00ffff,
              0 0 15px #00ffff,
              0 0 20px #ff00ff,
              0 0 35px #ff00ff;
          }
          25% { 
            text-shadow: 
              0 0 5px #ff00ff,
              0 0 10px #ff00ff,
              0 0 15px #ff00ff,
              0 0 20px #00ffff,
              0 0 35px #00ffff;
          }
          50% { 
            text-shadow: 
              0 0 5px #00ff00,
              0 0 10px #00ff00,
              0 0 15px #00ff00,
              0 0 20px #ffff00,
              0 0 35px #ffff00;
          }
        }
        
        /* Navigation styling */
        .theme-cyberpunk nav > div {
          background: linear-gradient(45deg, 
            rgba(0, 255, 255, 0.1) 0%, 
            rgba(255, 0, 255, 0.1) 50%, 
            rgba(0, 255, 255, 0.1) 100%) !important;
          border: 2px solid #00ffff !important;
          border-radius: 0px !important;
          box-shadow: 
            0 0 20px rgba(0, 255, 255, 0.5),
            inset 0 0 20px rgba(255, 0, 255, 0.1) !important;
          backdrop-filter: blur(10px) saturate(200%) !important;
        }
        
        .theme-cyberpunk nav a {
          color: #00ffff !important;
          font-weight: 600 !important;
          text-transform: uppercase !important;
          letter-spacing: 2px !important;
          font-family: 'Share Tech Mono', monospace !important;
          text-shadow: 0 0 10px currentColor !important;
          transition: all 0.3s ease !important;
        }
        
        .theme-cyberpunk nav a:hover {
          color: #ff00ff !important;
          text-shadow: 0 0 15px currentColor !important;
          animation: text-glitch 0.5s ease-in-out !important;
        }
        
        @keyframes text-glitch {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-2px); }
          40% { transform: translateX(2px); }
          60% { transform: translateX(-1px); }
          80% { transform: translateX(1px); }
        }
        
        .theme-cyberpunk nav button {
          background: linear-gradient(45deg, #ff00ff, #00ffff) !important;
          color: #000 !important;
          border: 2px solid #00ff00 !important;
          border-radius: 0px !important;
          font-weight: bold !important;
          font-family: 'Orbitron', monospace !important;
          box-shadow: 
            0 0 15px rgba(0, 255, 255, 0.7),
            inset 0 0 15px rgba(255, 0, 255, 0.3) !important;
          text-shadow: 0 0 5px #000 !important;
        }
        
        .theme-cyberpunk nav button:hover {
          background: linear-gradient(45deg, #00ffff, #ff00ff) !important;
          box-shadow: 
            0 0 25px rgba(255, 0, 255, 0.9),
            inset 0 0 25px rgba(0, 255, 255, 0.3) !important;
          animation: carnival-spin 0.6s ease-in-out !important;
        }
        
        @keyframes carnival-spin {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.05); }
          100% { transform: rotate(360deg) scale(1); }
        }
        
        /* Dropdown styling */
        .theme-cyberpunk nav button + div {
          background: linear-gradient(135deg, 
            rgba(10, 0, 20, 0.95) 0%, 
            rgba(26, 0, 40, 0.95) 100%) !important;
          border: 2px solid #ff00ff !important;
          border-radius: 0px !important;
          box-shadow: 
            0 0 30px rgba(255, 0, 255, 0.6),
            inset 0 0 30px rgba(0, 255, 255, 0.1) !important;
          backdrop-filter: blur(15px) saturate(200%) !important;
        }
        
        .theme-cyberpunk nav button + div button {
          background: transparent !important;
          border: 1px solid transparent !important;
          box-shadow: none !important;
          color: #00ffff !important;
          font-family: 'Share Tech Mono', monospace !important;
        }
        
        .theme-cyberpunk nav button + div button:hover {
          background: linear-gradient(90deg, 
            rgba(0, 255, 255, 0.2) 0%, 
            rgba(255, 0, 255, 0.2) 100%) !important;
          border: 1px solid #00ffff !important;
          color: #ff00ff !important;
          box-shadow: 0 0 10px rgba(0, 255, 255, 0.5) !important;
          animation: none !important;
        }
        
        /* Cards and components */
        .theme-cyberpunk .glass-card,
        .theme-cyberpunk [class*="bg-white"],
        .theme-cyberpunk [class*="backdrop-blur"] {
          background: linear-gradient(135deg, 
            rgba(0, 255, 255, 0.1) 0%, 
            rgba(255, 0, 255, 0.05) 50%, 
            rgba(0, 255, 0, 0.1) 100%) !important;
          border: 2px solid #00ffff !important;
          border-radius: 0px !important;
          box-shadow: 
            0 0 20px rgba(0, 255, 255, 0.3),
            inset 0 0 20px rgba(255, 0, 255, 0.1) !important;
          backdrop-filter: blur(10px) saturate(150%) !important;
        }
        
        .theme-cyberpunk .glass-card:hover {
          border-color: #ff00ff !important;
          box-shadow: 
            0 0 30px rgba(255, 0, 255, 0.6),
            inset 0 0 30px rgba(0, 255, 255, 0.2) !important;
          animation: cyber-pulse 1s ease-in-out !important;
        }
        
        @keyframes cyber-pulse {
          0%, 100% { 
            transform: scale(1) rotate(0deg); 
            filter: hue-rotate(0deg);
          }
          25% { 
            transform: scale(1.02) rotate(1deg); 
            filter: hue-rotate(90deg);
          }
          50% { 
            transform: scale(1.05) rotate(0deg); 
            filter: hue-rotate(180deg);
          }
          75% { 
            transform: scale(1.02) rotate(-1deg); 
            filter: hue-rotate(270deg);
          }
        }
        
        /* Secret menu styling */
        .theme-cyberpunk .fixed.inset-0.bg-black\\/60 {
          background: linear-gradient(45deg, 
            rgba(10, 0, 20, 0.9) 0%, 
            rgba(26, 0, 40, 0.9) 100%) !important;
        }
        
        .theme-cyberpunk .fixed.inset-0.bg-black\\/60 > div > div {
          background: linear-gradient(135deg, 
            rgba(0, 255, 255, 0.1) 0%, 
            rgba(255, 0, 255, 0.1) 50%, 
            rgba(0, 255, 0, 0.1) 100%) !important;
          border: 3px solid #00ffff !important;
          border-radius: 0px !important;
          box-shadow: 
            0 0 40px rgba(0, 255, 255, 0.7),
            inset 0 0 40px rgba(255, 0, 255, 0.2) !important;
        }
        
        .theme-cyberpunk .fixed.inset-0.bg-black\\/60 h1,
        .theme-cyberpunk .fixed.inset-0.bg-black\\/60 h2 {
          animation: carnival-lights 2s ease-in-out infinite !important;
        }
        
        @keyframes carnival-lights {
          0%, 100% { 
            text-shadow: 
              0 0 5px #00ffff,
              0 0 10px #00ffff,
              0 0 15px #ff00ff,
              0 0 20px #ff00ff;
          }
          33% { 
            text-shadow: 
              0 0 5px #ff00ff,
              0 0 10px #ff00ff,
              0 0 15px #00ff00,
              0 0 20px #00ff00;
          }
          66% { 
            text-shadow: 
              0 0 5px #00ff00,
              0 0 10px #00ff00,
              0 0 15px #ffff00,
              0 0 20px #ffff00;
          }
        }
        
        .theme-cyberpunk .fixed.inset-0.bg-black\\/60 [class*="bg-white\\/5"] {
          background: linear-gradient(45deg, 
            rgba(0, 255, 255, 0.15) 0%, 
            rgba(255, 0, 255, 0.15) 100%) !important;
          border: 2px solid #00ff00 !important;
          border-radius: 0px !important;
          box-shadow: 
            0 0 15px rgba(0, 255, 0, 0.5),
            inset 0 0 15px rgba(0, 255, 255, 0.1) !important;
        }
        
        .theme-cyberpunk .fixed.inset-0.bg-black\\/60 [class*="bg-white\\/5"]:hover {
          background: linear-gradient(45deg, 
            rgba(255, 0, 255, 0.25) 0%, 
            rgba(0, 255, 255, 0.25) 100%) !important;
          border-color: #ff00ff !important;
          box-shadow: 
            0 0 25px rgba(255, 0, 255, 0.7),
            inset 0 0 25px rgba(0, 255, 255, 0.2) !important;
          animation: cyber-carnival-hover 0.8s ease-in-out !important;
        }
        
        @keyframes cyber-carnival-hover {
          0%, 100% { transform: scale(1) rotate(0deg); }
          25% { transform: scale(1.05) rotate(2deg); }
          50% { transform: scale(1.1) rotate(0deg); }
          75% { transform: scale(1.05) rotate(-2deg); }
        }

        /* Button styling */
        .theme-cyberpunk button {
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
          font-family: 'Orbitron', monospace !important;
        }
        
        .theme-cyberpunk button:active {
          transform: scale(0.98) !important;
          filter: brightness(1.2) !important;
        }

        /* Text effects */
        .theme-cyberpunk p,
        .theme-cyberpunk div {
          font-family: 'Rajdhani', sans-serif !important;
        }

        /* Matrix rain background effect */
        .theme-cyberpunk::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(2px 2px at 20px 30px, #00ffff, transparent),
            radial-gradient(2px 2px at 40px 70px, #ff00ff, transparent),
            radial-gradient(1px 1px at 90px 40px, #00ff00, transparent),
            radial-gradient(1px 1px at 130px 80px, #ffff00, transparent);
          background-repeat: repeat;
          background-size: 200px 200px;
          animation: matrix-rain 20s linear infinite;
          opacity: 0.1;
          pointer-events: none;
          z-index: 1;
        }

        @keyframes matrix-rain {
          0% { transform: translateY(-200px); }
          100% { transform: translateY(calc(100vh + 200px)); }
        }
      `}</style>
    </>
  );
}