import React from 'react';
import { motion } from 'motion/react';
import { PG_DATA, CONTACT_INFO } from '../constants';
import { PGCard } from '../components/PGCard';
import { ImageCarousel } from '../components/ImageCarousel';

const GALLERY_IMAGES = [
  "https://i.postimg.cc/pV4QWVhM/Chat-GPT-Image-May-1-2026-01-19-17-AM.png",
  "https://i.postimg.cc/jqLB5hXm/Chat-GPT-Image-May-1-2026-01-19-12-AM.png",
  "https://i.postimg.cc/MKB40Khw/Chat-GPT-Image-May-1-2026-01-19-45-AM.png",
  "https://i.postimg.cc/T39tQy0z/Chat-GPT-Image-May-1-2026-01-18-29-AM.png",
  "https://i.postimg.cc/pdW6tQr1/Chat-GPT-Image-May-1-2026-01-19-36-AM.png",
  "https://i.postimg.cc/nzMSXHvP/Chat-GPT-Image-May-1-2026-01-19-32-AM.png",
  "https://i.postimg.cc/nVjwZhVV/Chat-GPT-Image-May-1-2026-01-19-03-AM.png",
  "https://i.postimg.cc/DZt6m1fm/Chat-GPT-Image-May-1-2026-01-18-36-AM.png",
  "https://i.postimg.cc/xdptDWW5/Chat-GPT-Image-May-1-2026-01-18-41-AM.png",
  "https://i.postimg.cc/bYtLWVLx/Chat-GPT-Image-May-1-2026-01-18-47-AM.png"
];

import { 
  ArrowRight, 
  Star, 
  Heart, 
  Coffee, 
  ShieldCheck, 
  Wifi, 
  BookOpen, 
  Users, 
  Cctv,
  Utensils,
  Droplets,
  GlassWater,
  Newspaper,
  ShoppingBag,
  Wind,
  Smartphone,
  CalendarCheck,
  MapPin,
  Car,
  Sparkles,
  Shirt
} from 'lucide-react';

interface HomeProps {
  onInquire: (pgName: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onInquire }) => {
  return (
    <div className="space-y-16 md:space-y-32 pb-20 overflow-x-hidden">
      {/* Header Carousel Section */}
      <section id="hero-carousel" className="w-full">
        <ImageCarousel />
      </section>

      {/* Intro Section - Redesigned for mobile */}
      <section className="px-6 md:px-4" id="hero-section">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
            id="hero-text-content"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-100 text-stone-600 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-6" id="hero-badge">
              <Star size={12} className="text-amber-500" fill="currentColor" />
              Trusted by 500+ Students
            </div>
            <h1 className="text-4xl md:text-7xl font-serif font-medium text-stone-900 leading-[1.1] mb-6 md:mb-8" id="hero-title">
              Parth Stays <br className="hidden md:block" />
              <span className="text-stone-400 italic">Sudama Nagar, Jaipur.</span>
            </h1>
            <p className="text-base md:text-lg text-stone-500 max-w-md mb-8 leading-relaxed" id="hero-description">
              Parth Stays provides premium student living spaces in Jaipur with home-style food, high security, and 24/7 connectivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4" id="hero-cta">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.getElementById('browse-listings');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-8 py-4 bg-stone-900 text-white rounded-2xl font-semibold flex items-center justify-center gap-2 shadow-xl shadow-stone-200"
                id="btn-browse"
              >
                Browse PGs
                <ArrowRight size={18} />
              </motion.button>
              <div className="flex items-center justify-center gap-4 py-2">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-stone-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                    </div>
                  ))}
                </div>
                <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">Join our community</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 relative mt-8 md:mt-0"
            id="hero-image-container"
          >
            <div className="aspect-[4/3] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl relative z-10" id="hero-image-wrapper">
              <img
                src="https://iili.io/BPytydl.jpg"
                alt="Student Life at Parth Stays"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-6 -right-6 md:-top-10 md:-right-10 w-32 h-32 md:w-48 md:h-48 bg-stone-100 rounded-full flex items-center justify-center -z-0">
               <div className="text-center">
                  <div className="text-xl md:text-3xl font-serif font-bold text-stone-900">10+</div>
                  <div className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Properties</div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Student Perks Section */}
      <section className="px-6 md:px-4 bg-stone-900 py-12 md:py-24 rounded-[2rem] md:rounded-[5rem] mx-4 md:mx-10 text-white" id="perks-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-5xl font-serif mb-2 md:mb-6">Built for Student Life</h2>
            <p className="text-stone-400 text-sm md:text-base max-w-2xl mx-auto">Designed to help you focus and thrive.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12">
            {[
              { icon: <BookOpen className="text-amber-400" size={20} />, title: "Study Zones", desc: "Quiet areas for focused preparation." },
              { icon: <Users className="text-blue-400" size={20} />, title: "Community", desc: "Weekly gatherings and sessions." },
              { icon: <CalendarCheck className="text-green-400" size={20} />, title: "Zero Hassle", desc: "Paperless documentation and support." }
            ].map((perk, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-5 md:p-8 bg-white/5 rounded-2xl md:rounded-3xl border border-white/10 flex flex-row md:flex-col items-center md:items-start gap-4"
              >
                <div className="shrink-0 w-10 h-10 md:w-14 md:h-14 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center">
                  {perk.icon}
                </div>
                <div>
                  <h3 className="text-base md:text-xl font-serif mb-1 md:mb-4">{perk.title}</h3>
                  <p className="text-xs md:text-sm text-stone-400 leading-relaxed">{perk.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-4" id="browse-listings">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8" id="listings-header">
            <div>
              <h2 className="text-3xl font-serif font-medium text-stone-900 mb-4" id="listings-title">Explore Residences</h2>
              <p className="text-stone-500" id="listings-subtitle">Curated picks for every budget and taste.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="listings-grid">
            {PG_DATA.map((pg) => (
              <PGCard key={pg.id} pg={pg} onInquire={onInquire} />
            ))}
          </div>
        </div>
      </section>

      {/* PS2 Variant and Location Wrapper */}
      <div className="space-y-0 relative">
        {/* PS2 Variant Section */}
        <section className="px-6 md:px-4 pt-20 pb-6 bg-white" id="ps2-variant">
        <div className="max-w-7xl mx-auto">
          <div className="bg-stone-100/80 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-sm flex flex-col md:flex-row-reverse border border-stone-200">
            <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center relative">
              <div className="absolute top-0 right-0 p-8 opacity-5 font-serif font-bold text-[180px] leading-none pointer-events-none">
                PS2
              </div>
              <div className="inline-block px-4 py-1.5 bg-stone-900 text-white rounded-full text-[10px] font-bold uppercase tracking-[0.2em] w-fit mb-6 relative z-10">
                Newly Added
              </div>
              
              <div className="relative z-10 mb-8">
                <h2 className="text-4xl md:text-6xl font-serif text-stone-900 mb-3 tracking-tight">PS2</h2>
                <h3 className="text-xl md:text-2xl text-stone-600 font-medium font-serif italic">Our Second Residence in the Same Location</h3>
              </div>

              <a 
                href="https://www.google.com/maps/search/Shape+and+Fitness+Gym/@26.870303,75.7947553,626m/data=!3m1!1e3?hl=en&entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] border border-stone-100/80 w-fit mb-8 relative z-10 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-0.5 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center shrink-0 group-hover:bg-stone-900 transition-colors">
                  <MapPin className="text-stone-800 group-hover:text-white transition-colors" size={18} />
                </div>
                <div>
                  <p className="text-xs text-stone-400 font-medium uppercase tracking-wider mb-0.5">Location</p>
                  <p className="text-stone-700 font-medium text-sm leading-tight group-hover:text-stone-900 transition-colors">
                    Sudama Nagar, Tonk Road, Jaipur
                  </p>
                </div>
              </a>
              
              <div className="space-y-4 mb-4 relative z-10">
                <h4 className="text-sm font-semibold uppercase tracking-widest text-stone-400 border-b border-stone-200 pb-2">Available Configurations</h4>
                <div className="bg-stone-50 border border-stone-200 rounded-lg p-3">
                  <p className="text-[11px] text-stone-600 leading-relaxed">
                    <span className="font-semibold text-stone-800">Note:</span> Light bill extra charge, ₹11 per unit, and security refundable amount as per room ₹500 to ₹4000.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-white p-3 rounded-xl border border-stone-200 shadow-sm flex flex-col gap-3 group hover:border-stone-300 transition-colors">
                    <img src="https://i.postimg.cc/DZt6m1fm/Chat-GPT-Image-May-1-2026-01-18-36-AM.png" alt="Double Seater Room" className="w-full h-28 object-cover rounded-lg group-hover:opacity-95 transition-opacity" />
                    <div className="flex-grow">
                      <span className="block font-medium text-stone-900">Double Seater Room</span> 
                      <span className="text-xs text-stone-500 mt-1 block">Balanced living with a roommate</span>
                      <span className="inline-block mt-2 font-bold text-stone-900">₹5,300<span className="text-xs text-stone-500 font-normal">/mo</span></span>
                    </div>
                    <button onClick={() => onInquire('PS2 Double Seater Room')} className="mt-2 w-full flex items-center justify-center gap-1.5 px-4 py-2 bg-stone-900 text-white rounded-lg text-sm font-medium hover:bg-stone-800 transition-colors">
                      Inquire <ArrowRight size={14} />
                    </button>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-stone-200 shadow-sm flex flex-col gap-3 group hover:border-stone-300 transition-colors">
                    <img src="https://i.postimg.cc/63nK8LVG/Chat-GPT-Image-May-1-2026-01-53-59-AM.png" alt="Triple Seater Room" className="w-full h-28 object-cover rounded-lg group-hover:opacity-95 transition-opacity" />
                    <div className="flex-grow">
                      <span className="block font-medium text-stone-900">Triple Seater Room</span> 
                      <span className="text-xs text-stone-500 mt-1 block">Great community living</span>
                      <span className="inline-block mt-2 font-bold text-stone-900">₹5,000<span className="text-xs text-stone-500 font-normal">/mo</span></span>
                    </div>
                    <button onClick={() => onInquire('PS2 Triple Seater Room')} className="mt-2 w-full flex items-center justify-center gap-1.5 px-4 py-2 bg-stone-900 text-white rounded-lg text-sm font-medium hover:bg-stone-800 transition-colors">
                      Inquire <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-4 md:p-6">
              <div className="w-full h-[400px] md:h-full min-h-[500px] rounded-[2rem] overflow-hidden relative shadow-lg">
                <img src="https://iili.io/BLfcAXV.png" alt="PS2 Property Entrance" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-stone-900 uppercase tracking-wider">
                    PS2 Campus
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PS2 Location & Map Section */}
      <section className="px-6 md:px-4 pt-2 pb-16 bg-white" id="ps2-location-map">
        <div className="max-w-7xl mx-auto bg-stone-50 rounded-[2rem] md:rounded-[3xl] p-6 md:p-10 shadow-sm border border-stone-200 flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full md:w-1/3 flex flex-col space-y-6">
            <div>
              <h2 className="text-3xl font-serif text-stone-900 mb-4">Find PS2</h2>
              <div className="flex items-start gap-3 mt-4">
                <MapPin className="text-stone-400 mt-1 shrink-0" size={20} />
                <p className="text-stone-600 font-medium leading-relaxed">
                  Near Shape and Fitness Gym, Sudama Nagar, Tonk Road, Jaipur
                </p>
              </div>
            </div>
            <a 
              href="https://www.google.com/maps/search/Shape+and+Fitness+Gym/@26.870303,75.7947553,626m/data=!3m1!1e3?hl=en&entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-stone-900 text-white rounded-xl font-medium shadow-md hover:bg-stone-800 transition-colors w-fit"
            >
               Get Directions <ArrowRight size={16} />
            </a>
          </div>
          <div className="w-full md:w-2/3 h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-inner border border-stone-200">
            <iframe 
              src="https://maps.google.com/maps?q=26.870303,75.7947553&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      </div>

      {/* Auto-scrolling Gallery Section */}
      <section className="py-12 md:py-24 overflow-hidden bg-stone-50/50" id="gallery-section">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <h2 className="text-3xl md:text-5xl font-serif text-stone-900 mb-4">Our Gallery</h2>
          <p className="text-stone-500">A glimpse into the life at Parth Stays Sudama Nagar, Jaipur.</p>
        </div>

        <div className="space-y-4 md:space-y-8">
          {[
            { dir: -1, images: [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5], speed: 30 },
            { dir: 1, images: [6, 7, 8, 9, 0, 1, 6, 7, 8, 9, 0, 1], speed: 40 },
            { dir: -1, images: [2, 4, 6, 8, 1, 3, 2, 4, 6, 8, 1, 3], speed: 35 }
          ].map((row, rowIndex) => (
            <div key={rowIndex} className="flex relative overflow-hidden h-[200px] md:h-[300px]">
              <motion.div
                animate={{
                  x: row.dir === -1 ? [0, -100 * row.images.length] : [-100 * row.images.length, 0],
                }}
                transition={{
                  duration: row.speed,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="flex gap-4 md:gap-8 absolute whitespace-nowrap will-change-transform"
              >
                {row.images.map((imgIdx, i) => (
                  <div key={i} className="w-[300px] md:w-[450px] h-full shrink-0">
                    <img
                      src={GALLERY_IMAGES[imgIdx % GALLERY_IMAGES.length]}
                      alt={`Gallery ${i}`}
                      className="w-full h-full object-cover rounded-2xl md:rounded-[2rem] shadow-sm"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
                {/* Duplicated for seamless loop */}
                {row.images.map((imgIdx, i) => (
                  <div key={`dup-${i}`} className="w-[300px] md:w-[450px] h-full shrink-0">
                    <img
                      src={GALLERY_IMAGES[imgIdx % GALLERY_IMAGES.length]}
                      alt={`Gallery dup ${i}`}
                      className="w-full h-full object-cover rounded-2xl md:rounded-[2rem] shadow-sm"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Facilities Section */}
      <section className="px-6 md:px-4" id="facilities-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-5xl font-serif text-stone-900 mb-2">Parth Stays Facilities</h2>
            <p className="text-stone-500 text-sm">Everything you need for a comfortable stay in Jaipur.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8">
            {[
              { icon: <Wifi className="text-stone-800" size={20} />, title: "High-Speed Wifi" },
              { icon: <Droplets className="text-stone-800" size={20} />, title: "RO Drinking Water" },
              { icon: <Wind className="text-stone-800" size={20} />, title: "Air Conditioning" },
              { icon: <Utensils className="text-stone-800" size={20} />, title: "Daily Meals" },
              { icon: <Cctv className="text-stone-800" size={20} />, title: "CCTV Security" },
              { icon: <GlassWater className="text-stone-800" size={20} />, title: "Water Cooler" },
              { icon: <Newspaper className="text-stone-800" size={20} />, title: "Daily Newspaper" },
              { icon: <ShoppingBag className="text-stone-800" size={20} />, title: "In-house Shop" },
              { icon: <Car className="text-stone-800" size={20} />, title: "Parking Facility" },
              { icon: <Sparkles className="text-stone-800" size={20} />, title: "Cleaning Facility" },
              { icon: <Shirt className="text-stone-800" size={20} />, title: "Laundry Facility" },
            ].map((facility, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white px-4 py-3 md:p-6 rounded-2xl md:rounded-[2rem] border border-stone-100 shadow-sm hover:shadow-md transition-all text-center flex flex-row md:flex-col items-center justify-start md:justify-center gap-3"
              >
                <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 bg-stone-50 rounded-xl flex items-center justify-center">
                  {facility.icon}
                </div>
                <h4 className="font-serif text-sm md:text-lg text-stone-900 text-left md:text-center leading-tight">{facility.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locality & Coaching Hubs Section */}
      <section className="px-6 md:px-4" id="locality-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-serif text-stone-900">Parth Stays Prime Location</h3>
              <p className="text-stone-500">Located in the heart of Jaipur's educational belt in Sudama Nagar. Perfect for aspirants attending nearby institutes.</p>
              <div className="flex flex-wrap gap-3">
                {['Sudama Nagar', 'Tonk Road', 'Gopalpura Phatak', 'Gandhi Nagar station'].map((area) => (
                  <span key={area} className="px-4 py-2 bg-stone-100 rounded-lg text-xs font-semibold text-stone-700 border border-stone-200">
                    {area}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-serif text-stone-900">Coaching Hubs in Jaipur</h3>
              <p className="text-stone-500">Parth Stays is within walking distance to several premier coaching institutes on Tonk Road.</p>
              <div className="grid grid-cols-2 gap-3">
                {['NEXT IAS', 'Mothers Coaching', 'WS Cube', 'VIPM', 'Para Mount', 'Zone Tech', 'Drithee Coaching', 'Harendra Coaching'].map((hub) => (
                  <div key={hub} className="flex items-center gap-2 text-sm text-stone-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-stone-400" />
                    {hub}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Map Section */}
      <section className="px-6 md:px-4 py-8" id="location-map">
        <div className="max-w-7xl mx-auto bg-white rounded-[2rem] md:rounded-[3xl] p-6 md:p-10 shadow-sm border border-stone-100 flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full md:w-1/3 flex flex-col space-y-6">
            <div>
              <h2 className="text-3xl font-serif text-stone-900 mb-4">Find Us</h2>
              <div className="flex items-start gap-3 mt-4">
                <MapPin className="text-stone-400 mt-1 shrink-0" size={20} />
                <p className="text-stone-600 font-medium leading-relaxed">
                  {CONTACT_INFO.address}
                </p>
              </div>
            </div>
            <a 
              href="https://www.google.com/maps/place/Parth+Boys+PG/@26.8711489,75.7939173,626m/data=!3m1!1e3!4m6!3m5!1s0x396db50e2c6b10cd:0xe01fd3b328f84689!8m2!3d26.8711483!4d75.7939183"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-stone-900 text-white rounded-xl font-medium shadow-md hover:bg-stone-800 transition-colors w-fit"
            >
               Get Directions <ArrowRight size={16} />
            </a>
          </div>
          <div className="w-full md:w-2/3 h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-inner border border-stone-100">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14234.621250109967!2d75.7939183!3d26.8711483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db50e2c6b10cd%3A0xe01fd3b328f84689!2sParth%20Boys%20PG!5e0!3m2!1sen!2sus!4v1"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Mobile-Friendly Booking Flow */}
      <section className="px-6 md:px-4 py-24 bg-stone-50 rounded-[3rem] md:rounded-[5rem] mx-4 md:mx-10" id="booking-steps">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-serif text-stone-900 mb-8 leading-tight">Booking your room is as easy as <span className="italic text-stone-400">1-2-3.</span></h2>
            <div className="space-y-10">
              {[
                { step: "01", title: "Pick a Property", desc: "Choose your favorite PG from our curated luxury listings." },
                { step: "02", title: "Submit Inquiry", desc: "Send us a message via the form or WhatsApp instantly." },
                { step: "03", title: "Move In", desc: "Complete paperless documentation and move in the next day." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <span className="text-4xl font-serif text-stone-200 mt-[-8px]">{item.step}</span>
                  <div>
                    <h4 className="text-lg font-bold text-stone-800 mb-2">{item.title}</h4>
                    <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
            <div className="pt-12">
               <img src="https://iili.io/BPyDzmP.jpg" className="w-full aspect-[4/5] object-cover rounded-3xl shadow-xl" alt="Parth Stays Room" />
            </div>
            <div>
               <img src="https://iili.io/BPyDUQe.jpg" className="w-full aspect-[4/5] object-cover rounded-3xl shadow-xl" alt="Parth Stays Life" />
            </div>
          </div>
        </div>
      </section>

      {/* Manager's Spotlight */}
      <section className="px-6 md:px-4" id="manager-spotlight">
        <div className="max-w-7xl mx-auto py-16 md:py-32 border-t border-stone-100">
           <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="w-full md:w-1/3">
                 <div className="aspect-square rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl rotate-3">
                    <img src="https://i.postimg.cc/T39tQy0z/Chat-GPT-Image-May-1-2026-01-18-29-AM.png" alt="Parth Saini" className="w-full h-full object-cover -rotate-3 scale-110" />
                 </div>
              </div>
              <div className="w-full md:w-2/3 space-y-6">
                 <div className="inline-block px-4 py-1 bg-stone-900 text-white rounded-full text-[10px] font-bold uppercase tracking-[0.3em]">The Man Behind the Part</div>
                 <h2 className="text-3xl md:text-5xl font-serif text-stone-900 leading-tight">Driven by Passion, <br/>Defined by Speed.</h2>
                 <div className="space-y-4">
                   <p className="text-stone-500 text-lg md:text-xl leading-relaxed italic border-l-4 border-stone-200 pl-6">
                     "This 20-year-old man has a unique condition. He's a Big Boss fan, and he's really fast."
                   </p>
                   <p className="text-stone-400 text-sm md:text-base pl-6">
                     He has a few things that are a little different. He has a few things that are a little different.
                   </p>
                 </div>
                 <div className="flex items-center gap-4 pt-4">
                    <div className="h-px w-12 bg-stone-300"></div>
                    <span className="font-serif font-medium text-stone-900">Parth Saini, Founder</span>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 md:px-4 pb-24" id="testimonials-section">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-amber-400 flex justify-center gap-1 mb-8" id="testimonial-stars">
            {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="currentColor" />)}
          </div>
          <blockquote className="text-2xl md:text-3xl font-serif italic mb-10 leading-relaxed text-stone-800" id="testimonial-text">
            " The WhatsApp integration made booking so easy. I inquired on Monday and moved in by Tuesday. Best student PG in Jaipur! "
          </blockquote>
          <div className="flex items-center justify-center gap-4" id="testimonial-author">
            <div className="w-12 h-12 rounded-full border-2 border-stone-100 p-1">
               <img src="https://i.pravatar.cc/150?u=9" className="w-full h-full rounded-full" alt="avatar" />
            </div>
            <div className="text-left" id="testimonial-meta">
              <div className="font-semibold text-stone-900 text-sm">Sneha Sharma</div>
              <div className="text-[10px] text-stone-400 uppercase tracking-[0.2em] font-bold tracking-widest">NEXT IAS Aspirant</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
