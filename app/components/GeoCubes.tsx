"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere } from "@react-three/drei";
import { useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";
import { useTheme } from "../context/ThemeContext";

function Cube({
  position,
  size = 1,
  rotation = [0, 0, 0] as [number, number, number],
  floatIntensity = 0.2,
  rotationSpeed = 0.001,
  topColor = "#5a7a98",
  rightColor = "#c07040",
  frontColor = "#2a4058",
  isLight = false,
}: {
  position: [number, number, number];
  size?: number;
  rotation?: [number, number, number];
  floatIntensity?: number;
  rotationSpeed?: number;
  topColor?: string;
  rightColor?: string;
  frontColor?: string;
  isLight?: boolean;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const materials = useMemo(() => {
    if (isLight) {
      return [
        new THREE.MeshStandardMaterial({ color: rightColor, metalness: 0.05, roughness: 0.7 }),
        new THREE.MeshStandardMaterial({ color: "#e8edf2", metalness: 0.02, roughness: 0.8 }),
        new THREE.MeshStandardMaterial({ color: topColor, metalness: 0.05, roughness: 0.6 }),
        new THREE.MeshStandardMaterial({ color: "#dce3ea", metalness: 0.02, roughness: 0.85 }),
        new THREE.MeshStandardMaterial({ color: frontColor, metalness: 0.05, roughness: 0.7 }),
        new THREE.MeshStandardMaterial({ color: "#e0e6ec", metalness: 0.02, roughness: 0.8 }),
      ];
    }
    return [
      new THREE.MeshStandardMaterial({ color: rightColor, metalness: 0.2, roughness: 0.4 }),
      new THREE.MeshStandardMaterial({ color: "#0a1520", metalness: 0.1, roughness: 0.7 }),
      new THREE.MeshStandardMaterial({ color: topColor, metalness: 0.15, roughness: 0.35 }),
      new THREE.MeshStandardMaterial({ color: "#050a10", metalness: 0.1, roughness: 0.8 }),
      new THREE.MeshStandardMaterial({ color: frontColor, metalness: 0.15, roughness: 0.45 }),
      new THREE.MeshStandardMaterial({ color: "#080e18", metalness: 0.1, roughness: 0.7 }),
    ];
  }, [topColor, rightColor, frontColor, isLight]);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += rotationSpeed;
      meshRef.current.rotation.x += rotationSpeed * 0.3;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.02} floatIntensity={floatIntensity}>
      <mesh 
        ref={meshRef}
        position={position} 
        rotation={rotation} 
        material={materials}
        castShadow 
        receiveShadow
      >
        <boxGeometry args={[size, size, size]} />
      </mesh>
    </Float>
  );
}

function GlowingOrb({ position }: { position: [number, number, number] }) {
  const lightRef = useRef<THREE.PointLight>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (lightRef.current) {
      lightRef.current.intensity = 5 + Math.sin(t * 1.2) * 0.5;
    }
    if (groupRef.current) {
      groupRef.current.position.y = position[1] + Math.sin(t * 0.8) * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Warm light casting on cubes */}
      <pointLight 
        ref={lightRef} 
        color="#ff8545" 
        intensity={5} 
        distance={22} 
        decay={2} 
        castShadow
      />
      
      {/* Glow layers */}
      <Sphere args={[0.5, 32, 32]}>
        <meshBasicMaterial color="#ff3010" transparent opacity={0.025} />
      </Sphere>
      <Sphere args={[0.32, 32, 32]}>
        <meshBasicMaterial color="#ff5020" transparent opacity={0.07} />
      </Sphere>
      <Sphere args={[0.2, 32, 32]}>
        <meshBasicMaterial color="#ff7040" transparent opacity={0.18} />
      </Sphere>
      <Sphere args={[0.12, 48, 48]}>
        <meshBasicMaterial color="#ffa060" transparent opacity={0.45} />
      </Sphere>
      
      {/* Core */}
      <Sphere args={[0.07, 48, 48]}>
        <meshBasicMaterial color="#ffcc90" />
      </Sphere>
      <Sphere args={[0.035, 32, 32]}>
        <meshBasicMaterial color="#fff8f0" />
      </Sphere>
    </group>
  );
}

function Scene({ isLight }: { isLight: boolean }) {
  return (
    <>
      {/* Ambient light */}
      <ambientLight intensity={isLight ? 0.8 : 0.08} color={isLight ? "#f0f4f8" : "#a0b8d0"} />
      
      {/* Key light */}
      <directionalLight 
        position={[-5, 10, 4]} 
        intensity={isLight ? 1.5 : 0.85} 
        color={isLight ? "#e8f0f8" : "#6888b0"}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      
      {/* Accent light */}
      <directionalLight 
        position={[5, 3, 4]} 
        intensity={isLight ? 0.3 : 0.12} 
        color={isLight ? "#f8ece0" : "#ff9050"}
      />
      
      {/* Rim light */}
      <directionalLight 
        position={[-4, -1, -7]} 
        intensity={isLight ? 0.4 : 0.08} 
        color={isLight ? "#d0dce8" : "#405878"}
      />

      {/* === MAIN CUBE === */}
      <Cube 
        position={[0, 0.1, 0]} 
        size={1.8} 
        rotation={[-0.35, 0.72, 0.03]}
        floatIntensity={0.1}
        rotationSpeed={0.0008}
        topColor={isLight ? "#d8e4ee" : "#7098b8"}
        rightColor={isLight ? "#e8ddd4" : "#e09058"}
        frontColor={isLight ? "#c8d8e6" : "#3a5a78"}
        isLight={isLight}
      />

      {/* === TOP LEFT CUBE === */}
      <Cube 
        position={[-1.6, 1.2, -0.2]} 
        size={0.9} 
        rotation={[-0.3, 1.0, 0.08]}
        floatIntensity={0.22}
        rotationSpeed={0.0012}
        topColor={isLight ? "#d0dde8" : "#6090b0"}
        rightColor={isLight ? "#e0d5cc" : "#c88050"}
        frontColor={isLight ? "#c0d0e0" : "#304a68"}
        isLight={isLight}
      />

      {/* === TOP RIGHT CUBE === */}
      <Cube 
        position={[1.4, 1.0, 0.4]} 
        size={0.6} 
        rotation={[-0.2, -0.5, 0.08]}
        floatIntensity={0.3}
        rotationSpeed={0.001}
        topColor={isLight ? "#ccdae6" : "#5878a0"}
        rightColor={isLight ? "#ecddd0" : "#f0a068"}
        frontColor={isLight ? "#c4d4e2" : "#2c4458"}
        isLight={isLight}
      />

      {/* === BOTTOM LEFT CUBE === */}
      <Cube 
        position={[-1.2, -1.0, 0.4]} 
        size={0.55} 
        rotation={[-0.2, 0.7, 0.14]}
        floatIntensity={0.32}
        rotationSpeed={0.0015}
        topColor={isLight ? "#c8d6e0" : "#405868"}
        rightColor={isLight ? "#d0d8e0" : "#384858"}
        frontColor={isLight ? "#bcccd8" : "#182838"}
        isLight={isLight}
      />

      {/* === BOTTOM RIGHT CUBE === */}
      <Cube 
        position={[1.3, -1.1, -0.1]} 
        size={0.7} 
        rotation={[-0.15, -0.6, 0.05]}
        floatIntensity={0.26}
        rotationSpeed={0.0009}
        topColor={isLight ? "#c4d2dc" : "#3a5060"}
        rightColor={isLight ? "#d8d0c8" : "#584030"}
        frontColor={isLight ? "#bac8d4" : "#152030"}
        isLight={isLight}
      />

      {/* === FAR BACK CUBE === */}
      <Cube 
        position={[-0.3, 0.8, -1.2]} 
        size={0.4} 
        rotation={[-0.3, 1.15, 0.2]}
        floatIntensity={0.38}
        rotationSpeed={0.0018}
        topColor={isLight ? "#ccdae4" : "#507088"}
        rightColor={isLight ? "#dcd4cc" : "#987048"}
        frontColor={isLight ? "#c4d4e0" : "#283a50"}
        isLight={isLight}
      />

      {/* === GLOWING ORBs - Only in dark mode === */}
      {!isLight && (
        <>
          <GlowingOrb position={[1.2, 1.0, 1.2]} />
          <GlowingOrb position={[-1.6, 0.6, 0.9]} />
        </>
      )}

      {/* Shadow floor */}
      <mesh 
        rotation={[-Math.PI / 2, 0, 0]} 
        position={[0, -2.3, 0]}
        receiveShadow
      >
        <planeGeometry args={[25, 25]} />
        <shadowMaterial opacity={isLight ? 0.45 : 0.55} />
      </mesh>

      {/* Visible floor plane — gives "room" ground feel */}
      {isLight && (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.31, 0]}>
          <planeGeometry args={[25, 25]} />
          <meshStandardMaterial color="#c8ced6" metalness={0.0} roughness={0.9} transparent opacity={0.6} />
        </mesh>
      )}

      {/* Contact shadow - ellipse under cubes */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.28, 0]}>
        <planeGeometry args={[4.5, 2.5]} />
        <meshBasicMaterial 
          color="#000000" 
          transparent 
          opacity={isLight ? 0.3 : 0.35} 
        />
      </mesh>
    </>
  );
}

export function GeoCubes() {
  const [isMobile, setIsMobile] = useState(false);
  const { theme } = useTheme();
  const isLight = theme === "light";

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      {/* CSS background glows — creates room depth */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className={`absolute h-200 w-200 rounded-full blur-[200px] ${isLight ? "bg-[#b8cfe0] opacity-70" : "bg-[#0e1620] opacity-40"}`} />
        <div className={`absolute h-60 w-60 translate-x-16 -translate-y-8 rounded-full blur-[100px] sm:h-96 sm:w-96 sm:translate-x-32 sm:-translate-y-12 sm:blur-[160px] ${isLight ? "bg-[#d8c0a8] opacity-40" : "bg-[#3d2510] opacity-20"}`} />
        <div className={`absolute h-40 w-40 -translate-x-16 translate-y-6 rounded-full blur-[80px] sm:h-72 sm:w-72 sm:-translate-x-28 sm:translate-y-8 sm:blur-[130px] ${isLight ? "bg-[#a8c0d8] opacity-50" : "bg-[#152535] opacity-22"}`} />
      </div>

      {/* CSS floor shadow */}
      <div className="absolute bottom-[18%] left-1/2 -translate-x-1/2" style={{ width: isMobile ? 260 : 420, height: isMobile ? 40 : 60, background: isLight ? "radial-gradient(ellipse, rgba(0,0,0,0.35) 0%, transparent 70%)" : "radial-gradient(ellipse, rgba(0,0,0,0.45) 0%, transparent 70%)", filter: "blur(16px)" }} />
      
      {/* CSS reflection ghost */}
      <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2" style={{ width: isMobile ? 180 : 280, height: isMobile ? 50 : 80, background: isLight ? "linear-gradient(135deg, rgba(53,77,101,0.06), rgba(30,45,62,0.04))" : "linear-gradient(135deg, rgba(53,77,101,0.06), rgba(30,45,62,0.04))", filter: "blur(6px)", transform: "translateX(-50%) perspective(400px) rotateX(70deg) scaleY(0.25)" }} />

      {/* 3D Scene */}
      <Canvas
        shadows
        camera={{ position: isMobile ? [0.1, 0.6, 7.5] : [0.2, 0.8, 5.8], fov: isMobile ? 38 : 42 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: !isMobile }}
        dpr={isMobile ? [1, 1.5] : [1, 2]}
      >
        <Scene isLight={isLight} />
      </Canvas>
    </div>
  );
}