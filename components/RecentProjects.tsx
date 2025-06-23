import { FaLocationArrow } from "react-icons/fa6";
import { getThemedProjects, getThemedText } from "@/data";
import { PinContainer } from "./ui/Pin";
import { ThemeVersion } from "./ThemeManager";
import Image from "next/image";

interface RecentProjectsProps {
  currentTheme?: ThemeVersion;
}

const RecentProjects = ({ currentTheme = 'current' }: RecentProjectsProps) => {
  const projects = getThemedProjects(currentTheme);
  
  // Theme-aware section title
  const sectionTitle = getThemedText("A small selection of recent projects", currentTheme);
  const ctaText = getThemedText("Check Live Site", currentTheme);

  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        {sectionTitle.split(' ').slice(0, -2).join(' ')}{" "}
        <span className="text-orange-500">{sectionTitle.split(' ').slice(-2).join(' ')}</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer 
              title={
                currentTheme === 'mickey' ? "Swell Applications!" :
                currentTheme === 'cyberpunk' ? "Digital Matrix Apps" :
                currentTheme === 'transformers' ? "Combat Applications" :
                currentTheme === 'retro90s' ? "WEB APPLICATIONS!!!" :
                "Web Applications"
              } 
              href=""
            >
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <Image 
                      src="/bg.png" 
                      alt="background image" 
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                      priority={item.id <= 2} // Prioritize first 2 images
                    />
                  </div>
                  <Image
                    src={item.img}
                    alt={`${item.title} project cover`}
                    width={400}
                    height={300}
                    className="z-10 absolute bottom-0"
                    priority={item.id <= 2} // Prioritize first 2 images
                  />
                </div>
              </a>
              
              <h1 
                className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1"
                style={{
                  fontFamily: currentTheme === 'mickey' ? 'Mickey, Times New Roman, serif' :
                             currentTheme === 'cyberpunk' ? 'Orbitron, monospace' :
                             currentTheme === 'transformers' ? 'Audiowide, monospace' :
                             currentTheme === 'retro90s' ? 'MS Sans Serif, sans-serif' :
                             'inherit'
                }}
              >
                {item.title}
              </h1>
              
              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                  fontFamily: currentTheme === 'mickey' ? 'Times New Roman, serif' :
                             currentTheme === 'cyberpunk' ? 'Rajdhani, sans-serif' :
                             currentTheme === 'transformers' ? 'Exo 2, sans-serif' :
                             currentTheme === 'retro90s' ? 'MS Sans Serif, sans-serif' :
                             'inherit'
                }}
              >
                {item.des}
              </p>
              
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image 
                        src={icon} 
                        alt={`technology icon ${index + 1}`}
                        width={20}
                        height={20}
                        className="p-2" 
                      />
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-center items-center">
                  <p 
                    className="flex lg:text-xl md:text-xs text-sm text-purple"
                    style={{
                      fontFamily: currentTheme === 'mickey' ? 'Times New Roman, serif' :
                                 currentTheme === 'cyberpunk' ? 'Share Tech Mono, monospace' :
                                 currentTheme === 'transformers' ? 'Michroma, monospace' :
                                 currentTheme === 'retro90s' ? 'MS Sans Serif, sans-serif' :
                                 'inherit'
                    }}
                  >
                    {ctaText}
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;