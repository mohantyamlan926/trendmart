/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { User } from '../types';
import { X, LogOut, Package, CreditCard, Settings, ChevronRight } from 'lucide-react';

interface ProfileModalProps {
  user: User;
  onClose: () => void;
  onLogout: () => void;
}

export default function ProfileModal({ user, onClose, onLogout }: ProfileModalProps) {
  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-end p-0 md:p-4">
      {/* Dark backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer / Modal Container */}
      <div className="relative bg-white h-full md:h-auto md:rounded-3xl overflow-hidden w-full max-w-md shadow-2xl z-50 flex flex-col animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <h2 className="text-lg font-black text-slate-900 tracking-tight uppercase">My Account</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all cursor-pointer"
            aria-label="Close profile"
          >
            <X size={16} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 text-slate-800">
          
          {/* User Info Card */}
          <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 mb-6">
            {user.avatar ? (
              <img src={user.avatar} alt={user.name} className="w-16 h-16 rounded-full bg-white border border-slate-200 shadow-sm" />
            ) : (
              <div className="w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xl font-bold uppercase border border-indigo-200">
                {user.name.charAt(0)}
              </div>
            )}
            <div>
              <h3 className="text-xl font-black text-slate-900 capitalize leading-tight">{user.name}</h3>
              <p className="text-xs font-medium text-slate-500 mt-0.5">{user.email}</p>
              <div className="inline-block mt-2 px-2 py-0.5 bg-green-100 text-green-700 text-[9px] font-black uppercase tracking-widest rounded-md">
                Verified Member
              </div>
            </div>
          </div>

          {/* Menu Options */}
          <div className="space-y-2 mb-8">
            <button className="w-full flex items-center justify-between p-4 bg-white border border-slate-100 hover:border-slate-300 rounded-xl transition-all cursor-pointer group">
              <div className="flex items-center gap-3 text-slate-700 group-hover:text-black">
                <Package size={18} className="text-indigo-500" />
                <span className="text-sm font-bold">Order History</span>
              </div>
              <ChevronRight size={16} className="text-slate-400 group-hover:text-black" />
            </button>

            <button className="w-full flex items-center justify-between p-4 bg-white border border-slate-100 hover:border-slate-300 rounded-xl transition-all cursor-pointer group">
              <div className="flex items-center gap-3 text-slate-700 group-hover:text-black">
                <CreditCard size={18} className="text-rose-500" />
                <span className="text-sm font-bold">Payment Methods</span>
              </div>
              <ChevronRight size={16} className="text-slate-400 group-hover:text-black" />
            </button>

            <button className="w-full flex items-center justify-between p-4 bg-white border border-slate-100 hover:border-slate-300 rounded-xl transition-all cursor-pointer group">
              <div className="flex items-center gap-3 text-slate-700 group-hover:text-black">
                <Settings size={18} className="text-slate-500" />
                <span className="text-sm font-bold">Account Settings</span>
              </div>
              <ChevronRight size={16} className="text-slate-400 group-hover:text-black" />
            </button>
          </div>

          {/* Logout Button */}
          <button
            onClick={() => {
              onLogout();
              onClose();
            }}
            className="w-full py-3.5 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-xl text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer border border-rose-200"
          >
            <LogOut size={16} /> Sign Out
          </button>

        </div>
      </div>
    </div>
  );
}
