import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, MapPin, Package, CreditCard, Heart, LogOut } from 'lucide-react';

interface AccountProps {
  isOpen: boolean;
  onClose: () => void;
}

const PAST_ORDERS = [
  {
    id: 'ORD-2025-1847',
    date: 'December 28, 2025',
    status: 'Delivered',
    total: 2230,
    items: [
      { name: 'Atlas Wool Blazer', quantity: 1, price: 980 },
      { name: 'The Obsidian Trench', quantity: 1, price: 1250 }
    ]
  },
  {
    id: 'ORD-2025-1623',
    date: 'November 15, 2025',
    status: 'Delivered',
    total: 890,
    items: [
      { name: 'Carbon Weave Trouser', quantity: 1, price: 890 }
    ]
  },
  {
    id: 'ORD-2025-1204',
    date: 'September 3, 2025',
    status: 'Delivered',
    total: 3220,
    items: [
      { name: 'Silk Vertex Gown', quantity: 1, price: 2800 },
      { name: 'Nebula Silk Scarf', quantity: 1, price: 420 }
    ]
  }
];

const WISHLIST = [
  { name: 'Velvet Void Jacket', price: 1550 },
  { name: 'Lunar Knit', price: 450 }
];

export const Account: React.FC<AccountProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = React.useState<'profile' | 'orders' | 'wishlist'>('profile');

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full max-w-lg bg-onyx border-l border-bone/10 z-[101] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-bone/10">
              <div className="flex items-center gap-3">
                <User strokeWidth={1} className="text-bone" />
                <h2 className="font-serif text-xl text-bone">My Account</h2>
              </div>
              <button onClick={onClose} className="text-bone/70 hover:text-bone transition-colors" data-hover>
                <X strokeWidth={1} />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-bone/10">
              {[
                { id: 'profile', label: 'Profile' },
                { id: 'orders', label: 'Orders' },
                { id: 'wishlist', label: 'Wishlist' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`flex-1 py-4 text-xs uppercase tracking-widest transition-colors ${
                    activeTab === tab.id ? 'text-bone border-b-2 border-crimson' : 'text-bone/50 hover:text-bone'
                  }`}
                  data-hover
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {activeTab === 'profile' && (
                <div className="space-y-8">
                  {/* User Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-bone/10 flex items-center justify-center">
                      <span className="font-serif text-2xl text-bone">AM</span>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-bone">Abhaay Mallick</h3>
                      <p className="text-sm text-bone/50">Member since 2024</p>
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="space-y-4">
                    <h4 className="text-xs uppercase tracking-widest text-bone/50">Contact Information</h4>
                    <div className="space-y-3 text-bone/80">
                      <p>abhaay.mallick@email.com</p>
                      <p>+91 98765 43210</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs uppercase tracking-widest text-bone/50">Shipping Address</h4>
                      <button className="text-xs text-crimson hover:text-crimson/80" data-hover>Edit</button>
                    </div>
                    <div className="p-4 border border-bone/10 space-y-1">
                      <div className="flex items-start gap-2">
                        <MapPin size={16} className="text-bone/50 mt-0.5" />
                        <div className="text-bone/80 text-sm">
                          <p className="font-medium text-bone">Abhaay Mallick</p>
                          <p>42, Rajpur Road, Civil Lines</p>
                          <p>Near Clock Tower</p>
                          <p>Dehradun, Uttarakhand 248001</p>
                          <p>India</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Payment */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs uppercase tracking-widest text-bone/50">Payment Methods</h4>
                      <button className="text-xs text-crimson hover:text-crimson/80" data-hover>Add New</button>
                    </div>
                    <div className="p-4 border border-bone/10 flex items-center gap-3">
                      <CreditCard size={20} className="text-bone/50" />
                      <div className="text-bone/80 text-sm">
                        <p>•••• •••• •••• 4532</p>
                        <p className="text-bone/50 text-xs">Expires 08/27</p>
                      </div>
                    </div>
                  </div>

                  {/* Logout */}
                  <button className="w-full py-3 border border-bone/20 text-bone/70 hover:text-bone hover:border-bone/40 transition-colors flex items-center justify-center gap-2 text-xs uppercase tracking-widest" data-hover>
                    <LogOut size={14} />
                    Sign Out
                  </button>
                </div>
              )}

              {activeTab === 'orders' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs uppercase tracking-widest text-bone/50">Order History</h4>
                    <span className="text-xs text-bone/30">{PAST_ORDERS.length} orders</span>
                  </div>
                  
                  {PAST_ORDERS.map((order) => (
                    <div key={order.id} className="border border-bone/10 p-4 space-y-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-bone font-medium">{order.id}</p>
                          <p className="text-xs text-bone/50">{order.date}</p>
                        </div>
                        <span className="text-xs px-2 py-1 bg-green-900/30 text-green-400 uppercase tracking-wider">
                          {order.status}
                        </span>
                      </div>
                      
                      <div className="space-y-2 border-t border-bone/10 pt-4">
                        {order.items.map((item, idx) => (
                          <div key={idx} className="flex justify-between text-sm">
                            <span className="text-bone/70">{item.name} × {item.quantity}</span>
                            <span className="text-bone/50">₹{item.price.toLocaleString('en-IN')}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex justify-between items-center border-t border-bone/10 pt-4">
                        <span className="text-xs uppercase tracking-widest text-bone/50">Total</span>
                        <span className="font-serif text-bone">₹{order.total.toLocaleString('en-IN')}</span>
                      </div>
                      
                      <button className="w-full py-2 border border-bone/20 text-xs uppercase tracking-widest text-bone/70 hover:text-bone hover:border-bone/40 transition-colors" data-hover>
                        View Details
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'wishlist' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs uppercase tracking-widest text-bone/50">Saved Items</h4>
                    <span className="text-xs text-bone/30">{WISHLIST.length} items</span>
                  </div>
                  
                  {WISHLIST.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 border border-bone/10">
                      <div className="flex items-center gap-3">
                        <Heart size={16} className="text-crimson" fill="currentColor" />
                        <div>
                          <p className="text-bone">{item.name}</p>
                          <p className="text-sm text-bone/50">₹{item.price.toLocaleString('en-IN')}</p>
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-bone text-onyx text-xs uppercase tracking-widest hover:bg-crimson hover:text-bone transition-colors" data-hover>
                        Add to Cart
                      </button>
                    </div>
                  ))}
                  
                  {WISHLIST.length === 0 && (
                    <div className="text-center py-12">
                      <Heart size={48} className="text-bone/20 mx-auto mb-4" />
                      <p className="text-bone/50 text-sm">No saved items yet</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
