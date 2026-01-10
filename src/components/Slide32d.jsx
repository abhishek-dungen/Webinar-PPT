import { motion } from 'framer-motion';

const bullets = [
  'Since 1985 — 40+ Years',
  'Most widely used tool, evryone understands it. Fully Mature',
  'Learn Excel → Open Multiple Career Options (Finance, Ops, Analytics, Consulting, Marketing, Supply Chain)',
  'New Tool ~15 Years',
  'Excel Is NOT Just About Formulas — Excel allows you to play with Data',
  'Foundation of Advanced Tools: Power BI • Tableau • SQL • Python • AI Tools',
];

const Slide32d = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-6xl w-full space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-3 text-center md:text-left"
      >
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight">Why Excel?</h2>
        <div className="h-1 w-24 bg-premium-gold/50 rounded-full mx-auto md:mx-0" />
      </motion.div>

      <motion.div
        className="space-y-4 text-xl md:text-2xl leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-premium-gold/80 uppercase tracking-[0.4em] text-sm">Key Reasons</p>
        <ul className="space-y-3">
          {bullets.map((text) => (
            <li
              key={text}
              className="flex items-start gap-3 text-white/90"
            >
              <span className="mt-1 h-3 w-3 rounded-full bg-premium-gold" />
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

export default Slide32d;
