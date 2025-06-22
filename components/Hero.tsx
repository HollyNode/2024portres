'use client';

import React from 'react';
import { ArrowRight, Sparkles, Code, Zap, Globe } from 'lucide-react';
// import MagicButton from './ui/MagicButton';
// import { Spotlight } from './ui/Spotlight';
// import { TextRevealCard } from './ui/text-reveal-card';

// Temporary fallback components for debugging
const MagicButton = ({ title, icon, position, handleClick, otherClasses }: any) => (
  <button onClick={handleClick} className={`px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors ${otherClasses}`}>
    {title} {icon}
  </button>
);

const Spotlight = ({ className, fill }: any) => (
  <div className={`absolute ${className}`} style={{ background: `radial-gradient(circle, ${fill}20 0%, transparent 70%)` }} />
);

const TextRevealCard = ({ text, revealText, className }: any) => (
  <div className={`text-2xl font-bold mb-4 ${className}`}>
    <span className="text-gray-400">{text}</span>
    <br />
    <span className="text-white">{revealText}</span>
  </div>
);

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-2000" />

      {/* Spotlights */}
      <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
      <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
      <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="orange" />

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 backdrop-blur-sm animate-fade-in">
            <Sparkles className="h-4 w-4" />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Web 2, 2.5, 3 & Beyond 🚀
            </span>
          </div>

          {/* Main Heading with Text Reveal Effect */}
          <div className="mb-8">
            <TextRevealCard
              text="ENVY NOTHING"
              revealText="BUILD EVERYTHING"
              className="mx-auto mb-4"
            />
            
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl animate-slide-up-delayed">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                Code the Future
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="mx-auto mb-12 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl animate-fade-in-delayed">
            Greetings! I&apos;m <span className="font-semibold text-white">Matt</span>, a Full-Stack/Blockchain Engineer in SoCal.
            <br />
            <span className="text-slate-400">Crafting digital experiences that push boundaries.</span>
          </p>

          {/* Feature Pills */}
          <div className="mb-12 flex flex-wrap justify-center gap-3 animate-fade-in-more-delayed">
            <div className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm text-slate-300 backdrop-blur-sm hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300">
              <Code className="h-4 w-4 text-blue-400" />
              Full-Stack Development
            </div>
            <div className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm text-slate-300 backdrop-blur-sm hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300">
              <Zap className="h-4 w-4 text-purple-400" />
              Blockchain Engineering
            </div>
            <div className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm text-slate-300 backdrop-blur-sm hover:border-orange-500/50 hover:bg-orange-500/10 transition-all duration-300">
              <Globe className="h-4 w-4 text-orange-400" />
              Web3 Innovation
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6 animate-fade-in-most-delayed">
            <MagicButton
              title="View My Work"
              icon={<ArrowRight className="h-4 w-4" />}
              position="right"
              handleClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              otherClasses="primary"
            />
            
            <button className="group relative overflow-hidden rounded-full border border-slate-700 bg-transparent px-8 py-3 text-slate-300 transition-all duration-300 hover:border-slate-500 hover:text-white">
              <span className="relative z-10 flex items-center gap-2 font-medium">
                Get In Touch
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 transition-opacity group-hover:opacity-100" />
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center gap-2 text-slate-400">
              <span className="text-xs uppercase tracking-widest">Scroll</span>
              <ArrowRight className="h-4 w-4 rotate-90" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;