import { motion } from 'framer-motion';

const points = [
  'Interviews don’t care about AI shortcuts',
  'AI results is not always correct or robust',
  'Strong basics make you much much much faster with AI',
  'Fundamentals give you the “feel” of data',
];

const Slide32p = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-5xl w-full space-y-10 text-center">
      <motion.h2
        className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        ALWAYS REMEBER
      </motion.h2>
      <motion.div
        className="space-y-4 text-left text-2xl md:text-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {points.map((text, idx) => (
          <div
            key={text}
            className="flex gap-4 items-start"
          >
            <span className="text-premium-gold font-display">{idx + 1})</span>
            <p className="text-white leading-tight">{text}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Slide32p;
