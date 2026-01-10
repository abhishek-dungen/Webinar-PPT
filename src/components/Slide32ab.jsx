import { motion } from 'framer-motion';
import gensparkImage from '../assets/genspark-ai.png';
import gammaImage from '../assets/gamma-ai.webp';

const Slide32ab = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-bl from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 w-full max-w-6xl space-y-10">
      <motion.h2
        className="font-display text-4xl md:text-5xl lg:text-6xl text-center text-white"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        Use these 2 tools for making PPTs
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="rounded-[2.5rem] border border-white/10 bg-black/30 p-6 flex flex-col items-center gap-6 text-center">
          <img
            src={gensparkImage}
            alt="Genspark AI"
            className="w-full max-w-xs object-contain drop-shadow-[0_15px_50px_rgba(0,0,0,0.55)]"
          />
          <p className="text-2xl font-display text-white">Genspark AI</p>
        </div>
        <div className="rounded-[2.5rem] border border-white/10 bg-black/30 p-6 flex flex-col items-center gap-6 text-center">
          <img
            src={gammaImage}
            alt="Gamma AI"
            className="w-full max-w-xs object-contain drop-shadow-[0_15px_50px_rgba(0,0,0,0.55)]"
          />
          <p className="text-2xl font-display text-white">Gamma AI</p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Slide32ab;
