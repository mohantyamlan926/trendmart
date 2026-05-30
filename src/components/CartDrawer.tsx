/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CartItem, OrderDetails } from '../types';
import { X, ArrowRight, ShoppingBag, Trash2, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQty: (productId: string, newQty: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

const SHIPPING_BASE = 4.99;

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQty,
  onRemoveItem,
  onClearCart
}: CartDrawerProps) {
  const [step, setStep] = useState<'cart' | 'checkout' | 'success'>('cart');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [receiptNumber, setReceiptNumber] = useState('');
  
  // Checkout form state
  const [formData, setFormData] = useState<OrderDetails>({
    fullName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
  });

  const [formErrors, setFormErrors] = useState<Partial<Record<keyof OrderDetails, string>>>({});

  // Calculations
  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const shipping = cartItems.length > 0 ? SHIPPING_BASE : 0;
  const total = subtotal + shipping;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name as keyof OrderDetails]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const errors: Partial<Record<keyof OrderDetails, string>> = {};
    if (!formData.fullName.trim()) errors.fullName = 'Full Name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Valid email is required';
    if (!formData.address.trim()) errors.address = 'Physical destination address is required';
    if (!formData.city.trim()) errors.city = 'City parameter is required';
    if (!formData.zipCode.trim() || formData.zipCode.length < 4) errors.zipCode = 'Valid Zip / Postal code is required';
    
    // Simulate card validation
    const cleanCard = formData.cardNumber.replace(/\s+/g, '');
    if (cleanCard.length < 12) {
      errors.cardNumber = 'Valid payment number is required (min 12 digits)';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate server side authorization delay
    setTimeout(() => {
      setIsSubmitting(false);
      setReceiptNumber(`TM-${Math.floor(100000 + Math.random() * 900000)}`);
      setStep('success');
      onClearCart();
    }, 1800);
  };

  const resetDrawer = () => {
    setStep('cart');
    setFormData({
      fullName: '',
      email: '',
      address: '',
      city: '',
      zipCode: '',
      cardNumber: '',
    });
    setFormErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] overflow-hidden">
      {/* Background gray backdrop overlay */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="absolute inset-y-0 right-0 max-w-full pl-10 flex">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between text-slate-800">
          
          {/* Header Controls */}
          <div className="px-6 py-5 bg-slate-900 text-white flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-2">
              <ShoppingBag size={18} className="text-rose-400" />
              <h2 className="text-md font-bold uppercase tracking-wider">
                {step === 'cart' && 'Your Shopping Bag'}
                {step === 'checkout' && 'Secure Checkout'}
                {step === 'success' && 'Order Authenticated!'}
              </h2>
            </div>
            <button 
              onClick={onClose}
              className="p-1 px-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer text-xs flex items-center gap-1.5"
              aria-label="Close drawer"
            >
              <X size={15} /> Close
            </button>
          </div>

          {/* Drawer Body Area */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            
            {/* STEP 1: CART LISTING */}
            {step === 'cart' && (
              <>
                {cartItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-70 py-16">
                    <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-2xl mb-4">
                      🛍️
                    </div>
                    <span className="font-extrabold text-slate-800 mb-1">Your bag is currently empty</span>
                    <p className="text-xs text-slate-500 max-w-xs leading-relaxed">Browse the dynamic showroom figurines or companions and select parameters to add treasures inside!</p>
                    <button
                      onClick={onClose}
                      className="mt-6 px-4 py-2 border-2 border-black hover:bg-black hover:text-white transition-all text-xs font-bold uppercase tracking-wider rounded-full cursor-pointer"
                    >
                      Browse Showroom
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-5">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        ({cartItems.reduce((a, b) => a + b.quantity, 0)} Items Selected)
                      </span>
                      <button 
                        onClick={onClearCart} 
                        className="text-[10px] font-bold text-rose-500 hover:text-rose-600 uppercase tracking-widest cursor-pointer"
                      >
                        Reset Bag
                      </button>
                    </div>

                    <div className="flex flex-col gap-4">
                      {cartItems.map((item) => (
                        <div 
                          key={item.product.id}
                          className="flex items-center gap-4 bg-slate-50 p-3 rounded-2xl border border-slate-100/60"
                        >
                          <div className="w-16 h-16 rounded-xl flex-shrink-0 flex items-center justify-center bg-white border border-slate-100 p-2 overflow-hidden">
                            <img 
                              src={item.product.src} 
                              alt={item.product.name} 
                              referrerPolicy="no-referrer"
                              className="max-h-full max-w-full object-contain" 
                            />
                          </div>

                          <div className="flex-1 min-w-0">
                            <h4 className="text-xs font-bold text-slate-900 truncate tracking-tight">
                              {item.product.name}
                            </h4>
                            <div className="text-[10px] font-semibold text-rose-500 mt-0.5">
                              ${item.product.price.toFixed(2)} each
                            </div>
                            {item.selectedColor && (
                              <div className="text-[9px] font-mono font-semibold text-slate-500 mt-0.5 tracking-wider uppercase">
                                Variant: {item.selectedColor}
                              </div>
                            )}

                            {/* Qty and Trash Controls */}
                            <div className="flex items-center justify-between mt-2.5">
                              <div className="flex items-center bg-white border border-slate-200 rounded-lg overflow-hidden">
                                <button 
                                  onClick={() => onUpdateQty(item.product.id, item.quantity - 1)}
                                  className="px-2.5 py-0.5 hover:bg-slate-50 text-slate-600 font-bold text-xs cursor-pointer"
                                >
                                  -
                                </button>
                                <span className="px-2 py-0.5 text-xs font-bold text-slate-800">
                                  {item.quantity}
                                </span>
                                <button 
                                  onClick={() => onUpdateQty(item.product.id, item.quantity + 1)}
                                  className="px-2.5 py-0.5 hover:bg-slate-50 text-slate-600 font-bold text-xs cursor-pointer"
                                >
                                  +
                                </button>
                              </div>

                              <button 
                                onClick={() => onRemoveItem(item.product.id)}
                                className="text-slate-400 hover:text-rose-500 p-1 transition-colors cursor-pointer"
                                title="Remove item"
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>
                          </div>

                          {/* Line total price */}
                          <div className="text-right text-xs font-bold text-slate-900 whitespace-nowrap pl-2">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}

            {/* STEP 2: CHECKOUT SECURE FORM */}
            {step === 'checkout' && (
              <form onSubmit={handleCheckoutSubmit} className="flex flex-col gap-4">
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 flex items-center gap-2 mb-2">
                  <ShieldCheck className="text-emerald-500" size={18} />
                  <span className="text-[11px] text-slate-600 font-semibold leading-normal">
                    Secure 256-Bit SSL Encrypted checkout. Your payment and shipping details are encrypted during transmission.
                  </span>
                </div>

                <div className="text-xs font-bold uppercase tracking-wider text-slate-700 pb-1 border-b border-slate-100 mb-1">
                  Recipient Identity
                </div>

                {/* Full name input */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 text-xs border rounded-lg outline-none transition-all ${
                      formErrors.fullName ? 'border-red-400 focus:border-red-500 bg-red-50/20' : 'border-slate-200 focus:border-black'
                    }`}
                    placeholder="e.g. Amlan Mohanty"
                  />
                  {formErrors.fullName && <p className="text-[9px] text-red-500 font-medium mt-1">{formErrors.fullName}</p>}
                </div>

                {/* Email address input */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 text-xs border rounded-lg outline-none transition-all ${
                      formErrors.email ? 'border-red-400 focus:border-red-500 bg-red-50/20' : 'border-slate-200 focus:border-black'
                    }`}
                    placeholder="e.g. name@domain.com"
                  />
                  {formErrors.email && <p className="text-[9px] text-red-500 font-medium mt-1">{formErrors.email}</p>}
                </div>

                <div className="text-xs font-bold uppercase tracking-wider text-slate-700 pb-1 border-b border-slate-100 mt-3 mb-1">
                  Courier Parameters
                </div>

                {/* Street address input */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">
                    Destination Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 text-xs border rounded-lg outline-none transition-all ${
                      formErrors.address ? 'border-red-400 focus:border-red-500 bg-red-50/20' : 'border-slate-200 focus:border-black'
                    }`}
                    placeholder="Street name, house number, apartment..."
                  />
                  {formErrors.address && <p className="text-[9px] text-red-500 font-medium mt-1">{formErrors.address}</p>}
                </div>

                {/* City & Zip layout row */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 text-xs border rounded-lg outline-none transition-all ${
                        formErrors.city ? 'border-red-400 focus:border-red-500 bg-red-50/20' : 'border-slate-200 focus:border-black'
                      }`}
                      placeholder="e.g. San Francisco"
                    />
                    {formErrors.city && <p className="text-[9px] text-red-500 font-medium mt-1">{formErrors.city}</p>}
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">
                      Zip Code
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 text-xs border rounded-lg outline-none transition-all ${
                        formErrors.zipCode ? 'border-red-400 focus:border-red-500 bg-red-50/20' : 'border-slate-200 focus:border-black'
                      }`}
                      placeholder="e.g. 94103"
                    />
                    {formErrors.zipCode && <p className="text-[9px] text-red-500 font-medium mt-1">{formErrors.zipCode}</p>}
                  </div>
                </div>

                <div className="text-xs font-bold uppercase tracking-wider text-slate-700 pb-1 border-b border-slate-100 mt-3 mb-1">
                  Card Payment Details
                </div>

                {/* Card payment simulated parameters */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">
                    Card Numbers
                  </label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 text-xs border rounded-lg outline-none transition-all font-mono tracking-widest ${
                      formErrors.cardNumber ? 'border-red-400 focus:border-red-500 bg-red-50/20' : 'border-slate-200 focus:border-black'
                    }`}
                    placeholder="•••• •••• •••• ••••"
                  />
                  {formErrors.cardNumber && <p className="text-[9px] text-red-500 font-medium mt-1">{formErrors.cardNumber}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-6 w-full py-3 bg-slate-950 text-white font-bold rounded-xl text-xs uppercase tracking-widest transition-all hover:bg-slate-800 disabled:bg-slate-400 disabled:scale-100 scale-100 active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4.5 h-4.5 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                      Authorizing Funds...
                    </>
                  ) : (
                    `Authorize Total Payment ($${total.toFixed(2)})`
                  )}
                </button>
              </form>
            )}

            {/* STEP 3: TRANSACTION SUCCESS ORDER CERTIFICATE RECEIPT */}
            {step === 'success' && (
              <div className="h-full flex flex-col items-center justify-center text-center py-8">
                <CheckCircle2 size={64} className="text-emerald-500 mb-4 animate-bounce" />
                <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight">Order Executed Successfully!</h3>
                <p className="text-xs text-slate-500 mt-2 max-w-xs leading-relaxed">
                  Your Trend Mart collectible series has been processed securely. A certified shipping manifest has been compiled.
                </p>

                {/* Printout Order Receipt styling block */}
                <div className="w-full mt-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl p-5 text-left font-mono">
                  <div className="text-[10px] text-slate-400 text-center uppercase tracking-widest pb-3 border-b border-slate-100 mb-3">
                    Trend Mart Certificated Receipt
                  </div>
                  
                  <div className="flex justify-between text-[11px] mb-1.5">
                    <span className="text-slate-500 uppercase">Receipt:</span>
                    <span className="text-slate-800 font-bold">{receiptNumber}</span>
                  </div>
                  <div className="flex justify-between text-[11px] mb-1.5">
                    <span className="text-slate-500 uppercase">Courier Status:</span>
                    <span className="text-emerald-600 font-bold uppercase">Prepping Shipment</span>
                  </div>
                  <div className="flex justify-between text-[11px] mb-1.5">
                    <span className="text-slate-500 uppercase">Gateway:</span>
                    <span className="text-slate-800 font-bold">Encrypted SSL Visa</span>
                  </div>
                  <div className="flex justify-between text-[11px] pt-2 border-t border-slate-100">
                    <span className="text-slate-500 font-bold uppercase">Authorized subtotal:</span>
                    <span className="text-slate-900 font-black">${total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={resetDrawer}
                  className="mt-8 px-6 py-2.5 bg-black text-white hover:bg-slate-800 text-xs font-black uppercase tracking-widest rounded-xl transition-all cursor-pointer"
                >
                  Return to Showroom
                </button>
              </div>
            )}

          </div>

          {/* Drawer footer logic */}
          {cartItems.length > 0 && step === 'cart' && (
            <div className="p-6 bg-slate-50 border-t border-slate-100 flex-shrink-0">
              <div className="flex justify-between text-xs font-bold text-slate-500 mb-2">
                <span>CART ITEMS SUBTOTAL:</span>
                <span className="text-slate-900">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xs font-bold text-slate-500 mb-4">
                <span>COURIER PACKAGING & POSTAGE:</span>
                <span className="text-slate-900">${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm font-black text-slate-900 pt-3 border-t border-slate-200 mb-6">
                <span className="uppercase text-xs font-extrabold tracking-wider">TOTAL PARAMETER BUDGET:</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button
                onClick={() => setStep('checkout')}
                className="w-full py-3.5 bg-rose-500 hover:bg-rose-600 text-white rounded-xl text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 active:scale-98 transition-all cursor-pointer shadow-md"
              >
                Proceed to Checkout
                <ArrowRight size={14} />
              </button>
            </div>
          )}

          {/* If step is checkout, allow return button */}
          {step === 'checkout' && (
            <div className="p-4 bg-slate-50 border-t border-slate-100/60 mt-auto flex-shrink-0">
              <button
                type="button"
                onClick={() => setStep('cart')}
                className="w-full py-2 bg-transparent border border-slate-200 text-slate-600 hover:text-black hover:border-black text-xs font-semibold uppercase tracking-wider rounded-lg transition-all cursor-pointer"
              >
                ← Back to Cart Listing
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
