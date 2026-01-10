import { motion } from 'framer-motion';

const Slide32o = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden bg-gradient-to-b from-[#2b0000] via-premium-black to-premium-black">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent" />
    </div>
    <div className="relative z-10 max-w-5xl text-center space-y-10">
      <motion.h2
        className="font-display text-5xl md:text-6xl lg:text-7xl text-red-500 leading-tight"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        You will destroy your career if you don’t build your basics and think AI can do everything.
      </motion.h2>
    </div>
  </section>
);

export default Slide32o;
