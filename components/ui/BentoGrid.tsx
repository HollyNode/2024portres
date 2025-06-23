'use client';

import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Image from "next/image";

// Also install this npm i --save-dev @types/react-lottie
import Lottie from "react-lottie";

import { cn } from "@/lib/utils";
import { ThemeVersion } from "../ThemeManager";
import { getThemedText } from "@/data";

import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import { MagicButton } from "../ui/MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  currentTheme = 'current',
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  currentTheme?: ThemeVersion;
}) => {
  // Theme-aware tech stack lists
  const getThemedTechStacks = () => {
    switch (currentTheme) {
      case 'mickey':
        return {
          leftLists: ["ReactJS Magic", "Express Fun", "Typescript Joy"],
          rightLists: ["VueJS Smiles", "NuxtJS Glee", "GraphQL Wonder"]
        };
      case 'cyberpunk':
        return {
          leftLists: ["React.exe", "Express.dll", "TypeScript.bin"],
          rightLists: ["Vue.sys", "Nuxt.core", "GraphQL.net"]
        };
      case 'transformers':
        return {
          leftLists: ["REACT-CORE", "EXPRESS-ENGINE", "TYPESCRIPT-ARMOR"],
          rightLists: ["VUE-PROTOCOL", "NUXT-SYSTEM", "GRAPHQL-MATRIX"]
        };
      case 'retro90s':
        return {
          leftLists: ["REACTJS.HTML", "EXPRESS.CGI", "TYPESCRIPT.JS"],
          rightLists: ["VUEJS.APPLET", "NUXTJS.FRAME", "GRAPHQL.XML"]
        };
      default:
        return {
          leftLists: ["ReactJS", "Express", "Typescript"],
          rightLists: ["VueJS", "NuxtJS", "GraphQL"]
        };
    }
  };

  const { leftLists, rightLists } = getThemedTechStacks();

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "matt@envynothingbuild.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  // Theme-specific styling
  const getThemeStyles = () => {
    switch (currentTheme) {
      case 'mickey':
        return {
          background: "linear-gradient(135deg, #8B0000 0%, #FFD700 50%, #000000 100%)",
          borderColor: "border-yellow-400/30",
          textColor: "text-yellow-100",
          titleColor: "text-white",
          stackBg: "bg-red-900/50",
          buttonBg: "!bg-yellow-600/20",
          fontFamily: "font-family: 'Comic Sans MS', cursive"
        };
      case 'cyberpunk':
        return {
          background: "linear-gradient(135deg, #000000 0%, #4A148C 50%, #00BCD4 100%)",
          borderColor: "border-cyan-400/30",
          textColor: "text-cyan-100",
          titleColor: "text-cyan-300",
          stackBg: "bg-purple-900/50",
          buttonBg: "!bg-cyan-600/20",
          fontFamily: "font-family: 'Orbitron', monospace"
        };
      case 'transformers':
        return {
          background: "linear-gradient(135deg, #2C2C2C 0%, #8B0000 50%, #FFD700 100%)",
          borderColor: "border-yellow-400/30",
          textColor: "text-yellow-100",
          titleColor: "text-yellow-300",
          stackBg: "bg-red-900/50",
          buttonBg: "!bg-yellow-600/20",
          fontFamily: "font-family: 'Audiowide', cursive"
        };
      case 'retro90s':
        return {
          background: "linear-gradient(135deg, #C0C0C0 0%, #800080 50%, #FF69B4 100%)",
          borderColor: "border-white/50",
          textColor: "text-black",
          titleColor: "text-purple-900",
          stackBg: "bg-white/30",
          buttonBg: "!bg-purple-600/20",
          fontFamily: "font-family: 'MS Sans Serif', sans-serif"
        };
      default:
        return {
          background: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          borderColor: "border-white/[0.1]",
          textColor: "text-[#C1C2D3]",
          titleColor: "text-white",
          stackBg: "bg-[#10132E]",
          buttonBg: "!bg-[#161A31]",
          fontFamily: "font-family: inherit"
        };
    }
  };

  const themeStyles = getThemeStyles();

  // Theme-aware button text
  const copyButtonText = getThemedText(
    copied ? "Email is Copied!" : "Copy my email address",
    currentTheme
  );

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        themeStyles.borderColor,
        className
      )}
      style={{
        background: themeStyles.background,
        fontFamily: themeStyles.fontFamily
      }}
    >
      {/* add img divs */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              src={img}
              alt={`Grid item ${id} image`}
              width={400}
              height={300}
              className={cn(imgClassName, "object-cover object-center")}
              priority={id <= 2}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
            } `}
        >
          {spareImg && (
            <Image
              src={spareImg}
              alt={`Grid item ${id} spare image`}
              width={220}
              height={220}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          // add background animation , remove the p tag
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
          <div className={`font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm ${themeStyles.textColor} z-10`}>
            {description}
          </div>
          {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
          {/* remove mb-2 mt-2 */}
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10 ${themeStyles.titleColor}`}
          >
            {title}
          </div>

          {/* for the github 3d globe */}
          {id === 2 && <GridGlobe />}

          {/* Tech stack list div */}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              {/* tech stack lists */}
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className={`lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center ${themeStyles.stackBg} ${themeStyles.textColor}`}
                  >
                    {item}
                  </span>
                ))}
                <span className={`lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center ${themeStyles.stackBg}`}></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className={`lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center ${themeStyles.stackBg}`}></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className={`lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center ${themeStyles.stackBg} ${themeStyles.textColor}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              {/* button border magic from tailwind css buttons  */}
              {/* add rounded-md h-8 md:h-8, remove rounded-full */}
              {/* remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 */}
              {/* add handleCopy() for the copy the text */}
              <div
                className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"
                  }`}
              >
                {/* <img src="/confetti.gif" alt="confetti" /> */}
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

              <MagicButton
                title={copyButtonText}
                icon={<IoCopyOutline />}
                position="left"
                onClick={handleCopy}
                className={themeStyles.buttonBg}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};