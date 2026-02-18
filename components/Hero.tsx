import React from 'react';
import { Star, ShieldCheck, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onOrderClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOrderClick }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50 min-h-[90vh] flex items-center">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-brand-200/20 rounded-full blur-[100px] transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-blue-200/20 rounded-full blur-[100px] transform -translate-x-1/3 translate-y-1/3"></div>
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-[10%] w-20 h-20 bg-gradient-to-br from-brand-400 to-blue-500 rounded-3xl opacity-10 blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 left-[5%] w-32 h-32 bg-gradient-to-tr from-purple-400 to-brand-500 rounded-full opacity-10 blur-xl"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-brand-100 rounded-full text-brand-600 text-sm font-semibold mb-8 shadow-sm hover:shadow-md transition-shadow cursor-default"
            >
              <Star className="w-4 h-4 fill-brand-500 text-brand-500" />
              <span>Клининг №1 в Екатеринбурге</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8 tracking-tight max-w-4xl mx-auto lg:mx-0">
              <span className="block">Идеальная чистота</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400 block">без компромиссов</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Технологичный подход к уборке. Мы используем эко-средства и профессиональное оборудование, чтобы ваш дом сиял.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-16">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOrderClick}
                className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-brand-600 to-brand-500 text-white rounded-2xl font-bold text-lg shadow-xl shadow-brand-500/30 hover:shadow-brand-500/50 transition-all flex items-center justify-center gap-2 group"
              >
                Рассчитать стоимость
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <div className="flex items-center gap-4 px-6 py-4 rounded-2xl hover:bg-white/50 transition-colors">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-white shadow-sm overflow-hidden bg-slate-200">
                      <img src={`images/avatars/${i}.jpg`} className="w-full h-full object-cover" alt={`Client ${i}`} />
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <div className="font-bold text-slate-900 text-lg">1200+</div>
                  <div className="text-xs text-slate-500 font-medium">Довольных клиентов</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 text-sm font-semibold text-slate-600">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                Страховка
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <Clock className="w-4 h-4" />
                </div>
                Выезд 60 мин
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                  <Star className="w-4 h-4" />
                </div>
                PRO-клинеры
              </div>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-brand-900/10 border-[6px] border-white ring-1 ring-slate-900/5 rotate-1 hover:rotate-0 transition-all duration-700 group">
              <img
                src="images/hero_image.png"
                className="w-full h-[600px] object-cover object-center transform group-hover:scale-105 transition-transform duration-1000"
                alt="Modern Living Room Cleaning"
              />

              {/* Floating Cards within Image */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute top-8 left-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">Статус</p>
                    <p className="font-bold text-slate-800">Уборка завершена</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 max-w-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 overflow-hidden rounded-full border border-slate-200">
                    <img src="images/avatars/4.jpg" className="w-full h-full object-cover" alt="Reviewer" />
                  </div>
                  <div>
                    <div className="flex text-yellow-400 w-20">
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                    </div>
                    <p className="text-xs font-medium text-slate-600 mt-1">"Моя квартира никогда не была такой чистой!"</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Background Blobs for Visual */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 bg-gradient-to-tr from-brand-200/40 to-purple-200/40 rounded-full blur-3xl opacity-50"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
