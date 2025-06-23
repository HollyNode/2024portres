"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Theme definitions
export type ThemeVersion = 'current' | 'mickey' | 'cyberpunk' | 'transformers' | 'retro90s';

export interface Theme {
  id: ThemeVersion;
  name: string;
  icon: string;
  description: string;
}

export const themes: Theme[] = [
  {
    id: 'current',
    name: 'Current',
    icon: '🚀',
    description: 'Modern portfolio design'
  },
  {
    id: 'mickey',
    name: '1930s Toons',
    icon: '🎭',
    description: 'Black & white cartoon era'
  },
  {
    id: 'cyberpunk',
    name: 'Cyber Carnival',
    icon: '🎪',
    description: 'Neon-lit digital circus'
  },
  {
    id: 'transformers',
    name: '80s Mech',
    icon: '🤖',
    description: 'Retro robot aesthetic'
  },
  {
    id: 'retro90s',
    name: 'Web 1.0',
    icon: '💾',
    description: 'Early internet vibes'
  }
];

// Theme-specific nav styles
const getNavStyles = (theme: ThemeVersion) => {
  switch (theme) {
    case 'mickey':
      return {
        container: "bg-white border-4 border-black rounded-[50px] shadow-[8px_8px_0px_#000]",
        backdrop: "none",
        link: "text-black font-bold uppercase tracking-[2px] underline hover:text-purple-600 hover:bg-yellow-400 hover:no-underline transition-all",
        button: "bg-black text-white border-3 border-black rounded-[25px] font-bold shadow-[4px_4px_0px_#333] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#333]",
        dropdown: "bg-white border-4 border-black rounded-[20px] shadow-[8px_8px_0px_#000]",
        dropdownButton: "hover:bg-gray-100 border-2 border-transparent hover:border-black hover:shadow-[2px_2px_0px_#333]"
      };
    
    case 'cyberpunk':
      return {
        container: "bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 border-2 border-cyan-400 rounded-none shadow-[0_0_20px_rgba(0,255,255,0.5)] backdrop-blur-[10px]",
        backdrop: "blur(10px) saturate(200%)",
        link: "text-cyan-400 font-semibold uppercase tracking-[2px] font-mono text-shadow-[0_0_10px_currentColor] hover:text-purple-400 hover:animate-pulse transition-all",
        button: "bg-gradient-to-r from-purple-500 to-cyan-500 text-black border-2 border-green-400 rounded-none font-bold shadow-[0_0_15px_rgba(0,255,255,0.7)] hover:shadow-[0_0_25px_rgba(255,0,255,0.9)] hover:animate-spin",
        dropdown: "bg-gradient-to-b from-purple-900/95 to-slate-900/95 border-2 border-purple-500 rounded-none shadow-[0_0_30px_rgba(255,0,255,0.6)] backdrop-blur-[15px]",
        dropdownButton: "hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 border border-transparent hover:border-cyan-400 hover:shadow-[0_0_10px_rgba(0,255,255,0.5)]"
      };
    
    case 'transformers':
      return {
        container: "bg-gradient-to-r from-yellow-500/20 via-slate-700/90 to-red-500/20 border-3 border-yellow-500 rounded-none shadow-[0_0_20px_rgba(255,215,0,0.4),0_4px_0px_#ff8800,0_6px_8px_rgba(0,0,0,0.3)] backdrop-blur-[10px]",
        backdrop: "blur(10px)",
        link: "text-yellow-500 font-bold uppercase tracking-[2px] font-mono text-shadow-[0_0_10px_#ffd700,2px_2px_0px_#000] hover:text-red-500 hover:animate-pulse transition-all",
        button: "bg-gradient-to-r from-yellow-500 to-orange-500 text-black border-3 border-red-500 rounded-none font-bold shadow-[0_0_15px_rgba(255,68,68,0.6),0_4px_0px_#cc3333,0_6px_8px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(255,215,0,0.8)] hover:animate-bounce",
        dropdown: "bg-gradient-to-b from-slate-700/95 to-slate-800/95 border-3 border-yellow-500 rounded-none shadow-[0_0_30px_rgba(255,215,0,0.6),0_8px_0px_#ff8800,0_12px_16px_rgba(0,0,0,0.4)] backdrop-blur-[15px]",
        dropdownButton: "hover:bg-gradient-to-r hover:from-yellow-500/20 hover:to-red-500/20 border-2 border-transparent hover:border-red-500 hover:shadow-[0_0_10px_rgba(255,68,68,0.5)]"
      };
    
    case 'retro90s':
      return {
        container: "bg-silver border-3 border-gray-500 rounded-none shadow-[2px_2px_4px_#808080] border-outset",
        backdrop: "none",
        link: "text-blue-600 font-bold uppercase tracking-[1px] underline hover:text-purple-600 hover:bg-yellow-400 hover:no-underline transition-none",
        button: "bg-gradient-to-b from-white to-silver text-black border-2 border-gray-500 rounded-none font-bold shadow-[1px_1px_2px_#808080] uppercase px-2 py-1 hover:bg-gradient-to-b hover:from-yellow-400 hover:to-purple-500 hover:border-inset",
        dropdown: "bg-white border-3 border-gray-500 rounded-none shadow-[3px_3px_6px_#808080] border-outset",
        dropdownButton: "hover:bg-blue-600 hover:text-white border border-transparent hover:border-gray-700"
      };
    
    default: // current
      return {
        container: "bg-black/75 border border-white/20 rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1)] backdrop-blur-[16px]",
        backdrop: "blur(16px) saturate(180%)",
        link: "text-neutral-600 dark:text-neutral-50 hover:text-neutral-500 dark:hover:text-neutral-300 transition-all",
        button: "bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 rounded-lg transition-all",
        dropdown: "bg-black/90 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl",
        dropdownButton: "hover:bg-white/10 border border-transparent"
      };
  }
};

export const FloatingNav = ({
  navItems,
  className,
  currentTheme = 'current',
  onThemeChange,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
  currentTheme?: ThemeVersion;
  onThemeChange?: (theme: ThemeVersion) => void;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [showThemeDropdown, setShowThemeDropdown] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
          setShowThemeDropdown(false);
        }
      }
    }
  });

  const handleThemeSelect = (themeId: ThemeVersion) => {
    onThemeChange?.(themeId);
    setShowThemeDropdown(false);
  };

  const currentThemeData = themes.find(t => t.id === currentTheme) || themes[0];
  const navStyles = getNavStyles(currentTheme);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 items-center justify-center space-x-4",
          navStyles.container,
          className
        )}
        style={{
          backdropFilter: navStyles.backdrop,
        }}
      >
        {/* Navigation Items */}
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative items-center flex space-x-1",
              navStyles.link
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="text-sm !cursor-pointer" style={{ fontFamily: currentTheme === 'retro90s' ? 'MS Sans Serif, sans-serif' : currentTheme === 'transformers' ? 'Michroma, monospace' : currentTheme === 'cyberpunk' ? 'Share Tech Mono, monospace' : currentTheme === 'mickey' ? 'Times New Roman, serif' : 'inherit' }}>
              {navItem.name}
            </span>
          </Link>
        ))}

        {/* Theme Switcher Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowThemeDropdown(!showThemeDropdown)}
            className={cn(
              "flex items-center space-x-2 px-3 py-2 transition-all duration-200",
              navStyles.button
            )}
            style={{ fontFamily: currentTheme === 'retro90s' ? 'MS Sans Serif, sans-serif' : currentTheme === 'transformers' ? 'Audiowide, monospace' : currentTheme === 'cyberpunk' ? 'Orbitron, monospace' : currentTheme === 'mickey' ? 'Times New Roman, serif' : 'inherit' }}
          >
            <span className="text-lg">{currentThemeData.icon}</span>
            <span className="text-sm hidden sm:block font-bold">
              {currentTheme === 'retro90s' ? currentThemeData.name.toUpperCase() : currentThemeData.name}
            </span>
            <motion.span
              animate={{ rotate: showThemeDropdown ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-xs opacity-70"
            >
              ▼
            </motion.span>
          </button>

          {/* Dropdown Menu */}
          <AnimatePresence>
            {showThemeDropdown && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className={cn(
                  "absolute top-full mt-2 right-0 min-w-[280px] overflow-hidden z-50",
                  navStyles.dropdown
                )}
              >
                <div className="p-3">
                  <div className="text-xs uppercase tracking-wider mb-3 px-2 opacity-60" style={{ fontFamily: currentTheme === 'retro90s' ? 'MS Sans Serif, sans-serif' : 'inherit' }}>
                    Experience Versions
                  </div>
                  
                  {themes.map((theme) => (
                    <button
                      key={theme.id}
                      onClick={() => handleThemeSelect(theme.id)}
                      className={cn(
                        "w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 text-left",
                        currentTheme === theme.id
                          ? "border opacity-100"
                          : "border-transparent opacity-80 hover:opacity-100",
                        navStyles.dropdownButton
                      )}
                      style={{ fontFamily: currentTheme === 'retro90s' ? 'MS Sans Serif, sans-serif' : 'inherit' }}
                    >
                      <span className="text-2xl">{theme.icon}</span>
                      <div className="flex-1">
                        <div className="font-medium text-sm">
                          {currentTheme === 'retro90s' ? theme.name.toUpperCase() : theme.name}
                        </div>
                        <div className="text-xs opacity-60">
                          {currentTheme === 'retro90s' ? theme.description.toUpperCase() : theme.description}
                        </div>
                      </div>
                      {currentTheme === theme.id && (
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      )}
                    </button>
                  ))}
                </div>
                
                <div className="px-3 pb-3">
                  <div className="text-xs px-2 opacity-40" style={{ fontFamily: currentTheme === 'retro90s' ? 'MS Sans Serif, sans-serif' : 'inherit' }}>
                    {currentTheme === 'retro90s' ? 'SWITCH BETWEEN DIFFERENT VISUAL EXPERIENCES' : 'Switch between different visual experiences'}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Theme-specific CSS */}
      <style jsx global>{`
        /* Mickey Theme Nav Animations */
        .theme-mickey nav button:hover {
          animation: mickey-nav-bounce 0.6s ease-out !important;
        }

        @keyframes mickey-nav-bounce {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(-2px, -2px) scale(1.05); }
          50% { transform: translate(-3px, -3px) scale(1.1); }
          75% { transform: translate(-2px, -2px) scale(1.05); }
        }

        /* Cyberpunk Theme Nav Effects */
        .theme-cyberpunk nav {
          position: relative;
        }

        .theme-cyberpunk nav::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(45deg, #00ffff, #ff00ff, #00ff00, #ffff00, #00ffff);
          background-size: 400% 400%;
          animation: cyber-border-flow 3s ease infinite;
          z-index: -1;
          border-radius: inherit;
        }

        @keyframes cyber-border-flow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        /* Transformers Theme Nav Effects */
        .theme-transformers nav button:hover {
          animation: mech-nav-transform 0.8s ease-in-out !important;
        }

        @keyframes mech-nav-transform {
          0%, 100% { transform: scale(1) rotate(0deg); }
          25% { transform: scale(1.05) rotate(2deg); }
          50% { transform: scale(1.1) rotate(0deg); }
          75% { transform: scale(1.05) rotate(-2deg); }
        }

        /* Retro 90s Theme Nav Effects */
        .theme-retro90s nav button:active {
          border-style: inset !important;
          background: #808080 !important;
        }

        .border-outset {
          border-style: outset;
        }

        .border-inset {
          border-style: inset;
        }

        .bg-silver {
          background-color: #c0c0c0;
        }
      `}</style>
    </AnimatePresence>
  );
};