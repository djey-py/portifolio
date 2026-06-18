import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Code, User, Camera } from 'lucide-react';
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Vamos <span className="text-neon-blue">Conversar?</span>
          </motion.h2>
          <p className="text-gray-400 text-lg mb-8">
            Estou sempre aberto a novas oportunidades, colaborações em projetos inovadores ou apenas para falar sobre tecnologia, Dostoevsky ou o Real Madrid.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-neon-blue/10 rounded-full flex items-center justify-center text-neon-blue">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Email</p>
                <p className="text-lg font-medium">gphynton@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-neon-purple/10 rounded-full flex items-center justify-center text-neon-purple">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Localização</p>
                <p className="text-lg font-medium">Luanda, Angola (Trabalhado para o mundo todo)</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Telefone</p>
                <p className="text-lg font-medium">+244 938 435 630</p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex gap-6">
            {/* WhatsApp */}
            <a
              href="https://wa.me/244938435630"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 rounded-full hover:bg-green-500/20 hover:text-green-500 transition-all"
            >
              <FaWhatsapp size={24} />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/djey___py/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 rounded-full hover:bg-pink-500/20 hover:text-pink-500 transition-all"
            >
              <FaInstagram size={24} />
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@_djey_py?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 rounded-full hover:bg-cyan-400/20 hover:text-cyan-400 transition-all"
            >
              <FaTiktok size={24} />
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-morphism p-8 rounded-3xl border border-white/10"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm text-gray-400 uppercase tracking-widest">Nome</label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-blue transition-colors"
                  placeholder="Seu nome"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400 uppercase tracking-widest">Email</label>
                <input
                  type="email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-blue transition-colors"
                  placeholder="Seu email"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-400 uppercase tracking-widest">Assunto</label>
              <input
                type="text"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-blue transition-colors"
                placeholder="Assunto da mensagem"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-400 uppercase tracking-widest">Mensagem</label>
              <textarea
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-blue transition-colors resize-none"
                placeholder="Sua mensagem..."
              />
            </div>
            <button className="w-full py-4 bg-gradient-to-r from-neon-black to-neon-purple rounded-xl font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
              <Send size={20} />
              Enviar Mensagem
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
