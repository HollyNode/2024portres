"use client";

import { useEffect, useState } from 'react';

interface MickeyThemeProps {
  isActive: boolean;
}

export default function MickeyTheme({ isActive }: MickeyThemeProps) {
  const [musicNotes, setMusicNotes] = useState<Array<{ id: number; x: number; delay: number; note: string }>>([]);

  // Generate random musical notes
  useEffect(() => {
    if (isActive) {
      const notes = ['♪', '♫', '♬', '♩', '♭', '♯'];
      const newMusicNotes = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        x: Math.random() * 90 + 5, // 5% to 95% of screen width
        delay: Math.random() * 4, // 0 to 4 second delay
        note: notes[Math.floor(Math.random() * notes.length)]
      }));
      setMusicNotes(newMusicNotes);
    }
  }, [isActive]);

  // Apply theme styles
  useEffect(() => {
    if (isActive) {
      const body = document.body;
      const root = document.documentElement;
      
      // Remove existing theme classes
      body.className = body.className.replace(/theme-\w+/g, '');
      body.classList.add('theme-mickey');
      
      // Apply CSS variables
      root.style.setProperty('--theme-bg-primary', '#f5f5f5');
      root.style.setProperty('--theme-bg-secondary', '#ffffff');
      root.style.setProperty('--theme-text-primary', '#000000');
      root.style.setProperty('--theme-text-secondary', '#333333');
      root.style.setProperty('--theme-border', '#000000');
      root.style.setProperty('--theme-accent', '#666666');
    }
  }, [isActive]);

  if (!isActive) return null;

  return (
    <>
      {/* Animated Musical Notes */}
      <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
        {musicNotes.map((note) => (
          <div
            key={note.id}
            className="musical-note absolute text-4xl text-black font-bold"
            style={{
              left: `${note.x}%`,
              animationDelay: `${note.delay}s`,
              textShadow: '2px 2px 0px #fff, -2px -2px 0px #fff, 2px -2px 0px #fff, -2px 2px 0px #fff'
            }}
          >
            {note.note}
          </div>
        ))}
      </div>

      {/* Mickey Theme Styles */}
      <style jsx global>{`
        /* Custom Mickey Font */
        @font-face {
          font-family: 'Mickey';
          src: url('/fonts/MICKEY.TTF') format('truetype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
        
        /* Fallback Mickey-style fonts */
        @font-face {
          font-family: 'MickeyFallback';
          src: local('Cooper Black'), local('Arial Black'), local('Impact');
          font-weight: bold;
          font-style: normal;
        }

        /* Musical Notes Animation */
        .musical-note {
          animation: float-up 6s ease-in-out infinite;
          opacity: 0;
        }

        @keyframes float-up {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
            transform: translateY(50vh) rotate(180deg);
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-20vh) rotate(360deg);
            opacity: 0;
          }
        }

        /* Mickey Mouse 1930s Theme Styles */
        .theme-mickey {
          background: #f5f5f5 !important;
          color: #000 !important;
          font-family: 'Times New Roman', serif !important;
        }
        
        .theme-mickey * {
          color: #000 !important;
        }
        
        .theme-mickey main {
          background: #f5f5f5 !important;
        }

        /* Mickey font for headers */
        .theme-mickey h1, 
        .theme-mickey h2, 
        .theme-mickey h3,
        .theme-mickey .heading {
          font-family: 'Mickey', 'MickeyFallback', 'Cooper Black', 'Arial Black', sans-serif !important;
          color: #fff !important;
          text-shadow: 
            2px 2px 0px #000,
            -2px -2px 0px #000,
            2px -2px 0px #000,
            -2px 2px 0px #000,
            0px 2px 0px #000,
            2px 0px 0px #000,
            0px -2px 0px #000,
            -2px 0px 0px #000 !important;
          font-weight: bold !important;
          text-transform: uppercase !important;
          letter-spacing: 3px !important;
        }
        
        /* Navigation styling */
        .theme-mickey nav > div {
          background: #fff !important;
          border: 4px solid #000 !important;
          border-radius: 50px !important;
          box-shadow: 8px 8px 0px #000 !important;
        }
        
        .theme-mickey nav a {
          color: #000 !important;
          font-weight: bold !important;
          text-transform: uppercase !important;
          letter-spacing: 2px !important;
        }
        
        .theme-mickey nav button {
          background: #000 !important;
          color: #fff !important;
          border: 3px solid #000 !important;
          border-radius: 25px !important;
          font-weight: bold !important;
          box-shadow: 4px 4px 0px #333 !important;
        }
        
        .theme-mickey nav button:hover {
          transform: translate(-2px, -2px) !important;
          box-shadow: 6px 6px 0px #333 !important;
        }
        
        /* Dropdown styling */
        .theme-mickey nav button + div {
          background: #fff !important;
          border: 4px solid #000 !important;
          border-radius: 20px !important;
          box-shadow: 8px 8px 0px #000 !important;
        }
        
        .theme-mickey nav button + div button {
          background: transparent !important;
          border: 2px solid transparent !important;
          box-shadow: none !important;
        }
        
        .theme-mickey nav button + div button:hover {
          background: #f0f0f0 !important;
          border: 2px solid #000 !important;
          transform: none !important;
          box-shadow: 2px 2px 0px #333 !important;
        }
        
        /* Cards and components */
        .theme-mickey .glass-card,
        .theme-mickey [class*="bg-white"],
        .theme-mickey [class*="backdrop-blur"] {
          background: #fff !important;
          border: 4px solid #000 !important;
          border-radius: 30px !important;
          box-shadow: 6px 6px 0px #000 !important;
          backdrop-filter: none !important;
        }
        
        .theme-mickey .glass-card:hover {
          transform: translate(-3px, -3px) scale(1.05) !important;
          box-shadow: 9px 9px 0px #000 !important;
          animation: mickey-bounce 0.6s ease-out !important;
        }
        
        /* Gradients become solid */
        .theme-mickey [class*="gradient"] {
          background: #000 !important;
          color: #fff !important;
        }
        
        .theme-mickey [class*="bg-gradient"] {
          background: #000 !important;
          border: 3px solid #fff !important;
        }
        
        /* Animations */
        @keyframes mickey-bounce {
          0% { transform: translate(-3px, -3px) scale(1.05); }
          25% { transform: translate(-3px, -3px) scale(1.1) rotate(-2deg); }
          50% { transform: translate(-3px, -3px) scale(1.05) rotate(1deg); }
          75% { transform: translate(-3px, -3px) scale(1.08) rotate(-1deg); }
          100% { transform: translate(-3px, -3px) scale(1.05) rotate(0deg); }
        }
        
        @keyframes mickey-wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-2deg); }
          75% { transform: rotate(2deg); }
        }
        
        @keyframes steamboat-chug {
          0%, 100% { transform: translateX(0px); }
          25% { transform: translateX(-2px); }
          50% { transform: translateX(2px); }
          75% { transform: translateX(-1px); }
        }
        
        .theme-mickey .animate-pulse {
          animation: mickey-wiggle 2s ease-in-out infinite !important;
        }
        
        .theme-mickey .animate-bounce {
          animation: mickey-bounce 1s ease-in-out infinite !important;
        }
        
        /* Film grain effect */
        .theme-mickey::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(circle, transparent 20%, rgba(0,0,0,.1) 20%, rgba(0,0,0,.1) 80%, transparent 80%, transparent),
            linear-gradient(0deg, transparent 24%, rgba(0,0,0,.05) 25%, rgba(0,0,0,.05) 26%, transparent 27%, transparent 74%, rgba(0,0,0,.05) 75%, rgba(0,0,0,.05) 76%, transparent 77%, transparent);
          background-size: 3px 3px;
          opacity: 0.3;
          pointer-events: none;
          z-index: 1;
        }
        
        /* Film strip borders */
        .theme-mickey::after {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 30px;
          height: 100%;
          background: repeating-linear-gradient(
            to bottom,
            #000 0px,
            #000 20px,
            transparent 20px,
            transparent 30px
          );
          pointer-events: none;
          z-index: 10;
        }
        
        /* Secret menu styling */
        .theme-mickey .fixed.inset-0.bg-black\\/60 {
          background: rgba(255, 255, 255, 0.9) !important;
        }
        
        .theme-mickey .fixed.inset-0.bg-black\\/60 > div > div {
          background: #fff !important;
          border: 6px solid #000 !important;
          border-radius: 50px !important;
          box-shadow: 12px 12px 0px #000 !important;
        }
        
        .theme-mickey .fixed.inset-0.bg-black\\/60 [class*="bg-white\\/5"] {
          background: #f8f8f8 !important;
          border: 3px solid #000 !important;
          border-radius: 25px !important;
          box-shadow: 4px 4px 0px #000 !important;
        }
        
        .theme-mickey .fixed.inset-0.bg-black\\/60 [class*="bg-white\\/5"]:hover {
          background: #e8e8e8 !important;
          transform: translate(-2px, -2px) scale(1.02) !important;
          box-shadow: 6px 6px 0px #000 !important;
        }

        /* Button styling */
        .theme-mickey button {
          transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) !important;
        }
        
        .theme-mickey button:active {
          transform: scale(0.95) !important;
        }
      `}</style>
    </>
  );
}