import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { InquiryFormData } from '../types';

interface InquiryFormProps {
  initialPgName?: string;
  onSuccess?: () => void;
}

export const InquiryForm: React.FC<InquiryFormProps> = ({ initialPgName = '', onSuccess }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    phone: '',
    pgName: initialPgName,
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // WhatsApp Integration: Format message and redirect
    const text = `*New Inquiry for Parth Stays*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*PG Property:* ${formData.pgName}%0A*Message:* ${formData.message}`;
    const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${text}`;
    
    window.open(whatsappUrl, '_blank');
    if (onSuccess) onSuccess();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-white p-6 md:p-8 ${onSuccess ? '' : 'rounded-3xl shadow-sm border border-stone-200'}`}
      id="inquiry-form-container"
    >
      <h2 className="text-2xl font-serif font-medium text-stone-800 mb-6" id="form-title">Send an Inquiry</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1" id="label-name">Your Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-stone-100 bg-stone-50 focus:outline-none focus:ring-2 focus:ring-stone-200 transition-all"
            placeholder="John Doe"
            id="input-name"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1" id="label-phone">Phone Number</label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-stone-100 bg-stone-50 focus:outline-none focus:ring-2 focus:ring-stone-200 transition-all"
            placeholder="+91 00000 00000"
            id="input-phone"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1" id="label-pg">Preferred PG Property</label>
          <select
            name="pgName"
            value={formData.pgName}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-stone-100 bg-stone-50 focus:outline-none focus:ring-2 focus:ring-stone-200 transition-all font-sans"
            id="input-pg"
          >
            <option value="">Select Room Type</option>
            <option value="Single Seater Suite">Single Seater Suite</option>
            <option value="2-Seater Comfort">2-Seater Comfort</option>
            <option value="3-Seater Essential">3-Seater Essential</option>
            <option value="General Inquiry">General Inquiry</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1" id="label-message">Message</label>
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-stone-100 bg-stone-50 focus:outline-none focus:ring-2 focus:ring-stone-200 transition-all"
            placeholder="Tell us about your requirements..."
            id="input-message"
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-stone-800 text-white font-medium py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-stone-900 transition-colors shadow-lg"
          id="btn-submit-inquiry"
        >
          <Send size={18} />
          Submit via WhatsApp
        </motion.button>
      </form>
    </motion.div>
  );
};
