'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils'; // Use consistent import path

interface TextRevealCardProps {
  text: string;
  revealText: string;
  className?: string;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  delay: number;
  duration: number;
}

export const TextRevealCard: React.FC<TextRevealCardProps> = ({
  text,
  revealText,
  className,
}) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate sparkle particles
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 2,
          opacity: Math.random() * 0.8 + 0.2,
          delay: Math.random() * 2000,
          duration: Math.random() * 3000 + 2000,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();

    // Start the reveal animation
    const timer = setTimeout(() => {
      setIsRevealed(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="relative h-32 w-full cursor-pointer select-none rounded-2xl border border-slate-700/50 bg-slate-900/30 p-8 backdrop-blur-sm transition-all duration-500 hover:border-slate-600/50 hover:bg-slate-900/40">
        
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
        
        {/* Sparkle Particles */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className={cn(
                "absolute w-1 h-1 bg-white rounded-full transition-all duration-1000 ease-out",
                isRevealed ? "opacity-100 scale-100" : "opacity-0 scale-0"
              )}
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                animationDelay: `${particle.delay}ms`,
                animationDuration: `${particle.duration}ms`,
                background: `radial-gradient(circle, rgba(147, 197, 253, ${particle.opacity}) 0%, rgba(196, 181, 253, ${particle.opacity * 0.8}) 50%, rgba(251, 146, 60, ${particle.opacity * 0.6}) 100%)`,
                boxShadow: `0 0 ${particle.size * 2}px rgba(147, 197, 253, ${particle.opacity * 0.5})`,
              }}
            />
          ))}
        </div>

        {/* Main Text Container */}
        <div className="relative z-10 flex items-center justify-center h-full">
          
          {/* Original Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center tracking-wide">
              <span className="inline-block overflow-hidden">
                {text.split('').map((char, index) => (
                  <span
                    key={index}
                    className={cn(
                      "inline-block transition-all duration-700 ease-out",
                      isRevealed 
                        ? "transform translate-y-full opacity-0 blur-sm" 
                        : "transform translate-y-0 opacity-100 blur-0"
                    )}
                    style={{
                      transitionDelay: `${index * 50}ms`,
                    }}
                  >
                    <span className="bg-gradient-to-r from-slate-400 to-slate-200 bg-clip-text text-transparent">
                      {char === ' ' ? '\u00A0' : char}
                    </span>
                  </span>
                ))}
              </span>
            </h2>
          </div>

          {/* Reveal Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center tracking-wide">
              <span className="inline-block overflow-hidden">
                {revealText.split('').map((char, index) => (
                  <span
                    key={index}
                    className={cn(
                      "inline-block transition-all duration-700 ease-out",
                      isRevealed 
                        ? "transform translate-y-0 opacity-100 blur-0" 
                        : "transform translate-y-full opacity-0 blur-sm"
                    )}
                    style={{
                      transitionDelay: `${index * 80 + 300}ms`,
                    }}
                  >
                    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent animate-gradient-x bg-size-200">
                      {char === ' ' ? '\u00A0' : char}
                    </span>
                  </span>
                ))}
              </span>
            </h2>
          </div>
        </div>

        {/* Animated Border Glow */}
        <div 
          className={cn(
            "absolute inset-0 rounded-2xl transition-all duration-1000 ease-out",
            isRevealed 
              ? "bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-orange-500/20 opacity-100" 
              : "opacity-0"
          )}
        />

        {/* Shimmer Effect */}
        <div 
          className={cn(
            "absolute inset-0 rounded-2xl transition-all duration-1000 ease-out",
            isRevealed && "animate-shimmer"
          )}
          style={{
            background: isRevealed 
              ? 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)'
              : 'transparent',
            backgroundSize: '200% 200%',
          }}
        />
        
      </div>
    </div>
  );
};