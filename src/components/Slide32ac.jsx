import { motion } from 'framer-motion';

const Slide32ac = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-4xl w-full text-center space-y-6">
      <motion.p
        className="text-sm uppercase tracking-[0.3em] text-white/60"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        Next up
      </motion.p>
      <motion.h2
        className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        How to make a dashboard?
      </motion.h2>
    </div>
  </section>
);

export default Slide32ac;
