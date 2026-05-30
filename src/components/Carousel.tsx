/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { EXCLUSIVE_FIGURINES } from '../data';
import { FigurineProduct } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Eye, RefreshCw } from 'lucide-react';

interface CarouselProps {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  onDiscover: (product: FigurineProduct) => void;
}

export default function Carousel({ activeIndex, setActiveIndex, onDiscover }: CarouselProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [autorotate, setAutorotate] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);

  // Auto rotate option
  useEffect(() => {
    if (!autorotate) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [autorotate, activeIndex]);

  const handlePrev = () => {
    setActiveIndex((activeIndex + EXCLUSIVE_FIGURINES.length - 1) % EXCLUSIVE_FIGURINES.length);
  };

  const handleNext = () => {
    setActiveIndex((activeIndex + 1) % EXCLUSIVE_FIGURINES.length);
  };

  // Get current roles for position logic
  const getRoles = () => {
    const prev = (activeIndex + EXCLUSIVE_FIGURINES.length - 1) % EXCLUSIVE_FIGURINES.length;
    const next = (activeIndex + 1) % EXCLUSIVE_FIGURINES.length;
    const opposite = (activeIndex + EXCLUSIVE_FIGURINES.length - 2) % EXCLUSIVE_FIGURINES.length;
    return {
      center: activeIndex,
      left: prev,
      right: next,
      back: opposite,
    };
  };

  const roles = getRoles();
  const activeProduct = EXCLUSIVE_FIGURINES[activeIndex];

  return (
    <div className="relative w-full h-[520px] md:h-[650px] overflow-hidden flex flex-col justify-between py-6 select-none">
      {/* Background Holographic Ghost text */}
      <div 
        id="ghost-text"
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-10 transition-all duration-700 font-anton text-[75px] sm:text-[14vw] lg:text-[18vw] leading-none text-white tracking-tighter opacity-15 overflow-hidden text-center whitespace-nowrap uppercase"
        style={{ transform: 'translateY(-5%)' }}
      >
        {activeProduct.codename}
      </div>

      {/* Main Figurine Frame Stack */}
      <div className="relative flex-1 w-full flex items-center justify-center z-20">
        {EXCLUSIVE_FIGURINES.map((item, index) => {
          let style: React.CSSProperties = {};
          let roleLabel = '';

          if (index === roles.center) {
            roleLabel = 'center';
            style = {
              transform: `translateX(-50%) scale(${isMobile ? 1.25 : 1.6})`,
              filter: 'drop-shadow(0 25px 35px rgba(0,0,0,0.22))',
              opacity: 1,
              zIndex: 30,
              left: '50%',
              height: isMobile ? '65%' : '88%',
              bottom: isMobile ? '12%' : '4%',
            };
          } else if (index === roles.left) {
            roleLabel = 'left';
            style = {
              transform: 'translateX(-50%) scale(0.95)',
              filter: 'blur(2px) opacity(0.7) drop-shadow(0 8px 15px rgba(0,0,0,0.15))',
              opacity: 0.8,
              zIndex: 20,
              left: isMobile ? '24%' : '32%',
              height: isMobile ? '28%' : '42%',
              bottom: isMobile ? '22%' : '14%',
            };
          } else if (index === roles.right) {
            roleLabel = 'right';
            style = {
              transform: 'translateX(-50%) scale(0.95)',
              filter: 'blur(2px) opacity(0.7) drop-shadow(0 8px 15px rgba(0,0,0,0.15))',
              opacity: 0.8,
              zIndex: 20,
              left: isMobile ? '76%' : '68%',
              height: isMobile ? '28%' : '42%',
              bottom: isMobile ? '22%' : '14%',
            };
          } else {
            roleLabel = 'back';
            style = {
              transform: 'translateX(-50%) scale(0.75)',
              filter: 'blur(5px) opacity(0.4)',
              opacity: 0.5,
              zIndex: 10,
              left: '50%',
              height: isMobile ? '20%' : '32%',
              bottom: isMobile ? '28%' : '20%',
            };
          }

          return (
            <div
              key={item.id}
              onClick={() => {
                if (index !== activeIndex) {
                  setActiveIndex(index);
                }
              }}
              style={style}
              className={`absolute aspect-[0.62/1] transition-all duration-[650ms] cubic-bezier(0.4, 0, 0.2, 1) cursor-pointer select-none`}
              aria-label={`Carousel Item ${item.name} (${roleLabel})`}
            >
              <img
                src={item.src}
                alt={item.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain object-bottom select-none pointer-events-none md:hover:scale-105 transition-transform duration-300"
              />
              
              {/* Highlight Overlay on hover for background figurines */}
              {index !== activeIndex && (
                <div className="absolute inset-0 bg-white/0 hover:bg-white/5 rounded-full transition-colors duration-300 pointer-events-none flex items-center justify-center">
                  <div className="opacity-0 hover:opacity-100 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] text-white flex items-center gap-1 font-sans transition-opacity duration-300">
                    <Eye size={12} /> View
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Floating Panel and Interactive controls */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row md:items-end justify-between items-start gap-6 z-40">
        
        {/* Dynamic description info */}
        <div className="flex flex-col max-w-sm text-white select-text">
          <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-white/70 mb-1">
            Exclusive Series • Toy #{activeIndex + 1}
          </span>
          <h2 className="text-xl md:text-2xl font-black font-sans uppercase tracking-wider text-white drop-shadow-sm mb-2">
            {activeProduct.name}
          </h2>
          <p className="text-xs md:text-sm text-white/90 line-clamp-3 leading-relaxed drop-shadow-sm">
            {activeProduct.description}
          </p>
          <div className="flex items-center gap-4 mt-3">
            <span className="text-lg md:text-xl font-extrabold text-white">
              ${activeProduct.price.toFixed(2)}
            </span>
            <div className="h-4 w-px bg-white/20" />
            <div className="flex items-center gap-1 text-xs text-yellow-200">
              <span className="font-bold">★ {activeProduct.rating.toFixed(1)}</span>
              <span className="text-white/70 font-normal">({activeProduct.reviewsCount} reviews)</span>
            </div>
          </div>
        </div>

        {/* Control Row including Prev/Next + Discover It */}
        <div className="flex items-center justify-between w-full md:w-auto gap-6">
          
          {/* Back/Next Buttons and AutoRotate */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-11 h-11 md:w-14 md:h-14 rounded-full border-2 border-white/80 hover:border-white text-white bg-transparent hover:bg-white/10 active:scale-95 flex items-center justify-center transition-all cursor-pointer shadow-sm"
              aria-label="Previous figurine"
            >
              <ArrowLeft size={isMobile ? 18 : 22} />
            </button>
            
            <button
              onClick={() => setAutorotate(!autorotate)}
              className={`w-9 h-9 md:w-11 md:h-11 rounded-full border border-white/40 text-white flex items-center justify-center transition-all cursor-pointer ${
                autorotate ? 'bg-white/25 border-white rotate-180 animate-spin-slow' : 'bg-transparent hover:bg-white/5'
              }`}
              title={autorotate ? "Pause Auto Rotation" : "Play Auto Rotation"}
              aria-label="Toggle auto rotation"
            >
              <RefreshCw size={14} className={autorotate ? 'animate-pulse' : ''} />
            </button>

            <button
              onClick={handleNext}
              className="w-11 h-11 md:w-14 md:h-14 rounded-full border-2 border-white/80 hover:border-white text-white bg-transparent hover:bg-white/10 active:scale-95 flex items-center justify-center transition-all cursor-pointer shadow-sm"
              aria-label="Next figurine"
            >
              <ArrowRight size={isMobile ? 18 : 22} />
            </button>
          </div>

          <button
            onClick={() => onDiscover(activeProduct)}
            className="flex items-center gap-2 font-anton text-2xl sm:text-3xl md:text-4xl text-white hover:text-white/80 cursor-pointer select-none tracking-normal uppercase border-b-2 border-white/0 hover:border-white transition-all py-1"
            title="Discover interactive 3D blueprint parameters"
            aria-label="Discover figurine parameters"
          >
            DISCOVER IT
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            >
              →
            </motion.span>
          </button>
        </div>

      </div>

      {/* Decorative Dots indicator */}
      <div className="absolute top-[50%] right-4 sm:right-8 -translate-y-1/2 flex flex-col gap-2 z-40">
        {EXCLUSIVE_FIGURINES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              idx === activeIndex
                ? 'bg-white scale-125 shadow-md h-6'
                : 'bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
