import { motion } from 'motion/react';
import { Phone, MessageCircle, Mail } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const FloatingContact = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href={`tel:${CONTACT_INFO.phone}`}
        className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-xl mb-2"
        id="call-floating-btn"
      >
        <Phone size={24} />
      </motion.a>
      
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hi, I'm interested in Parth Stays.`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-xl"
        id="whatsapp-floating-btn"
      >
        <MessageCircle size={24} />
      </motion.a>
    </div>
  );
};
