import { motion } from 'framer-motion';

const tips = [
  'Handle Lowball Offers Tactfully: Accept them initially to gain experience, but not in the long run.',
  'Use Price Anchoring: Quote above the expected price, then negotiate downward if needed.',
  'There Is No Shortcut — Learn on the Job: Get your hands dirty and learn through real projects.',
  'Phase the Project',
  'Negotiate Timelines or Payment Terms',
  'Document the Agreed Timeline',
];

const SlideNegotiationTips = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-[#0c0c10] to-subtle-gray" />
    <motion.div
      className="relative z-10 w-full max-w-5xl space-y-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-center text-premium-gold">
        Negotiation Tips
      </h2>
      <div className="space-y-4 text-lg md:text-xl text-white/90">
        {tips.map(item => (
          <div key={item} className="flex items-start gap-4">
            <span className="mt-1 text-premium-gold text-2xl">•</span>
            <p className="font-semibold text-white">{item}</p>
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default SlideNegotiationTips;
