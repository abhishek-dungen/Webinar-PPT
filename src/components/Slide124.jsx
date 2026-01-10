import { motion } from 'framer-motion';

const keyChecks = ['Can you THINK?', 'Can you COMMUNICATE?', 'Can you be TRUSTED with work?'];

const Slide124 = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-6xl w/full space-y-8"><motion.h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
        WHAT AN “INTERVIEW” REALLY IS
      </motion.h2>
      <motion.div className="space-y-4 text-xl text-text-muted leading-relaxed" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
        <p>“Interview ka matlab yeh nahi hota ki company aapka knowledge test kar rahi hai.</p>
        <p>Interview ka matlab hota hai: ‘Kya yeh banda real kaam sambhaal paayega?’”</p>
        <p>Har interview 3 cheezein test karta hai:</p>
        <ul className="space-y-2">
          {keyChecks.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

export default Slide124;
