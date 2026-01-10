import { motion } from 'framer-motion';

const Slide114 = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-bl from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-5xl w-full space-y-8"><motion.h2
        className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        “Companies har resume ko deeply nahi padhte.
        6–10 seconds mein decide hota hai:
        ‘Shortlist’ ya ‘Delete’.”
      </motion.h2>
      <motion.p
        className="text-2xl text-text-muted leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        “Agar aapka resume role-specific nahi hai, toh aapka rejection skill se pehle hi ho chuka hai.”
      </motion.p>
    </div>
  </section>
);

export default Slide114;
