import { motion } from 'framer-motion';
import { Gamepad2, Trophy, BookOpen, Smartphone } from 'lucide-react';

const Interests = () => {
  const items = [
    {
      icon: <Gamepad2 size={40} className="text-neon-blue" />,
      title: "Gamer at Heart",
      desc: "Apaixonado por universos virtuais, estratégia e competição. O gaming moldou minha resolução de problemas.",
      color: "border-neon-blue/20"
    },
    {
      icon: <Trophy size={40} className="text-yellow-500" />,
      title: "Madridista",
      desc: "Hala Madrid! O espírito de luta e a busca pela excelência do Real Madrid me inspiram diariamente.",
      color: "border-yellow-500/20"
    },
    {
      icon: <BookOpen size={40} className="text-neon-purple" />,
      title: "Dostoevsky Reader",
      desc: "A profundidade psicológica de Fyodor Dostoevsky é minha fonte de inspiração para complexidade e verdade.",
      color: "border-neon-purple/20"
    },
    {
      icon: <Smartphone size={40} className="text-green-500" />,
      title: "Mobile Tech",
      desc: "Sempre de olho no último gadget ou inovação mobile. A tecnologia no bolso é o futuro.",
      color: "border-green-500/20"
    }
  ];

  return (
    <section id="interests" className="py-20 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black uppercase tracking-tighter glow-text italic">
          Life & <span className="text-neon-blue">Passion</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className={`flex items-start gap-6 p-8 glass-morphism rounded-3xl border ${item.color} relative group`}
          >
            <div className="p-4 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
            <div className="absolute top-0 right-0 p-4 text-white/5 font-black text-6xl select-none">
              {index + 1}
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-20 flex justify-center italic text-gray-500 text-center max-w-2xl mx-auto px-4"
      >
        <p>"A beleza salvará o mundo." — Fyodor Dostoevsky</p>
      </motion.div>
    </section>
  );
};

export default Interests;
