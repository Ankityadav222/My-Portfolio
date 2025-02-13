import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Html, useProgress } from "@react-three/drei";

// Loader Component with progress
const Loader = () => {  
  const { progress } = useProgress();
  return (
    <Html center>
      <div style={{ textAlign: "center" }}>
        <p style={{ fontSize: 14, color: "#f1f1f1", fontWeight: 800 }}>
          Loading... {progress.toFixed(2)}%
        </p>
      </div>
    </Html>
  );
};

// Computers Model Component
const Computers = ({ isMobile }) => {
  const { scene } = useGLTF("/desktop_pc/scene.gltf");

  return (
    <mesh>
      {/* Optimized lighting for mobile */}
      <hemisphereLight intensity={0.3} groundColor="gray" />
      <spotLight 
        position={[-20, 50, 10]} 
        angle={0.3} 
        penumbra={1} 
        intensity={isMobile ? 1 : 1.8} 
        castShadow={!isMobile}
      />
      <directionalLight 
        position={[10, 20, 10]} 
        intensity={isMobile ? 0.8 : 1.2} 
        castShadow={!isMobile}
      />
      {!isMobile && <pointLight position={[0, 10, 0]} intensity={1.2} />}

      {/* 3D Model */}
      <primitive
        object={scene}
        scale={isMobile ? 0.7 : 0.65}
        position={isMobile ? [0, -2, -1.5] : [0, -3.5, -1.7]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

// Main Canvas Component
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");
    setIsMobile(mediaQuery.matches);
    
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows={!isMobile}
      dpr={isMobile ? [1, 1] : [1, 1.5]}
      camera={{
        position: isMobile ? [5, 3, 5] : [10, 3, 5],
        fov: isMobile ? 38 : 30,
        near: 0.1,
        far: 1000
      }}
      gl={{ 
        antialias: !isMobile,
        powerPreference: "high-performance"
      }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls 
          enableZoom={false} 
          enablePan={!isMobile}
          autoRotate={!isMobile}
          autoRotateSpeed={8}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
