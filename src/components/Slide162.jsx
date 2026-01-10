import { motion } from 'framer-motion';

const items = [
  'Custom portfolio finalisation',
  'Resume (role + company specific)',
  'Interview prep (technical + HR)',
  'Clear job-application strategy',
  '1-on-1 guidance till job-ready',
];

const Slide162 = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-6 md:px-12 lg:px-20 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-bl from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-5xl w/full space-y-8 text-center"><motion.h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
        STEP 2: JOB & PLACEMENT SUPPORT
      </motion.h2>
      <motion.div className="space-y-4 text-xl text-text-muted" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
        <p className="text-4xl font-bold text-white">Pay Later:</p>
        <p className="text-6xl md:text-7xl font-extrabold text-premium-gold tracking-wide px-6 py-2 rounded-[2rem] border border-premium-gold/50 bg-premium-gold/10 shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
          ₹3,500
        </p>
        <p>What this includes:</p>
      </motion.div>
      <motion.ul className="space-y-2 text-xl text-text-muted text-left max-w-3xl mx-auto" initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}>
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </motion.ul>
      <motion.p className="text-xl text-text-muted" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}>
        “Stage-2 tab start hota hai jab aap khud ready feel karte ho.”
      </motion.p>
    </div>
  </section>
);

export default Slide162;
