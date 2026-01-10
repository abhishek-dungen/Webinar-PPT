import { motion } from 'framer-motion';

const Slide50ATS = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <motion.div
      className="relative z-10 text-center space-y-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 className="font-display text-8xl md:text-9xl tracking-[0.2em]">ATS</h2>
      <p className="text-2xl md:text-3xl text-text-muted">Application Tracking System</p>
    </motion.div>
  </section>
);

export default Slide50ATS;
