import React from 'react';
import { motion } from 'motion/react';
import { LayoutDashboard, Phone, Info } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

interface NavbarProps {
  activePage: 'home' | 'inquiry';
  setPage: (page: 'home' | 'inquiry') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, setPage }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/70 backdrop-blur-xl border-bottom border-stone-100" id="main-nav">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => setPage('home')}
          id="logo-container"
        >
          <div className="w-10 h-10 bg-stone-900 rounded-xl flex items-center justify-center text-white font-serif font-bold text-xl shadow-lg shadow-stone-200">
            P
          </div>
          <span className="font-serif text-xl font-medium tracking-tight text-stone-900" id="site-title">Parth Stays</span>
        </div>
        
        <div className="flex items-center gap-2" id="nav-actions">
          <button
            onClick={() => setPage('home')}
            className={`p-2 transition-all rounded-xl ${activePage === 'home' ? 'bg-stone-100 text-stone-900' : 'text-stone-500 hover:text-stone-800'}`}
            title="Home"
            id="nav-home-btn"
          >
            <LayoutDashboard size={20} />
          </button>
          <button
            onClick={() => setPage('inquiry')}
            className={`p-2 transition-all rounded-xl ${activePage === 'inquiry' ? 'bg-stone-100 text-stone-900' : 'text-stone-500 hover:text-stone-800'}`}
            title="Inquiry"
            id="nav-inquiry-btn"
          >
            <Info size={20} />
          </button>
          <div className="w-px h-6 bg-stone-200 mx-2" id="nav-divider"></div>
          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className="flex items-center gap-2 px-4 py-2 bg-stone-900 text-white rounded-full text-sm font-medium hover:bg-stone-800 transition-colors shadow-sm"
            id="nav-call-btn"
          >
            <Phone size={14} />
            <span className="hidden sm:inline">Call Hub</span>
          </a>
        </div>
      </div>
    </nav>
  );
};
