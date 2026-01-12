import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { TorusKnot, Float, Environment, MeshTransmissionMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const FloatingShape = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle rotation
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      
      // Interactive tilt based on mouse position
      const x = (state.mouse.x * Math.PI) / 10;
      const y = (state.mouse.y * Math.PI) / 10;
      meshRef.current.rotation.x += y;
      meshRef.current.rotation.y += x;
    }
  });

  const config = {
    meshPhysicalMaterial: false,
    transmissionSampler: false,
    backside: false,
    samples: 4,
    resolution: 512,
    transmission: 1,
    roughness: 0.0,
    thickness: 3.5,
    ior: 1.5,
    chromaticAberration: 0.06,
    anisotropy: 0.1,
    distortion: 0.0,
    distortionScale: 0.3,
    temporalDistortion: 0.5,
    clearcoat: 1,
    attenuationDistance: 0.5,
    attenuationColor: '#ffffff',
    color: '#e2e2e2',
    bg: '#0a0a0a',
  }

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <TorusKnot ref={meshRef} args={[1, 0.3, 64, 16]} scale={1.5}>
        {/* Glassmorphism Material */}
        <MeshTransmissionMaterial {...config} />
      </TorusKnot>
    </Float>
  );
};

export const About3D: React.FC = () => {
  return (
    <section className="relative h-[80vh] w-full bg-onyx flex items-center justify-center overflow-hidden py-24">
      
      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }} gl={{ alpha: true }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={1} />
          <FloatingShape />
          <Environment preset="city" />
        </Canvas>
      </div>

      {/* Technical HUD Overlay */}
      <div className="absolute inset-0 pointer-events-none z-10 p-6 md:p-12 flex flex-col justify-between">
          <div className="flex justify-between items-start opacity-30">
              <div className="text-[10px] font-mono tracking-widest text-bone">
                  <p>SYS.ANALYSIS.01</p>
                  <p>MAT.PHYSICS_ENABLED</p>
              </div>
              <div className="text-[10px] font-mono tracking-widest text-bone text-right">
                  <p>FPS: 60</p>
                  <p>RENDER: WEBGL2</p>
              </div>
          </div>

          <div className="flex justify-between items-end opacity-30">
               <div className="border-l border-b border-bone w-8 h-8"></div>
               <div className="border-r border-b border-bone w-8 h-8"></div>
          </div>

          {/* Floating Data Points */}
          <motion.div 
             animate={{ y: [0, 10, 0], opacity: [0.3, 0.6, 0.3] }}
             transition={{ duration: 4, repeat: Infinity }}
             className="absolute top-1/3 left-[10%] font-mono text-xs text-bone/50 hidden md:block"
          >
             + REFRACTION_INDEX: 1.54
          </motion.div>
          <motion.div 
             animate={{ y: [0, -15, 0], opacity: [0.3, 0.6, 0.3] }}
             transition={{ duration: 5, repeat: Infinity, delay: 1 }}
             className="absolute bottom-1/3 right-[10%] font-mono text-xs text-bone/50 hidden md:block"
          >
             + TENSILE_STRENGTH: MAX
          </motion.div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 max-w-4xl px-8 text-center pointer-events-none">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
            <span className="inline-block py-1 px-3 border border-bone/20 rounded-full text-[10px] uppercase tracking-widest text-bone/60 mb-6 bg-onyx/50 backdrop-blur-sm">
                Material Innovation Lab
            </span>
            <h2 className="font-serif text-5xl md:text-7xl text-bone mb-8 mix-blend-difference">
            Tactile Intelligence
            </h2>
            <p className="font-sans text-bone/70 text-lg md:text-xl leading-relaxed mix-blend-difference max-w-2xl mx-auto">
            We believe fabric is a living entity. Our process begins not with a sketch, but with a thread. 
            Exploring the tension between structure and fluidity, Tiyara crafts garments that adapt 
            to the physics of your movement.
            </p>
        </motion.div>
      </div>
    </section>
  );
};