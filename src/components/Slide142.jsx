import { motion } from 'framer-motion';

const Slide142 = () => (
  <section className="slide-section min-h-screen w/full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-bl from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-5xl w/full space-y-8 text-center"><motion.p className="text-2xl text-text-muted" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
        “Can I do this alone?” ✅ YES
      </motion.p>
      <motion.p className="text-2xl text-text-muted" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}>
        “Can I afford 2–3 saal of trial & error?” ❓
      </motion.p>
      <motion.p className="text-2xl text-text-muted" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
        “Career mein sabse mehenga cheez paisa nahi hota. Sabse mehenga cheez hota hai — time without direction.”
      </motion.p>
    </div>
  </section>
);

export default Slide142;
