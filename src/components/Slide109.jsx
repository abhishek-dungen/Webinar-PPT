import { motion } from 'framer-motion';

const Slide109 = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-5xl w-full space-y-8"><motion.h2
        className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        Porfoilo/Projects
      </motion.h2>
      <motion.div
        className="space-y-4 text-xl text-text-muted leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <p>✅ A project = A real business problem → messy data → analysis → insight → action</p>
        <p>If action/decision missing → ❌ NOT a project.</p>
        <p>2–3 strong projects {'>'} 10 generic projects</p>
        <p>Beginners / Tier-2 profile:</p>
        <p>✅ 2 solid projects enough for entry roles</p>
        <p>Working professionals:</p>
        <p>✅ 3 deep projects showing decision-making</p>
      </motion.div>
    </div>
  </section>
);

export default Slide109;
