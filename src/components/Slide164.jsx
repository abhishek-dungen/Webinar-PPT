import { motion } from 'framer-motion';

const points = [
  'Course structure dekh sakte ho',
  'Content ki depth samajh sakte ho',
  'Teaching style evaluate kar sakte ho',
];

const Slide164 = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-bl from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-5xl w/full space-y-10 text-center"><motion.h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
        “<span className="text-premium-gold">10-Day</span> Refund Window”
      </motion.h2>
      <motion.div className="space-y-4 text-xl text-text-muted" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
        <p>“10 din mein aap:</p>
        <ul className="space-y-2 text-left max-w-3xl mx-auto">
          {points.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </motion.div>
      <motion.div className="space-y-4 text-xl text-text-muted" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}>
        <p>“Agar laga:</p>
        <p className="text-2xl font-semibold text-white">‘Yeh mere liye nahi hai’</p>
        <p>→ 10 din ke andar</p>
        <p className="text-5xl font-extrabold text-premium-gold tracking-wide">100% refund</p>
        <p>No questions asked.”</p>
      </motion.div>
    </div>
  </section>
);

export default Slide164;
