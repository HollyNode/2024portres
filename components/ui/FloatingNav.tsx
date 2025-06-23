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
          setShowThemeDropdown(false); // Close dropdown when nav hides
        }
      }
    }
  });

  const handleThemeSelect = (themeId: ThemeVersion) => {
    onThemeChange?.(themeId);
    setShowThemeDropdown(false);
  };

  const currentThemeData = themes.find(t => t.id === currentTheme) || themes[0];

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
          "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        {/* Navigation Items */}
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="text-sm !cursor-pointer">{navItem.name}</span>
          </Link>
        ))}

        {/* Theme Switcher Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowThemeDropdown(!showThemeDropdown)}
            className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-200 border border-white/20 hover:border-white/30"
          >
            <span className="text-lg">{currentThemeData.icon}</span>
            <span className="text-sm text-white hidden sm:block">{currentThemeData.name}</span>
            <motion.span
              animate={{ rotate: showThemeDropdown ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-white/70 text-xs"
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
                className="absolute top-full mt-2 right-0 min-w-[280px] bg-black/90 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl overflow-hidden z-50"
              >
                <div className="p-3">
                  <div className="text-xs text-white/60 uppercase tracking-wider mb-3 px-2">
                    Experience Versions
                  </div>
                  
                  {themes.map((theme) => (
                    <button
                      key={theme.id}
                      onClick={() => handleThemeSelect(theme.id)}
                      className={cn(
                        "w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 text-left",
                        currentTheme === theme.id
                          ? "bg-white/20 border border-white/30"
                          : "hover:bg-white/10 border border-transparent"
                      )}
                    >
                      <span className="text-2xl">{theme.icon}</span>
                      <div className="flex-1">
                        <div className="text-white font-medium text-sm">{theme.name}</div>
                        <div className="text-white/60 text-xs">{theme.description}</div>
                      </div>
                      {currentTheme === theme.id && (
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      )}
                    </button>
                  ))}
                </div>
                
                <div className="px-3 pb-3">
                  <div className="text-xs text-white/40 px-2">
                    Switch between different visual experiences
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};