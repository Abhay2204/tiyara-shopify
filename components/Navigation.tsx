import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { NAV_ITEMS } from '../constants';
import { ShoppingBag, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Navigation: React.FC<{ onAccountClick: () => void }> = ({ onAccountClick }) => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openCart, itemCount } = useCart();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 transition-colors duration-500 ${scrolled ? 'bg-onyx/80 backdrop-blur-md' : 'bg-transparent'}`}
    >
      <div className="flex items-center gap-8">
        <button className="text-bone hover:text-gray-300 transition-colors" data-hover>
          <Menu strokeWidth={1} />
        </button>
        <div className="hidden md:flex gap-6">
            {NAV_ITEMS.map((item) => (
                <a key={item.label} href={item.href} className="text-xs uppercase tracking-widest text-bone/70 hover:text-bone transition-colors" data-hover>
                    {item.label}
                </a>
            ))}
        </div>
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <motion.h1 
            className="font-serif text-2xl tracking-tight text-bone"
            animate={{ opacity: scrolled ? 1 : 0 }}
        >
            TIYARA
        </motion.h1>
      </div>

      <div className="flex items-center gap-4">
        <button onClick={onAccountClick} className="text-xs uppercase tracking-widest text-bone mr-4 hidden md:block" data-hover>
            Account
        </button>
        <button onClick={openCart} className="text-bone relative" data-hover>
          <ShoppingBag strokeWidth={1} />
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-crimson rounded-full text-[10px] flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </button>
      </div>
    </motion.header>
  );
};