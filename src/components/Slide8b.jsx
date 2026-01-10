import { motion } from 'framer-motion';

const Slide8b = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-5xl w/full text-center space-y-8"><motion.h2
        className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        “Is masterclass ke end tak aapko 4 cheezein crystal clear hongi.”
      </motion.h2>
    </div>
  </section>
);

export default Slide8b;
