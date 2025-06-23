import { ThemeVersion } from '@/components/ThemeManager';

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
];

// Theme-specific text transformations
export const getThemedText = (text: string, theme: ThemeVersion): string => {
  switch (theme) {
    case 'mickey':
      // 1930s cartoon style - playful and animated
      return text
        .replace(/I prioritize/i, "I make swell")
        .replace(/client collaboration/i, "cartoon camaraderie")
        .replace(/fostering open communication/i, "spreading the joy of teamwork!")
        .replace(/I'm flexible/i, "I'm as flexible as rubber hose animation")
        .replace(/distributed Earthly workflows/i, "workflows from here to Timbuktu!")
        .replace(/My tech stack/i, "My Cartoon Contraptions")
        .replace(/Quick to innovate/i, "Hot dog! Quick to innovate")
        .replace(/Slow to iterate/i, "Steady as Mickey's steamboat")
        .replace(/Tech enthusiast/i, "Gadget-loving cartoon character")
        .replace(/solutions as a service/i, "magical solutions that make folks smile")
        .replace(/Currently building/i, "Currently animating")
        .replace(/DEPIN software/i, "whimsical contraptions")
        .replace(/neighbourhood business integrations/i, "neighborhood fun and friendship tools")
        .replace(/Do you want to start a project together/i, "Say, would you like to create something swell together?");
    
    case 'cyberpunk':
      // Cyberpunk carnival - digital and flashy
      return text
        .replace(/I prioritize/i, "I hack together")
        .replace(/client collaboration/i, "neural-linked partnerships")
        .replace(/fostering open communication/i, "establishing encrypted data streams")
        .replace(/I'm flexible/i, "I adapt like shapeshifting code")
        .replace(/distributed Earthly workflows/i, "quantum-entangled digital networks")
        .replace(/My tech stack/i, "My Cyber Arsenal")
        .replace(/Quick to innovate/i, "Lightning-fast code mutation")
        .replace(/Slow to iterate/i, "Precise algorithm evolution")
        .replace(/Tech enthusiast/i, "Digital reality architect")
        .replace(/solutions as a service/i, "reality-bending tech services")
        .replace(/Currently building/i, "Currently compiling")
        .replace(/DEPIN software/i, "decentralized neon networks")
        .replace(/neighbourhood business integrations/i, "cyber-district corporate mesh protocols")
        .replace(/Do you want to start a project together/i, "Ready to jack into a new project matrix?");
    
    case 'transformers':
      // 80s mech - mechanical and powerful
      return text
        .replace(/I prioritize/i, "I engineer")
        .replace(/client collaboration/i, "tactical alliance protocols")
        .replace(/fostering open communication/i, "establishing secure comm channels")
        .replace(/I'm flexible/i, "I transform across")
        .replace(/distributed Earthly workflows/i, "multi-terrain operational systems")
        .replace(/My tech stack/i, "My Weapons Arsenal")
        .replace(/Quick to innovate/i, "Rapid-fire innovation protocols")
        .replace(/Slow to iterate/i, "Precision-engineered refinement")
        .replace(/Tech enthusiast/i, "Cybernetic warfare specialist")
        .replace(/solutions as a service/i, "tactical engineering solutions")
        .replace(/Currently building/i, "Currently assembling")
        .replace(/DEPIN software/i, "mechanized infrastructure systems")
        .replace(/neighbourhood business integrations/i, "sector-wide tactical business networks")
        .replace(/Do you want to start a project together/i, "Ready to form an alliance for a new mission?");
    
    case 'retro90s':
      // 90s web - enthusiastic and basic
      return text
        .replace(/I prioritize/i, "I TOTALLY PRIORITIZE")
        .replace(/client collaboration/i, "AWESOME CLIENT TEAMWORK")
        .replace(/fostering open communication/i, "CREATING SUPER COOL COMMUNICATION!")
        .replace(/I'm flexible/i, "I'M FLEXIBLE LIKE A WEB BROWSER")
        .replace(/distributed Earthly workflows/i, "WORLDWIDE WEB WORKFLOWS")
        .replace(/My tech stack/i, "MY RADICAL TECH STACK")
        .replace(/Quick to innovate/i, "WICKED FAST INNOVATION")
        .replace(/Slow to iterate/i, "STEADY LIKE DIAL-UP")
        .replace(/Tech enthusiast/i, "INTERNET SUPERHERO")
        .replace(/solutions as a service/i, "TOTALLY TUBULAR WEB SOLUTIONS")
        .replace(/Currently building/i, "CURRENTLY CODING")
        .replace(/DEPIN software/i, "INFORMATION SUPERHIGHWAY SOFTWARE")
        .replace(/neighbourhood business integrations/i, "NEIGHBORHOOD BUSINESS WEB RINGS")
        .replace(/Do you want to start a project together/i, "WANNA BUILD A PHAT WEBSITE TOGETHER?");
    
    default:
      return text;
  }
};

// Theme-aware grid items
export const getThemedGridItems = (theme: ThemeVersion) => [
  {
    id: 1,
    title: getThemedText("I prioritize client collaboration, fostering open communication", theme),
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.png",
    spareImg: "",
  },
  {
    id: 2,
    title: getThemedText("I'm flexible across distributed Earthly workflows.", theme),
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: getThemedText("My tech stack", theme),
    description: getThemedText("Quick to innovate. Slow to iterate.", theme),
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: getThemedText("Tech enthusiast with a passion for solutions as a service.", theme),
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: getThemedText("Currently building DEPIN software & neighbourhood business integrations", theme),
    description: theme === 'mickey' ? "The Inside Scoop-a-doop!" : 
                 theme === 'cyberpunk' ? "Neural Interface Status" : 
                 theme === 'transformers' ? "Mission Parameters" : 
                 theme === 'retro90s' ? "THE INSIDE SCOOP!!!" : 
                 "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: getThemedText("Do you want to start a project together?", theme),
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

// Theme-aware projects
export const getThemedProjects = (theme: ThemeVersion) => [
  {
    id: 1,
    title: theme === 'mickey' ? "OathMakr-a-Music!" : 
           theme === 'cyberpunk' ? "OATH.exe" : 
           theme === 'transformers' ? "OATHMAKR-PROTOCOL" : 
           theme === 'retro90s' ? "OATHMAKR.HTML" : 
           "OathMakr",
    des: theme === 'mickey' ? "Create swell tunes of any style! No studio, no band needed - just pure musical magic!" :
         theme === 'cyberpunk' ? "Generate bespoke audio frequencies. Neural-linked composition. Voice amplification protocols activated." :
         theme === 'transformers' ? "Deploy custom audio warfare systems. Studio-independent. Band-free operations. Voice modules online." :
         theme === 'retro90s' ? "MAKE AWESOME MUSIC OF ANY STYLE! NO STUDIO NEEDED! NEVER BE QUIET AGAIN!" :
         "Provide bespoke music of any genre, your lyrics. Studioless, Bandless. Never Voiceless again.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/udio.png", "/trello.png"],
    link: "https://www.oathmakr.com",
  },
  {
    id: 2,
    title: theme === 'mickey' ? "Heritage Treasures" : 
           theme === 'cyberpunk' ? "HERITAGE.NET" : 
           theme === 'transformers' ? "HERITAGE-MATRIX" : 
           theme === 'retro90s' ? "HERITAGE-VENTURES.COM" : 
           "Heritage Ventures",
    des: theme === 'mickey' ? "Share ownership of museum-quality treasures! Collect beautiful things together!" :
         theme === 'cyberpunk' ? "Fractionalized asset protocols for museum-grade digital artifacts. Ownership distributed across the grid." :
         theme === 'transformers' ? "Tactical ownership distribution systems for high-value cultural assets. Museum-grade security protocols." :
         theme === 'retro90s' ? "SHARE OWNERSHIP OF SUPER COOL MUSEUM STUFF! COLLECT AWESOME THINGS TOGETHER!" :
         "Fractional Ownership Platform for RWA's of museum quality.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/thirdweb.png", "/ipfs.png"],
    link: "https://hv-pxd3.vercel.app/",
  },
  {
    id: 3,
    title: theme === 'mickey' ? "Dante's Cartoon Inferno" : 
           theme === 'cyberpunk' ? "DANTE.AI" : 
           theme === 'transformers' ? "DANTE-PROTOCOL" : 
           theme === 'retro90s' ? "DANTES-INFERNO.HTML" : 
           "Dante's Inferno",
    des: theme === 'mickey' ? "From classic poetry to cartoon adventure! A modern tribute to a literary giant with animated flair!" :
         theme === 'cyberpunk' ? "Literary neural networks. Classic poetry compiled into interactive digital experience matrices." :
         theme === 'transformers' ? "Classic literature transformed into interactive combat systems. Literary giant tactical tribute." :
         theme === 'retro90s' ? "FROM POEM TO LITERATURE TO APP TO WEBSITE! A TOTALLY MODERN TRIBUTE TO A WRITING LEGEND!" :
         "From Poem to Literature to App to LLM. A modern retro homage to a literary giant",
    img: "/p3.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/aceturnity.png", "/ipfs.png"],
    link: "https://dip-one.vercel.app/intro",
  },
  {
    id: 4,
    title: theme === 'mickey' ? "Paylyte Magic" : 
           theme === 'cyberpunk' ? "PAY.EXE" : 
           theme === 'transformers' ? "PAYLYTE-SYSTEM" : 
           theme === 'retro90s' ? "PAYLYTE.COM" : 
           "Paylyte",
    des: theme === 'mickey' ? "Invoices that work faster than a cartoon chase scene!" :
         theme === 'cyberpunk' ? "Invoice acceleration protocols. Payment velocity enhancement modules activated." :
         theme === 'transformers' ? "Invoice deployment systems optimized for maximum operational efficiency." :
         theme === 'retro90s' ? "INVOICES THAT ARE TOTALLY FAST AND AWESOME FOR THE INFORMATION SUPERHIGHWAY!" :
         "Invoices, upgraded for modern web speed.",
    img: "/p4.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/c.svg", "/xmtp.png"],
    link: "https://paylyte.vercel.app/",
  },
  {
    id: 5,
    title: theme === 'mickey' ? "Spooky Lycanthropy Tales" : 
           theme === 'cyberpunk' ? "LYCAN.NET" : 
           theme === 'transformers' ? "LYCANTHROPE-ARCHIVES" : 
           theme === 'retro90s' ? "LYCANTHROPY-HOMEPAGE.HTML" : 
           "On Lycanthropy",
    des: theme === 'mickey' ? "Spooky stories & historical scares: A book promotion with cartoon charm!" :
         theme === 'cyberpunk' ? "Historical horror data streams. Literary terror network promotional interface." :
         theme === 'transformers' ? "Historical combat horror archives. Literary warfare documentation systems." :
         theme === 'retro90s' ? "SCARY HISTORICAL STORIES: BOOK WEBSITE WITH AWESOME GRAPHICS!" :
         "& Tales of Historical Horror: Book Promo Site",
    img: "/p5.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/aceturnity.png", "/midj-icon.png"],
    link: "https://hp-ol.vercel.app/",
  },
  {
    id: 6,
    title: theme === 'mickey' ? "Nexus Library Magic" : 
           theme === 'cyberpunk' ? "NEXUS.LIBRIS" : 
           theme === 'transformers' ? "NEXUS-DATABASE" : 
           theme === 'retro90s' ? "NEXUS-LIBRIS.ORG" : 
           "Nexus Libris",
    des: theme === 'mickey' ? "Every source has its own special source!" :
         theme === 'cyberpunk' ? "Source validation matrices. Information origin protocols activated." :
         theme === 'transformers' ? "Source verification systems. Information supply chain protocols." :
         theme === 'retro90s' ? "SOURCES HAVE SOURCES! INFORMATION CHAIN WEBSITE!" :
         "Sources have a source.",
    img: "/p6.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/aceturnity.png", "/Neo4j.jpg"],
    link: "https://nexuslibris.xyz",
  },
];

// Theme-aware work experience
export const getThemedWorkExperience = (theme: ThemeVersion) => [
  {
    id: 1,
    title: theme === 'mickey' ? "Cartoon Code Creator" : 
           theme === 'cyberpunk' ? "Neural Stack Architect" : 
           theme === 'transformers' ? "Combat Systems Engineer" : 
           theme === 'retro90s' ? "FULL STACK WEB MASTER" : 
           "Full Stack Developer",
    desc: theme === 'mickey' ? "20 years of drawing delightful interfaces! 18 years of server magic with databases, Python, and more cartoon contraptions!" :
          theme === 'cyberpunk' ? "20 cycles of interface matrix design. 18 cycles server-side neural protocols with databases, Python algorithms, data streams." :
          theme === 'transformers' ? "20 operational years of interface combat systems. 18 years server-side tactical protocols with databases, Python warfare, CDN networks." :
          theme === 'retro90s' ? "20 YEARS OF AWESOME FRONT-END WEB DESIGN! 18 YEARS SERVER-SIDE EXPERIENCE WITH DATABASES, PYTHON, AND COOL INTERNET STUFF!" :
          "20 year of front-end UX/UI design for industry-standard form factors. 18 years server-side experience with DB's, python, Rust, CDNs",
    className: "md:col-span-2",
    thumbnail: "/exp1.png",
  },
  {
    id: 2,
    title: theme === 'mickey' ? "Mobile Magic Maker" : 
           theme === 'cyberpunk' ? "Portable Reality Developer" : 
           theme === 'transformers' ? "Mobile Command Systems" : 
           theme === 'retro90s' ? "MOBILE APP WIZARD" : 
           "Mobile App Dev",
    desc: theme === 'mickey' ? "Created swell mobile apps for both Apple and Android with cartoon-style programming tools!" :
          theme === 'cyberpunk' ? "Engineered portable reality interfaces for iOS and Android neural networks using React Native/Flutter protocols." :
          theme === 'transformers' ? "Deployed mobile tactical interfaces for iOS and Android combat platforms using React Native/Flutter systems." :
          theme === 'retro90s' ? "MADE TOTALLY COOL MOBILE APPS FOR BOTH IPHONE AND ANDROID USING REACT NATIVE AND FLUTTER TOOLS!" :
          "Designed and developed mobile app for both iOS & Android platforms using React Native/Flutter.",
    className: "md:col-span-2",
    thumbnail: "/exp2.png",
  },
  {
    id: 3,
    title: theme === 'mickey' ? "Team Captain & Dreamer" : 
           theme === 'cyberpunk' ? "Neural Network Director" : 
           theme === 'transformers' ? "Command Operations Leader" : 
           theme === 'retro90s' ? "PRODUCT MANAGER SUPREME" : 
           "Product Manager, Architect, Fractional CTO",
    desc: theme === 'mickey' ? "Combined engineering magic with leadership charm, guiding teams through product adventures and strategic feature rollouts!" :
          theme === 'cyberpunk' ? "Merged engineering protocols with leadership matrices, directing teams through product evolution and strategic feature deployment." :
          theme === 'transformers' ? "Combined engineering expertise with tactical leadership, commanding teams through product missions and strategic feature operations." :
          theme === 'retro90s' ? "COMBINED ENGINEERING AND LEADERSHIP SKILLS, LEADING AWESOME TEAMS WITH PRODUCT ROADMAPS AND STRATEGIC FEATURE LAUNCHES!" :
          "Combined engineering/Sr. Developer XP, leading/co-leading several teams with product, roadmaps, strategic features rollouts",
    className: "md:col-span-2",
    thumbnail: "/exp3.png",
  },
  {
    id: 4,
    title: theme === 'mickey' ? "Future-Tech Cartoon Pioneer" : 
           theme === 'cyberpunk' ? "Blockchain Reality Architect" : 
           theme === 'transformers' ? "Advanced Systems Specialist" : 
           theme === 'retro90s' ? "BLOCKCHAIN & FUTURE-TECH EXPERT" : 
           "Blockchain, RWA, and DEPIN",
    desc: theme === 'mickey' ? "8 years pioneering edge-technologies that are now as common as Mickey's ears!" :
          theme === 'cyberpunk' ? "8 cycles developing edge-technologies that transcended the future matrix into present reality." :
          theme === 'transformers' ? "8 operational years in advanced technologies that evolved beyond future-state into current deployment." :
          theme === 'retro90s' ? "8 YEARS IN SUPER ADVANCED EDGE-TECHNOLOGIES THAT WERE THE FUTURE BUT NOW ARE TOTALLY PRESENT!" :
          "8 years in edge-technologies that are no longer the future.",
    className: "md:col-span-2",
    thumbnail: "/exp4.png",
  },
];

// Legacy exports for backward compatibility
export const gridItems = getThemedGridItems('current');
export const projects = getThemedProjects('current');
export const workExperience = getThemedWorkExperience('current');

// Keep these unchanged as they don't need theming
export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Piggy",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Kermit",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Gonzo",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Fonzy",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Beeker",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const socialMedia = [
  {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/HollyNode",
      target: "_blank",
  },
  {
      id: 2,
      img: "/twit.svg",
      link: "https://twitter.com/@infiniteteams",
      target: "_blank",
  },
  {
      id: 3,
      img: "/link.svg",
      link: "https://www.linkedin.com/in/matt-bauwens-a0572b1b/",
      target: "_blank",
  },
];