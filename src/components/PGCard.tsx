import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Star, Wifi, Shield, Coffee, Zap, BookOpen, Users } from 'lucide-react';
import { PG } from '../types';

interface PGCardProps {
  pg: PG;
  onInquire: (pgName: string) => void;
}

const amenityIcons: Record<string, React.ReactNode> = {
  WiFi: <Wifi size={14} />,
  Wifi: <Wifi size={14} />,
  AC: <Zap size={14} />,
  'Security Camera': <Shield size={14} />,
  Food: <Coffee size={14} />,
  'Water cooler': <Coffee size={14} />,
  Newspaper: <BookOpen size={14} />,
  'In house shop': <Users size={14} />,
  CCTV: <Shield size={14} />,
  Meals: <Coffee size={14} />,
  Laundry: <Shield size={14} />,
  Security: <Shield size={14} />,
};

export const PGCard: React.FC<PGCardProps> = ({ pg, onInquire }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="group bg-white rounded-[2rem] overflow-hidden border border-stone-100 hover:shadow-2xl hover:shadow-stone-200/50 transition-all duration-500"
      id={`pg-card-${pg.id}`}
    >
      <div className="relative h-64 overflow-hidden" id={`pg-image-container-${pg.id}`}>
        <img
          src={pg.image}
          alt={pg.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
          id={`pg-img-${pg.id}`}
        />
        <div className="absolute top-4 left-4 flex gap-2" id={`pg-tags-${pg.id}`}>
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest text-stone-800 rounded-full shadow-sm" id={`pg-type-${pg.id}`}>
            {pg.type}
          </span>
          <span className="px-3 py-1 bg-stone-800/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest text-white rounded-full shadow-sm" id={`pg-rating-${pg.id}`}>
            <div className="flex items-center gap-1">
              <Star size={10} fill="currentColor" />
              {pg.rating}
            </div>
          </span>
        </div>
      </div>
      
      <div className="p-6" id={`pg-content-${pg.id}`}>
        <div className="flex justify-between items-start mb-2" id={`pg-header-${pg.id}`}>
          <h3 className="text-xl font-serif font-medium text-stone-800" id={`pg-name-${pg.id}`}>{pg.name}</h3>
          <span className="text-lg font-semibold text-stone-900" id={`pg-price-${pg.id}`}>{pg.price}</span>
        </div>
        
        <div className="flex items-center gap-1 text-stone-500 text-sm mb-4" id={`pg-location-container-${pg.id}`}>
          <MapPin size={14} />
          <span id={`pg-location-${pg.id}`}>{pg.location}</span>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6" id={`pg-amenities-${pg.id}`}>
          {pg.amenities.map((amenity) => (
            <span key={amenity} className="flex items-center gap-1 px-3 py-1.5 bg-stone-50 text-stone-600 text-[11px] font-medium rounded-lg border border-stone-100" id={`amenity-${pg.id}-${amenity}`}>
              {amenityIcons[amenity] || null}
              {amenity}
            </span>
          ))}
        </div>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onInquire(pg.name)}
          className="w-full py-3 bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-sm rounded-xl transition-colors"
          id={`btn-inquire-${pg.id}`}
        >
          Check Availability
        </motion.button>
      </div>
    </motion.div>
  );
};
