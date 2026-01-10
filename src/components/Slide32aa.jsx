import { motion } from 'framer-motion';
import claudeShowcase from '../assets/claude-insights.png';

const Slide32aa = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 w-full max-w-4xl flex flex-col items-center gap-8 text-center">
      <motion.h2
        className="font-display text-4xl md:text-5xl lg:text-6xl text-white"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        For Data Insights use Claude
      </motion.h2>
      <motion.div
        className="rounded-[2rem] border border-white/10 bg-black/30 p-5 md:p-8 backdrop-blur-sm w-full flex justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src={claudeShowcase}
          alt="Claude for data insights"
          className="w-full max-w-2xl max-h-[60vh] object-contain drop-shadow-[0_25px_80px_rgba(0,0,0,0.5)]"
        />
      </motion.div>
    </div>
  </section>
);

export default Slide32aa;
