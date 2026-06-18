import { motion } from 'framer-motion';

const skills = [
  { name: 'PHP', level: 90, color: '#4F5D95' },
  { name: 'React.js', level: 95, color: '#61DAFB' },
  { name: 'JavaScript', level: 92, color: '#F7DF1E' },
  { name: 'HTML5', level: 98, color: '#E34F26' },
  { name: 'CSS3', level: 95, color: '#1572B6' },
  { name: 'Bootstrap', level: 85, color: '#7952B3' },
  { name: 'Hardware', level: 88, color: '#ffffff' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Core <br />
            <span className="text-neon-blue">Technology</span> <br />
            Stack
          </motion.h2>
          <p className="text-gray-400 mb-8">
            Minhas habilidades técnicas abrangem desde o desenvolvimento web moderno até a engenharia de hardware, permitindo uma visão holística de cada projeto.
          </p>
          <div className="p-6 border border-white/10 rounded-xl glass-morphism">
            <h4 className="font-bold text-neon-purple mb-2">Técnico de Hardware</h4>
            <p className="text-sm text-gray-500">
              Especializado em diagnóstico e reparo de dispositivos móveis e computadores de mesa, unindo o mundo físico ao digital.
            </p>
          </div>
        </div>

        <div className="md:w-2/3 grid grid-cols-1 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="relative">
              <div className="flex justify-between mb-2">
                <span className="font-bold tracking-widest">{skill.name}</span>
                <span className="text-gray-500">{skill.level}%</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full rounded-full"
                  style={{
                    backgroundColor: skill.color,
                    boxShadow: `0 0 10px ${skill.color}88`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
        {['Inovação', 'Escalabilidade', 'Performance', 'UX/UI'].map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="text-center p-4 border border-white/5 rounded-lg hover:border-neon-blue/30 transition-colors"
          >
            <span className="text-gray-500 font-mono text-sm uppercase tracking-tighter block mb-2">0{i + 1}</span>
            <span className="text-xl font-bold">{item}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
