import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";
import todoImg from "../assets/img/todo.png";
import webideimg from "../assets/img/webide.jpeg";

const projects = [
  {
    title: "FacilCred",
    desc: "Uma Instituição Financeira não Bancária de direito angolano de capitais privados e uma sociedade por quotas Unipessoal. A sede social e administrativa da sociedade está localizada na Rua Comandante Che Guevara no97 B Bairro Maculusso, Distrito da Ingombota, Província de Luanda.",
    tech: ["PHP", "HTML", "CSS", "MySQL"],
    image: "https://facilcred.ao/assets/images/2025/logo.png",
    link: "https://facilcred.ao/",
    github: "#",
  },
  {
    title: "WebIde (Privado)",
    desc: "Aplicação desktop para desenvolvimento",
    tech: ["React", "Node.js"],
    image: webideimg,
    link: "#",
    github: "#",
  },
  {
    title: "ToDo (Privado)",
    desc: "Sistema de gestão de tarefas desenvolvido para organizar demandas empresariais, permitindo melhor controlo de atividades e produtividade.",
    tech: ["PHP", "HTML", "CSS", "MySQL", "Bootstrap"],
    image: todoImg,
    link: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
      
      {/* TITLE */}
      <div className="text-center mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Trabalhos{" "}
          <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
            Recentes
          </span>
        </motion.h2>

        <div className="w-32 h-1 mx-auto bg-gradient-to-r from-neon-blue to-neon-purple rounded-full" />
      </div>

      {/* PROJECTS VERTICAL */}
      <div className="space-y-32">
        {projects.map((project, index) => {
          const isReversed = index % 2 !== 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row ${
                isReversed ? "lg:flex-row-reverse" : ""
              } items-center gap-16`}
            >
              {/* IMAGE */}
              <div className="relative w-full lg:w-1/2 group">
                <div className="absolute -inset-2 bg-gradient-to-r from-neon-blue to-neon-purple blur-2xl opacity-20 group-hover:opacity-40 transition duration-500 rounded-2xl" />
                
                <img
                  src={project.image}
                  alt={project.title}
                  className="relative w-full h-80 object-cover rounded-2xl border border-white/10 group-hover:scale-[1.03] transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="w-full lg:w-1/2">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  {project.desc}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-4 py-2 text-xs uppercase tracking-wider
                      bg-white/5 border border-white/10
                      rounded-full backdrop-blur-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* LINKS */}
                <div className="flex gap-6">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-400 hover:text-neon-blue transition"
                  >
                    <Code size={20} />
                    Código
                  </a>

                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-gray-400 hover:text-neon-purple transition"
                  >
                    <ExternalLink size={20} />
                    Visitar
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;