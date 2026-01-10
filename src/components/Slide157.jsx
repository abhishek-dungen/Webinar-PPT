import { motion } from 'framer-motion';

const Slide157 = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-bl from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-4xl w/full space-y-10 text-center"><motion.h2
        className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        90-Day Career Transformation Plan Price
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center justify-center"
      >
        <span className="text-7xl md:text-8xl font-extrabold text-premium-gold tracking-widest px-12 py-4 rounded-[2.5rem] border border-premium-gold/50 bg-premium-gold/10 shadow-[0_25px_70px_rgba(0,0,0,0.5)]">
          ₹15,000
        </span>
      </motion.div>
    </div>
  </section>
);

export default Slide157;
