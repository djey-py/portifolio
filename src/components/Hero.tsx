import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const techs = [
  "REACT",
  "PHP",
  "NODE",
  "EXPRESS",
  "CODEIGNITER",
  "HTML",
  "CSS",
  "TYPESCRIPT",
  "HARDWARE",
];

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 md:px-20 relative overflow-hidden"
    >
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div className="text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-neon-blue font-mono mb-4 tracking-[0.3em] uppercase text-sm sm:text-base md:text-lg">
              Software Engineer
            </h2>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-tight">
              JOELSON{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
                PEDRO
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="flex flex-col md:flex-col items-center md:items-start gap-4 text-lg sm:text-xl md:text-2xl font-light text-gray-300"
          >
            <span className="flex items-center gap-3">
              <span className="w-2 h-2 bg-neon-blue rounded-full animate-pulse" />
              Full Stack Developer
            </span>

            <span className="flex items-center gap-3">
              <span className="w-2 h-2 bg-neon-purple rounded-full animate-pulse" />
              Tech Enthusiast
            </span>

            <span className="flex items-center gap-3">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Gamer
            </span>
          </motion.div>

          {/* MOBILE CAROUSEL AUTO LOOP */}
          <div className="mt-10 md:hidden overflow-hidden">
            <motion.div
              animate={{ x: ["-10%", "-150%"] }}
              transition={{
                duration: 15,
                ease: "linear",
                repeat: Infinity,
              }}
              className="flex gap-6"
            >
              {[...techs, ...techs].map((tech, index) => (
                <div
                  key={index}
                  className="min-w-full h-24 flex items-center justify-center
        border border-neon-blue/40 
        bg-white/5 backdrop-blur-lg
        text-xl font-bold tracking-widest"
                >
                  {tech}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* RIGHT SIDE - DESKTOP VERTICAL LOOP */}
        <div className="hidden md:flex relative h-[400px] overflow-hidden items-center justify-center">
          <motion.div
            animate={{ y: ["10px", "-10%"] }}
            transition={{
              duration: 30, // MAIS LENTO
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex flex-col gap-6"
          >
            {[...techs, ...techs].map((tech, index) => (
              <div
                key={index}
                className="w-80 h-24 flex items-center justify-center
        border border-neon-blue/40 
        bg-white/5 backdrop-blur-lg
        text-2xl font-bold tracking-widest
        hover:scale-105 transition-transform duration-300"
              >
                {tech}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="animate-bounce text-neon-blue w-8 h-8" />
      </motion.div>
    </section>
  );
};

export default Hero;