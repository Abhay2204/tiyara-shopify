import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SALE_PRODUCTS } from '../constants';
import { ArrowRight, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const SaleBanner: React.FC = () => {
    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
    const { addToCart } = useCart();

    return (
        <section id="seasonal" className="relative bg-[#9CAF88] py-32 overflow-hidden text-onyx">
            {/* Running Text Background */}
            <div className="absolute top-0 left-0 w-full overflow-hidden opacity-10 pointer-events-none">
                <motion.div style={{ x }} className="whitespace-nowrap font-serif text-[20vw] leading-none">
                    SEASONAL ÉTUDE — LUNAR NEW YEAR — SEASONAL ÉTUDE —
                </motion.div>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="max-w-5xl mx-auto mb-16 border-b border-onyx/20 pb-8 flex flex-col md:flex-row justify-between items-end">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-onyx/60 mb-2 block">Limited Release</span>
                        <h2 className="font-serif text-5xl md:text-7xl text-onyx">The Sage Archive</h2>
                    </div>
                    <button className="group flex items-center gap-2 text-xs uppercase tracking-widest font-bold mt-8 md:mt-0" data-hover>
                        View Full Collection 
                        <span className="group-hover:translate-x-1 transition-transform">
                            <ArrowRight size={16} />
                        </span>
                    </button>
                </div>

                {/* Tighter Grid with Max Width */}
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                    {SALE_PRODUCTS.map((product) => (
                        <motion.div 
                            key={product.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="group cursor-pointer"
                            data-hover
                        >
                            {/* Adjusted Aspect Ratio to 3/4 instead of 4/5 for slightly smaller vertical footprint */}
                            <div className="relative overflow-hidden aspect-[3/4] mb-6">
                                <img 
                                    src={product.image} 
                                    alt={product.name}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-lux"
                                />
                                <div className="absolute top-4 right-4 bg-bone/90 backdrop-blur text-onyx px-3 py-1 text-xs uppercase tracking-widest font-bold">
                                    New Year Offer
                                </div>
                            </div>
                            <div className="flex justify-between items-start border-t border-onyx/20 pt-4">
                                <div>
                                    <h3 className="font-serif text-2xl mb-1">{product.name}</h3>
                                    <p className="text-sm text-onyx/70">{product.description}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-lg font-medium">₹{product.price.toLocaleString('en-IN')}</span>
                                    <button 
                                        onClick={() => addToCart(product)}
                                        className="p-2 bg-onyx text-bone hover:bg-crimson transition-colors"
                                        data-hover
                                    >
                                        <Plus size={16} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};