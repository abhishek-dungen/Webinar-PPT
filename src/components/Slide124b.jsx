import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Technical / Skill Round',
    subtitle: 'Thinking check',
    description: 'Problem samajhna, approach explain karna, data logic dikhana.',
  },
  {
    title: 'HR / Behavioral Round',
    subtitle: 'Risk & maturity check',
    description: 'Ownership, communication clarity, stability aur intent.',
  },
];

const Slide124b = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-bl from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-5xl w-full space-y-8 text-center"><motion.h2
        className="font-display text-4xl md:text-5xl leading-tight"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        Interview ke 2 Rounds hote hain
      </motion.h2>
      <motion.p
        className="text-xl text-text-muted"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        Technical / Skill Round → Thinking check | HR / Behavioral Round → Risk & maturity check
      </motion.p>
      <motion.div
        className="grid gap-6 md:grid-cols-2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        {steps.map((step) => (
          <div key={step.title} className="rounded-3xl border border-white/10 bg-white/5 px-6 py-8 text-left space-y-3">
            <p className="text-premium-gold font-semibold text-sm tracking-[0.3em] uppercase">{step.subtitle}</p>
            <h3 className="text-2xl text-white font-display">{step.title}</h3>
            <p className="text-text-muted text-lg leading-relaxed">{step.description}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Slide124b;
