import { motion } from 'framer-motion';

const features = [
  'Excel: Basic → Advanced (proper structure)',
  'Real business problems (not random formulas)',
  'Excel + AI (practical use, not hype)',
  'Technical interview prep (Excel rounds)',
  'Multiple job-ready projects',
  'Portfolio + resume-ready work',
];

const Slide164b = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-6 md:px-12 lg:px-20 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-5xl w-full space-y-8 text-center">
      <motion.div className="space-y-4 text-xl text-text-muted" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
        <p className="text-4xl font-bold text-white">Pay Today:</p>
        <span className="text-2xl font-semibold text-rose-400 line-through decoration-4 decoration-rose-500 block">
          ₹15,000
        </span>
        <p className="text-6xl md:text-7xl font-extrabold text-premium-gold tracking-wide px-6 py-2 rounded-[2rem] border border-premium-gold/50 bg-premium-gold/10 shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
          ₹3,499
        </p>
        <p>What you get:</p>
      </motion.div>
      <motion.ul className="space-y-2 text-xl text-text-muted text-left max-w-3xl mx-auto" initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}>
        {features.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </motion.ul>
      <motion.p className="text-xl text-text-muted" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}>
        “Pehle skill strong banao.”
      </motion.p>
    </div>
  </section>
);

export default Slide164b;
