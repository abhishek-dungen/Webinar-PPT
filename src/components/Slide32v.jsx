import { motion } from 'framer-motion';

const Slide32v = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-4xl text-center space-y-8">
      <motion.h2
        className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        LEARN EXCEL THE CORRECT WAY
      </motion.h2>
      <motion.p
        className="text-premium-gold uppercase tracking-[0.4em] text-xs md:text-sm"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        Follow This 3-Step Formula
      </motion.p>
      <motion.div
        className="space-y-4 text-2xl md:text-3xl text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        <a
          href="https://www.excelbhaiyaabhishek.com/school/course/basic-to-advance-excel-course/lecture/8002216"
          target="_blank"
          rel="noreferrer"
          className="inline-block text-premium-gold hover:text-premium-gold/80 transition underline decoration-dotted"
        >
          Excel Basics → Advanced Excel → Advanced Excel + AI
        </a>
      </motion.div>
    </div>
  </section>
);

export default Slide32v;
