import { motion } from 'framer-motion';
import template5 from '../../CV tenmplates/Screenshot 2026-01-02 at 1.54.21\u202fPM.png';

const Slide174 = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-4 md:px-8 lg:px-10 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-6xl w-full">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-xl md:text-2xl text-center mb-3"
      >
        Beautify Your Resume: Use Templates
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-2xl border border-white/10 bg-white/5 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur"
      >
        <img
          src={template5}
          alt="Resume template 5"
          className="w-full h-[78vh] md:h-[85vh] lg:h-[88vh] object-contain"
        />
      </motion.div>
    </div>
  </section>
);

export default Slide174;
