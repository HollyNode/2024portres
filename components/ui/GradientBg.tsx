"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { ThemeVersion } from "../ThemeManager";

export const BackgroundGradientAnimation = ({
  gradientBackgroundStart,
  gradientBackgroundEnd,
  firstColor,
  secondColor,
  thirdColor,
  fourthColor,
  fifthColor,
  pointerColor,
  size = "80%",
  blendingValue = "hard-light",
  children,
  className,
  interactive = true,
  containerClassName,
  currentTheme = 'current',
}: {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: string;
  children?: React.ReactNode;
  className?: string;
  interactive?: boolean;
  containerClassName?: string;
  currentTheme?: ThemeVersion;
}) => {
  const interactiveRef = useRef<HTMLDivElement>(null);

  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);

  // Get theme-specific colors
  const getThemeColors = () => {
    switch (currentTheme) {
      case 'mickey':
        return {
          gradientBackgroundStart: "rgb(139, 0, 0)",      // Deep red
          gradientBackgroundEnd: "rgb(255, 215, 0)",       // Gold
          firstColor: "255, 215, 0",                       // Gold
          secondColor: "255, 0, 0",                        // Red
          thirdColor: "255, 255, 255",                     // White
          fourthColor: "0, 0, 0",                          // Black
          fifthColor: "255, 165, 0",                       // Orange
          pointerColor: "255, 255, 0",                     // Yellow
        };
      case 'cyberpunk':
        return {
          gradientBackgroundStart: "rgb(0, 0, 0)",         // Black
          gradientBackgroundEnd: "rgb(74, 20, 140)",       // Deep purple
          firstColor: "0, 188, 212",                       // Cyan
          secondColor: "221, 74, 255",                     // Magenta
          thirdColor: "0, 255, 255",                       // Bright cyan
          fourthColor: "255, 0, 255",                      // Bright magenta
          fifthColor: "0, 150, 255",                       // Electric blue
          pointerColor: "0, 255, 150",                     // Neon green
        };
      case 'transformers':
        return {
          gradientBackgroundStart: "rgb(44, 44, 44)",      // Dark gray
          gradientBackgroundEnd: "rgb(139, 0, 0)",         // Deep red
          firstColor: "255, 215, 0",                       // Gold
          secondColor: "255, 0, 0",                        // Red
          thirdColor: "255, 140, 0",                       // Orange
          fourthColor: "169, 169, 169",                    // Dark gray
          fifthColor: "255, 255, 0",                       // Yellow
          pointerColor: "255, 69, 0",                      // Red-orange
        };
      case 'retro90s':
        return {
          gradientBackgroundStart: "rgb(192, 192, 192)",   // Silver
          gradientBackgroundEnd: "rgb(128, 0, 128)",       // Purple
          firstColor: "255, 105, 180",                     // Hot pink
          secondColor: "128, 0, 128",                      // Purple
          thirdColor: "0, 255, 255",                       // Cyan
          fourthColor: "255, 255, 0",                      // Yellow
          fifthColor: "255, 20, 147",                      // Deep pink
          pointerColor: "255, 0, 255",                     // Magenta
        };
      default:
        return {
          gradientBackgroundStart: gradientBackgroundStart || "rgb(108, 0, 162)",
          gradientBackgroundEnd: gradientBackgroundEnd || "rgb(0, 17, 82)",
          firstColor: firstColor || "18, 113, 255",
          secondColor: secondColor || "221, 74, 255",
          thirdColor: thirdColor || "100, 220, 255",
          fourthColor: fourthColor || "200, 50, 50",
          fifthColor: fifthColor || "rgb(255, 165, 0)",
          pointerColor: pointerColor || "140, 100, 255",
        };
    }
  };

  const themeColors = getThemeColors();

  useEffect(() => {
    document.body.style.setProperty(
      "--gradient-background-start",
      themeColors.gradientBackgroundStart
    );
    document.body.style.setProperty(
      "--gradient-background-end",
      themeColors.gradientBackgroundEnd
    );
    document.body.style.setProperty("--first-color", themeColors.firstColor);
    document.body.style.setProperty("--second-color", themeColors.secondColor);
    document.body.style.setProperty("--third-color", themeColors.thirdColor);
    document.body.style.setProperty("--fourth-color", themeColors.fourthColor);
    document.body.style.setProperty("--fifth-color", themeColors.fifthColor);
    document.body.style.setProperty("--pointer-color", themeColors.pointerColor);
    document.body.style.setProperty("--size", size);
    document.body.style.setProperty("--blending-value", blendingValue);
  }, [currentTheme, themeColors, size, blendingValue]);

  useEffect(() => {
    function move() {
      if (!interactiveRef.current) {
        return;
      }
      setCurX(curX + (tgX - curX) / 20);
      setCurY(curY + (tgY - curY) / 20);
      interactiveRef.current.style.transform = `translate(${Math.round(
        curX
      )}px, ${Math.round(curY)}px)`;
    }

    move();
  }, [tgX, tgY, curX, curY]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (interactiveRef.current) {
      const rect = interactiveRef.current.getBoundingClientRect();
      setTgX(event.clientX - rect.left);
      setTgY(event.clientY - rect.top);
    }
  };

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  return (
    <div
      className={cn(
        "w-full h-full absolute overflow-hidden top-0 left-0 bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]",
        containerClassName
      )}
    >
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className={cn("", className)}>{children}</div>
      <div
        className={cn(
          "gradients-container h-full w-full blur-lg",
          isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]"
        )}
      >
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_var(--first-color)_0,_var(--first-color)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:center_center]`,
            `animate-first`,
            `opacity-100`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-400px)]`,
            `animate-second`,
            `opacity-100`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%+400px)]`,
            `animate-third`,
            `opacity-100`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-200px)]`,
            `animate-fourth`,
            `opacity-70`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-800px)_calc(50%+800px)]`,
            `animate-fifth`,
            `opacity-100`
          )}
        ></div>

        {interactive && (
          <div
            ref={interactiveRef}
            onMouseMove={handleMouseMove}
            className={cn(
              `absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat]`,
              `[mix-blend-mode:var(--blending-value)] w-full h-full -top-1/2 -left-1/2`,
              `opacity-70`
            )}
          ></div>
        )}
      </div>
    </div>
  );
};