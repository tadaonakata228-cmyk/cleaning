
import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface StickyCTAProps {
  onOrderClick: () => void;
}

const StickyCTA: React.FC<StickyCTAProps> = ({ onOrderClick }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {visible && (
          <>
            {/* Mobile Sticky Bar */}
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: 100 }}
              className="lg:hidden fixed bottom-6 left-4 right-4 z-40"
            >
              <div className="bg-white/80 backdrop-blur-xl border border-white/50 rounded-[2rem] p-2 shadow-2xl shadow-brand-900/10 flex items-center gap-3 pr-4">
                <a href="https://wa.me/79057743600" className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </a>
                <button
                  onClick={onOrderClick}
                  className="flex-grow py-3 bg-slate-900 text-white rounded-xl font-bold text-sm shadow-lg shadow-slate-900/20 active:scale-[0.98] transition-transform"
                >
                  Рассчитать стоимость
                </button>
              </div>
            </motion.div>

            {/* Desktop Floating Actions */}
            <div className="hidden lg:flex fixed bottom-10 right-10 flex-col gap-4 z-40">
              <motion.a
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ delay: 0.1 }}
                href="https://wa.me/79057743600"
                title="Написать в WhatsApp"
                className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform group relative"
              >
                <MessageCircle className="w-8 h-8" />
                <span className="absolute right-full mr-4 px-4 py-2 bg-white text-slate-900 text-sm font-bold rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border pointer-events-none">
                  Есть вопросы? Пишите!
                </span>
              </motion.a>

              <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                onClick={onOrderClick}
                className="w-16 h-16 bg-gradient-to-r from-brand-600 to-brand-500 text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform group relative hover:shadow-brand-500/40"
              >
                <Phone className="w-7 h-7" />
                <span className="absolute right-full mr-4 px-4 py-2 bg-white text-slate-900 text-sm font-bold rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border pointer-events-none">
                  Заказать обратный звонок
                </span>
              </motion.button>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default StickyCTA;
