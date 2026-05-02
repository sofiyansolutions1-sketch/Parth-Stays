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
  const getDefaultProperty = () => {
    if (initialPgName.includes('PS2')) return 'PS2';
    if (initialPgName.includes('Parth Stays')) return 'Parth Stays 1';
    return '';
  };

  const getDefaultRoom = () => {
    if (initialPgName.includes('Single')) return 'Single Seater Room';
    if (initialPgName.includes('Double')) return 'Double Seater Room';
    if (initialPgName.includes('Triple')) return 'Triple Seater Room';
    return '';
  };

  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    phone: '',
    pgProperty: getDefaultProperty(),
    roomCategory: getDefaultRoom(),
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // WhatsApp Integration: Format message and redirect
    const text = `*New Inquiry for Parth Stays*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*PG Property:* ${formData.pgProperty}%0A*Room Category:* ${formData.roomCategory}%0A*Message:* ${formData.message}`;
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
          <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1" id="label-phone">Contact Number</label>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1" id="label-property">PG Property Category</label>
            <select
              name="pgProperty"
              required
              value={formData.pgProperty}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-stone-100 bg-stone-50 focus:outline-none focus:ring-2 focus:ring-stone-200 transition-all font-sans"
              id="input-property"
            >
              <option value="">Select Category</option>
              <option value="Parth Stays 1">Parth Stays 1</option>
              <option value="PS2">PS2</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1" id="label-room">Room Category</label>
            <select
              name="roomCategory"
              required
              value={formData.roomCategory}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-stone-100 bg-stone-50 focus:outline-none focus:ring-2 focus:ring-stone-200 transition-all font-sans"
              id="input-room"
            >
              <option value="">Select Room Type</option>
              <option value="Single Seater Room">Single Seater Room</option>
              <option value="Double Seater Room">Double Seater Room</option>
              <option value="Triple Seater Room">Triple Seater Room</option>
            </select>
          </div>
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
