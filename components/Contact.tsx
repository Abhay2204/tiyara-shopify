import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
    return (
        <section id="contact" className="bg-onyx text-bone pt-32 pb-12 px-6 md:px-12">
            <div className="max-w-7xl mx-auto border-t border-bone/20 pt-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="font-serif text-5xl md:text-7xl mb-12">
                            Private <br /> Client Services
                        </h2>
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xs uppercase tracking-widest text-bone/50 mb-4">Visit the Atelier</h3>
                                <p className="font-serif text-2xl leading-relaxed">
                                    12 Rue de la Paix<br />
                                    75002 Paris, France
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xs uppercase tracking-widest text-bone/50 mb-4">Digital Concierge</h3>
                                <a href="mailto:atelier@tiyara.com" className="font-serif text-2xl hover:text-crimson transition-colors duration-300 flex items-center gap-2 group" data-hover>
                                    atelier@tiyara.com
                                    <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="relative h-[50vh] bg-charcoal overflow-hidden group">
                        {/* Abstract Map Graphic */}
                        <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500">
                             <img 
                                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1774&auto=format&fit=crop" 
                                className="w-full h-full object-cover grayscale invert"
                                alt="Map"
                             />
                        </div>
                        <div className="absolute bottom-6 left-6">
                            <button className="bg-bone text-onyx px-6 py-3 text-xs uppercase tracking-widest font-bold hover:bg-crimson hover:text-white transition-colors" data-hover>
                                Get Directions
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-32 pt-12 border-t border-bone/10 flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest text-bone/40">
                    <p>© 2025 TIYARA. Crafted in Silence.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-bone transition-colors" data-hover>Privacy</a>
                        <a href="#" className="hover:text-bone transition-colors" data-hover>Terms</a>
                        <a href="#" className="hover:text-bone transition-colors" data-hover>Credits</a>
                    </div>
                </div>
            </div>
        </section>
    );
};