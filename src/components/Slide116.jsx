import { motion } from 'framer-motion';

const lines = [
  'Har company ka business alag',
  'Har role ka daily kaam alag',
  'Har team ko different problems solve karne hain',
  '“Toh resume bhi alag hoga.”',
];

const Slide116 = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-5xl w/full space-y-8"><motion.h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
        “Same resume ko 50 companies bhejne ka matlab hai — 49 jagah galat apply karna.”
      </motion.h2>
      <motion.ul className="space-y-3 text-xl text-text-muted" initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}>
        {lines.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </motion.ul>
    </div>
  </section>
);

export default Slide116;
