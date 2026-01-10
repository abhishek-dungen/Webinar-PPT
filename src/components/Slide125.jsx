import { motion } from 'framer-motion';

const checks = ['Problem understanding', 'Approach (logic > formula)', 'Data thinking', 'Depth honesty', 'How you react when stuck'];

const Slide125 = () => (
  <section className="slide-section min-h-screen w/full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-bl from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-5xl w/full space-y-8"><motion.h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
        PART 1: TECHNICAL ROUND
      </motion.h2>
      <motion.p className="text-xl text-text-muted" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
        ✅ What companies are ACTUALLY checking
      </motion.p>
      <motion.p className="text-xl text-text-muted" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}>
        “Technical round ka sawal: ‘Is person ko kaam diya jaa sakta hai ya nahi?’”
      </motion.p>
      <motion.ul className="space-y-3 text-xl text-text-muted" initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}>
        {checks.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </motion.ul>
    </div>
  </section>
);

export default Slide125;
