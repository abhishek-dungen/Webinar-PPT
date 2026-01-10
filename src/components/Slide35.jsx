import { motion } from 'framer-motion';

const bulletPoints = [
  'First job ka darr',
  'Rejection ka silence',
  '‘Kya main galat direction mein hoon?’',
];

const Slide35 = () => (
  <section className="slide-section min-h-screen w/full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-bl from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-5xl w/full space-y-8"><motion.h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
        “Main Yeh Kyun Kar Raha Hoon?”
      </motion.h2>
      <motion.p className="text-xl text-text-muted" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
        “Main aaj apni career stage pe hoon jahan confusion peeche reh jaata hai.”
      </motion.p>
      <motion.p className="text-xl text-text-muted" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}>
        “Par mujhe yaad hai:”
      </motion.p>
      <motion.ul className="space-y-3 text-xl text-text-muted" initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}>
        {bulletPoints.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </motion.ul>
      <motion.p className="text-xl text-text-muted" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}>
        “Agar yeh clarity mujhe early mil jaati, bahut saal bach jaate.”
      </motion.p>
      <motion.p className="text-xl text-text-muted" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}>
        “Isliye aaj main sirf sikha nahi raha — direction save karna chahta hoon.”
      </motion.p>
    </div>
  </section>
);

export default Slide35;
