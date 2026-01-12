import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView, MotionValue } from 'framer-motion';
import { Product } from '../types';
import { PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';

const ParallaxImage = ({ src, alt, y }: { src: string, alt: string, y: MotionValue<number> }) => {
    return (
        <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
            <motion.div 
                style={{ y }} 
                className="w-full h-[140%] -mt-[20%] relative"
            >
                <img 
                    src={src} 
                    alt={alt}
                    className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
                />
            </motion.div>
        </div>
    );
}

const ProductCard: React.FC<{ product: Product; index: number }> = ({ product, index }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-20%" });
  const { addToCart } = useCart();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Deep Parallax: Image moves opposite to scroll (or slower)
  const yImage = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  
  // Text moves faster to create separation
  const yText = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const yTextReverse = useTransform(scrollYProgress, [0, 1], [-150, 150]);
  
  // Opacity for entry/exit
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const isEven = index % 2 === 0;

  return (
    <section ref={containerRef} className="relative min-h-[140vh] w-full flex items-center justify-center py-24 overflow-hidden">
        {/* Massive Background Typography - Behind Everything */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
            <motion.div 
                style={{ x: isEven ? yText : yTextReverse, opacity: 0.05 }} 
                className="whitespace-nowrap"
            >
                <span className="font-serif text-[30vw] text-bone leading-none uppercase">
                    {product.collection.split(" ")[0]}
                </span>
            </motion.div>
        </div>

      <div className={`relative z-10 w-full max-w-7xl px-6 md:px-12 flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-32`}>
        
        {/* Parallax Image Container */}
        <div className="w-full md:w-1/2">
            <ParallaxImage src={product.image} alt={product.name} y={yImage} />
            <div className={`mt-4 flex ${isEven ? 'justify-start' : 'justify-end'}`}>
                 <span className="text-xs uppercase tracking-widest text-bone/50">{product.id} — {product.collection}</span>
            </div>
        </div>

        {/* Narrative Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          
          <motion.h2 
            className="font-serif text-5xl md:text-8xl text-bone leading-[0.9] mb-8 mix-blend-exclusion relative z-20"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {product.name}
          </motion.h2>

          <div className={`space-y-8 ${isEven ? 'md:pl-12 border-l border-bone/20' : 'md:pr-12 border-r border-bone/20 text-right'} relative z-20`}>
            <motion.p 
                className="font-sans text-xl md:text-2xl text-bone/80 font-light"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
            >
                {product.description}
            </motion.p>
            
            <motion.div 
                className="font-serif italic text-bone/60 text-lg md:text-xl"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.3 }}
            >
                — "{product.story}"
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className={`pt-8 flex ${isEven ? 'justify-start' : 'justify-end'}`}
            >
                <button 
                    onClick={() => addToCart(product)}
                    className="group relative px-8 py-4 bg-bone text-onyx overflow-hidden"
                    data-hover
                >
                    <span className="relative z-10 text-xs uppercase tracking-[0.2em] font-bold group-hover:text-bone transition-colors duration-300">
                        Acquire ₹{product.price.toLocaleString('en-IN')}
                    </span>
                    <div className="absolute inset-0 bg-crimson transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-lux" />
                </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ProductShowcase: React.FC = () => {
  return (
    <section id="products" className="bg-onyx relative z-10">
      {PRODUCTS.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </section>
  );
};