import React from 'react';
import { ArrowRight, Check, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const services = [
    {
      title: "Поддерживающая",
      price: "от 120 ₽/м²",
      image: "https://images.unsplash.com/photo-1581578731117-104f2a41272c?auto=format&fit=crop&q=80&w=800",
      benefits: ["Влажная уборка полов", "Удаление пыли с мебели", "Очистка зеркал", "Уборка санузла"],
      delay: 0
    },
    {
      title: "Генеральная",
      price: "от 250 ₽/м²",
      image: "https://images.unsplash.com/photo-1527512660517-6f03ba763584?auto=format&fit=crop&q=80&w=800",
      popular: true,
      benefits: ["Обезжиривание кухни", "Глубокая чистка с/у", "Мойка внутри шкафов", "Очистка стен и дверей"],
      delay: 0.1
    },
    {
      title: "После ремонта",
      price: "от 300 ₽/м²",
      image: "https://images.unsplash.com/photo-1505798577917-a651a5d40320?auto=format&fit=crop&q=80&w=800",
      benefits: ["Сбор строймусора", "Обеспыливание всех ниш", "Мойка окон от цемента", "Удаление затирки"],
      delay: 0.2
    }
  ];

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900"
            >
              Популярные <span className="text-brand-600">услуги</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-500 text-lg md:text-xl"
            >
              Выберите подходящий тип уборки. Мы гарантируем идеальный результат вне зависимости от сложности задачи.
            </motion.p>
          </div>
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#"
            className="inline-flex items-center gap-2 text-brand-600 font-bold hover:gap-3 transition-all"
          >
            Весь прайс-лист <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: service.delay }}
              className={`relative bg-slate-50 rounded-[2.5rem] overflow-hidden group hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-500 flex flex-col ${service.popular ? 'ring-2 ring-brand-500 ring-offset-4' : 'border border-slate-100'}`}
            >
              {service.popular && (
                <div className="absolute top-6 right-6 z-20 px-4 py-1.5 bg-brand-600 text-white text-xs font-bold rounded-full uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-brand-500/30">
                  <Star className="w-3 h-3 fill-current" />
                  Хит продаж
                </div>
              )}

              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-2 text-slate-900">{service.title}</h3>
                <div className="text-brand-600 font-black text-2xl mb-6">{service.price}</div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {service.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 text-sm font-medium">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      {b}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-xl font-bold transition-all transform active:scale-95 ${service.popular ? 'bg-brand-600 text-white shadow-xl shadow-brand-500/30 hover:bg-brand-700' : 'bg-white text-slate-900 border border-slate-200 hover:border-brand-300 hover:text-brand-600'}`}>
                  Заказать
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
