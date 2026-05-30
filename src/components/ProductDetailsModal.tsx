/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FigurineProduct } from '../types';
import { X, Shield, Plus, Minus, ShoppingCart, Sparkles, Box, Weight, Award } from 'lucide-react';

interface ProductDetailsModalProps {
  product: FigurineProduct | null;
  onClose: () => void;
  onAddToCart: (product: FigurineProduct, quantity: number, color?: string) => void;
}

export default function ProductDetailsModal({ product, onClose, onAddToCart }: ProductDetailsModalProps) {
  const [selectedColor, setSelectedColor] = useState<string>('Standard Edition');
  const [qty, setQty] = useState<number>(1);

  React.useEffect(() => {
    if (product) {
      setQty(1);
      switch (product.category) {
        case 'shoes': setSelectedColor('US 9'); break;
        case 'watch':
        case 'accessory': setSelectedColor('Classic Slate'); break;
        case 'phone':
        case 'laptop': setSelectedColor('256GB'); break;
        case 'bags': setSelectedColor('Medium (18L)'); break;
        case 'figurine': setSelectedColor('Standard Edition'); break;
        default: setSelectedColor('Obsidian Black');
      }
    }
  }, [product]);

  if (!product) return null;

  const isToon = product.category === 'figurine';

  let variantLabel = 'Select Finish Polish';
  let colorOptions = ['Standard Edition'];

  switch (product.category) {
    case 'shoes':
      variantLabel = 'Select Size (US)';
      colorOptions = ['US 7', 'US 8', 'US 9', 'US 10', 'US 11'];
      break;
    case 'watch':
    case 'accessory':
      variantLabel = 'Select Material/Band';
      colorOptions = ['Classic Slate', 'Metal Mesh', 'Premium Leather'];
      break;
    case 'phone':
    case 'laptop':
      variantLabel = 'Select Storage Capacity';
      colorOptions = ['128GB', '256GB', '512GB', '1TB'];
      break;
    case 'bags':
      variantLabel = 'Select Size';
      colorOptions = ['Small (10L)', 'Medium (18L)', 'Large (25L)'];
      break;
    case 'figurine':
      variantLabel = 'Select Finish Polish';
      colorOptions = ['Standard Edition', 'Gloss Metallic', 'Stealth Matte Black'];
      break;
    default:
      variantLabel = 'Select Style / Color';
      colorOptions = ['Classic Slate', 'Titanium Silver', 'Obsidian Black'];
  }

  const handleDecrease = () => {
    if (qty > 1) setQty(qty - 1);
  };

  const handleIncrease = () => {
    setQty(qty + 1);
  };

  const handleAddSubmit = () => {
    onAddToCart(product, qty, selectedColor);
    setQty(1); // reset qty trigger
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[250] flex items-center justify-center p-4">
      {/* Dark gray backdrop overlay */}
      <div 
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Frame Container */}
      <div className="relative bg-white rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row shadow-2xl z-50 text-slate-800 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/10 hover:bg-black/25 text-slate-700 md:text-white transition-all cursor-pointer"
          aria-label="Close dialog"
        >
          <X size={18} />
        </button>

        {/* Left Side: Large Colorful Figurine Base Area */}
        <div 
          className="w-full md:w-[45%] flex items-center justify-center p-8 relative min-h-[280px] md:min-h-0"
          style={{ backgroundColor: isToon ? product.bg : '#1c1c1e' }}
        >
          {/* Subtle textured back glow */}
          <div className="absolute w-56 h-56 rounded-full bg-white/20 blur-2xl pointer-events-none" />

          <img
            src={product.src}
            alt={product.name}
            referrerPolicy="no-referrer"
            className="max-h-[300px] md:max-h-[440px] max-w-full object-contain z-10 select-none drop-shadow-2xl animate-pulse-slow"
          />

          {/* Core code watermark */}
          <div className="absolute bottom-4 left-5 text-white/50 font-mono text-[9px] uppercase tracking-widest leading-none">
            SPEC ID: {product.id}
          </div>
        </div>

        {/* Right Side: Specifications Details Layout */}
        <div className="w-full md:w-[55%] p-6 md:p-8 overflow-y-auto flex flex-col justify-between max-h-[60vh] md:max-h-[85vh]">
          <div>
            {/* Category / Badge parameters */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] uppercase font-black tracking-[0.25em] text-rose-500 flex items-center gap-1.5">
                <Sparkles size={11} /> 
                {isToon ? `${product.codename} SERIES` : 'COMPANION ACCESSORY'}
              </span>
              <div className="h-3 w-px bg-slate-200" />
              <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase">
                {product.specs.edition}
              </span>
            </div>

            {/* Title & Reviews */}
            <h2 className="text-xl md:text-3xl font-black tracking-tight text-slate-900 uppercase font-sans">
              {product.name}
            </h2>

            <div className="flex items-center gap-2.5 mt-2 mb-4">
              <div className="flex text-amber-400 text-sm">★★★★★</div>
              <span className="text-xs font-bold text-slate-800">
                {product.rating.toFixed(1)} / 5.0
              </span>
              <span className="text-xs text-slate-400">
                ({product.reviewsCount} customer metrics)
              </span>
            </div>

            {/* Core Description text */}
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Config: Color variants */}
            <div className="mb-6">
              <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                {variantLabel}
              </span>
              <div className="flex flex-wrap gap-2">
                {colorOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setSelectedColor(opt)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border cursor-pointer ${
                      selectedColor === opt
                        ? 'bg-black border-black text-white'
                        : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-600'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Technical Specifications Blueprint block */}
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 mb-6">
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Box size={12} /> Tech Spec Sheet Blueprint
              </div>
              
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-200/50">
                  <span className="text-slate-400">Material:</span>
                  <span className="font-semibold text-slate-800 truncate max-w-[120px]" title={product.specs.material}>{product.specs.material}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/50">
                  <span className="text-slate-400">Dimensions:</span>
                  <span className="font-semibold text-slate-800 truncate max-w-[120px]" title={product.specs.dimensions}>{product.specs.dimensions}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/50">
                  <span className="text-slate-400">Net Weight:</span>
                  <span className="font-semibold text-slate-800 truncate max-w-[120px]" title={product.specs.weight}>{product.specs.weight}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/50">
                  <span className="text-slate-400">Prod Year:</span>
                  <span className="font-semibold text-slate-800 truncate max-w-[120px]" title={product.specs.year}>{product.specs.year}</span>
                </div>
              </div>
            </div>

            {/* Custom Features bullets */}
            {product.features && product.features.length > 0 && (
              <div className="mb-6">
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                  Special Parameters
                </span>
                <ul className="text-xs text-slate-600 space-y-1.5 pl-4 list-disc">
                  {product.features.map((feat, i) => (
                    <li key={i}>{feat}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Add-to-Cart parameters bar */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">calculated subtotal:</span>
              <span className="text-xl md:text-2xl font-black text-slate-900">
                ${(product.price * qty).toFixed(2)}
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* Qty controller popup */}
              <div className="flex items-center bg-slate-100 rounded-xl overflow-hidden border border-slate-200">
                <button
                  type="button"
                  onClick={handleDecrease}
                  className="px-3 py-2 text-slate-700 font-extrabold text-sm hover:bg-slate-200/60 transition-all cursor-pointer"
                >
                  <Minus size={13} />
                </button>
                <span className="px-3 py-2 text-xs font-black text-slate-800 min-w-8 text-center select-none">
                  {qty}
                </span>
                <button
                  type="button"
                  onClick={handleIncrease}
                  className="px-3 py-2 text-slate-700 font-extrabold text-sm hover:bg-slate-200/60 transition-all cursor-pointer"
                >
                  <Plus size={13} />
                </button>
              </div>

              {/* Add trigger button */}
              <button
                onClick={handleAddSubmit}
                className="px-6 py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-xl text-xs font-bold uppercase tracking-widest flex items-center gap-2 active:scale-95 transition-all cursor-pointer shadow-md"
              >
                <ShoppingCart size={14} /> Add to Bag
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
