import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Product } from '../types';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
}

export const Cart: React.FC<CartProps> = ({ isOpen, onClose, items, onUpdateQuantity, onRemove }) => {
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          
          {/* Cart Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-onyx border-l border-bone/10 z-[101] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-bone/10">
              <div className="flex items-center gap-3">
                <ShoppingBag strokeWidth={1} className="text-bone" />
                <h2 className="font-serif text-xl text-bone">Your Selection</h2>
                <span className="text-xs text-bone/50">({items.length})</span>
              </div>
              <button onClick={onClose} className="text-bone/70 hover:text-bone transition-colors" data-hover>
                <X strokeWidth={1} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <ShoppingBag strokeWidth={1} size={48} className="text-bone/20 mb-4" />
                  <p className="text-bone/50 text-sm">Your cart is empty</p>
                  <p className="text-bone/30 text-xs mt-1">Explore our collections</p>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div
                    key={item.product.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    className="flex gap-4"
                  >
                    <div className="w-24 h-32 overflow-hidden bg-bone/5">
                      <img 
                        src={item.product.image} 
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-serif text-bone">{item.product.name}</h3>
                        <p className="text-xs text-bone/50 mt-1">{item.product.collection}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 border border-bone/20">
                          <button 
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                            className="p-2 text-bone/70 hover:text-bone transition-colors"
                            data-hover
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-bone text-sm w-4 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                            className="p-2 text-bone/70 hover:text-bone transition-colors"
                            data-hover
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <span className="text-bone">₹{(item.product.price * item.quantity).toLocaleString('en-IN')}</span>
                      </div>
                    </div>
                    <button 
                      onClick={() => onRemove(item.product.id)}
                      className="text-bone/30 hover:text-crimson transition-colors self-start"
                      data-hover
                    >
                      <X size={16} />
                    </button>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-bone/10 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-bone/70 text-sm uppercase tracking-widest">Total</span>
                  <span className="font-serif text-2xl text-bone">₹{total.toLocaleString('en-IN')}</span>
                </div>
                <button 
                  className="w-full py-4 bg-bone text-onyx text-xs uppercase tracking-[0.2em] font-bold hover:bg-crimson hover:text-bone transition-colors duration-300"
                  data-hover
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
