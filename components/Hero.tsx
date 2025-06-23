'use client';

import React from 'react';
import { ArrowRight, Sparkles, Code, Zap, Globe, Rocket } from 'lucide-react';
import { TextRevealCard } from './ui/text-reveal-card';
import { getThemedText } from '@/data';
import { ThemeVersion } from './ThemeManager';
import { MagicButton } from './ui/MagicButton';

// Temporary fallback Spotlight component
const Spotlight = ({ className, fill }: any) => (
  <div className={`absolute ${className}`} style={{ background: `radial-gradient(circle, ${fill}20 0%, transparent 70%)` }} />
);

interface HeroProps {
  currentTheme?: ThemeVersion;
}

const Hero = ({ currentTheme = 'current' }: HeroProps) => {
  // Theme-specific text content
  const badgeText = getThemedText("Web 2, 2.5, 3 & Beyond", currentTheme);
  const mainText = getThemedText("ENVY NOTHING", currentTheme);
  const revealText = getThemedText("BUILD EVERYTHING", currentTheme);
  const subtitle = getThemedText("Greetings! I'm Matt, a Full-Stack/Blockchain Engineer in SoCal.", currentTheme);
  const subtitleSecondary = getThemedText("Crafting digital experiences that push boundaries.", currentTheme);
  const ctaText = getThemedText("View My Work", currentTheme);
  const scrollText = getThemedText("Scroll", currentTheme);

  // Theme-specific styling
  const getThemeStyles = () => {
    switch (currentTheme) {
      case 'mickey':
        return {
          containerClass: "relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-gray-800 to-gray-900",
          fontFamily: "font-family: 'Comic Sans MS', cursive",
          accentColor: "text-white",
          primaryGradient: "from-white to-gray-300",
          badgeGradient: "from-white to-gray-300",
          pillHover: "hover:border-white/50 hover:bg-white/10",
          // Background elements theming - Smokey steamboat effects
          backgroundOverlay: "bg-gradient-to-t from-black via-gray-900/90 to-transparent",
          floatingOrbs: {
            orb1: "bg-white/20 animate-smoke-puff", // White smoke puff
            orb2: "bg-gray-400/30 animate-smoke-drift", // Gray smoke drift
            orb3: "bg-gray-600/25 animate-smoke-swirl", // Dark smoke swirl
          },
          spotlights: {
            spot1: "white",
            spot2: "gray", 
            spot3: "white"
          },
          badgeStyle: "border-white/30 bg-white/10 shadow-[4px_4px_0px_rgba(0,0,0,0.8)] border-2 border-black",
          textColors: {
            subtitle: "text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]",
            subtitleSecondary: "text-gray-300 drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]"
          },
          iconColors: {
            code: "text-white",
            zap: "text-gray-300",
            globe: "text-white"
          },
          scrollIndicator: "text-white drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]"
        };
      case 'cyberpunk':
        return {
          containerClass: "relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-purple-950 to-cyan-950",
          fontFamily: "font-family: 'Orbitron', monospace",
          accentColor: "text-cyan-300",
          primaryGradient: "from-cyan-400 to-magenta-400",
          badgeGradient: "from-cyan-400 to-magenta-400",
          pillHover: "hover:border-cyan-500/50 hover:bg-cyan-500/10",
          // Background elements theming
          backgroundOverlay: "bg-gradient-to-t from-black via-purple-950/80 to-transparent",
          floatingOrbs: {
            orb1: "bg-cyan-400/40",    // Neon cyan
            orb2: "bg-magenta-500/40", // Neon magenta
            orb3: "bg-green-400/30",   // Neon green
          },
          spotlights: {
            spot1: "cyan",
            spot2: "magenta",
            spot3: "green"
          },
          badgeStyle: "border-cyan-500/20 bg-cyan-500/10 shadow-[0_0_15px_rgba(0,255,255,0.3)]",
          textColors: {
            subtitle: "text-cyan-100",
            subtitleSecondary: "text-cyan-200/80"
          },
          iconColors: {
            code: "text-cyan-400",
            zap: "text-magenta-400",
            globe: "text-green-400"
          },
          scrollIndicator: "text-cyan-400"
        };
      case 'transformers':
        return {
          containerClass: "relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-red-950 to-yellow-950",
          fontFamily: "font-family: 'Audiowide', cursive",
          accentColor: "text-yellow-300",
          primaryGradient: "from-yellow-400 to-red-400",
          badgeGradient: "from-yellow-400 to-red-400",
          pillHover: "hover:border-yellow-500/50 hover:bg-yellow-500/10",
          // Background elements theming
          backgroundOverlay: "bg-gradient-to-t from-gray-900 via-red-950/80 to-transparent",
          floatingOrbs: {
            orb1: "bg-yellow-500/35",  // Autobot gold
            orb2: "bg-red-500/35",     // Autobot red
            orb3: "bg-gray-400/30",    // Metallic gray
          },
          spotlights: {
            spot1: "yellow",
            spot2: "red",
            spot3: "white"
          },
          badgeStyle: "border-yellow-500/20 bg-yellow-500/10 shadow-[0_0_10px_rgba(255,215,0,0.4)]",
          textColors: {
            subtitle: "text-yellow-100",
            subtitleSecondary: "text-yellow-200/80"
          },
          iconColors: {
            code: "text-yellow-400",
            zap: "text-red-400",
            globe: "text-yellow-300"
          },
          scrollIndicator: "text-yellow-400"
        };
      case 'retro90s':
        return {
          containerClass: "relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-400 via-purple-400 to-pink-400",
          fontFamily: "font-family: 'MS Sans Serif', sans-serif",
          accentColor: "text-white",
          primaryGradient: "from-white to-gray-200",
          badgeGradient: "from-white to-gray-200",
          pillHover: "hover:border-white/50 hover:bg-white/10",
          // Background elements theming
          backgroundOverlay: "bg-gradient-to-t from-gray-500 via-purple-400/80 to-transparent",
          floatingOrbs: {
            orb1: "bg-pink-400/50",    // Hot pink
            orb2: "bg-purple-500/50",  // 90s purple
            orb3: "bg-cyan-400/40",    // 90s cyan
          },
          spotlights: {
            spot1: "white",
            spot2: "purple",
            spot3: "pink"
          },
          badgeStyle: "border-white/50 bg-white/20 shadow-[inset_2px_2px_4px_rgba(255,255,255,0.3)]",
          textColors: {
            subtitle: "text-black",
            subtitleSecondary: "text-gray-800"
          },
          iconColors: {
            code: "text-purple-600",
            zap: "text-pink-600",
            globe: "text-cyan-600"
          },
          scrollIndicator: "text-black"
        };
      default:
        return {
          containerClass: "relative min-h-screen overflow-hidden bg-slate-950",
          fontFamily: "font-family: inherit",
          accentColor: "text-blue-300",
          primaryGradient: "from-blue-400 to-purple-400",
          badgeGradient: "from-blue-400 to-purple-400",
          pillHover: "hover:border-blue-500/50 hover:bg-blue-500/10",
          // Background elements theming
          backgroundOverlay: "bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent",
          floatingOrbs: {
            orb1: "bg-blue-500/20",
            orb2: "bg-purple-500/20",
            orb3: "bg-orange-500/20",
          },
          spotlights: {
            spot1: "white",
            spot2: "purple",
            spot3: "orange"
          },
          badgeStyle: "border-blue-500/20 bg-blue-500/10",
          textColors: {
            subtitle: "text-slate-300",
            subtitleSecondary: "text-slate-400"
          },
          iconColors: {
            code: "text-blue-400",
            zap: "text-purple-400",
            globe: "text-orange-400"
          },
          scrollIndicator: "text-slate-400"
        };
    }
  };

  const themeStyles = getThemeStyles();

  return (
    <div className={themeStyles.containerClass} style={{ fontFamily: themeStyles.fontFamily }}>
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className={`absolute inset-0 ${themeStyles.backgroundOverlay}`} />
      
      {/* Themed Floating Orbs / Smoke Effects */}
      <div className={`absolute top-20 left-10 w-72 h-72 ${themeStyles.floatingOrbs.orb1} rounded-full blur-3xl ${currentTheme === 'mickey' ? 'animate-smoke-puff' : 'animate-pulse'}`} />
      <div className={`absolute top-40 right-10 w-96 h-96 ${themeStyles.floatingOrbs.orb2} rounded-full blur-3xl ${currentTheme === 'mickey' ? 'animate-smoke-drift delay-1000' : 'animate-pulse delay-1000'}`} />
      <div className={`absolute bottom-20 left-1/3 w-80 h-80 ${themeStyles.floatingOrbs.orb3} rounded-full blur-3xl ${currentTheme === 'mickey' ? 'animate-smoke-swirl delay-2000' : 'animate-pulse delay-2000'}`} />
      
      {/* Mickey Theme: Additional Steamboat Smoke Effects */}
      {currentTheme === 'mickey' && (
        <>
          {/* Steamboat smoke stacks */}
          <div className="absolute top-10 left-1/4 w-4 h-32 bg-gradient-to-t from-gray-800 to-transparent opacity-60" />
          <div className="absolute top-10 left-1/3 w-4 h-32 bg-gradient-to-t from-gray-700 to-transparent opacity-40" />
          
          {/* Animated smoke puffs from stacks */}
          <div className="absolute top-8 left-1/4 w-12 h-12 bg-white/30 rounded-full blur-md animate-smoke-puff-small" />
          <div className="absolute top-6 left-1/3 w-16 h-16 bg-gray-400/25 rounded-full blur-lg animate-smoke-puff-medium delay-500" />
          <div className="absolute top-4 left-[30%] w-20 h-20 bg-gray-600/20 rounded-full blur-xl animate-smoke-puff-large delay-1000" />
          
          {/* Floating smoke particles */}
          <div className="absolute top-32 left-[25%] w-8 h-8 bg-white/20 rounded-full blur-sm animate-float-up" />
          <div className="absolute top-28 left-[32%] w-6 h-6 bg-gray-400/25 rounded-full blur-sm animate-float-up delay-300" />
          <div className="absolute top-36 left-[29%] w-10 h-10 bg-gray-500/15 rounded-full blur-md animate-float-up delay-700" />
          
          {/* Steam whistle effect */}
          <div className="absolute top-16 left-[27%] w-2 h-8 bg-white/40 blur-sm animate-steam-whistle" />
        </>
      )}

      {/* Themed Spotlights */}
      <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill={themeStyles.spotlights.spot1} />
      <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill={themeStyles.spotlights.spot2} />
      <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill={themeStyles.spotlights.spot3} />

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          
          {/* Themed Badge */}
          <div className={`mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${themeStyles.accentColor} ${themeStyles.badgeStyle} backdrop-blur-sm animate-fade-in group`}>
             <Sparkles className="h-4 w-4" />
            <span className={`bg-gradient-to-r ${themeStyles.badgeGradient} bg-clip-text text-transparent`}>
              {badgeText}
            </span>
            
            {/* Animated Rocket */}
            <div className="relative">
              <Rocket className="h-4 w-4 text-orange-400 animate-rocket-launch group-hover:animate-rocket-boost transition-all duration-300" />
              
              {/* Rocket Trail Effect */}
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0.5 h-3 bg-gradient-to-t from-orange-400/60 via-yellow-400/40 to-transparent animate-rocket-trail opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Sparkle Trail */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                <div className="w-1 h-1 bg-orange-300 rounded-full animate-sparkle-1 opacity-0 group-hover:opacity-100" />
              </div>
              <div className="absolute -bottom-3 left-1/2 transform ">
                <div className="w-0.5 h-0.5 bg-yellow-300 rounded-full animate-sparkle-2 opacity-0 group-hover:opacity-100" />
              </div>
              <div className="absolute -bottom-3 left-1/2 transform ">
                <div className="w-0.5 h-0.5 bg-orange-200 rounded-full animate-sparkle-3 opacity-0 group-hover:opacity-100" />
              </div>
            </div>
          </div>

          {/* Main Heading with Text Reveal Effect */}
          <div className="mb-8">
            <TextRevealCard
              text={mainText}
              revealText={revealText}
              className="mx-auto mb-4"
            />
          </div>

          {/* Themed Subtitle */}
          <p className={`mx-auto mb-12 max-w-2xl text-lg leading-8 sm:text-xl animate-fade-in-delayed ${themeStyles.textColors.subtitle}`}>
            {subtitle}
            <br />
            <span className={themeStyles.textColors.subtitleSecondary}>{subtitleSecondary}</span>
          </p>

          {/* Themed Feature Pills */}
          <div className="mb-12 flex flex-wrap justify-center gap-3 animate-fade-in-more-delayed">
            <div className={`flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm text-slate-300 backdrop-blur-sm ${themeStyles.pillHover} transition-all duration-300`}>
              <Code className={`h-4 w-4 ${themeStyles.iconColors.code}`} />
              {getThemedText("Full-Stack Development", currentTheme)}
            </div>
            <div className={`flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm text-slate-300 backdrop-blur-sm hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300`}>
              <Zap className={`h-4 w-4 ${themeStyles.iconColors.zap}`} />
              {getThemedText("Blockchain Engineering", currentTheme)}
            </div>
            <div className={`flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm text-slate-300 backdrop-blur-sm hover:border-orange-500/50 hover:bg-orange-500/10 transition-all duration-300`}>
              <Globe className={`h-4 w-4 ${themeStyles.iconColors.globe}`} />
              {getThemedText("Web3 Innovation", currentTheme)}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6 animate-fade-in-most-delayed">
            <MagicButton
              title={ctaText}
              icon={<ArrowRight className="h-4 w-4" />}
              position="right"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="primary"
              currentTheme={currentTheme}
            />
          </div>

          {/* Themed Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className={`flex flex-col items-center gap-2 ${themeStyles.scrollIndicator}`}>
              <span className="text-xs uppercase tracking-widest">{scrollText}</span>
              <ArrowRight className="h-4 w-4 rotate-90" />
            </div>
          </div>

        </div>
      </div>
      
      {/* Mickey Theme Smoke Animations */}
      <style jsx>{`
        @keyframes smoke-puff {
          0% { 
            transform: scale(0.8) translateY(0px);
            opacity: 0.7;
          }
          50% { 
            transform: scale(1.2) translateY(-20px);
            opacity: 0.4;
          }
          100% { 
            transform: scale(1.5) translateY(-40px);
            opacity: 0.1;
          }
        }
        
        @keyframes smoke-drift {
          0% { 
            transform: translateX(0px) translateY(0px) scale(1);
            opacity: 0.6;
          }
          33% { 
            transform: translateX(20px) translateY(-15px) scale(1.1);
            opacity: 0.4;
          }
          66% { 
            transform: translateX(-10px) translateY(-25px) scale(1.3);
            opacity: 0.2;
          }
          100% { 
            transform: translateX(30px) translateY(-40px) scale(1.5);
            opacity: 0;
          }
        }
        
        @keyframes smoke-swirl {
          0% { 
            transform: rotate(0deg) scale(1) translateY(0px);
            opacity: 0.5;
          }
          25% { 
            transform: rotate(90deg) scale(1.1) translateY(-10px);
            opacity: 0.4;
          }
          50% { 
            transform: rotate(180deg) scale(1.3) translateY(-20px);
            opacity: 0.3;
          }
          75% { 
            transform: rotate(270deg) scale(1.4) translateY(-30px);
            opacity: 0.2;
          }
          100% { 
            transform: rotate(360deg) scale(1.6) translateY(-50px);
            opacity: 0;
          }
        }
        
        @keyframes smoke-puff-small {
          0% { 
            transform: scale(0.5) translateY(0px);
            opacity: 0.8;
          }
          100% { 
            transform: scale(2) translateY(-100px);
            opacity: 0;
          }
        }
        
        @keyframes smoke-puff-medium {
          0% { 
            transform: scale(0.7) translateY(0px);
            opacity: 0.6;
          }
          100% { 
            transform: scale(2.5) translateY(-120px);
            opacity: 0;
          }
        }
        
        @keyframes smoke-puff-large {
          0% { 
            transform: scale(0.8) translateY(0px);
            opacity: 0.5;
          }
          100% { 
            transform: scale(3) translateY(-150px);
            opacity: 0;
          }
        }
        
        @keyframes float-up {
          0% { 
            transform: translateY(0px);
            opacity: 0.6;
          }
          100% { 
            transform: translateY(-200px);
            opacity: 0;
          }
        }
        
        @keyframes steam-whistle {
          0%, 80% { 
            opacity: 0;
            transform: scaleY(1);
          }
          85% { 
            opacity: 1;
            transform: scaleY(1.5);
          }
          90% { 
            opacity: 0.8;
            transform: scaleY(2);
          }
          100% { 
            opacity: 0;
            transform: scaleY(0.5);
          }
        }
        
        .animate-smoke-puff {
          animation: smoke-puff 4s ease-out infinite;
        }
        
        .animate-smoke-drift {
          animation: smoke-drift 6s ease-in-out infinite;
        }
        
        .animate-smoke-swirl {
          animation: smoke-swirl 8s linear infinite;
        }
        
        .animate-smoke-puff-small {
          animation: smoke-puff-small 3s ease-out infinite;
        }
        
        .animate-smoke-puff-medium {
          animation: smoke-puff-medium 4s ease-out infinite;
        }
        
        .animate-smoke-puff-large {
          animation: smoke-puff-large 5s ease-out infinite;
        }
        
        .animate-float-up {
          animation: float-up 6s linear infinite;
        }
        
        .animate-steam-whistle {
          animation: steam-whistle 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;