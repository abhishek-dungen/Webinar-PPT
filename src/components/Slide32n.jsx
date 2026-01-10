import { motion } from 'framer-motion';

const Slide32n = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-4xl text-center space-y-8">
      <motion.div
        className="flex justify-center gap-8 text-red-500 text-5xl"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
      >
        <span>⚠️</span>
        <span>🚨</span>
        <span>⚠️</span>
      </motion.div>
      <motion.h2
        className="font-display text-5xl md:text-6xl tracking-tight text-red-500"
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        BEFORE USING AI TOOLS
      </motion.h2>
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-2xl md:text-3xl text-white">
          First, build your fundamentals strongly. Then use AI.
        </p>
        <div className="flex justify-center gap-8 text-red-500 text-5xl">
          <span>🚨</span>
          <span>⚠️</span>
          <span>🚨</span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Slide32n;
