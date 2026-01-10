import { motion } from 'framer-motion';

const Slide52TechnicalRound = () => (
  <section className="slide-section min-h-screen w/full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <motion.div
      className="relative z-10 max-w-5xl w/full rounded-[2.5rem] border border-white/10 bg-white/5 px-10 py-12 shadow-[0_30px_70px_rgba(0,0,0,0.45)] backdrop-blur space-y-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 className="font-display text-4xl md:text-5xl">Technical Round</h2>
      <p className="text-xl text-premium-gold font-semibold">No AI can help you. You MUST know Advance Excel in depth.</p>
      <div>
        <h3 className="text-lg uppercase tracking-[0.4em] text-text-muted">Source of Questions</h3>
        <ul className="mt-4 space-y-3 text-lg text-text-muted">
          <li>1. Your Resume (Experience and Projects)</li>
          <li>2. Live Test: Solve Business Problems on the Spot</li>
        </ul>
      </div>
    </motion.div>
  </section>
);

export default Slide52TechnicalRound;
