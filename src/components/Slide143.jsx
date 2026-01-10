import { motion } from 'framer-motion';

const Slide143 = () => (
  <section className="slide-section min-h-screen w/full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-5xl w/full space-y-8"><motion.h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
        “PATH A — Do It On Your Own”
      </motion.h2>
      <motion.div className="space-y-3 text-xl text-text-muted" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
        <p>“Main YouTube dekhunga”</p>
        <p>“Excel practice karunga”</p>
        <p>“Resume banaunga”</p>
        <p>“Jobs apply karunga”</p>
      </motion.div>
      <motion.p className="text-xl text-text-muted" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}>
        “Yeh sab logical lagta hai”
      </motion.p>
      <motion.p className="text-xl text-text-muted" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}>
        “Aur honest baat karun — 95% log yahi karte hain.”
      </motion.p>
    </div>
  </section>
);

export default Slide143;
