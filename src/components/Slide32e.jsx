import { motion } from 'framer-motion';

const Slide32e = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-4xl text-center space-y-8">
      <motion.h2
        className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        Excel Reality
      </motion.h2>
      <motion.div
        className="space-y-4 text-2xl md:text-3xl leading-relaxed text-premium-gold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <p>Excel Renhne wala hai</p>
        <p>Excel ki Jobs Bhi rehne wali hain</p>
        <p>Easy to Learn</p>
        <p>Most useful</p>
      </motion.div>
    </div>
  </section>
);

export default Slide32e;
