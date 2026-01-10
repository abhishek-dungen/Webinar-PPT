import { motion } from 'framer-motion';

const Slide155b = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-4xl w-full space-y-8 text-center"><motion.h2
        className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        90-Day Career Transformation Plan is only for
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center justify-center"
      >
        <span className="text-7xl md:text-8xl font-extrabold text-premium-gold tracking-widest px-10 py-4 rounded-[2rem] border border-premium-gold/60 bg-premium-gold/10 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
          30
        </span>
      </motion.div>
      <motion.p
        className="text-2xl text-text-muted"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        Serious students only. No crowd batches.
      </motion.p>
    </div>
  </section>
);

export default Slide155b;
