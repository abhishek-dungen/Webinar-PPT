import { motion } from 'framer-motion';

const bulletPoints = [
  'Galat habits ban jaati hain',
  'Shallow understanding → false confidence',
  'Interview mein expose ho jaate ho',
];

const Slide154 = () => (
  <section className="slide-section min-h-screen w/full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-5xl w/full space-y-8"><motion.h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
        “Excel Depth is Non-Negotiable”
      </motion.h2>
      <motion.p className="text-xl text-text-muted" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
        “Excel aadha–adha seekhna Excel na seekhne se zyada dangerous hai.”
      </motion.p>
      <motion.p className="text-xl text-text-muted" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}>
        Explain briefly:
      </motion.p>
      <motion.ul className="space-y-2 text-xl text-text-muted" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}>
        {bulletPoints.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </motion.ul>
      <motion.p className="text-xl text-text-muted" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}>
        “Isliye main 10 jagah se Excel seekhne recommend nahi karta. Fragmentation careers tod deti hai.”
      </motion.p>
    </div>
  </section>
);

export default Slide154;
