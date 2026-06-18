import { motion } from "framer-motion";
import { Monitor, Cpu, Smartphone, Book } from "lucide-react";

const About = () => {
  const cards = [
    {
      icon: <Monitor className="w-8 h-8 text-neon-blue" />,
      title: "Software Engineering",
      desc: "Licenciado em Ciências da Computação, focado em criar soluções escaláveis e eficientes.",
    },
    {
      icon: <Cpu className="w-8 h-8 text-neon-purple" />,
      title: "Hardware Expert",
      desc: "Técnico especializado em manutenção de hardware para mobile e desktop.",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-white" />,
      title: "Mobile Enthusiast",
      desc: "Apaixonado pela evolução das tecnologias móveis e sua integração no dia a dia.",
    },
    {
      icon: <Book className="w-8 h-8 text-neon-blue" />,
      title: "Literature & Poesy",
      desc: "Inspirado por Dostoevsky, busco profundidade e significado em cada linha de código.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-28 px-6 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Neon vertical line */}
          <div className="absolute -left-6 top-2 w-1 h-32 bg-gradient-to-b from-neon-blue to-neon-purple rounded-full blur-sm opacity-70" />

          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              Sobre Mim
            </span>
          </h2>

          <p className="text-gray-400 text-lg mb-6 leading-relaxed">
            Olá! Sou <span className="text-neon-blue font-bold">Joelson Pedro</span>, um Engenheiro de Software movido por desafios e inovação. Minha jornada na tecnologia começou com a curiosidade de entender como as coisas funcionam, o que me levou a me tornar um especialista tanto em software quanto em hardware.
          </p>

          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            Acredito que a programação é uma forma de arte — uma poesia lógica. Assim como Dostoevsky explora a psique humana, eu busco explorar as infinitas possibilidades do código, criando experiências que impactam positivamente a vida das pessoas.
          </p>

          {/* Stats */}
          <div className="flex gap-12">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-neon-blue drop-shadow-[0_0_15px_rgba(0,255,255,0.5)]">
                CS
              </div>
              <div className="text-xs uppercase tracking-widest text-gray-500">
                Degree
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-neon-purple drop-shadow-[0_0_15px_rgba(180,0,255,0.5)]">
                HW
              </div>
              <div className="text-xs uppercase tracking-widest text-gray-500">
                Expert
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT SIDE - 3D STACK CARDS */}
        <div className="relative grid sm:grid-cols-2 gap-8 perspective-1000">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                rotateX: 5,
                rotateY: index % 2 === 0 ? 5 : -5,
              }}
              className="relative p-8 rounded-2xl 
              bg-gradient-to-br from-white/5 to-white/10
              backdrop-blur-xl
              border border-white/10
              hover:border-neon-blue/40
              transition-all duration-500
              shadow-lg hover:shadow-neon-blue/20"
            >
              <div className="mb-5">{card.icon}</div>
              <h3 className="text-xl font-bold mb-3">
                {card.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {card.desc}
              </p>

              {/* glow overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-blue/0 via-neon-blue/5 to-neon-purple/0 opacity-0 hover:opacity-100 transition duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;