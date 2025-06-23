"use client";
import { useEffect, useRef, useState } from "react";
import { Color, Scene, Fog, PerspectiveCamera, Vector3 } from "three";
import ThreeGlobe from "three-globe";
import { useThree, Object3DNode, Canvas, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import countries from "@/data/globe.json";
import { ThemeVersion } from "../ThemeManager";

declare module "@react-three/fiber" {
  interface ThreeElements {
    threeGlobe: Object3DNode<ThreeGlobe, typeof ThreeGlobe>;
  }
}

extend({ ThreeGlobe });

const RING_PROPAGATION_SPEED = 3;
const aspect = 1.2;
const cameraZ = 300;

type Position = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
};

export type GlobeConfig = {
  pointSize?: number;
  globeColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  emissive?: string;
  emissiveIntensity?: number;
  shininess?: number;
  polygonColor?: string;
  ambientLight?: string;
  directionalLeftLight?: string;
  directionalTopLight?: string;
  pointLight?: string;
  arcTime?: number;
  arcLength?: number;
  rings?: number;
  maxRings?: number;
  initialPosition?: {
    lat: number;
    lng: number;
  };
  autoRotate?: boolean;
  autoRotateSpeed?: number;
};

interface WorldProps {
  globeConfig: GlobeConfig;
  data: Position[];
  currentTheme?: ThemeVersion;
}

let numbersOfRings = [0];

// Theme-specific globe configurations
const getThemedGlobeConfig = (theme: ThemeVersion, baseConfig: GlobeConfig): GlobeConfig => {
  switch (theme) {
    case 'mickey':
      return {
        ...baseConfig,
        // 1930s Black & White Cartoon Theme
        globeColor: "#2a2a2a",              // Dark gray globe
        atmosphereColor: "#ffffff",          // White atmosphere
        atmosphereAltitude: 0.15,            // Slightly thicker atmosphere
        emissive: "#111111",                 // Dark emissive
        emissiveIntensity: 0.3,              // Higher intensity for cartoon effect
        shininess: 0.1,                     // Matte finish, not shiny
        polygonColor: "rgba(255,255,255,0.8)", // White country borders
        ambientLight: "#ffffff",             // White ambient light
        directionalLeftLight: "#ffffff",     // White directional lights
        directionalTopLight: "#ffffff",
        pointLight: "#ffffff",
        autoRotateSpeed: 0.5,                // Slower, more contemplative rotation
        pointSize: 2,                        // Larger points for visibility
        arcTime: 3000,                       // Slower arcs for vintage feel
        arcLength: 0.7,                      // Shorter arcs
        maxRings: 5,                         // More rings for steamboat-like ripples
      };
    case 'cyberpunk':
      return {
        ...baseConfig,
        globeColor: "#0a0a0a",
        atmosphereColor: "#00ffff",
        emissive: "#ff00ff",
        polygonColor: "rgba(0,255,255,0.6)",
        ambientLight: "#00ffff",
      };
    case 'transformers':
      return {
        ...baseConfig,
        globeColor: "#1a1a1a",
        atmosphereColor: "#ffd700",
        emissive: "#ff4444",
        polygonColor: "rgba(255,215,0,0.7)",
        ambientLight: "#ffd700",
      };
    case 'retro90s':
      return {
        ...baseConfig,
        globeColor: "#800080",
        atmosphereColor: "#ff69b4",
        emissive: "#00ffff",
        polygonColor: "rgba(255,105,180,0.8)",
        ambientLight: "#ff69b4",
      };
    default:
      return baseConfig;
  }
};

// Theme-specific data transformation for arcs and points
const getThemedData = (data: Position[], theme: ThemeVersion): Position[] => {
  switch (theme) {
    case 'mickey':
      // Convert all colors to grayscale/white for 1930s cartoon look
      return data.map((item, index) => ({
        ...item,
        color: index % 3 === 0 ? "#ffffff" : index % 3 === 1 ? "#cccccc" : "#888888", // White, light gray, dark gray
        arcAlt: item.arcAlt * 0.8, // Lower arcs for steamboat-like movement
      }));
    case 'cyberpunk':
      return data.map((item, index) => ({
        ...item,
        color: index % 3 === 0 ? "#00ffff" : index % 3 === 1 ? "#ff00ff" : "#00ff00", // Neon colors
      }));
    case 'transformers':
      return data.map((item, index) => ({
        ...item,
        color: index % 3 === 0 ? "#ffd700" : index % 3 === 1 ? "#ff4444" : "#ffffff", // Gold, red, white
      }));
    case 'retro90s':
      return data.map((item, index) => ({
        ...item,
        color: index % 3 === 0 ? "#ff69b4" : index % 3 === 1 ? "#00ffff" : "#ffff00", // Hot pink, cyan, yellow
      }));
    default:
      return data;
  }
};

export function Globe({ globeConfig, data, currentTheme = 'current' }: WorldProps) {
  const [globeData, setGlobeData] = useState<
    | {
        size: number;
        order: number;
        color: (t: number) => string;
        lat: number;
        lng: number;
      }[]
    | null
  >(null);

  const globeRef = useRef<ThreeGlobe | null>(null);

  // Apply theme-specific configuration
  const themedConfig = getThemedGlobeConfig(currentTheme, globeConfig);
  const themedData = getThemedData(data, currentTheme);

  const defaultProps = {
    pointSize: 1,
    atmosphereColor: "#ffffff",
    showAtmosphere: true,
    atmosphereAltitude: 0.1,
    polygonColor: "rgba(255,255,255,0.7)",
    globeColor: "#1d072e",
    emissive: "#000000",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    arcTime: 2000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    ...themedConfig, // Apply themed configuration
  };

  useEffect(() => {
    if (globeRef.current) {
      _buildData();
      _buildMaterial();
    }
  }, [globeRef.current, currentTheme]); // Rebuild when theme changes

  const _buildMaterial = () => {
    if (!globeRef.current) return;

    const globeMaterial = globeRef.current.globeMaterial() as unknown as {
      color: Color;
      emissive: Color;
      emissiveIntensity: number;
      shininess: number;
    };
    globeMaterial.color = new Color(themedConfig.globeColor);
    globeMaterial.emissive = new Color(themedConfig.emissive);
    globeMaterial.emissiveIntensity = themedConfig.emissiveIntensity || 0.1;
    globeMaterial.shininess = themedConfig.shininess || 0.9;
  };

  const _buildData = () => {
    const arcs = themedData; // Use themed data
    let points = [];
    for (let i = 0; i < arcs.length; i++) {
      const arc = arcs[i];
      const rgb = hexToRgb(arc.color) as { r: number; g: number; b: number };
      points.push({
        size: defaultProps.pointSize,
        order: arc.order,
        color: (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
        lat: arc.startLat,
        lng: arc.startLng,
      });
      points.push({
        size: defaultProps.pointSize,
        order: arc.order,
        color: (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
        lat: arc.endLat,
        lng: arc.endLng,
      });
    }

    // remove duplicates for same lat and lng
    const filteredPoints = points.filter(
      (v, i, a) =>
        a.findIndex((v2) =>
          ["lat", "lng"].every(
            (k) => v2[k as "lat" | "lng"] === v[k as "lat" | "lng"]
          )
        ) === i
    );

    setGlobeData(filteredPoints);
  };

  useEffect(() => {
    if (globeRef.current && globeData) {
      globeRef.current
        .hexPolygonsData(countries.features)
        .hexPolygonResolution(3)
        .hexPolygonMargin(currentTheme === 'mickey' ? 0.9 : 0.7) // Thicker borders for cartoon look
        .showAtmosphere(defaultProps.showAtmosphere)
        .atmosphereColor(defaultProps.atmosphereColor)
        .atmosphereAltitude(defaultProps.atmosphereAltitude)
        .hexPolygonColor((e) => {
          return defaultProps.polygonColor;
        });
      startAnimation();
    }
  }, [globeData, currentTheme]);

  const startAnimation = () => {
    if (!globeRef.current || !globeData) return;

    globeRef.current
      .arcsData(themedData) // Use themed data
      .arcStartLat((d) => (d as { startLat: number }).startLat * 1)
      .arcStartLng((d) => (d as { startLng: number }).startLng * 1)
      .arcEndLat((d) => (d as { endLat: number }).endLat * 1)
      .arcEndLng((d) => (d as { endLng: number }).endLng * 1)
      .arcColor((e: any) => (e as { color: string }).color)
      .arcAltitude((e) => {
        return (e as { arcAlt: number }).arcAlt * 1;
      })
      .arcStroke((e) => {
        // Mickey theme: thicker strokes for cartoon effect
        if (currentTheme === 'mickey') {
          return [0.5, 0.4, 0.45][Math.round(Math.random() * 2)];
        }
        return [0.32, 0.28, 0.3][Math.round(Math.random() * 2)];
      })
      .arcDashLength(defaultProps.arcLength)
      .arcDashInitialGap((e) => (e as { order: number }).order * 1)
      .arcDashGap(currentTheme === 'mickey' ? 20 : 15) // Larger gaps for cartoon style
      .arcDashAnimateTime((e) => defaultProps.arcTime);

    globeRef.current
      .pointsData(themedData) // Use themed data
      .pointColor((e) => (e as { color: string }).color)
      .pointsMerge(true)
      .pointAltitude(0.0)
      .pointRadius(currentTheme === 'mickey' ? 3 : 2); // Larger points for Mickey theme

    globeRef.current
      .ringsData([])
      .ringColor((e: any) => (t: any) => e.color(t))
      .ringMaxRadius(defaultProps.maxRings)
      .ringPropagationSpeed(currentTheme === 'mickey' ? RING_PROPAGATION_SPEED * 0.7 : RING_PROPAGATION_SPEED) // Slower for steamboat ripples
      .ringRepeatPeriod(
        (defaultProps.arcTime * defaultProps.arcLength) / defaultProps.rings
      );
  };

  useEffect(() => {
    if (!globeRef.current || !globeData) return;

    const interval = setInterval(() => {
      if (!globeRef.current || !globeData) return;
      numbersOfRings = genRandomNumbers(
        0,
        themedData.length,
        Math.floor((themedData.length * 4) / 5)
      );

      globeRef.current.ringsData(
        globeData.filter((d, i) => numbersOfRings.includes(i))
      );
    }, currentTheme === 'mickey' ? 3000 : 2000); // Slower ring generation for Mickey

    return () => {
      clearInterval(interval);
    };
  }, [globeRef.current, globeData, currentTheme]);

  return (
    <>
      <threeGlobe ref={globeRef} />
    </>
  );
}

export function WebGLRendererConfig({ currentTheme = 'current' }: { currentTheme?: ThemeVersion }) {
  const { gl, size } = useThree();

  useEffect(() => {
    gl.setPixelRatio(window.devicePixelRatio);
    gl.setSize(size.width, size.height);
    
    // Theme-specific background colors
    switch (currentTheme) {
      case 'mickey':
        gl.setClearColor(0x000000, 0); // Pure black background for 1930s cartoon
        break;
      case 'cyberpunk':
        gl.setClearColor(0x000011, 0); // Dark blue-black
        break;
      case 'transformers':
        gl.setClearColor(0x111111, 0); // Dark gray
        break;
      case 'retro90s':
        gl.setClearColor(0x330033, 0); // Dark purple
        break;
      default:
        gl.setClearColor(0xffaaff, 0);
    }
  }, [currentTheme]);

  return null;
}

export function World(props: WorldProps) {
  const { globeConfig, currentTheme = 'current' } = props;
  const themedConfig = getThemedGlobeConfig(currentTheme, globeConfig);
  
  const scene = new Scene();
  
  // Theme-specific fog
  switch (currentTheme) {
    case 'mickey':
      scene.fog = new Fog(0x222222, 400, 2000); // Dark gray fog for vintage atmosphere
      break;
    case 'cyberpunk':
      scene.fog = new Fog(0x001133, 400, 2000); // Dark blue fog
      break;
    case 'transformers':
      scene.fog = new Fog(0x333333, 400, 2000); // Dark gray fog
      break;
    case 'retro90s':
      scene.fog = new Fog(0x660066, 400, 2000); // Purple fog
      break;
    default:
      scene.fog = new Fog(0xffffff, 400, 2000);
  }
  
  return (
    <Canvas scene={scene} camera={new PerspectiveCamera(50, aspect, 180, 1800)}>
      <WebGLRendererConfig currentTheme={currentTheme} />
      <ambientLight color={themedConfig.ambientLight} intensity={0.6} />
      <directionalLight
        color={themedConfig.directionalLeftLight}
        position={new Vector3(-400, 100, 400)}
      />
      <directionalLight
        color={themedConfig.directionalTopLight}
        position={new Vector3(-200, 500, 200)}
      />
      <pointLight
        color={themedConfig.pointLight}
        position={new Vector3(-200, 500, 200)}
        intensity={0.8}
      />
      <Globe {...props} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minDistance={cameraZ}
        maxDistance={cameraZ}
        autoRotateSpeed={themedConfig.autoRotateSpeed || 1}
        autoRotate={true}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI - Math.PI / 3}
      />
    </Canvas>
  );
}

export function hexToRgb(hex: string) {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export function genRandomNumbers(min: number, max: number, count: number) {
  const arr = [];
  while (arr.length < count) {
    const r = Math.floor(Math.random() * (max - min)) + min;
    if (arr.indexOf(r) === -1) arr.push(r);
  }

  return arr;
}