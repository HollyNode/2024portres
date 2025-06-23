// components/AppWrapper.tsx
"use client";

import { ThemeProvider } from './ThemeProvider';
import { ReactNode } from 'react';

export default function AppWrapper({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}