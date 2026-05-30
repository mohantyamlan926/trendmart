/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ALL_PRODUCTS } from '../data';
import { FigurineProduct } from '../types';
import { Search, SlidersHorizontal, Eye, ShoppingCart, Sparkles } from 'lucide-react';

interface ProductCatalogProps {
  onSelectProduct: (product: FigurineProduct) => void;
  onQuickAdd: (product: FigurineProduct) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const CATEGORIES = [
  { id: 'all', label: 'All Items' },
  { id: 'figurine', label: 'Figurines' },
  { id: 'accessory', label: 'Companions' },
  { id: 'shoes', label: 'Shoes' },
  { id: 'watch', label: 'Watches' },
  { id: 'phone', label: 'Phones' },
  { id: 'airboard', label: 'Airboards & Audio' },
  { id: 'laptop', label: 'Laptops' },
  { id: 'camera', label: 'Cameras' },
  { id: 'spectacles', label: 'Spectacles' },
  { id: 'electronics', label: 'Electronics' },
  { id: 'bags', label: 'Bags' },
];

export default function ProductCatalog({ 
  onSelectProduct, 
  onQuickAdd,
  activeTab,
  setActiveTab
}: ProductCatalogProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [maxPrice, setMaxPrice] = useState<number>(3000);
  const [visibleCount, setVisibleCount] = useState(12);

  // Filtering logic
  let filteredProducts = ALL_PRODUCTS.filter(p => {
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = p.name.toLowerCase().includes(searchLower) || 
                          p.codename.toLowerCase().includes(searchLower) ||
                          p.description.toLowerCase().includes(searchLower) ||
                          (p.category && p.category.toLowerCase().includes(searchLower));
    
    const matchesTab = activeTab === 'all' || p.category === activeTab;
    const matchesPrice = p.price <= maxPrice;

    return matchesSearch && matchesTab && matchesPrice;
  });

  // Sorting logic
  if (sortBy === 'price-low') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  return (
    <section id="shop-catalog" className="max-w-7xl mx-auto px-4 md:px-8 py-16 text-slate-800">
      
      {/* Header and Title */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-6 h-px bg-rose-500 inline-block" />
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-rose-500">
            EXPLORE RELEASES
          </span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold font-sans text-slate-900 tracking-tight">
          Trend Mart Marketplace
        </h2>
      </div>

      {/* Advanced Filters Bar */}
      <div className="flex flex-col gap-6 mb-10 p-5 bg-slate-50 border border-slate-100 rounded-3xl">
        
        {/* Top row: Search, Sort, Price */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          <div className="relative w-full md:w-80 flex-shrink-0">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input
              type="text"
              placeholder="Search catalog (name, category, features)..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(12);
              }}
              className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 focus:border-black rounded-xl text-sm font-medium outline-none transition-all placeholder:text-slate-400 shadow-sm"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full md:w-auto">
            {/* Price Slider */}
            <div className="flex flex-col gap-1 px-4 py-2 bg-white rounded-xl border border-slate-200 shadow-sm w-full sm:w-48">
              <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-slate-500">
                <span>Max Price</span>
                <span className="text-rose-500">${maxPrice}</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="3000" 
                step="50" 
                value={maxPrice} 
                onChange={(e) => {
                  setMaxPrice(Number(e.target.value));
                  setVisibleCount(12);
                }}
                className="w-full accent-rose-500"
              />
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => {
                setSortBy(e.target.value);
                setVisibleCount(12);
              }}
              className="w-full sm:w-auto px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs font-bold uppercase tracking-wider outline-none focus:border-black cursor-pointer shadow-sm text-slate-700"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Bottom row: Scrollable Categories */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-2 px-2 items-center">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveTab(cat.id);
                setVisibleCount(12);
              }}
              className={`flex-shrink-0 px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-black text-white shadow-md scale-105'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-400 hover:text-black'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Catalog Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-24 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
          <SlidersHorizontal className="mx-auto text-slate-300 mb-5" size={48} />
          <h3 className="text-xl font-black text-slate-800 tracking-tight">No products found</h3>
          <p className="text-sm text-slate-500 mt-2 max-w-sm mx-auto">Try adjusting your filters, increasing the max price, or trying a different search term.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveTab('all');
              setMaxPrice(3000);
              setSortBy('featured');
            }}
            className="mt-6 px-6 py-3 bg-black text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-slate-800 transition-all cursor-pointer shadow-md"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {visibleProducts.map((p) => {
              const isToon = p.category === 'figurine';

              return (
                <div 
                  key={p.id}
                  id={`product-card-${p.id}`}
                  className="group relative bg-white border border-slate-100 hover:border-slate-200 rounded-3xl shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* Image background plate */}
                  <div 
                    className="relative aspect-square w-full flex items-center justify-center p-6 overflow-hidden transition-all"
                    style={{ backgroundColor: isToon ? `${p.bg}12` : '#fafafa' }}
                  >
                    <img
                      src={p.src}
                      alt={p.name}
                      referrerPolicy="no-referrer"
                      className="max-h-full max-w-full object-contain transform group-hover:scale-108 transition-transform duration-500 select-none"
                    />

                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                      {isToon ? (
                        <span className="bg-black text-white text-[9px] font-black uppercase tracking-[0.14em] px-2.5 py-1 rounded-md flex items-center gap-1 shadow-sm">
                          <Sparkles size={9} className="text-yellow-300 fill-yellow-300 animate-pulse" /> TOONEX
                        </span>
                      ) : (
                        <span className="bg-rose-100 text-rose-700 text-[9px] font-black uppercase tracking-[0.11em] px-2.5 py-1 rounded-md shadow-xs">
                          {p.category.toUpperCase()}
                        </span>
                      )}
                    </div>

                    {/* Direct Hover Action Shortcuts panel */}
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
                      <button
                        onClick={() => onSelectProduct(p)}
                        className="w-11 h-11 bg-white hover:bg-slate-50 text-black rounded-full flex items-center justify-center shadow-md active:scale-90 transition-all cursor-pointer"
                        title="Inspect Spec Sheet and Parameters"
                      >
                        <Eye size={18} />
                      </button>
                      <button
                        onClick={() => onQuickAdd(p)}
                        className="w-11 h-11 bg-rose-500 hover:bg-rose-600 text-white rounded-full flex items-center justify-center shadow-md active:scale-90 transition-all cursor-pointer"
                        title="Quick Add to Cart bag"
                      >
                        <ShoppingCart size={18} />
                      </button>
                    </div>
                  </div>

                  {/* Info and Price controls summary */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-[10px] font-mono tracking-wider text-slate-500 uppercase">
                          {p.codename}
                        </span>
                        <div className="flex items-center gap-1 text-[11px] text-amber-500 font-bold">
                          <span>★</span>
                          <span>{p.rating.toFixed(1)}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-rose-500 transition-colors tracking-tight line-clamp-1 mb-1 font-sans">
                        {p.name}
                      </h3>
                      
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4">
                        {p.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-1 border-t border-slate-100/80">
                      <div className="flex flex-col">
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">price</span>
                        <span className="text-base font-bold text-slate-900">${p.price.toFixed(2)}</span>
                      </div>
                      
                      <button
                        onClick={() => onSelectProduct(p)}
                        className="text-xs font-bold text-black border-b-2 border-slate-900 hover:text-rose-500 hover:border-rose-500 transition-all pb-0.5 cursor-pointer"
                      >
                        VIEW DETAILS
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Load More Button */}
          {visibleCount < filteredProducts.length && (
            <div className="mt-16 flex justify-center">
              <button
                onClick={() => setVisibleCount(prev => prev + 12)}
                className="px-8 py-3 bg-white border-2 border-slate-900 text-slate-900 text-xs font-black uppercase tracking-widest rounded-full hover:bg-slate-900 hover:text-white transition-all cursor-pointer shadow-sm active:scale-95 flex items-center gap-2"
              >
                Load More Products ({filteredProducts.length - visibleCount} left)
              </button>
            </div>
          )}
        </>
      )}

      {/* Trust guarantees badge grid */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 py-10 border-t border-b border-slate-100 bg-slate-50/50 rounded-2xl px-6">
        <div className="text-center sm:text-left flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-800 font-bold text-lg flex-shrink-0">
            🚚
          </div>
          <div>
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider">Fast Courier Dispatch</h4>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">Fully protective wooden crate enclosures containing customized fragile cushioning.</p>
          </div>
        </div>
        
        <div className="text-center sm:text-left flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-800 font-bold text-lg flex-shrink-0">
            🎨
          </div>
          <div>
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider">Certified 3D Craft</h4>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">Official limited serial certificates matching base stamp plates on all items.</p>
          </div>
        </div>

        <div className="text-center sm:text-left flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-800 font-bold text-lg flex-shrink-0">
            💳
          </div>
          <div>
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider">Verified Checkout</h4>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">256-bit encrypted transactions protecting identity parameters completely.</p>
          </div>
        </div>
      </div>

    </section>
  );
}
