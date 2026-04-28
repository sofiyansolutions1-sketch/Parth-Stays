import React from 'react';
import { motion } from 'motion/react';
import { InquiryForm } from '../components/InquiryForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

interface InquiryPageProps {
  selectedPg?: string;
}

export const InquiryPage: React.FC<InquiryPageProps> = ({ selectedPg = '' }) => {
  return (
    <div className="pt-32 pb-20 px-4 min-h-screen bg-stone-50" id="inquiry-page">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          id="inquiry-info"
        >
          <h1 className="text-4xl md:text-6xl font-serif font-medium text-stone-900 mb-8" id="inquiry-page-title">
            Get in touch <br />
            <span className="text-stone-400">with Elite Stay.</span>
          </h1>
          <p className="text-lg text-stone-500 mb-12 leading-relaxed" id="inquiry-page-desc">
            Have questions about our properties? We're here to help you find your next home. Fill out the form or reach us directly.
          </p>
          
          <div className="space-y-8" id="contact-methods">
            <div className="flex gap-4" id="contact-email">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-stone-800 shadow-sm" id="email-icon">
                <Mail size={20} />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-1" id="email-label">Email Us</div>
                <div className="text-stone-900 font-medium break-all" id="email-value">{CONTACT_INFO.email}</div>
              </div>
            </div>
            
            <div className="flex gap-4" id="contact-phone">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-stone-800 shadow-sm" id="phone-icon">
                <Phone size={20} />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-1" id="phone-label">Direct Support</div>
                <div className="text-stone-900 font-medium" id="phone-value">{CONTACT_INFO.phone} <span className="text-stone-400">/</span> {CONTACT_INFO.altPhone}</div>
              </div>
            </div>
            
            <div className="flex gap-4" id="contact-address">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-stone-800 shadow-sm" id="address-icon">
                <MapPin size={20} />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-1" id="address-label">Location</div>
                <div className="text-stone-900 font-medium" id="address-value">{CONTACT_INFO.address}</div>
              </div>
            </div>

            <div className="flex gap-4" id="contact-hours">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-stone-800 shadow-sm" id="hours-icon">
                <Clock size={20} />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-1" id="hours-label">Support Hours</div>
                <div className="text-stone-900 font-medium" id="hours-value">24/7 Availability for Residents</div>
              </div>
            </div>
          </div>

          <div className="mt-16 p-8 bg-stone-900 text-white rounded-[2rem]" id="inquiry-footer">
            <h3 className="font-serif text-xl mb-2" id="footer-note-title">Direct WhatsApp</h3>
            <p className="text-stone-400 text-sm mb-6" id="footer-note-text">Faster response for urgent booking inquiries.</p>
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              className="inline-flex items-center gap-2 text-stone-200 font-semibold hover:text-white transition-colors underline underline-offset-8"
              id="footer-whatsapp-link"
            >
              Start a Chat Now
            </a>
          </div>
        </motion.div>
        
        <div id="form-section">
          <InquiryForm initialPgName={selectedPg} />
        </div>
      </div>
    </div>
  );
};
