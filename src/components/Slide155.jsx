import { motion } from 'framer-motion';

const points = [
  '“Main full-time corporate role mein hoon.”',
  '“Main personal resume & interview calls leta hoon.”',
  'special',
];

const Slide155 = () => (
  <section className="slide-section min-h-screen w/full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-bl from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-5xl w/full space-y-8 text-center"><motion.h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
        “My Constraints
      </motion.h2>
      <motion.div className="space-y-4 text-2xl text-text-muted" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
        {points.map((item) =>
          item === 'special' ? (
            <p key="special" className="flex flex-wrap items-center justify-center gap-3 text-2xl">
              “Isliye main har batch mein max
              <span className="text-5xl font-bold text-premium-gold tracking-wide px-4 py-1 rounded-2xl border border-premium-gold/50 bg-premium-gold/10">
                30
              </span>
              logon ke saath kaam karta hoon.”
            </p>
          ) : (
            <p key={item}>{item}</p>
          ),
        )}
        <p>“Mujhe followers nahi chahiye. Mujhe outcomes chahiye.”</p>
      </motion.div>
    </div>
  </section>
);

export default Slide155;
