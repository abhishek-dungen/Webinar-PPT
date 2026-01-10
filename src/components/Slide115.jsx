import { motion } from 'framer-motion';

const bullets = [
  '✅ Company kya chaah rahi hai',
  '✅ Role ka actual kaam kya hai',
  '✅ Aapke skills + projects kya prove karte hain',
];

const Slide115 = () => (
  <section className="slide-section min-h-screen w/full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-5xl w/full space-y-8"><motion.h2
        className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        “Resume = Match, Not Biography”
      </motion.h2>
      <motion.p
        className="text-xl text-text-muted"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        “Resume tab kaam karta hai jab 3 cheezein perfectly align hoti hain:”
      </motion.p>
      <motion.ul
        className="space-y-3 text-xl text-text-muted"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        {bullets.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </motion.ul>
      <motion.p
        className="text-xl text-text-muted"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        “Agar yeh 3 match nahi hue — rejection skill se pehle ho jaata hai.”
      </motion.p>
    </div>
  </section>
);

export default Slide115;
