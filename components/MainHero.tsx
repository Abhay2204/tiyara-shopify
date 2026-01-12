import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const MainHero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-onyx">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <img 
            src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2073&auto=format&fit=crop" 
            alt="Editorial Hero"
            className="w-full h-full object-cover opacity-60 filter contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-onyx/20 to-onyx" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        >
             <h2 className="text-xs md:text-sm font-sans uppercase tracking-[0.6em] text-bone mb-8">
                The Autumn / Winter 2025 Collection
            </h2>
        </motion.div>

        <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
            className="font-serif text-6xl md:text-9xl text-bone mix-blend-difference tracking-tight"
        >
            SILENCE <br /> & FORM
        </motion.h1>

        <motion.div
            initial={{ height: 0 }}
            animate={{ height: 100 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="w-px bg-bone/50 mt-12"
        />
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-12 hidden md:block">
        <span className="text-xs uppercase tracking-widest text-bone/60">
            Scroll to Discover
        </span>
      </div>
    </section>
  );
};