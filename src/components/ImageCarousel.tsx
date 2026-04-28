import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const images = [
  'https://iili.io/BPytydl.jpg',
  'https://iili.io/BPyDzmP.jpg',
  'https://iili.io/BPyDUQe.jpg',
];

export const ImageCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500); // 3.5 seconds duration
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden rounded-b-[3rem] md:rounded-b-[5rem] shadow-2xl" id="image-carousel">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </AnimatePresence>
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-stone-900/80 via-stone-900/20 to-transparent" />
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 pb-12 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-7xl mx-auto w-full"
        >
          <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-[0.3em] rounded-full mb-4 border border-white/20">
            Premium Residences
          </span>
          <h2 className="text-4xl md:text-7xl font-serif text-white leading-tight mb-4 drop-shadow-lg">
            Parth Stays <br /> Student PG Jaipur.
          </h2>
          <div className="flex gap-2" id="carousel-indicators">
            {images.map((_, i) => (
              <div 
                key={i} 
                className={`h-1 rounded-full transition-all duration-500 ${i === index ? 'w-12 bg-white' : 'w-4 bg-white/30'}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
