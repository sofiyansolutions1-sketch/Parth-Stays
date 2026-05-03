import React from 'react';
import { motion } from 'motion/react';
import { CONTACT_INFO } from '../constants';

export const Footer = () => {
  return (
    <footer className="bg-stone-50 border-t border-stone-100 py-16 px-4" id="main-footer">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div className="max-w-sm" id="footer-brand">
          <div className="flex items-center gap-2 mb-6" id="footer-logo">
            <div className="w-8 h-8 bg-stone-900 rounded-lg flex items-center justify-center text-white font-serif font-bold text-lg">
              P
            </div>
            <span className="font-serif text-lg font-medium tracking-tight text-stone-900">Parth Stays</span>
          </div>
          <p className="text-stone-400 text-sm leading-relaxed" id="footer-brand-text">
            Jaipur's most student-focused PG network. Premium rooms near Gopalpura & Tonk Road.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-12" id="footer-links">
          <div id="footer-nav">
            <h4 className="text-xs font-bold uppercase tracking-widest text-stone-900 mb-6" id="nav-label">Navigation</h4>
            <ul className="space-y-4 text-sm text-stone-500">
              <li><a href="#" className="hover:text-stone-900 transition-colors" id="foo-link-home">Home</a></li>
              <li><a href="#" className="hover:text-stone-900 transition-colors" id="foo-link-pgs">Our PGs</a></li>
              <li><a href="#" className="hover:text-stone-900 transition-colors" id="foo-link-about">About Us</a></li>
              <li><a href="#" className="hover:text-stone-900 transition-colors" id="foo-link-contact">Contact</a></li>
            </ul>
          </div>
          <div id="footer-legal">
            <h4 className="text-xs font-bold uppercase tracking-widest text-stone-900 mb-6" id="legal-label">Legal</h4>
            <ul className="space-y-4 text-sm text-stone-500">
              <li><a href="#" className="hover:text-stone-900 transition-colors" id="foo-link-privacy">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-stone-900 transition-colors" id="foo-link-terms">Terms of Service</a></li>
              <li><a href="#" className="hover:text-stone-900 transition-colors" id="foo-link-refund">Refund Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-xs" id="footer-contact">
          <h4 className="text-xs font-bold uppercase tracking-widest text-stone-900 mb-6" id="contact-footer-label">Stay Connected</h4>
          <div className="space-y-4" id="footer-contact-info">
             <p className="text-sm text-stone-500" id="footer-contact-email">{CONTACT_INFO.email}</p>
             <div className="space-y-1 text-sm text-stone-500">
               <p id="footer-contact-phone-1">{CONTACT_INFO.phone}</p>
               <p id="footer-contact-phone-2">{CONTACT_INFO.altPhone}</p>
             </div>
             <div className="space-y-2">
               <p className="text-[10px] text-stone-400 leading-tight">
                 <span className="font-bold text-stone-500 block mb-0.5 uppercase tracking-[0.1em]">PS1 Campus</span>
                 {CONTACT_INFO.address}
               </p>
               <p className="text-[10px] text-stone-400 leading-tight">
                 <span className="font-bold text-stone-500 block mb-0.5 uppercase tracking-[0.1em]">PS2 Campus</span>
                 {CONTACT_INFO.address2}
               </p>
             </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase font-bold tracking-[0.2em] text-stone-400" id="footer-bottom">
        <span id="copyright">© 2026 Parth Stays Jaipur</span>
        <span id="built-with">Student Comfort First</span>
      </div>
    </footer>
  );
};
