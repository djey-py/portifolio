import { motion } from "framer-motion";
import {
  FaPhp,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";
import { MdMemory } from "react-icons/md";

const skills = [
  { name: "PHP", level: 90, color: "#4F5D95", icon: <FaPhp /> },
  { name: "React.js", level: 95, color: "#61DAFB", icon: <FaReact /> },
  { name: "JavaScript", level: 92, color: "#F7DF1E", icon: <FaJs /> },
  { name: "HTML5", level: 98, color: "#E34F26", icon: <FaHtml5 /> },
  { name: "CSS3", level: 95, color: "#1572B6", icon: <FaCss3Alt /> },
  { name: "Bootstrap", level: 85, color: "#7952B3", icon: <FaBootstrap /> },
  { name: "Hardware", level: 88, color: "#ffffff", icon: <MdMemory /> },
];

const values = ["Inovação", "Escalabilidade", "Performance", "UX/UI"];

const Skills = () => {
  const radius = 70;
  const stroke = 10;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  return (
    <section id="skills" className="py-28 px-6 max-w-7xl mx-auto text-center">
      
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-bold mb-12"
      >
        Core{" "}
        <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
          Technology
        </span>{" "}
        Stack
      </motion.h2>

      {/* DESCRIPTION */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="text-gray-400 max-w-3xl mx-auto mb-10 text-lg leading-relaxed"
      >
        Minhas habilidades técnicas abrangem desde o desenvolvimento web moderno até a engenharia de hardware, permitindo uma visão holística de cada projeto.
      </motion.p>

      {/* HARDWARE CARD */}
      {/* <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.03 }}
        className="max-w-xl mx-auto p-8 mb-20 rounded-2xl 
        bg-gradient-to-br from-white/5 to-white/10
        border border-white/10
        backdrop-blur-xl
        hover:border-neon-purple/40
        transition-all duration-500"
      >
        <h4 className="font-bold text-neon-purple mb-3 text-lg">
          Técnico de Hardware
        </h4>
        <p className="text-sm text-gray-500 leading-relaxed">
          Especializado em diagnóstico e reparo de dispositivos móveis e computadores de mesa, unindo o mundo físico ao digital.
        </p>
      </motion.div> */}

      {/* CIRCULAR SKILLS */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-16 justify-items-center">
        {skills.map((skill, index) => {
          const strokeDashoffset =
            circumference - (skill.level / 100) * circumference;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.08 }}
              className="flex flex-col items-center"
            >
              <div className="relative w-40 h-40 flex items-center justify-center">
                <svg height={radius * 2} width={radius * 2}>
                  <circle
                    stroke="rgba(255,255,255,0.1)"
                    fill="transparent"
                    strokeWidth={stroke}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                  />

                  <motion.circle
                    stroke={skill.color}
                    fill="transparent"
                    strokeWidth={stroke}
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    whileInView={{ strokeDashoffset }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    style={{
                      filter: `drop-shadow(0 0 8px ${skill.color})`,
                    }}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                    transform={`rotate(-90 ${radius} ${radius})`}
                  />
                </svg>

                <div className="absolute flex flex-col items-center">
                  <div
                    className="text-3xl mb-1"
                    style={{ color: skill.color }}
                  >
                    {skill.icon}
                  </div>
                  <span
                    className="text-sm font-mono"
                    style={{ color: skill.color }}
                  >
                    {skill.level}%
                  </span>
                </div>
              </div>

              <span className="mt-4 font-bold tracking-widest">
                {skill.name}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* VALUES SECTION */}
      <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-10">
        {values.map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="relative p-8 rounded-2xl 
            border border-white/10 
            bg-gradient-to-br from-white/5 to-white/10 
            backdrop-blur-xl 
            hover:border-neon-blue/40
            transition-all duration-500"
          >
            <span className="absolute top-4 right-6 text-xs font-mono text-gray-600">
              0{i + 1}
            </span>
            <span className="text-xl font-bold">{item}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;