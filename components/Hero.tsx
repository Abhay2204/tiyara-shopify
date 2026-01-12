import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HERO_TEXTURE } from '../constants';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC<{ onExplore: () => void }> = ({ onExplore }) => {
  const [isZooming, setIsZooming] = useState(false);
  const [showContent, setShowContent] = useState(false);

  // Trigger content fade-in after mount
  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    setIsZooming(true);
    setTimeout(() => {
      onExplore();
    }, 1500); // Matches animation duration
  };

  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Texture for Zoom Effect */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1, opacity: 0.6 }}
        animate={isZooming ? { scale: 30, opacity: 0 } : { scale: 1.1, opacity: 0.6 }}
        transition={{ duration: 1.8, ease: [0.6, 0.05, 0, 0.9] }}
      >
        <img 
            src={HERO_TEXTURE} 
            alt="Texture" 
            className="w-full h-full object-cover filter brightness-50"
        />
      </motion.div>

      {/* Main Hero Content */}
      <AnimatePresence>
        {!isZooming && (
          <motion.div 
            className="relative z-10 flex flex-col items-center justify-center text-center mix-blend-difference"
            exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-xs md:text-sm uppercase tracking-[0.5em] text-bone mb-6"
            >
                Est. 2024
            </motion.p>
            
            <motion.h1 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
                className="font-serif text-[15vw] leading-[0.8] text-bone tracking-tighter"
            >
                TIYARA
            </motion.h1>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="mt-12"
            >
                <button 
                    onClick={handleEnter}
                    className="group flex flex-col items-center gap-2 text-bone/80 hover:text-bone transition-colors"
                    data-hover
                >
                    <span className="text-xs uppercase tracking-widest">Enter the Atelier</span>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    >
                        <ArrowDown strokeWidth={1} size={20} />
                    </motion.div>
                </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay flash for transition */}
      <motion.div
        className="absolute inset-0 bg-onyx pointer-events-none"
        initial={{ opacity: 0 }}
        animate={isZooming ? { opacity: 0 } : { opacity: 0 }}
      />
    </div>
  );
};