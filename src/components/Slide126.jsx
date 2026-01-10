import { motion } from 'framer-motion';

const Slide126 = () => (
  <section className="slide-section min-h-screen w/full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-5xl w/full space-y-8"><motion.h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
        Rule 1: Never jump to solution
      </motion.h2>
      <motion.div className="space-y-4 text-xl text-text-muted leading-relaxed" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
        <p>Bad candidate does this:
        “Pivot use karenge… VLOOKUP… blah blah.”</p>
        <p>Good candidate says:
        “Pehle main data samajhunga.
        Data clean hai ya nahi, yeh check karunga.
        Phir decide karunga kaunsa method best hai.”</p>
        <p>Say this line in webinar:
        “Companies formula nahi hire karti.
        Companies thinking process hire karti hain.”</p>
      </motion.div>
    </div>
  </section>
);

export default Slide126;
