"use client";

import Image from "next/image";
import Hero from "../components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Grid from "../components/Grid";
import RecentProjects from "@/components/RecentProjects";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import { useState, useEffect, useRef } from "react";
import ThemeManager, { ThemeVersion } from "@/components/ThemeManager";
import MickeyToast from "@/components/MickeyToast";
import CyberpunkToast from "@/components/CyberpunkToast";
import TransformersToast from "@/components/TransformersToast";
import Retro90sToast from "@/components/Retro90sToast";

export default function Home() {
  // Theme state
  const [currentTheme, setCurrentTheme] = useState<ThemeVersion>('current');
  const [showMickeyToast, setShowMickeyToast] = useState(false);
  const [showCyberpunkToast, setShowCyberpunkToast] = useState(false);
  const [showTransformersToast, setShowTransformersToast] = useState(false);
  const [showRetro90sToast, setShowRetro90sToast] = useState(false);

  // Secret menu state
  const [showSecretMenu, setShowSecretMenu] = useState(false);
  const [showContraToast, setShowContraToast] = useState(false);
  const [keySequence, setKeySequence] = useState<string[]>([]);
  const [hasSeenToast, setHasSeenToast] = useState(false);
  const [hasUsedKonami, setHasUsedKonami] = useState(false);
  const toastTimeoutRef = useRef<NodeJS.Timeout>();
  
  // Define Konami code outside of useEffect to avoid dependency warning
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

  // Handle theme changes
  const handleThemeChange = (newTheme: ThemeVersion) => {
    setCurrentTheme(newTheme);
    
    // Show theme-specific toasts
    if (newTheme === 'mickey') {
      setShowMickeyToast(true);
      setTimeout(() => setShowMickeyToast(false), 4000);
    } else if (newTheme === 'cyberpunk') {
      setShowCyberpunkToast(true);
      setTimeout(() => setShowCyberpunkToast(false), 5000);
    } else if (newTheme === 'transformers') {
      setShowTransformersToast(true);
      setTimeout(() => setShowTransformersToast(false), 5000);
    } else if (newTheme === 'retro90s') {
      setShowRetro90sToast(true);
      setTimeout(() => setShowRetro90sToast(false), 6000);
    }
  };

  // Handle scroll detection for Contra toast
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      if (!hasSeenToast && !hasUsedKonami && scrollY >= 2000) {
        setShowContraToast(true);
        setHasSeenToast(true);
        
        toastTimeoutRef.current = setTimeout(() => {
          setShowContraToast(false);
        }, 8000);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    };
  }, [hasSeenToast, hasUsedKonami]);

  // Handle Konami Code
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const newSequence = [...keySequence, event.code].slice(-konamiCode.length);
      setKeySequence(newSequence);
      
      if (newSequence.join(',') === konamiCode.join(',')) {
        setShowSecretMenu(true);
        setHasUsedKonami(true);
        setShowContraToast(false);
        
        document.body.style.animation = 'contra-flash 0.5s ease-out';
        setTimeout(() => {
          document.body.style.animation = '';
        }, 500);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [keySequence, konamiCode]); // Added konamiCode to dependencies

  const ContraToast = () => (
    <div className="fixed bottom-6 right-6 z-40 animate-slide-in">
      <div className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 border-2 border-yellow-400 rounded-lg p-4 shadow-2xl max-w-xs">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded border-2 border-yellow-400 overflow-hidden bg-black">
            <div 
              className="tenor-gif-embed w-full h-full" 
              data-postid="21811570" 
              data-share-method="host" 
              data-aspect-ratio="1" 
              data-width="100%"
              style={{minHeight: '48px'}}
            >
              <a href="https://tenor.com/view/contra-gif-21811570">Contra GIF</a>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="text-white font-bold text-sm tracking-wider contra-text">
              INCOMING TRANSMISSION
            </div>
          </div>
          
          <button 
            onClick={() => setShowContraToast(false)}
            className="text-yellow-200 hover:text-white text-lg font-bold"
          >
            ×
          </button>
        </div>
        
        <div className="text-yellow-100 text-sm mb-3 font-mono">
          <div className="animate-type-writer">
            Try the <span className="text-yellow-300 font-bold">Contra Code</span>!
          </div>
          <div className="text-xs text-orange-200 mt-1 animate-pulse">
            ↑↑↓↓←→←→BA
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex gap-1">
            {[1,2,3].map(i => (
              <div key={i} className={`w-2 h-2 bg-yellow-400 animate-pulse`} style={{animationDelay: `${i * 200}ms`}}></div>
            ))}
          </div>
          <div className="text-xs text-yellow-200 font-mono">30 LIVES</div>
        </div>
      </div>
      
      <script type="text/javascript" async src="https://tenor.com/embed.js" />
    </div>
  );

  const SecretMenu = () => (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="bg-gradient-to-br from-white/10 via-pink-500/5 to-orange-500/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
          
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-transparent to-orange-500/20 animate-pulse"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          
          <div className="relative z-10">
            <div className="text-center mb-8">
              <div className="inline-block">
                <h1 className="text-5xl font-thin text-white mb-2 tracking-widest">
                  <span className="bg-gradient-to-r from-pink-400 via-orange-300 to-pink-400 bg-clip-text text-transparent">
                    CHEF&apos;S
                  </span>
                </h1>
                <h2 className="text-6xl font-bold text-white mb-4 tracking-wider">
                  <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-orange-400 bg-clip-text text-transparent animate-gradient-x">
                    SPECIAL
                  </span>
                </h2>
                <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent mx-auto mb-2"></div>
                <p className="text-white/70 text-sm font-light tracking-[0.3em] uppercase">
                  Senior Full-Stack Engineering Services
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[
                { icon: '🎨', title: 'Frontend Artistry', desc: 'React, Next.js, TypeScript', detail: 'Interactive experiences crafted with precision', color: 'pink' },
                { icon: '⚡', title: 'Backend Mastery', desc: 'Node.js, Python, Rust, PostgreSQL', detail: 'Scalable architectures that never break', color: 'orange' },
                { icon: '🔗', title: 'Web3 Innovation', desc: 'Smart Contracts, DeFi, RWA', detail: 'Decentralized future, built today', color: 'pink' },
                { icon: '📱', title: 'Mobile Excellence', desc: 'React Native, Flutter', detail: 'Cross-platform perfection', color: 'orange' },
                { icon: '☁️', title: 'Cloud Architecture', desc: 'AWS, Docker, Kubernetes', detail: 'Infrastructure that scales infinitely', color: 'pink' },
                { icon: '🎯', title: 'Product Vision', desc: 'Strategy, Roadmaps, Leadership', detail: 'From concept to market domination', color: 'orange' }
              ].map((service, index) => (
                <div key={index} className="group">
                  <div className={`bg-white/5 backdrop-blur-sm border border-${service.color}-300/30 rounded-2xl p-6 hover:bg-white/10 hover:border-${service.color}-400/50 transition-all duration-500 transform hover:scale-105 ${index % 2 === 0 ? 'hover:rotate-1' : 'hover:-rotate-1'}`}>
                    <div className="text-3xl mb-4 group-hover:animate-bounce">{service.icon}</div>
                    <h3 className={`text-xl font-semibold text-${service.color}-300 mb-2`}>{service.title}</h3>
                    <p className="text-white/60 text-sm mb-3">{service.desc}</p>
                    <div className={`text-xs text-${service.color === 'pink' ? 'orange' : 'pink'}-300/80`}>{service.detail}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-pink-500/20 to-orange-500/20 backdrop-blur-sm border border-white/30 rounded-3xl p-6 mb-8">
              <div className="text-center">
                <div className="text-2xl mb-3">🌟</div>
                <h3 className="text-2xl font-light text-white mb-2">
                  <span className="bg-gradient-to-r from-pink-300 to-orange-300 bg-clip-text text-transparent">
                    Signature Experience
                  </span>
                </h3>
                <p className="text-white/80 text-lg mb-4">Full-Stack Product Development</p>
                <p className="text-white/60 text-sm max-w-2xl mx-auto leading-relaxed">
                  20 years of crafting digital experiences from concept to deployment. 
                  Every line of code seasoned with expertise, every architecture designed for excellence.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-medium rounded-2xl hover:from-pink-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25">
                <span className="flex items-center gap-2">
                  <span>Reserve Your Project</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </button>
              
              <button 
                onClick={() => setShowSecretMenu(false)}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 font-light rounded-2xl hover:bg-white/20 hover:text-white transition-all duration-300"
              >
                Return to Menu
              </button>
            </div>

            <button 
              onClick={() => setShowSecretMenu(false)}
              className="absolute top-6 right-6 w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/60 hover:text-white hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
            >
              ×
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <ThemeManager currentTheme={currentTheme}>
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <FloatingNav 
            navItems={navItems} 
            currentTheme={currentTheme}
            onThemeChange={handleThemeChange}
          />
          <Hero />
          <Grid />
          <RecentProjects />
          {/*<Clients />*/}
          <Experience />
          {/*<Approach />*/}
          <Footer />
        </div>
        
        {/* Toast Notifications */}
        {showMickeyToast && <MickeyToast onClose={() => setShowMickeyToast(false)} />}
        {showCyberpunkToast && <CyberpunkToast onClose={() => setShowCyberpunkToast(false)} />}
        {showTransformersToast && <TransformersToast onClose={() => setShowTransformersToast(false)} />}
        {showRetro90sToast && <Retro90sToast onClose={() => setShowRetro90sToast(false)} />}
        {showContraToast && <ContraToast />}
        {showSecretMenu && <SecretMenu />}
      </main>

      {/* Base animations that work across all themes */}
      <style jsx global>{`
        @keyframes slide-in {
          0% {
            transform: translateX(100%) translateY(20px);
            opacity: 0;
          }
          100% {
            transform: translateX(0) translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes type-writer {
          0% { width: 0; }
          100% { width: 100%; }
        }
        
        @keyframes contra-flash {
          0% { filter: brightness(1) hue-rotate(0deg); }
          25% { filter: brightness(2) hue-rotate(90deg); }
          50% { filter: brightness(3) hue-rotate(180deg); }
          75% { filter: brightness(2) hue-rotate(270deg); }
          100% { filter: brightness(1) hue-rotate(360deg); }
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-slide-in {
          animation: slide-in 0.8s ease-out;
        }
        
        .animate-type-writer {
          overflow: hidden;
          white-space: nowrap;
          animation: type-writer 2s steps(20) 1s both;
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
        
        .contra-text {
          text-shadow: 2px 2px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000;
          letter-spacing: 1px;
        }
      `}</style>
    </ThemeManager>
  );
}