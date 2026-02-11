"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere } from "@react-three/drei";
import { useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";

function Cube({
  position,
  size = 1,
  rotation = [0, 0, 0] as [number, number, number],
  floatIntensity = 0.2,
  rotationSpeed = 0.001,
  topColor = "#5a7a98",
  rightColor = "#c07040",
  frontColor = "#2a4058",
}: {
  position: [number, number, number];
  size?: number;
  rotation?: [number, number, number];
  floatIntensity?: number;
  rotationSpeed?: number;
  topColor?: string;
  rightColor?: string;
  frontColor?: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const materials = useMemo(() => [
    new THREE.MeshStandardMaterial({ color: rightColor, metalness: 0.2, roughness: 0.4 }), // right (+X) - lit by orb
    new THREE.MeshStandardMaterial({ color: "#0a1520", metalness: 0.1, roughness: 0.7 }), // left (-X)
    new THREE.MeshStandardMaterial({ color: topColor, metalness: 0.15, roughness: 0.35 }), // top (+Y) - sky light
    new THREE.MeshStandardMaterial({ color: "#050a10", metalness: 0.1, roughness: 0.8 }), // bottom (-Y)
    new THREE.MeshStandardMaterial({ color: frontColor, metalness: 0.15, roughness: 0.45 }), // front (+Z)
    new THREE.MeshStandardMaterial({ color: "#080e18", metalness: 0.1, roughness: 0.7 }), // back (-Z)
  ], [topColor, rightColor, frontColor]);

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

function Scene() {
  return (
    <>
      {/* Ambient — cool tint */}
      <ambientLight intensity={0.08} color="#a0b8d0" />
      
      {/* Cool blue key light — top-left, dramatic angle */}
      <directionalLight 
        position={[-5, 10, 4]} 
        intensity={0.85} 
        color="#6888b0"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      
      {/* Warm accent light — right side, enhances orb glow on cubes */}
      <directionalLight 
        position={[5, 3, 4]} 
        intensity={0.12} 
        color="#ff9050"
      />
      
      {/* Cool rim from back — edge glow */}
      <directionalLight 
        position={[-4, -1, -7]} 
        intensity={0.08} 
        color="#405878"
      />

      {/* === MAIN CUBE === */}
      <Cube 
        position={[0, 0.1, 0]} 
        size={1.8} 
        rotation={[-0.35, 0.72, 0.03]}
        floatIntensity={0.1}
        rotationSpeed={0.0008}
        topColor="#7098b8"
        rightColor="#e09058"
        frontColor="#3a5a78"
      />

      {/* === TOP LEFT CUBE === */}
      <Cube 
        position={[-1.6, 1.2, -0.2]} 
        size={0.9} 
        rotation={[-0.3, 1.0, 0.08]}
        floatIntensity={0.22}
        rotationSpeed={0.0012}
        topColor="#6090b0"
        rightColor="#c88050"
        frontColor="#304a68"
      />

      {/* === TOP RIGHT CUBE === */}
      <Cube 
        position={[1.4, 1.0, 0.4]} 
        size={0.6} 
        rotation={[-0.2, -0.5, 0.08]}
        floatIntensity={0.3}
        rotationSpeed={0.001}
        topColor="#5878a0"
        rightColor="#f0a068"
        frontColor="#2c4458"
      />

      {/* === BOTTOM LEFT CUBE === */}
      <Cube 
        position={[-1.2, -1.0, 0.4]} 
        size={0.55} 
        rotation={[-0.2, 0.7, 0.14]}
        floatIntensity={0.32}
        rotationSpeed={0.0015}
        topColor="#405868"
        rightColor="#384858"
        frontColor="#182838"
      />

      {/* === BOTTOM RIGHT CUBE === */}
      <Cube 
        position={[1.3, -1.1, -0.1]} 
        size={0.7} 
        rotation={[-0.15, -0.6, 0.05]}
        floatIntensity={0.26}
        rotationSpeed={0.0009}
        topColor="#3a5060"
        rightColor="#584030"
        frontColor="#152030"
      />

      {/* === FAR BACK CUBE === */}
      <Cube 
        position={[-0.3, 0.8, -1.2]} 
        size={0.4} 
        rotation={[-0.3, 1.15, 0.2]}
        floatIntensity={0.38}
        rotationSpeed={0.0018}
        topColor="#507088"
        rightColor="#987048"
        frontColor="#283a50"
      />

      {/* === GLOWING ORB - Right === */}
      <GlowingOrb position={[1.2, 1.0, 1.2]} />

      {/* === GLOWING ORB - Left === */}
      <GlowingOrb position={[-1.6, 0.6, 0.9]} />

      {/* Shadow floor */}
      <mesh 
        rotation={[-Math.PI / 2, 0, 0]} 
        position={[0, -2.3, 0]}
        receiveShadow
      >
        <planeGeometry args={[25, 25]} />
        <shadowMaterial opacity={0.55} />
      </mesh>

      {/* Contact shadow - dark ellipse under cubes */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.28, 0]}>
        <planeGeometry args={[4.5, 2.5]} />
        <meshBasicMaterial 
          color="#000000" 
          transparent 
          opacity={0.35} 
        />
      </mesh>
    </>
  );
}

export function GeoCubes() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0">
      {/* CSS background glows */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="absolute h-200 w-200 rounded-full bg-[#0e1620] opacity-40 blur-[200px]" />
        <div className="absolute h-60 w-60 translate-x-16 -translate-y-8 rounded-full bg-[#3d2510] opacity-20 blur-[100px] sm:h-96 sm:w-96 sm:translate-x-32 sm:-translate-y-12 sm:blur-[160px]" />
        <div className="absolute h-40 w-40 -translate-x-16 translate-y-6 rounded-full bg-[#152535] opacity-22 blur-[80px] sm:h-72 sm:w-72 sm:-translate-x-28 sm:translate-y-8 sm:blur-[130px]" />
      </div>

      {/* CSS floor shadow */}
      <div className="absolute bottom-[18%] left-1/2 -translate-x-1/2" style={{ width: isMobile ? 260 : 420, height: isMobile ? 40 : 60, background: "radial-gradient(ellipse, rgba(0,0,0,0.45) 0%, transparent 70%)", filter: "blur(16px)" }} />
      
      {/* CSS reflection ghost */}
      <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2" style={{ width: isMobile ? 180 : 280, height: isMobile ? 50 : 80, background: "linear-gradient(135deg, rgba(53,77,101,0.06), rgba(30,45,62,0.04))", filter: "blur(6px)", transform: "translateX(-50%) perspective(400px) rotateX(70deg) scaleY(0.25)" }} />

      {/* 3D Scene */}
      <Canvas
        shadows
        camera={{ position: isMobile ? [0.1, 0.6, 7.5] : [0.2, 0.8, 5.8], fov: isMobile ? 38 : 42 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: !isMobile }}
        dpr={isMobile ? [1, 1.5] : [1, 2]}
      >
        <Scene />
      </Canvas>
    </div>
  );
}