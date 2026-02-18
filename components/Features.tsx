import React from 'react';
import { Zap, Heart, CheckCircle2, UserCheck, Droplets, Wallet } from 'lucide-react';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Выезд в день обращения",
      description: "Срочно нужно прибраться? Мы будем у вас уже через 1.5–2 часа после звонка.",
      color: "bg-blue-100 text-blue-600",
      delay: 0
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Эко-химия",
      description: "Используем только безопасные, гипоаллергенные средства без едкого запаха.",
      color: "bg-pink-100 text-pink-600",
      delay: 0.1
    },
    {
      icon: <Wallet className="w-6 h-6" />,
      title: "Оплата после уборки",
      description: "Никаких предоплат. Вы проверяете качество работы и только потом оплачиваете.",
      color: "bg-green-100 text-green-600",
      delay: 0.2
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Проверенный персонал",
      description: "Каждый клинер прошел обучение и проверку службы безопасности.",
      color: "bg-purple-100 text-purple-600",
      delay: 0.3
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Гарантия 24 часа",
      description: "Если вы найдете недостатки в течение суток, мы устраним их бесплатно.",
      color: "bg-orange-100 text-orange-600",
      delay: 0.4
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Свое оборудование",
      description: "Привозим мощные пылесосы, парогенераторы и весь необходимый инвентарь.",
      color: "bg-indigo-100 text-indigo-600",
      delay: 0.5
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-brand-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 tracking-tight"
          >
            Почему выбирают <span className="text-brand-600">нас</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-500 text-lg md:text-xl leading-relaxed"
          >
            Мы создали сервис, которым пользуемся сами. Внимание к деталям и забота о клиенте — наши главные приоритеты.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: item.delay }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 ${item.color}`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
