import { motion } from 'framer-motion';

const claudeImage = new URL('../../AI Tools/Claude (Anthropic).png', import.meta.url).href;

const SlideClaudeInsights = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-5xl w-full text-center space-y-10">
      <motion.h2
        className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-white drop-shadow-[0_12px_30px_rgba(0,0,0,0.6)]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        For Data Insights Use Claude
      </motion.h2>
      <motion.img
        src={claudeImage}
        alt="Claude (Anthropic)"
        className="mx-auto w-full max-w-xl md:max-w-2xl lg:max-w-3xl max-h-[55vh] object-contain rounded-[2rem] border border-white/10 shadow-2xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  </section>
);

export default SlideClaudeInsights;
