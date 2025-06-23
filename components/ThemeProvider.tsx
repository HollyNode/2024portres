"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type ThemeVersion = 'current' | 'mickey' | 'cyberpunk' | 'transformers' | 'retro90s';

interface ThemeContextType {
  currentTheme: ThemeVersion;
  setTheme: (theme: ThemeVersion) => void;
  themeConfig: ThemeConfig;
}

interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    border: string;
  };
  fonts: {
    primary: string;
    secondary: string;
    mono: string;
  };
  effects: {
    blur: string;
    shadow: string;
    animation: string;
  };
  layout: {
    borderRadius: string;
    spacing: string;
  };
}

const themeConfigs: Record<ThemeVersion, ThemeConfig> = {
  current: {
    colors: {
      primary: 'rgb(17, 25, 40)',
      secondary: 'rgb(236, 72, 153)',
      accent: 'rgb(251, 146, 60)',
      background: 'rgb(3, 7, 18)',
      text: 'rgb(255, 255, 255)',
      border: 'rgba(255, 255, 255, 0.125)'
    },
    fonts: {
      primary: 'system-ui, -apple-system, sans-serif',
      secondary: 'Inter, sans-serif',
      mono: 'JetBrains Mono, monospace'
    },
    effects: {
      blur: 'blur(16px)',
      shadow: '0px 2px 3px -1px rgba(0,0,0,0.1)',
      animation: 'smooth'
    },
    layout: {
      borderRadius: '12px',
      spacing: 'normal'
    }
  },
  mickey: {
    colors: {
      primary: 'rgb(0, 0, 0)',
      secondary: 'rgb(255, 255, 255)',
      accent: 'rgb(128, 128, 128)',
      background: 'rgb(245, 245, 245)',
      text: 'rgb(0, 0, 0)',
      border: 'rgb(0, 0, 0)'
    },
    fonts: {
      primary: '"Times New Roman", serif',
      secondary: '"Courier New", monospace',
      mono: '"Courier New", monospace'
    },
    effects: {
      blur: 'none',
      shadow: '4px 4px 0px rgba(0,0,0,1)',
      animation: 'bouncy'
    },
    layout: {
      borderRadius: '50px',
      spacing: 'loose'
    }
  },
  cyberpunk: {
    colors: {
      primary: 'rgb(0, 255, 255)',
      secondary: 'rgb(255, 0, 128)',
      accent: 'rgb(255, 255, 0)',
      background: 'rgb(10, 0, 20)',
      text: 'rgb(0, 255, 255)',
      border: 'rgb(255, 0, 128)'
    },
    fonts: {
      primary: '"Orbitron", monospace',
      secondary: '"Rajdhani", sans-serif',
      mono: '"Share Tech Mono", monospace'
    },
    effects: {
      blur: 'blur(2px)',
      shadow: '0 0 20px currentColor',
      animation: 'glitch'
    },
    layout: {
      borderRadius: '0px',
      spacing: 'tight'
    }
  },
  transformers: {
    colors: {
      primary: 'rgb(220, 38, 38)',
      secondary: 'rgb(59, 130, 246)',
      accent: 'rgb(255, 215, 0)',
      background: 'rgb(15, 23, 42)',
      text: 'rgb(255, 255, 255)',
      border: 'rgb(255, 215, 0)'
    },
    fonts: {
      primary: '"Exo 2", sans-serif',
      secondary: '"Michroma", sans-serif',
      mono: '"Audiowide", monospace'
    },
    effects: {
      blur: 'blur(1px)',
      shadow: 'inset 0 0 20px rgba(255, 215, 0, 0.3)',
      animation: 'mechanical'
    },
    layout: {
      borderRadius: '4px',
      spacing: 'structured'
    }
  },
  retro90s: {
    colors: {
      primary: 'rgb(0, 0, 255)',
      secondary: 'rgb(255, 0, 255)',
      accent: 'rgb(0, 255, 0)',
      background: 'rgb(192, 192, 192)',
      text: 'rgb(0, 0, 0)',
      border: 'rgb(128, 128, 128)'
    },
    fonts: {
      primary: '"MS Sans Serif", sans-serif',
      secondary: '"Comic Sans MS", cursive',
      mono: '"Courier New", monospace'
    },
    effects: {
      blur: 'none',
      shadow: '2px 2px 0px rgba(128, 128, 128, 1)',
      animation: 'pixelated'
    },
    layout: {
      borderRadius: '0px',
      spacing: 'compact'
    }
  }
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeVersion>('current');

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') as ThemeVersion;
    if (savedTheme && themeConfigs[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  // Apply theme to CSS custom properties
  useEffect(() => {
    const config = themeConfigs[currentTheme];
    const root = document.documentElement;

    // Apply color variables
    Object.entries(config.colors).forEach(([key, value]) => {
      root.style.setProperty(`--theme-${key}`, value);
    });

    // Apply font variables
    Object.entries(config.fonts).forEach(([key, value]) => {
      root.style.setProperty(`--theme-font-${key}`, value);
    });

    // Apply effect variables
    Object.entries(config.effects).forEach(([key, value]) => {
      root.style.setProperty(`--theme-effect-${key}`, value);
    });

    // Apply layout variables
    Object.entries(config.layout).forEach(([key, value]) => {
      root.style.setProperty(`--theme-layout-${key}`, value);
    });

    // Add theme class to body
    document.body.className = document.body.className.replace(/theme-\w+/g, '');
    document.body.classList.add(`theme-${currentTheme}`);

    // Save to localStorage
    localStorage.setItem('portfolio-theme', currentTheme);
  }, [currentTheme]);

  const setTheme = (theme: ThemeVersion) => {
    setCurrentTheme(theme);
  };

  const value = {
    currentTheme,
    setTheme,
    themeConfig: themeConfigs[currentTheme]
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};