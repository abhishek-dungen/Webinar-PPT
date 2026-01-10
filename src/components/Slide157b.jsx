import { motion } from 'framer-motion';

const bullets = [
  '6–12 mahine galat direction ki mehnat se',
  '1–2 saal low-pay, no-growth job mein phasne se',
  '2–3 saal career growth ke delay se',
];

const Slide157b = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-5xl w-full space-y-8 text-center"><motion.h2
        className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        “₹15,000 COURSE KA PRICE NAHI HAI.”
      </motion.h2>
      <motion.p
        className="text-2xl text-text-muted"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        “Yeh ek investment hai — aur woh bhi career ke liye sabse important investment.”
      </motion.p>
      <motion.div
        className="space-y-4 text-xl text-text-muted"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <p>“Yeh aapko bachaata hai:”</p>
        <ul className="space-y-2">
          {bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </motion.div>
      <motion.p
        className="text-2xl md:text-3xl font-bold text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        “Career mein sabse mehengi cheez fees nahi hoti — time hota hai.”
      </motion.p>
    </div>
  </section>
);

export default Slide157b;
