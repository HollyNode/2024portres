// ===== MagicButton.tsx =====
'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { ThemeVersion } from '../ThemeManager';

interface MagicButtonProps {
  title: string;
  icon?: React.ReactNode;
  position?: 'left' | 'right';
  onClick?: () => void;
  className?: string;
  currentTheme?: ThemeVersion;
}

export const MagicButton: React.FC<MagicButtonProps> = ({
  title,
  icon,
  position = 'right',
  onClick,
  className,
  currentTheme = 'current',
}) => {
  // Get theme-specific styling
  const getThemeStyles = () => {
    switch (currentTheme) {
      case 'mickey':
        return {
          baseGradient: "from-red-600 to-yellow-500",
          hoverGradient: "from-red-500 to-yellow-400",
          beforeGradient: "from-red-500 to-yellow-400",
          afterGradient: "from-red-600 to-yellow-500",
          shadowColor: "hover:shadow-yellow-500/25",
          textGradient: "from-white to-yellow-100",
          animatedBg: "from-red-600 via-yellow-500 to-red-600",
          fontFamily: "font-family: 'Comic Sans MS', cursive",
          borderStyle: "border-2 border-yellow-400/50",
        };
      case 'cyberpunk':
        return {
          baseGradient: "from-cyan-600 to-magenta-600",
          hoverGradient: "from-cyan-500 to-magenta-500",
          beforeGradient: "from-cyan-500 to-magenta-500",
          afterGradient: "from-cyan-600 to-magenta-600",
          shadowColor: "hover:shadow-cyan-500/25",
          textGradient: "from-cyan-100 to-white",
          animatedBg: "from-cyan-600 via-magenta-600 to-cyan-600",
          fontFamily: "font-family: 'Orbitron', monospace",
          borderStyle: "border border-cyan-400/30 shadow-[0_0_15px_rgba(0,255,255,0.3)]",
        };
      case 'transformers':
        return {
          baseGradient: "from-yellow-600 to-red-600",
          hoverGradient: "from-yellow-500 to-red-500",
          beforeGradient: "from-yellow-500 to-red-500",
          afterGradient: "from-yellow-600 to-red-600",
          shadowColor: "hover:shadow-yellow-500/25",
          textGradient: "from-yellow-100 to-white",
          animatedBg: "from-yellow-600 via-red-600 to-yellow-600",
          fontFamily: "font-family: 'Audiowide', cursive",
          borderStyle: "border-2 border-yellow-400/50 shadow-[0_0_10px_rgba(255,215,0,0.4)]",
        };
      case 'retro90s':
        return {
          baseGradient: "from-purple-600 to-pink-500",
          hoverGradient: "from-purple-500 to-pink-400",
          beforeGradient: "from-purple-500 to-pink-400",
          afterGradient: "from-purple-600 to-pink-500",
          shadowColor: "hover:shadow-pink-500/25",
          textGradient: "from-white to-gray-100",
          animatedBg: "from-purple-600 via-pink-500 to-purple-600",
          fontFamily: "font-family: 'MS Sans Serif', sans-serif",
          borderStyle: "border-2 border-white/50 shadow-[inset_2px_2px_4px_rgba(255,255,255,0.3)]",
        };
      default:
        return {
          baseGradient: "from-blue-600 to-purple-600",
          hoverGradient: "from-blue-500 to-purple-500",
          beforeGradient: "from-blue-500 to-purple-500",
          afterGradient: "from-blue-600 to-purple-600",
          shadowColor: "hover:shadow-blue-500/25",
          textGradient: "from-white to-slate-100",
          animatedBg: "from-blue-600 via-purple-600 to-blue-600",
          fontFamily: "font-family: inherit",
          borderStyle: "",
        };
    }
  };

  const themeStyles = getThemeStyles();

  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-3 font-medium text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105",
        `bg-gradient-to-r ${themeStyles.baseGradient}`,
        `before:absolute before:inset-0 before:bg-gradient-to-r before:${themeStyles.beforeGradient} before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100`,
        `after:absolute after:inset-[1px] after:rounded-full after:bg-gradient-to-r after:${themeStyles.afterGradient} after:transition-all`,
        themeStyles.shadowColor,
        themeStyles.borderStyle,
        className === 'primary' && `bg-gradient-to-r ${themeStyles.hoverGradient} hover:${themeStyles.hoverGradient}`,
        className
      )}
      style={{ fontFamily: themeStyles.fontFamily }}
    >
      <span className="relative z-10 flex items-center gap-2">
        {position === 'left' && icon && (
          <span className="transition-transform group-hover:-translate-x-1">
            {icon}
          </span>
        )}
        
        <span className={`bg-gradient-to-r ${themeStyles.textGradient} bg-clip-text text-transparent font-semibold`}>
          {title}
        </span>
        
        {position === 'right' && icon && (
          <span className="transition-transform group-hover:translate-x-1">
            {icon}
          </span>
        )}
      </span>
      
      {/* Animated background */}
      <div className={`absolute inset-0 -z-10 bg-gradient-to-r ${themeStyles.animatedBg} bg-size-200 animate-gradient-x opacity-75`} />
    </button>
  );
};