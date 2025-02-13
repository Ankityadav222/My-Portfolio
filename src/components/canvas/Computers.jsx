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
  const { scene } = useGLTF("/desktop_pc/scene.gltf"); // Ensure path is correct

  return (
    <mesh>
      {/* Lighting */}
      <hemisphereLight intensity={0.3} groundColor="gray" />
      <spotLight position={[-20, 50, 10]} angle={0.3} penumbra={1} intensity={1.8} castShadow />
      <directionalLight position={[10, 20, 10]} intensity={1.2} castShadow />
      <pointLight position={[0, 10, 0]} intensity={1.2} />

      {/* 3D Model */}
      <primitive
        object={scene}
        scale={isMobile ? 0.6 : 0.65} // Slightly increased for mobile
        position={isMobile ? [0, -2.5, -1.5] : [0, -3.5, -1.7]} // Adjusted for better visibility
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

// Main Canvas Component
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateSize = () => setIsMobile(window.innerWidth <= 600);
    updateSize(); // Check on mount
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 1.5]}
      camera={{ position: [10, 3, 5], fov: isMobile ? 35 : 30 }} // Adjusted FOV for mobile
      gl={{ antialias: true, preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
