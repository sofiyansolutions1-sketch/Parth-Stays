/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { InquiryPage } from './pages/Inquiry';
import { InquiryForm } from './components/InquiryForm';
import { Footer } from './components/Footer';
import { FloatingContact } from './components/FloatingContact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'inquiry'>('home');
  const [selectedPg, setSelectedPg] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openInquiryModal = (pgName?: string) => {
    if (pgName) setSelectedPg(pgName);
    setIsModalOpen(true);
  };

  const handlePageChange = (page: 'home' | 'inquiry') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-stone-900 selection:text-white" id="app-root">
      <Navbar activePage={currentPage} setPage={handlePageChange} />
      
      <main id="main-content">
        <AnimatePresence mode="wait">
          {currentPage === 'home' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Home onInquire={openInquiryModal} />
            </motion.div>
          ) : (
            <motion.div
              key="inquiry"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <InquiryPage selectedPg={selectedPg} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Inquiry Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
              id="modal-overlay"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
              id="modal-content"
            >
              <div className="absolute top-6 right-6 z-10">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-stone-100 rounded-full transition-colors text-stone-400 hover:text-stone-900"
                  id="close-modal-btn"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>
              <div className="max-h-[90vh] overflow-y-auto no-scrollbar">
                <InquiryForm initialPgName={selectedPg} onSuccess={() => setIsModalOpen(false)} />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
      <FloatingContact />
    </div>
  );
}
