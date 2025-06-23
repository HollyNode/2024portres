"use client";

import { useEffect, useState } from 'react';

interface TransformersThemeProps {
  isActive: boolean;
}

export default function TransformersTheme({ isActive }: TransformersThemeProps) {
  const [energySparks, setEnergySparks] = useState<Array<{ id: number; x: number; y: number; delay: number; type: string; color: string }>>([]);

  const [isTransforming, setIsTransforming] = useState(false);

  // Generate random energy sparks
  useEffect(() => {
    if (isActive) {
      const sparkTypes = ['⚡', '✦', '◈', '◊', '▲', '●'];
      const colors = ['#FFD700', '#FF4444', '#4488FF', '#FFFFFF', '#FF8800'];
      const newSparks = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        x: Math.random() * 95 + 2.5,
        y: Math.random() * 95 + 2.5,
        delay: Math.random() * 4,
        type: sparkTypes[Math.floor(Math.random() * sparkTypes.length)],
        color: colors[Math.floor(Math.random() * colors.length)]
      }));
      setEnergySparks(newSparks);
    }
  }, [isActive]);

  // Apply theme styles with transformation sequence
  useEffect(() => {
    if (isActive) {
      setIsTransforming(true);
      
      const body = document.body;
      const root = document.documentElement;
      
      // Remove existing theme classes
      body.className = body.className.replace(/theme-\w+/g, '');
      
      // Add transformation effect first
      body.classList.add('theme-transforming');
      
      // Trigger transformation sequence
      setTimeout(() => {
        body.classList.remove('theme-transforming');
        body.classList.add('theme-transformers');
        setIsTransforming(false);
      }, 1500); // Allow time for transformation animation
      
      // Apply CSS variables
      root.style.setProperty('--theme-bg-primary', '#0f172a');
      root.style.setProperty('--theme-bg-secondary', '#1e293b');
      root.style.setProperty('--theme-text-primary', '#ffffff');
      root.style.setProperty('--theme-text-secondary', '#cbd5e1');
      root.style.setProperty('--theme-border', '#ffd700');
      root.style.setProperty('--theme-accent', '#dc2626');
    }
  }, [isActive]);

  if (!isActive) return null;

  return (
    <>
      {/* Load Transformers Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;700;900&family=Michroma:wght@400&family=Audiowide:wght@400&display=swap"
        rel="stylesheet"
      />

      {/* Transformation Sound Wave Visualization */}
      {isTransforming && (
        <div className="fixed inset-0 pointer-events-none z-25 flex items-center justify-center">
          <div className="sound-wave-container">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="sound-wave"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  backgroundColor: ['#ffd700', '#ff4444', '#4488ff', '#ffffff', '#ff8800'][i]
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Transformation Effect Overlay */}
      <div className="fixed inset-0 pointer-events-none z-30 transformation-overlay"></div>

      {/* Energy Sparks */}
      <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
        {energySparks.map((spark) => (
          <div
            key={spark.id}
            className="energy-spark absolute text-xl font-bold"
            style={{
              left: `${spark.x}%`,
              top: `${spark.y}%`,
              color: spark.color,
              animationDelay: `${spark.delay}s`,
              textShadow: `0 0 10px ${spark.color}, 0 0 20px ${spark.color}`,
              filter: `drop-shadow(0 0 5px ${spark.color})`
            }}
          >
            {spark.type}
          </div>
        ))}
      </div>

      {/* Circuit Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none z-15 circuit-grid"></div>

      {/* Transformers Theme Styles */}
      <style jsx global>{`
        /* TRANSFORMATION SOUND WAVE VISUALIZATION */
        
        .sound-wave-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .sound-wave {
          width: 6px;
          height: 60px;
          border-radius: 3px;
          animation: sound-wave-pulse 0.6s ease-in-out infinite alternate;
          box-shadow: 0 0 20px currentColor;
        }

        @keyframes sound-wave-pulse {
          0% {
            height: 20px;
            opacity: 0.5;
          }
          100% {
            height: 100px;
            opacity: 1;
          }
        }

        /* TRANSFORMATION SEQUENCE EFFECTS */
        
        /* Page Transformation Animation */
        .theme-transforming {
          animation: page-transform 1.5s ease-in-out !important;
          overflow: hidden !important;
        }

        .theme-transforming * {
          animation: element-breakdown 1.5s ease-in-out !important;
        }

        .transformation-overlay {
          background: 
            radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.3) 0%, transparent 50%),
            linear-gradient(45deg, 
              rgba(255, 68, 68, 0.1) 0%, 
              transparent 25%, 
              rgba(68, 136, 255, 0.1) 50%, 
              transparent 75%, 
              rgba(255, 215, 0, 0.1) 100%);
          animation: transformation-burst 1.5s ease-out;
          opacity: 0;
        }

        .theme-transforming .transformation-overlay {
          opacity: 1;
        }

        @keyframes page-transform {
          0% {
            transform: scale(1) rotate(0deg);
            filter: brightness(1) contrast(1);
          }
          25% {
            transform: scale(0.8) rotate(-2deg);
            filter: brightness(1.5) contrast(1.2);
          }
          50% {
            transform: scale(0.6) rotate(0deg) skew(5deg, 0deg);
            filter: brightness(2) contrast(1.5) hue-rotate(45deg);
          }
          75% {
            transform: scale(0.8) rotate(2deg) skew(-2deg, 0deg);
            filter: brightness(1.5) contrast(1.2) hue-rotate(0deg);
          }
          100% {
            transform: scale(1) rotate(0deg) skew(0deg, 0deg);
            filter: brightness(1) contrast(1);
          }
        }

        @keyframes element-breakdown {
          0% {
            transform: translateX(0) translateY(0) rotate(0deg) scale(1);
            opacity: 1;
          }
          25% {
            transform: translateX(-5px) translateY(-5px) rotate(-2deg) scale(0.98);
            opacity: 0.8;
          }
          50% {
            transform: translateX(5px) translateY(5px) rotate(2deg) scale(1.02);
            opacity: 0.6;
          }
          75% {
            transform: translateX(-2px) translateY(-2px) rotate(-1deg) scale(0.99);
            opacity: 0.8;
          }
          100% {
            transform: translateX(0) translateY(0) rotate(0deg) scale(1);
            opacity: 1;
          }
        }

        @keyframes transformation-burst {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(2);
            opacity: 1;
          }
          100% {
            transform: scale(4);
            opacity: 0;
          }
        }

        /* ENHANCED HOVER TRANSFORMATIONS */
        
        .theme-transformers .glass-card:hover,
        .theme-transformers [class*="bg-white"]:hover,
        .theme-transformers [class*="backdrop-blur"]:hover {
          animation: mech-transform-advanced 1s ease-in-out !important;
          position: relative;
        }

        .theme-transformers .glass-card:hover::after,
        .theme-transformers [class*="bg-white"]:hover::after,
        .theme-transformers [class*="backdrop-blur"]:hover::after {
          content: '';
          position: absolute;
          inset: 0;
          background: 
            linear-gradient(45deg, transparent 30%, rgba(255, 215, 0, 0.1) 50%, transparent 70%),
            linear-gradient(-45deg, transparent 30%, rgba(255, 68, 68, 0.1) 50%, transparent 70%);
          animation: blueprint-scan 2s ease-in-out infinite;
          pointer-events: none;
          mix-blend-mode: overlay;
        }

        @keyframes mech-transform-advanced {
          0%, 100% { 
            transform: scale(1) rotate(0deg) skew(0deg, 0deg); 
            filter: brightness(1);
          }
          20% { 
            transform: scale(1.02) rotate(1deg) skew(1deg, 0deg); 
            filter: brightness(1.2) hue-rotate(30deg);
          }
          40% { 
            transform: scale(1.05) rotate(0deg) skew(0deg, 1deg); 
            filter: brightness(1.5) hue-rotate(60deg);
          }
          60% { 
            transform: scale(1.03) rotate(-1deg) skew(-1deg, 0deg); 
            filter: brightness(1.3) hue-rotate(30deg);
          }
          80% { 
            transform: scale(1.05) rotate(0deg) skew(0deg, -1deg); 
            filter: brightness(1.4) hue-rotate(0deg);
          }
        }

        @keyframes blueprint-scan {
          0%, 100% {
            transform: translateX(-100%) translateY(-100%);
            opacity: 0;
          }
          50% {
            transform: translateX(100%) translateY(100%);
            opacity: 1;
          }
        }

        /* MECHANICAL SEGMENT EFFECTS */
        
        .theme-transformers nav > div:hover {
          animation: nav-segment-transform 1.2s ease-in-out !important;
          position: relative;
          overflow: visible !important;
        }

        .theme-transformers nav > div:hover::before {
          animation: border-segment-rotate 2s linear infinite !important;
        }

        .theme-transformers nav > div:hover::after {
          content: '';
          position: absolute;
          top: -5px;
          left: -5px;
          right: -5px;
          bottom: -5px;
          border: 2px dashed #ffd700;
          animation: blueprint-outline 3s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes nav-segment-transform {
          0%, 100% {
            transform: scale(1) rotate(0deg);
            box-shadow: 
              0 0 20px rgba(255, 215, 0, 0.4),
              inset 0 0 20px rgba(220, 38, 38, 0.1);
          }
          25% {
            transform: scale(1.05) rotate(1deg);
            box-shadow: 
              0 0 30px rgba(255, 215, 0, 0.6),
              inset 0 0 30px rgba(220, 38, 38, 0.2);
          }
          50% {
            transform: scale(1.08) rotate(0deg);
            box-shadow: 
              0 0 40px rgba(255, 215, 0, 0.8),
              inset 0 0 40px rgba(220, 38, 38, 0.3);
          }
          75% {
            transform: scale(1.05) rotate(-1deg);
            box-shadow: 
              0 0 30px rgba(255, 215, 0, 0.6),
              inset 0 0 30px rgba(220, 38, 38, 0.2);
          }
        }

        @keyframes blueprint-outline {
          0%, 100% {
            opacity: 0.3;
            stroke-dasharray: 5, 15;
            stroke-dashoffset: 0;
          }
          50% {
            opacity: 0.8;
            stroke-dasharray: 15, 5;
            stroke-dashoffset: 20;
          }
        }

        /* TEXT TRANSFORMATION EFFECTS */
        
        .theme-transformers h1, 
        .theme-transformers h2, 
        .theme-transformers h3,
        .theme-transformers .heading {
          position: relative;
          overflow: visible !important;
        }

        .theme-transformers h1:hover, 
        .theme-transformers h2:hover, 
        .theme-transformers h3:hover,
        .theme-transformers .heading:hover {
          animation: text-mech-transform 1s ease-in-out !important;
        }

        .theme-transformers h1:hover::after, 
        .theme-transformers h2:hover::after, 
        .theme-transformers h3:hover::after,
        .theme-transformers .heading:hover::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, #ffd700, #ff4444, #4488ff, #ffd700);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 300% 300%;
          animation: text-transform-glow 2s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes text-mech-transform {
          0%, 100% {
            transform: scale(1) skew(0deg, 0deg);
            letter-spacing: 4px;
          }
          25% {
            transform: scale(1.05) skew(2deg, 0deg);
            letter-spacing: 6px;
          }
          50% {
            transform: scale(1.1) skew(0deg, 1deg);
            letter-spacing: 8px;
          }
          75% {
            transform: scale(1.05) skew(-2deg, 0deg);
            letter-spacing: 6px;
          }
        }

        @keyframes text-transform-glow {
          0%, 100% {
            background-position: 0% 50%;
            opacity: 0.7;
          }
          50% {
            background-position: 100% 50%;
            opacity: 1;
          }
        }

        /* PARTICLE BURST ON THEME ACTIVATION */
        
        .theme-transforming .energy-spark {
          animation: 
            energy-pulse 3s ease-in-out infinite, 
            spark-float 8s linear infinite,
            transformation-burst-particle 1.5s ease-out !important;
        }

        @keyframes transformation-burst-particle {
          0% {
            transform: scale(1) rotate(0deg);
            opacity: 0.9;
          }
          50% {
            transform: scale(3) rotate(180deg);
            opacity: 1;
          }
          100% {
            transform: scale(1) rotate(360deg);
            opacity: 0.9;
          }
        }
        .energy-spark {
          animation: energy-pulse 3s ease-in-out infinite, spark-float 8s linear infinite;
          opacity: 0.9;
        }

        @keyframes energy-pulse {
          0%, 100% {
            transform: scale(1) rotate(0deg);
            opacity: 0.9;
          }
          25% {
            transform: scale(1.5) rotate(90deg);
            opacity: 1;
          }
          50% {
            transform: scale(0.8) rotate(180deg);
            opacity: 0.7;
          }
          75% {
            transform: scale(1.2) rotate(270deg);
            opacity: 1;
          }
        }

        @keyframes spark-float {
          0% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(0px) translateX(20px);
          }
          75% {
            transform: translateY(-10px) translateX(10px);
          }
          100% {
            transform: translateY(0px) translateX(0px);
          }
        }

        /* Circuit Grid Effect */
        .circuit-grid {
          background-image: 
            linear-gradient(rgba(255, 215, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 215, 0, 0.1) 1px, transparent 1px);
          background-size: 30px 30px;
          opacity: 0.3;
        }

        /* 80s Transformers Theme Styles */
        .theme-transformers {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%) !important;
          color: #ffffff !important;
          font-family: 'Exo 2', sans-serif !important;
        }
        
        .theme-transformers * {
          color: #ffffff !important;
        }
        
        .theme-transformers main {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%) !important;
          position: relative;
        }

        /* Transformers fonts for headers */
        .theme-transformers h1, 
        .theme-transformers h2, 
        .theme-transformers h3,
        .theme-transformers .heading {
          font-family: 'Audiowide', 'Michroma', monospace !important;
          color: #ffd700 !important;
          text-shadow: 
            0 0 5px #ffd700,
            0 0 10px #ffd700,
            0 0 15px #ff8800,
            2px 2px 0px #000,
            -2px -2px 0px #000,
            2px -2px 0px #000,
            -2px 2px 0px #000 !important;
          font-weight: 900 !important;
          text-transform: uppercase !important;
          letter-spacing: 4px !important;
          animation: mech-glow 3s ease-in-out infinite;
          background: linear-gradient(45deg, #ffd700, #ff8800, #ffd700);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% 200%;
        }
        
        @keyframes mech-glow {
          0%, 100% { 
            text-shadow: 
              0 0 5px #ffd700,
              0 0 10px #ffd700,
              0 0 15px #ff8800,
              2px 2px 0px #000;
            filter: brightness(1);
          }
          50% { 
            text-shadow: 
              0 0 10px #ffd700,
              0 0 20px #ffd700,
              0 0 30px #ff8800,
              2px 2px 0px #000;
            filter: brightness(1.2);
          }
        }
        
        /* Navigation styling */
        .theme-transformers nav > div {
          background: linear-gradient(135deg, 
            rgba(255, 215, 0, 0.2) 0%, 
            rgba(30, 41, 59, 0.9) 30%, 
            rgba(220, 38, 38, 0.2) 70%, 
            rgba(30, 41, 59, 0.9) 100%) !important;
          border: 3px solid #ffd700 !important;
          border-radius: 0px !important;
          box-shadow: 
            0 0 20px rgba(255, 215, 0, 0.4),
            inset 0 0 20px rgba(220, 38, 38, 0.1),
            0 4px 0px #ff8800,
            0 6px 8px rgba(0, 0, 0, 0.3) !important;
          backdrop-filter: blur(10px) !important;
          position: relative;
        }

        .theme-transformers nav > div::before {
          content: '';
          position: absolute;
          top: -3px;
          left: -3px;
          right: -3px;
          bottom: -3px;
          background: linear-gradient(45deg, #ffd700, #ff4444, #4488ff, #ffd700);
          background-size: 400% 400%;
          animation: border-transform 4s ease infinite;
          z-index: -1;
          border-radius: 0px;
        }

        @keyframes border-transform {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .theme-transformers nav a {
          color: #ffd700 !important;
          font-weight: 700 !important;
          text-transform: uppercase !important;
          letter-spacing: 2px !important;
          font-family: 'Michroma', monospace !important;
          text-shadow: 0 0 10px #ffd700, 2px 2px 0px #000 !important;
          transition: all 0.3s ease !important;
        }
        
        .theme-transformers nav a:hover {
          color: #ff4444 !important;
          text-shadow: 0 0 15px #ff4444, 2px 2px 0px #000 !important;
          animation: mech-shake 0.6s ease-in-out !important;
        }
        
        @keyframes mech-shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-2px) rotate(-1deg); }
          75% { transform: translateX(2px) rotate(1deg); }
        }
        
        .theme-transformers nav button {
          background: linear-gradient(135deg, #ffd700 0%, #ff8800 50%, #ffd700 100%) !important;
          color: #000 !important;
          border: 3px solid #ff4444 !important;
          border-radius: 0px !important;
          font-weight: bold !important;
          font-family: 'Audiowide', monospace !important;
          box-shadow: 
            0 0 15px rgba(255, 68, 68, 0.6),
            inset 0 0 15px rgba(255, 215, 0, 0.3),
            0 4px 0px #cc3333,
            0 6px 8px rgba(0, 0, 0, 0.3) !important;
          text-shadow: 1px 1px 0px #fff !important;
          text-transform: uppercase !important;
          letter-spacing: 1px !important;
        }
        
        .theme-transformers nav button:hover {
          background: linear-gradient(135deg, #ff4444 0%, #dc2626 50%, #ff4444 100%) !important;
          color: #fff !important;
          box-shadow: 
            0 0 25px rgba(255, 215, 0, 0.8),
            inset 0 0 25px rgba(255, 68, 68, 0.3),
            0 6px 0px #b91c1c,
            0 8px 12px rgba(0, 0, 0, 0.4) !important;
          animation: transform-button 0.8s ease-in-out !important;
          text-shadow: 1px 1px 0px #000 !important;
        }
        
        @keyframes transform-button {
          0% { transform: scale(1) rotate(0deg); }
          25% { transform: scale(1.05) rotate(2deg); }
          50% { transform: scale(1.1) rotate(0deg); }
          75% { transform: scale(1.05) rotate(-2deg); }
          100% { transform: scale(1) rotate(0deg); }
        }
        
        /* Dropdown styling */
        .theme-transformers nav button + div {
          background: linear-gradient(135deg, 
            rgba(15, 23, 42, 0.95) 0%, 
            rgba(30, 41, 59, 0.95) 50%,
            rgba(15, 23, 42, 0.95) 100%) !important;
          border: 3px solid #ffd700 !important;
          border-radius: 0px !important;
          box-shadow: 
            0 0 30px rgba(255, 215, 0, 0.6),
            inset 0 0 30px rgba(220, 38, 38, 0.1),
            0 8px 0px #ff8800,
            0 12px 16px rgba(0, 0, 0, 0.4) !important;
          backdrop-filter: blur(15px) !important;
        }
        
        .theme-transformers nav button + div button {
          background: transparent !important;
          border: 2px solid transparent !important;
          box-shadow: none !important;
          color: #ffd700 !important;
          font-family: 'Exo 2', sans-serif !important;
          font-weight: 600 !important;
        }
        
        .theme-transformers nav button + div button:hover {
          background: linear-gradient(90deg, 
            rgba(255, 215, 0, 0.2) 0%, 
            rgba(255, 68, 68, 0.2) 100%) !important;
          border: 2px solid #ff4444 !important;
          color: #ff4444 !important;
          box-shadow: 
            0 0 10px rgba(255, 68, 68, 0.5),
            inset 0 0 10px rgba(255, 215, 0, 0.1) !important;
          animation: none !important;
        }
        
        /* Cards and components */
        .theme-transformers .glass-card,
        .theme-transformers [class*="bg-white"],
        .theme-transformers [class*="backdrop-blur"] {
          background: linear-gradient(135deg, 
            rgba(255, 215, 0, 0.1) 0%, 
            rgba(30, 41, 59, 0.8) 30%, 
            rgba(220, 38, 38, 0.1) 70%, 
            rgba(30, 41, 59, 0.8) 100%) !important;
          border: 3px solid #ffd700 !important;
          border-radius: 0px !important;
          box-shadow: 
            0 0 20px rgba(255, 215, 0, 0.3),
            inset 0 0 20px rgba(220, 38, 38, 0.1),
            0 6px 0px #ff8800,
            0 8px 12px rgba(0, 0, 0, 0.3) !important;
          backdrop-filter: blur(10px) !important;
          position: relative;
        }

        .theme-transformers .glass-card::before,
        .theme-transformers [class*="bg-white"]::before,
        .theme-transformers [class*="backdrop-blur"]::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, 
            transparent 0%, 
            #ffd700 20%, 
            #ff4444 50%, 
            #4488ff 80%, 
            transparent 100%);
          animation: energy-sweep 3s ease-in-out infinite;
        }

        @keyframes energy-sweep {
          0%, 100% { transform: translateX(-100%); opacity: 0; }
          50% { transform: translateX(100%); opacity: 1; }
        }
        
        .theme-transformers .glass-card:hover {
          border-color: #ff4444 !important;
          box-shadow: 
            0 0 30px rgba(255, 68, 68, 0.6),
            inset 0 0 30px rgba(255, 215, 0, 0.2),
            0 8px 0px #cc3333,
            0 12px 16px rgba(0, 0, 0, 0.4) !important;
          animation: mech-transform 1s ease-in-out !important;
        }
        
        @keyframes mech-transform {
          0%, 100% { 
            transform: scale(1) rotate(0deg) skew(0deg); 
          }
          25% { 
            transform: scale(1.02) rotate(1deg) skew(1deg); 
          }
          50% { 
            transform: scale(1.05) rotate(0deg) skew(0deg); 
          }
          75% { 
            transform: scale(1.02) rotate(-1deg) skew(-1deg); 
          }
        }
        
        /* Secret menu styling */
        .theme-transformers .fixed.inset-0.bg-black\\/60 {
          background: linear-gradient(135deg, 
            rgba(15, 23, 42, 0.9) 0%, 
            rgba(30, 41, 59, 0.9) 100%) !important;
        }
        
        .theme-transformers .fixed.inset-0.bg-black\\/60 > div > div {
          background: linear-gradient(135deg, 
            rgba(255, 215, 0, 0.1) 0%, 
            rgba(30, 41, 59, 0.9) 30%, 
            rgba(220, 38, 38, 0.1) 70%, 
            rgba(30, 41, 59, 0.9) 100%) !important;
          border: 4px solid #ffd700 !important;
          border-radius: 0px !important;
          box-shadow: 
            0 0 40px rgba(255, 215, 0, 0.7),
            inset 0 0 40px rgba(220, 38, 38, 0.2),
            0 12px 0px #ff8800,
            0 16px 24px rgba(0, 0, 0, 0.5) !important;
        }
        
        .theme-transformers .fixed.inset-0.bg-black\\/60 h1,
        .theme-transformers .fixed.inset-0.bg-black\\/60 h2 {
          animation: autobot-matrix 3s ease-in-out infinite !important;
        }
        
        @keyframes autobot-matrix {
          0%, 100% { 
            text-shadow: 
              0 0 5px #ffd700,
              0 0 10px #ffd700,
              0 0 15px #ff8800;
            filter: hue-rotate(0deg);
          }
          33% { 
            text-shadow: 
              0 0 5px #ff4444,
              0 0 10px #ff4444,
              0 0 15px #dc2626;
            filter: hue-rotate(120deg);
          }
          66% { 
            text-shadow: 
              0 0 5px #4488ff,
              0 0 10px #4488ff,
              0 0 15px #2563eb;
            filter: hue-rotate(240deg);
          }
        }
        
        .theme-transformers .fixed.inset-0.bg-black\\/60 [class*="bg-white\\/5"] {
          background: linear-gradient(45deg, 
            rgba(255, 215, 0, 0.15) 0%, 
            rgba(30, 41, 59, 0.8) 50%,
            rgba(255, 68, 68, 0.15) 100%) !important;
          border: 2px solid #ffd700 !important;
          border-radius: 0px !important;
          box-shadow: 
            0 0 15px rgba(255, 215, 0, 0.5),
            inset 0 0 15px rgba(220, 38, 38, 0.1),
            0 4px 0px #ff8800,
            0 6px 8px rgba(0, 0, 0, 0.3) !important;
        }
        
        .theme-transformers .fixed.inset-0.bg-black\\/60 [class*="bg-white\\/5"]:hover {
          background: linear-gradient(45deg, 
            rgba(255, 68, 68, 0.25) 0%, 
            rgba(30, 41, 59, 0.8) 50%,
            rgba(255, 215, 0, 0.25) 100%) !important;
          border-color: #ff4444 !important;
          box-shadow: 
            0 0 25px rgba(255, 68, 68, 0.7),
            inset 0 0 25px rgba(255, 215, 0, 0.2),
            0 6px 0px #cc3333,
            0 8px 12px rgba(0, 0, 0, 0.4) !important;
          animation: autobot-transform 0.8s ease-in-out !important;
        }
        
        @keyframes autobot-transform {
          0%, 100% { transform: scale(1) rotate(0deg); }
          25% { transform: scale(1.05) rotate(2deg); }
          50% { transform: scale(1.1) rotate(0deg); }
          75% { transform: scale(1.05) rotate(-2deg); }
        }

        /* Button styling */
        .theme-transformers button {
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
          font-family: 'Exo 2', sans-serif !important;
          font-weight: 600 !important;
        }
        
        .theme-transformers button:active {
          transform: scale(0.98) !important;
          filter: brightness(1.2) !important;
        }

        /* Text effects */
        .theme-transformers p,
        .theme-transformers div {
          font-family: 'Exo 2', sans-serif !important;
        }

        /* Mechanical background pattern */
        .theme-transformers::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(255, 215, 0, 0.1) 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, rgba(255, 68, 68, 0.1) 2px, transparent 2px),
            linear-gradient(45deg, transparent 40%, rgba(255, 215, 0, 0.05) 50%, transparent 60%);
          background-size: 50px 50px, 50px 50px, 100px 100px;
          animation: mech-pattern 20s linear infinite;
          opacity: 0.3;
          pointer-events: none;
          z-index: 1;
        }

        @keyframes mech-pattern {
          0% { transform: translateX(0px) translateY(0px); }
          100% { transform: translateX(50px) translateY(50px); }
        }
      `}</style>
    </>
  );
}