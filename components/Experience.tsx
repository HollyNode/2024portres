import React from "react";
import Image from "next/image";
import { getThemedWorkExperience, getThemedText } from "@/data";
import { Button } from "./ui/MovingBorders";
import { ThemeVersion } from "./ThemeManager";

interface ExperienceProps {
  currentTheme?: ThemeVersion;
}

const Experience = ({ currentTheme = 'current' }: ExperienceProps) => {
  const workExperience = getThemedWorkExperience(currentTheme);
  
  // Theme-aware section title
  const sectionTitle = getThemedText("My work experience", currentTheme);

  return (
    <div className="py-20 w-full">
      <h1 
        className="heading"
        style={{
          fontFamily: currentTheme === 'mickey' ? 'Mickey, Times New Roman, serif' :
                     currentTheme === 'cyberpunk' ? 'Orbitron, monospace' :
                     currentTheme === 'transformers' ? 'Audiowide, monospace' :
                     currentTheme === 'retro90s' ? 'MS Sans Serif, sans-serif' :
                     'inherit'
        }}
      >
        {sectionTitle.split(' ').slice(0, -2).join(' ')}{" "}
        <span className="text-orange-500">{sectionTitle.split(' ').slice(-2).join(' ')}</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius={currentTheme === 'retro90s' ? "0rem" : "1.75rem"}
            style={{
              background: currentTheme === 'mickey' ? "#ffffff" :
                         currentTheme === 'cyberpunk' ? "linear-gradient(135deg, rgba(0,255,255,0.1) 0%, rgba(255,0,255,0.1) 100%)" :
                         currentTheme === 'transformers' ? "linear-gradient(135deg, rgba(255,215,0,0.1) 0%, rgba(220,38,38,0.1) 100%)" :
                         currentTheme === 'retro90s' ? "#c0c0c0" :
                         "rgb(4,7,29)",
              backgroundColor: currentTheme === 'mickey' ? "#ffffff" :
                              currentTheme === 'cyberpunk' ? "linear-gradient(135deg, rgba(0,255,255,0.1) 0%, rgba(255,0,255,0.1) 100%)" :
                              currentTheme === 'transformers' ? "linear-gradient(135deg, rgba(255,215,0,0.1) 0%, rgba(220,38,38,0.1) 100%)" :
                              currentTheme === 'retro90s' ? "#c0c0c0" :
                              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: currentTheme === 'retro90s' ? "0rem" : `calc(1.75rem * 0.96)`,
              border: currentTheme === 'mickey' ? "4px solid #000" :
                     currentTheme === 'cyberpunk' ? "2px solid #00ffff" :
                     currentTheme === 'transformers' ? "3px solid #ffd700" :
                     currentTheme === 'retro90s' ? "3px outset #c0c0c0" :
                     "none",
              boxShadow: currentTheme === 'mickey' ? "6px 6px 0px #000" :
                        currentTheme === 'cyberpunk' ? "0 0 20px rgba(0,255,255,0.3)" :
                        currentTheme === 'transformers' ? "0 0 20px rgba(255,215,0,0.3), 0 4px 0px #ff8800" :
                        currentTheme === 'retro90s' ? "2px 2px 4px #808080" :
                        "none"
            }}
            className={`flex-1 border-neutral-200 dark:border-slate-800 ${
              currentTheme === 'mickey' ? 'text-black' :
              currentTheme === 'cyberpunk' ? 'text-cyan-400' :
              currentTheme === 'transformers' ? 'text-yellow-400' :
              currentTheme === 'retro90s' ? 'text-black' :
              'text-black dark:text-white'
            }`}
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <Image
                src={card.thumbnail}
                alt={`${card.title} experience thumbnail`}
                width={128}
                height={128}
                className="lg:w-32 md:w-20 w-16"
                style={{
                  filter: currentTheme === 'mickey' ? 'contrast(1.2) saturate(0.8)' :
                         currentTheme === 'cyberpunk' ? 'hue-rotate(180deg) saturate(1.5)' :
                         currentTheme === 'transformers' ? 'contrast(1.3) saturate(1.2)' :
                         currentTheme === 'retro90s' ? 'contrast(1.1) saturate(0.9)' :
                         'none'
                }}
              />
              <div className="lg:ms-5">
                <h1 
                  className="text-start text-xl md:text-2xl font-bold"
                  style={{
                    fontFamily: currentTheme === 'mickey' ? 'Mickey, Times New Roman, serif' :
                               currentTheme === 'cyberpunk' ? 'Orbitron, monospace' :
                               currentTheme === 'transformers' ? 'Audiowide, monospace' :
                               currentTheme === 'retro90s' ? 'MS Sans Serif, sans-serif' :
                               'inherit',
                    color: currentTheme === 'mickey' ? '#000' :
                          currentTheme === 'cyberpunk' ? '#00ffff' :
                          currentTheme === 'transformers' ? '#ffd700' :
                          currentTheme === 'retro90s' ? '#000' :
                          'inherit',
                    textShadow: currentTheme === 'mickey' ? '2px 2px 0px #ccc' :
                               currentTheme === 'cyberpunk' ? '0 0 10px #00ffff' :
                               currentTheme === 'transformers' ? '0 0 10px #ffd700, 2px 2px 0px #000' :
                               currentTheme === 'retro90s' ? '1px 1px 0px #808080' :
                               'none'
                  }}
                >
                  {card.title}
                </h1>
                <p 
                  className="text-start mt-3 font-semibold"
                  style={{
                    fontFamily: currentTheme === 'mickey' ? 'Times New Roman, serif' :
                               currentTheme === 'cyberpunk' ? 'Rajdhani, sans-serif' :
                               currentTheme === 'transformers' ? 'Exo 2, sans-serif' :
                               currentTheme === 'retro90s' ? 'MS Sans Serif, sans-serif' :
                               'inherit',
                    color: currentTheme === 'mickey' ? '#333' :
                          currentTheme === 'cyberpunk' ? '#00ffff' :
                          currentTheme === 'transformers' ? '#cbd5e1' :
                          currentTheme === 'retro90s' ? '#000' :
                          '#BEC1DD'
                  }}
                >
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;