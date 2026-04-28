import React from 'react';
import { motion } from 'motion/react';
import { PG_DATA } from '../constants';
import { PGCard } from '../components/PGCard';
import { ImageCarousel } from '../components/ImageCarousel';
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
  CalendarCheck
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

      {/* Listings Section - Mobile Optimized Cards */}
      <section className="px-6 md:px-4" id="browse-listings">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8" id="listings-header">
            <div>
              <h2 className="text-3xl font-serif font-medium text-stone-900 mb-4" id="listings-title">Explore Residences</h2>
              <p className="text-stone-500" id="listings-subtitle">Curated picks for every budget and taste.</p>
            </div>
            <div className="flex gap-2 pb-2 overflow-x-auto no-scrollbar scroll-smooth" id="listings-filter">
              {['All', 'Boys', 'Girls', 'Co-living'].map((l) => (
                <button
                  key={l}
                  className={`flex-none px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all border ${
                    l === 'All' ? 'bg-stone-900 text-white border-stone-900' : 'bg-white text-stone-500 border-stone-100 hover:border-stone-300 shadow-sm'
                  }`}
                  id={`filter-${l}`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="listings-grid">
            {PG_DATA.map((pg) => (
              <PGCard key={pg.id} pg={pg} onInquire={onInquire} />
            ))}
          </div>
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
