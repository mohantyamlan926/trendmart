/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import ProductCatalog from './components/ProductCatalog';
import CartDrawer from './components/CartDrawer';
import ProductDetailsModal from './components/ProductDetailsModal';
import LoginModal from './components/LoginModal';
import ProfileModal from './components/ProfileModal';
import { EXCLUSIVE_FIGURINES } from './data';
import { FigurineProduct, CartItem, User } from './types';
import { ShoppingCart, Compass, Instagram, Sparkles, Volume2, VolumeX, CheckCircle, Ticket } from 'lucide-react';

export default function App() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<FigurineProduct | null>(null);
  const [activeTab, setActiveTab] = useState<string>('all');
  
  // Authentication states
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);

  // Immersive sound states
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);
  
  // Custom interactive notification toasts state
  const [toasts, setToasts] = useState<{ id: string; message: string; type: 'success' | 'info' }[]>([]);

  // Generate granular grain overlay background dynamically
  const grainSvg = `<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='200' height='200' filter='url(#n)' opacity='0.08'/></svg>`;
  const grainDataUrl = `url("data:image/svg+xml,${encodeURIComponent(grainSvg)}")`;

  // Play micro synths to make the UX highly interactive and delightful
  const playClickSound = (freq = 440, type: OscillatorType = 'sine') => {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      
      gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.12);
      
      osc.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      
      osc.start();
      osc.stop(audioCtx.currentTime + 0.15);
    } catch (e) {
      // AudioContext fallback
    }
  };

  // Trigger audio clicks on carousel indexing or cart updates
  useEffect(() => {
    playClickSound(520, 'sine');
  }, [activeIndex]);

  const showToast = (message: string, type: 'success' | 'info' = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts(prev => [...prev, { id, message, type }]);
    
    // Play quick success chime sound
    if (type === 'success') {
      playClickSound(660, 'triangle');
      setTimeout(() => playClickSound(880, 'triangle'), 80);
    } else {
      playClickSound(400, 'sine');
    }

    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  };

  // Add to Cart handler
  const handleAddToCart = (product: FigurineProduct, quantity: number, color?: string) => {
    setCartItems(prev => {
      const existingIndex = prev.findIndex(item => item.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        if (color) updated[existingIndex].selectedColor = color;
        return updated;
      }
      return [...prev, { product, quantity, selectedColor: color || 'Standard Edition' }];
    });
    
    showToast(`Added ${quantity}x ${product.name} to your Trend Mart bag!`, 'success');
  };

  // Shortcut quick addition
  const handleQuickAdd = (product: FigurineProduct) => {
    handleAddToCart(product, 1);
  };

  const handleUpdateQty = (productId: string, newQty: number) => {
    playClickSound(480, 'sine');
    if (newQty <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems(prev => prev.map(item => 
      item.product.id === productId ? { ...item, quantity: newQty } : item
    ));
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
    showToast('Item removed from shopping bag', 'info');
  };

  const scrollSection = (sectionId: string) => {
    playClickSound(380, 'sine');
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeProduct = EXCLUSIVE_FIGURINES[activeIndex];

  return (
    <div 
      className="relative min-h-screen flex flex-col font-sans transition-colors duration-[800ms] ease-out text-white overflow-x-hidden"
      style={{ backgroundColor: activeProduct.bg }}
    >
      {/* Decorative High-Aesthetic Film Grain Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-50 mix-blend-overlay opacity-30 select-none"
        style={{ backgroundImage: grainDataUrl }}
      />

      {/* Dynamic Ambient Background Highlights */}
      <div className="absolute top-20 left-1/3 w-96 h-96 rounded-full bg-white/10 blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-40 right-1/4 w-[500px] h-[500px] rounded-full bg-black/15 blur-[160px] pointer-events-none z-0" />

      {/* Sound Effects Toggle (Arcade retro feedback) */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => {
            setSoundEnabled(!soundEnabled);
            if (!soundEnabled) {
              // Quick test sound
              setTimeout(() => playClickSound(580, 'sine'), 100);
            }
          }}
          className={`flex items-center gap-2 p-2 px-3 rounded-full text-[10px] font-mono tracking-widest uppercase cursor-pointer border shadow-md transition-all ${
            soundEnabled 
              ? 'bg-white text-black border-white font-bold scale-105' 
              : 'bg-black/45 hover:bg-black/60 text-white/80 border-white/20'
          }`}
          title={soundEnabled ? "Mute interactive audio clicks" : "Turn on cute feedback sounds"}
        >
          {soundEnabled ? <Volume2 size={12} className="animate-pulse" /> : <VolumeX size={12} />}
          <span>FEEDBACK: {soundEnabled ? 'ON' : 'OFF'}</span>
        </button>
      </div>

      {/* Floating Notifications Toast Stack */}
      <div className="fixed top-20 right-4 sm:right-8 z-[300] flex flex-col gap-2 max-w-sm pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="p-3 bg-slate-900 border border-white/15 backdrop-blur-md rounded-2xl shadow-xl flex items-center gap-3 animate-in slide-in-from-top-4 duration-300 pointer-events-auto"
          >
            <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center font-bold text-[10px]">
              {toast.type === 'success' ? '✓' : 'i'}
            </div>
            <p className="text-xs text-white/95 font-semibold leading-snug">
              {toast.message}
            </p>
          </div>
        ))}
      </div>

      {/* Standard Header Navigation Menu */}
      <Navbar 
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        user={currentUser}
        onOpenCart={() => {
          playClickSound(600, 'sine');
          setIsCartOpen(true);
        }}
        onSectionScroll={scrollSection}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenLogin={() => setIsLoginOpen(true)}
        onOpenProfile={() => setIsProfileOpen(true)}
      />

      {/* Layout Main Container */}
      <main id="inner" className="flex-1 flex flex-col relative z-20">
        
        {/* SECTION 1: Carousel Product Highlights */}
        <section id="promo-carousel" className="relative pt-6 pb-12 overflow-hidden border-b border-white/10">
          
          {/* Subtle watermark panel bar */}
          <div className="absolute top-4 left-4 sm:left-8 z-30 flex items-center gap-2.5">
            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-white/80">TOONHUB SERIES</span>
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
          </div>



          {/* Carousel Core */}
          <Carousel 
            activeIndex={activeIndex}
            setActiveIndex={(idx) => {
              setActiveIndex(idx);
            }}
            onDiscover={(prod) => {
              playClickSound(640, 'triangle');
              setSelectedProduct(prod);
            }}
          />
        </section>

        {/* SECTION 2: Dynamic Marketplace Catalog Area (Black/Slate background container) */}
        <div className="bg-white text-slate-800 flex-1 relative z-10 py-4 shadow-2xl rounded-t-[40px] -mt-10 overflow-hidden">
          
          <div className="max-w-7xl mx-auto px-4 md:px-8 mt-4">
            <div className="bg-slate-900 rounded-3xl p-6 md:p-10 text-white relative overflow-hidden flex flex-col md:flex-row gap-6 justify-between items-center shadow-lg mb-16">
              {/* Highlight graphics */}
              <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-rose-500/10 blur-xl" />
              
              <div className="max-w-2xl relative z-10 text-center md:text-left">
                <span className="inline-block bg-white/10 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest text-yellow-300 uppercase mb-3">
                  ★ Trend Mart Exclusive Offer
                </span>
                <h3 className="text-2xl md:text-3xl font-black uppercase font-anton tracking-wide mb-2">
                  Complete Your Cohesive Toy Setup
                </h3>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed max-w-xl">
                  Order any premium 3D figurine collection item today and qualify for a complimentary desktop display companion. Add both items to your bag to automatically apply the checkout discount.
                </p>
              </div>

              <button
                onClick={() => scrollSection('shop-catalog')}
                className="px-6 py-3 bg-rose-500 hover:bg-rose-600 text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-md flex-shrink-0 cursor-pointer active:scale-95"
              >
                Explore Catalog Below
              </button>
            </div>
          </div>

          <ProductCatalog 
            onSelectProduct={(prod) => {
              playClickSound(640, 'triangle');
              setSelectedProduct(prod);
            }}
            onQuickAdd={handleQuickAdd}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>

      </main>

      {/* Modals & Slide Drawers */}
      {isLoginOpen && (
        <LoginModal 
          onClose={() => setIsLoginOpen(false)} 
          onLogin={(user) => {
            setCurrentUser(user);
            showToast(`Welcome back, ${user.name}!`, 'success');
          }} 
        />
      )}
      
      {isProfileOpen && currentUser && (
        <ProfileModal 
          user={currentUser} 
          onClose={() => setIsProfileOpen(false)} 
          onLogout={() => {
            setCurrentUser(null);
            showToast('You have been securely signed out.', 'info');
          }} 
        />
      )}

      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => {
          playClickSound(440, 'sine');
          setIsCartOpen(false);
        }}
        cartItems={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onClearCart={() => setCartItems([])}
      />

      <ProductDetailsModal 
        product={selectedProduct}
        onClose={() => {
          playClickSound(440, 'sine');
          setSelectedProduct(null);
        }}
        onAddToCart={handleAddToCart}
      />

      {/* Elegant Standard Footer */}
      <footer className="bg-slate-950 text-white py-12 relative z-30 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand details */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center font-anton text-md tracking-wider">
                TM
              </div>
              <span className="font-anton text-lg tracking-[0.14em] uppercase text-white">
                Trend Mart
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed mb-4">
              Providing premium aesthetic collectibles, accessories, and certified limited editions. Our materials are high impact resistant, fully eco-friendly, and beautifully finished.
            </p>

          </div>

          {/* Links col */}
          <div>
            <h4 className="text-xs font-black uppercase text-slate-300 tracking-wider mb-3">Shop Collections</h4>
            <ul className="text-xs text-slate-400 space-y-2">
              <li><button onClick={() => { setActiveTab('figurine'); scrollSection('shop-catalog'); }} className="hover:text-white cursor-pointer hover:underline">ToonHub 3D Figurines</button></li>
              <li><button onClick={() => { setActiveTab('accessory'); scrollSection('shop-catalog'); }} className="hover:text-white cursor-pointer hover:underline">Desktop Companions</button></li>
              <li><a href="#" className="hover:text-white hover:underline">Limited Signatures</a></li>
              <li><a href="#" className="hover:text-white hover:underline">Aesthetic Lighting</a></li>
            </ul>
          </div>

          {/* Guidelines col */}
          <div>
            <h4 className="text-xs font-black uppercase text-slate-300 tracking-wider mb-3">Verify Safeties</h4>
            <ul className="text-xs text-slate-400 space-y-2">
              <li><a href="#" className="hover:text-white hover:underline">Secure SSL Transactions</a></li>
              <li><a href="#" className="hover:text-white hover:underline">Global Fragile Courier Shipping</a></li>
              <li><a href="#" className="hover:text-white hover:underline">Certificates of Authenticity</a></li>
              <li><a href="#" className="hover:text-white hover:underline">Contact Customer Support</a></li>
            </ul>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center text-[10px] text-slate-500 gap-4">
          <span>&copy; {new Date().getFullYear()} Trend Mart (ToonHub Collectibles). All rights and parameters reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-300">Terms of Use</a>
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">EULA parameters</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
