import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gamepad2, Trophy, BookOpen, Smartphone } from "lucide-react";
import Jetris from "./Jetris";

const Interests = () => {
  const [active, setActive] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const items = [
    {
      icon: <Gamepad2 size={40} className="text-neon-blue" />,
      title: "Gamer at Heart",
      content: <Jetris />,
    },
    {
      icon: <Trophy size={40} className="text-yellow-500" />,
      title: "Madridista",
      content: (
        <div className="text-center">
          <h3 className="text-4xl font-black text-yellow-500 mb-4">
            HALA MADRID ⚽
          </h3>
          <p className="text-gray-400">
            14x Champions League 🏆 <br />
            Espírito, História e Glória.
          </p>
        </div>
      ),
    },
    {
      icon: <BookOpen size={40} className="text-neon-purple" />,
      title: "Dostoevsky Reader",
      content: (
        <ul className="text-left space-y-3 text-gray-400">
          <li>• Crime e Castigo</li>
          <li>• Os Irmãos Karamázov</li>
          <li>• O Idiota</li>
          <li>• Memórias do Subsolo</li>
        </ul>
      ),
    },
    {
      icon: <Smartphone size={40} className="text-green-500" />,
      title: "Mobile Tech",
      content: (
        <div className="text-left text-gray-400 space-y-3">
          <p>📱 iPhone revolucionou o mercado mobile</p>
          <p>🤖 Android democratizou smartphones</p>
          <p>🌍 5G transformando conectividade</p>
          <p>🧠 IA integrada em dispositivos móveis</p>
        </div>
      ),
    },
  ];

  return (
    <section className="py-32 px-6 max-w-6xl mx-auto">
      <h2 className="text-5xl font-bold text-center mb-20">
        Life &{" "}
        <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
          Passion
        </span>
      </h2>

      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index}>
            
            {/* CLICKABLE CARD */}
            <motion.div
              onClick={() => setActive(active === index ? null : index)}
              whileHover={{ scale: 1.02 }}
              className="cursor-pointer p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center gap-6"
            >
              {item.icon}
              <h3 className="text-2xl font-bold">{item.title}</h3>
            </motion.div>

            {/* EXPANDABLE CONTENT */}
            <AnimatePresence>
              {active === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden bg-black/40 border border-white/10 rounded-2xl p-8 mt-4"
                >
                  {item.content}
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        ))}
      </div>

      <div className="mt-20 text-center italic text-gray-500">
        "A beleza salvará o mundo." — Fyodor Dostoevsky
      </div>
    </section>
  );
};

export default Interests;