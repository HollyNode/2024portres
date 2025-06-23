"use client";

import { useEffect } from 'react';
import MickeyTheme from './MickeyTheme';
import CyberpunkTheme from './CyberpunkTheme';
import TransformersTheme from './TransformersTheme';
import Retro90sTheme from './Retro90sTheme';

export type ThemeVersion = 'current' | 'mickey' | 'cyberpunk' | 'transformers' | 'retro90s';

interface ThemeManagerProps {
  currentTheme: ThemeVersion;
  children: React.ReactNode;
}

export default function ThemeManager({ currentTheme, children }: ThemeManagerProps) {
  
  // Apply default theme when not using specific theme components
  useEffect(() => {
    if (currentTheme === 'current') {
      const body = document.body;
      const root = document.documentElement;
      
      // Remove theme classes
      body.className = body.className.replace(/theme-\w+/g, '');
      
      // Reset to default styles
      root.style.setProperty('--theme-bg-primary', 'rgb(3, 7, 18)');
      root.style.setProperty('--theme-bg-secondary', 'rgb(17, 25, 40)');
      root.style.setProperty('--theme-text-primary', 'rgb(255, 255, 255)');
      root.style.setProperty('--theme-text-secondary', 'rgb(156, 163, 175)');
      root.style.setProperty('--theme-border', 'rgba(255, 255, 255, 0.125)');
      root.style.setProperty('--theme-accent', 'rgb(236, 72, 153)');
    }
  }, [currentTheme]);

  return (
    <>
      {children}
      
      {/* Theme Components */}
      <MickeyTheme isActive={currentTheme === 'mickey'} />
      <CyberpunkTheme isActive={currentTheme === 'cyberpunk'} />
      <TransformersTheme isActive={currentTheme === 'transformers'} />
      <Retro90sTheme isActive={currentTheme === 'retro90s'} />
      
      {/* All themes complete! */}
    </>
  );
}