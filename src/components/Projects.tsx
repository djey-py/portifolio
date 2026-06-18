import { motion } from 'framer-motion';
import { ExternalLink, Code, Code2 } from 'lucide-react';

const projects = [
  {
    title: "EcoSystem Connect",
    desc: "Plataforma avançada para gestão de recursos sustentáveis usando React e Node.js.",
    tech: ["React", "Tailwind", "Firebase"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    link: "#",
    github: "#"
  },
  {
    title: "Hardware Diagnostic Tool",
    desc: "Aplicação desktop para diagnóstico rápido de falhas em componentes de hardware.",
    tech: ["Electron", "React", "Node.js"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    link: "#",
    github: "#"
  },
  {
    title: "Mobile Tech Store",
    desc: "E-commerce especializado em dispositivos móveis e acessórios de alta performance.",
    tech: ["PHP", "Laravel", "MySQL", "Bootstrap"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
    link: "#",
    github: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Trabalhos <span className="text-neon-purple">Recentes</span>
        </motion.h2>
        <div className="w-24 h-1 bg-neon-blue rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group relative bg-black/40 border border-white/10 rounded-2xl overflow-hidden hover:border-neon-blue/50 transition-all duration-500"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-4 left-4 flex gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-[10px] px-2 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-white uppercase tracking-tighter">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-neon-blue transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                {project.desc}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex gap-4">
                  <a href={project.github} className="text-gray-500 hover:text-white transition-colors">
                    <Code size={20} />
                  </a>
                  <a href={project.link} className="text-gray-500 hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
                <Code2 className="text-neon-purple/30 group-hover:text-neon-purple transition-colors" size={24} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
