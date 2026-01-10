import { motion } from 'framer-motion';

const Slide148 = () => (
  <section className="slide-section min-h-screen w/full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-5xl w/full space-y-8 text-center"><motion.p className="text-2xl text-text-muted" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
        Bina guidance ke log fail isliye nahi hote kyunki log mehnat nahi karte.
      </motion.p>
      <motion.p className="text-2xl text-text-muted" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}>
        Bina guidance ke log fail isliye hain kyunki feedback bahut late milta hai.”
      </motion.p>
    </div>
  </section>
);

export default Slide148;
