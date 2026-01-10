import { motion } from 'framer-motion';

const Slide108 = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-bl from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-5xl w-full space-y-8"><motion.h2
        className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        👉 “Yeh Sab Kyun Zaroori Hai?”
      </motion.h2>
      <motion.div
        className="space-y-4 text-xl text-text-muted leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <p>Slide text:</p>
        <p>“Track kuch bhi ho — market ek cheez hi judge karta hai:”</p>
        <p>‘Is bande pe kaam chhod sakte hain ya nahi?’</p>
        <p>If YES → growth</p>
        <p>If NO → stagnation</p>
      </motion.div>
    </div>
  </section>
);

export default Slide108;
