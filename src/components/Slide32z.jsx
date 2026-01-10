import { motion } from 'framer-motion';

const Slide32z = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-5xl w-full text-center space-y-8">
      <motion.h2
        className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        Two Documents for Data Insights
      </motion.h2>
      <motion.ol
        className="space-y-4 text-xl md:text-2xl text-white/85"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <li className="flex items-center justify-center gap-3">
          <span className="text-premium-gold font-display">1.</span>
          <span>Detailed Data Insights Report</span>
        </li>
        <li className="flex items-center justify-center gap-3">
          <span className="text-premium-gold font-display">2.</span>
          <span>Actionable Recommendations Report</span>
        </li>
      </motion.ol>
    </div>
  </section>
);

export default Slide32z;
