import { motion } from 'framer-motion';
import { Monitor, Cpu, Smartphone, Book } from 'lucide-react';

const About = () => {
  const cards = [
    {
      icon: <Monitor className="w-8 h-8 text-neon-blue" />,
      title: "Software Engineering",
      desc: "Licenciado em Ciências da Computação, focado em criar soluções escaláveis e eficientes."
    },
    {
      icon: <Cpu className="w-8 h-8 text-neon-purple" />,
      title: "Hardware Expert",
      desc: "Técnico especializado em manutenção de hardware para mobile e desktop."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-white" />,
      title: "Mobile Enthusiast",
      desc: "Apaixonado pela evolução das tecnologias móveis e sua integração no dia a dia."
    },
    {
      icon: <Book className="w-8 h-8 text-neon-blue" />,
      title: "Literature & Poesy",
      desc: "Inspirado por Dostoevsky, busco profundidade e significado em cada linha de código."
    }
  ];

  return (
    <section id="about" className="py-20 px-6 max-w-7xl mx-auto flex flex-col justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">Sobre Mim</h2>
          <p className="text-gray-400 text-lg mb-6 leading-relaxed">
            Olá! Sou <span className="text-neon-blue font-bold">Joelson Pedro</span>, um Engenheiro de Software movido por desafios e inovação. Minha jornada na tecnologia começou com a curiosidade de entender como as coisas funcionam, o que me levou a me tornar um especialista tanto em software quanto em hardware.
          </p>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Acredito que a programação é uma forma de arte — uma poesia lógica. Assim como Dostoevsky explora a psique humana, eu busco explorar as infinitas possibilidades do código, criando experiências que impactam positivamente a vida das pessoas.
          </p>
          <div className="flex gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-blue">CS</div>
              <div className="text-xs uppercase tracking-widest text-gray-500">Degree</div>
            </div>
            <div className="w-px h-12 bg-gray-800" />
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-purple">HW</div>
              <div className="text-xs uppercase tracking-widest text-gray-500">Expert</div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="glass-morphism p-6 rounded-2xl border border-white/10 hover:border-neon-blue/50 transition-all duration-300"
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
