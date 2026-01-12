import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { MainHero } from './components/MainHero';
import { About3D } from './components/About3D';
import { ProductShowcase } from './components/ProductShowcase';
import { SaleBanner } from './components/SaleBanner';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { MagneticCursor } from './components/MagneticCursor';
import { Cart } from './components/Cart';
import { Account } from './components/Account';
import { CartProvider, useCart } from './context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

const AppContent: React.FC = () => {
  const [hasEntered, setHasEntered] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const { isOpen, closeCart, items, updateQuantity, removeFromCart } = useCart();
  
  // Lock body scroll during hero phase or cart/account open
  useEffect(() => {
    if (!hasEntered || isOpen || isAccountOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [hasEntered, isOpen, isAccountOpen]);

  return (
    <main className="bg-onyx min-h-screen text-bone selection:bg-crimson selection:text-white">
      {/* Custom Cursor always active */}
      <div className="hidden md:block">
        <MagneticCursor />
      </div>

      {/* Cart Drawer */}
      <Cart 
        isOpen={isOpen} 
        onClose={closeCart} 
        items={items}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />

      {/* Account Drawer */}
      <Account 
        isOpen={isAccountOpen} 
        onClose={() => setIsAccountOpen(false)} 
      />

      <AnimatePresence>
        {!hasEntered ? (
          <motion.div 
            key="intro-portal"
            className="fixed inset-0 z-50 bg-onyx"
            exit={{ opacity: 0, pointerEvents: "none" }}
            transition={{ duration: 1 }}
          >
            <Hero onExplore={() => setHasEntered(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative z-0"
          >
            <Navigation onAccountClick={() => setIsAccountOpen(true)} />
            
            <MainHero />
            
            <div id="about">
              <About3D />
            </div>

            <SaleBanner />
            
            <ProductShowcase />
            
            <Contact />
            
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

const App: React.FC = () => {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
};

export default App;