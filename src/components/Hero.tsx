import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="flex flex-col items-center justify-center relative overflow-hidden">
      <div className="z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-neon-blue font-mono mb-2 tracking-widest uppercase">Software Engineer</h2>
          <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tighter">
            JOELSON <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">PEDRO</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex flex-wrap justify-center gap-4 text-xl md:text-2xl font-light text-gray-300"
        >
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-neon-blue rounded-full animate-pulse" />
            Full Stack Developer
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-neon-purple rounded-full animate-pulse" />
            Tech Enthusiast
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            Gamer
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12"
        >
          <a
            href="#projects"
            className="px-8 py-3 border border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black transition-all duration-300 font-bold tracking-widest uppercase"
          >
            Explore Projects
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="animate-bounce text-neon-blue w-8 h-8" />
      </motion.div>
    </section>
  );
};

export default Hero;
