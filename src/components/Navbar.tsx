/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ShoppingBag, Sparkles, Heart, Search, User as UserIcon } from 'lucide-react';
import { User } from '../types';

interface NavbarProps {
  cartCount: number;
  user: User | null;
  onOpenCart: () => void;
  onSectionScroll: (sectionId: string) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenLogin: () => void;
  onOpenProfile: () => void;
}

export default function Navbar({ 
  cartCount, 
  user,
  onOpenCart, 
  onSectionScroll, 
  activeTab, 
  setActiveTab,
  onOpenLogin,
  onOpenProfile
}: NavbarProps) {
  const [searchVal, setSearchVal] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSectionScroll('shop-catalog');
    // Optionally focus the catalog search input if it exists
    const catInput = document.querySelector('input[placeholder="Search catalog (name, category, features)..."]') as HTMLInputElement;
    if (catInput) {
      catInput.value = searchVal;
      // Trigger native input change event
      const event = new Event('input', { bubbles: true });
      catInput.dispatchEvent(event);
      catInput.focus();
    }
  };

  return (
    <header className="sticky top-0 w-full z-[100] bg-black/60 backdrop-blur-md border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <div 
          onClick={() => onSectionScroll('promo-carousel')} 
          className="flex items-center gap-2 cursor-pointer group flex-shrink-0"
        >
          <div className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center font-anton text-md tracking-wider group-hover:scale-105 transition-all">
            TM
          </div>
          <span className="font-anton text-lg tracking-[0.14em] uppercase text-white group-hover:text-white/90 transition-colors hidden sm:inline">
            Trend Mart
          </span>
        </div>

        {/* Premium Search Bar from Screenshot */}
        <form 
          onSubmit={handleSearchSubmit}
          className="flex items-center bg-zinc-900/60 border border-zinc-700/60 hover:border-zinc-500/80 transition-all rounded-xs overflow-hidden h-9 w-full max-w-[210px] sm:max-w-xs xl:max-w-md"
        >
          <div className="pl-2.5 pr-1.5 text-zinc-400 flex items-center">
            <Search size={14} />
          </div>
          <input 
            type="text" 
            placeholder="Search products..." 
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            className="w-full bg-transparent text-white placeholder-zinc-500 text-xs outline-none py-1.5 font-sans"
          />
          <button 
            type="submit"
            className="h-full px-3.5 bg-indigo-600 text-white flex items-center justify-center hover:bg-indigo-500 transition-colors rounded-r-xs cursor-pointer"
            title="Search catalog"
          >
            <Search size={13} />
          </button>
        </form>

        {/* Catalog Navigation (Desktop) - Matching exact screenshot list */}
        <nav className="hidden lg:flex items-center gap-7 text-[11px] font-bold uppercase tracking-widest text-zinc-300">
          <button
            onClick={() => {
              onSectionScroll('promo-carousel');
            }}
            className="hover:text-white transition-all pb-1 border-b-2 border-transparent hover:border-indigo-500 cursor-pointer relative"
          >
            Home
          </button>
          
          <button
            onClick={() => {
              setActiveTab('all');
              onSectionScroll('shop-catalog');
            }}
            className="hover:text-white transition-all pb-1 border-b-2 border-transparent hover:border-indigo-500 cursor-pointer text-white border-b-indigo-505"
          >
            Shop
          </button>

          <button
            onClick={() => {
              setActiveTab('figurine');
              onSectionScroll('shop-catalog');
            }}
            className="hover:text-white transition-all pb-1 border-b-2 border-transparent hover:border-indigo-500 cursor-pointer"
          >
            Categories
          </button>

          <button
            onClick={() => {
              onSectionScroll('shop-catalog');
              // Highlight the promo banner area
              const banner = document.getElementById('shop-catalog');
              if (banner) banner.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-white transition-all pb-1 border-b-2 border-transparent hover:border-indigo-500 cursor-pointer"
          >
            Deals
          </button>

          <button
            onClick={() => {
              onSectionScroll('inner');
              // Scroll to the footer where Brand description details are
              window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            }}
            className="hover:text-white transition-all pb-1 border-b-2 border-transparent hover:border-indigo-500 cursor-pointer"
          >
            About
          </button>

          <button
            onClick={() => {
              window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            }}
            className="hover:text-white transition-all pb-1 border-b-2 border-transparent hover:border-indigo-500 cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Action icons */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          {/* Quick Stats Indicator */}
          <div className="hidden xl:flex items-center gap-1 px-2.5 py-0.5 bg-indigo-950/40 border border-indigo-500/20 rounded-full text-[9px] font-mono tracking-wider text-indigo-300">
            <Sparkles size={10} className="text-yellow-400 animate-pulse" />
            <span>LIVE EXCLUSIVES</span>
          </div>

          {/* User Profile / Sign In */}
          {user ? (
            <button
              onClick={onOpenProfile}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden border-2 border-indigo-500/50 hover:border-indigo-400 transition-all cursor-pointer shadow-sm active:scale-95"
              title="My Account"
            >
              {user.avatar ? (
                <img src={user.avatar} alt={user.name} className="w-full h-full object-cover bg-white" />
              ) : (
                <div className="w-full h-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold uppercase">
                  {user.name.charAt(0)}
                </div>
              )}
            </button>
          ) : (
            <button
              onClick={onOpenLogin}
              className="flex items-center gap-1.5 py-1.5 px-3 sm:px-4 bg-transparent border border-white/20 text-white hover:bg-white/10 active:scale-95 rounded-full text-[10px] sm:text-xs font-bold transition-all cursor-pointer"
            >
              <UserIcon size={14} className="sm:hidden" />
              <span className="hidden sm:inline">SIGN IN</span>
            </button>
          )}

          {/* Cart triggers */}
          <button
            onClick={onOpenCart}
            className="flex items-center gap-1.5 py-1.5 px-3 bg-white text-black hover:bg-zinc-100 active:scale-95 rounded-full text-xs font-bold transition-all shadow-xs cursor-pointer"
            aria-label="Toggle Shopping Cart"
          >
            <ShoppingBag size={14} />
            <span className="hidden sm:inline font-sans text-[10px]">CART</span>
            {cartCount > 0 && (
              <span className="flex items-center justify-center min-w-4 h-4 px-1 bg-indigo-600 text-white rounded-full text-[9px] font-sans font-black shadow-xs">
                {cartCount}
              </span>
            )}
          </button>
        </div>

      </div>
    </header>
  );
}
