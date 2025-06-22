// ===== MagicButton.tsx =====
'use client';


interface MagicButtonProps {
  title: string;
  icon?: React.ReactNode;
  position?: 'left' | 'right';
  onClick?: () => void;
  className?: string;
}

export const MagicButton: React.FC<MagicButtonProps> = ({
  title,
  icon,
  position = 'right',
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 font-medium text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105",
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500 before:to-purple-500 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100",
        "after:absolute after:inset-[1px] after:rounded-full after:bg-gradient-to-r after:from-blue-600 after:to-purple-600 after:transition-all",
        className === 'primary' && "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400",
        className
      )}
    >
      <span className="relative z-10 flex items-center gap-2">
        {position === 'left' && icon && (
          <span className="transition-transform group-hover:-translate-x-1">
            {icon}
          </span>
        )}
        
        <span className="bg-gradient-to-r from-white to-slate-100 bg-clip-text text-transparent font-semibold">
          {title}
        </span>
        
        {position === 'right' && icon && (
          <span className="transition-transform group-hover:translate-x-1">
            {icon}
          </span>
        )}
      </span>
      
      {/* Animated background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-size-200 animate-gradient-x opacity-75" />
    </button>
  );
};

// ===== Spotlight.tsx =====
'use client';

import React from "react";
import { cn } from "@/lib/utils";

type SpotlightProps = {
  className?: string;
  fill?: string;
};

export const Spotlight = ({ className, fill }: SpotlightProps) => {
  return (
    <svg
      className={cn(
        "animate-spotlight pointer-events-none absolute z-[1] h-[169%] w-[138%] lg:w-[84%] opacity-0",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#filter)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill={fill || "white"}
          fillOpacity="0.21"
        ></ellipse>
      </g>
      <defs>
        <filter
          id="filter"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="151"
            result="effect1_foregroundBlur_1065_8"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
};
