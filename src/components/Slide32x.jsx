import { motion } from 'framer-motion';

const analysisPoints = [
  'Starts with specific business questions',
  'CEO / Manager / Client already knows what to ask',
  'Answers questions like the ones below',
];

const analysisQuestions = [
  'Which product is the highest selling?',
  'Which city is the worst performing?',
  'Where is the peak and where is the drop?',
  'Which quarter performed the best?',
];

const insightPoints = [
  'Starts with raw data and ambiguity',
  'Client says: "Here is the data. I do not know what to do."',
  'You study it and tell them what is best for the business',
];

const Slide32x = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-bl from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 w-full max-w-6xl space-y-10">
      <motion.h2
        className="font-display text-4xl md:text-5xl lg:text-6xl text-center leading-tight"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        Data Analysis vs Data Insights
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-sky-900/40 via-premium-black to-premium-black/60 p-8 space-y-6">
          <div className="flex items-center justify-between">
            <p className="text-sm uppercase tracking-[0.4em] text-white/60">Mode</p>
            <span className="text-xs text-white/50">Problem solving</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-display text-premium-gold">Data Analysis</h3>
          <ul className="space-y-4 text-lg md:text-xl text-white/80">
            {analysisPoints.map((point) => (
              <li
                key={point}
                className="flex gap-3"
              >
                <span className="text-premium-gold mt-1">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="rounded-2xl border border-white/10 bg-black/40 p-5 space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">Answers questions like</p>
            <ul className="space-y-2 text-base md:text-lg text-white">
              {analysisQuestions.map((question) => (
                <li
                  key={question}
                  className="flex gap-3"
                >
                  <span className="text-premium-gold">→</span>
                  <span>{question}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-amber-900/40 via-premium-black to-premium-black/60 p-8 space-y-6">
          <div className="flex items-center justify-between">
            <p className="text-sm uppercase tracking-[0.4em] text-white/60">Mode</p>
            <span className="text-xs text-white/50">Problem finding</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-display text-premium-gold">Data Insights</h3>
          <ul className="space-y-4 text-lg md:text-xl text-white/80">
            {insightPoints.map((point) => (
              <li
                key={point}
                className="flex gap-3"
              >
                <span className="text-premium-gold mt-1">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="rounded-2xl border border-white/10 bg-black/30 p-5 text-white/80 text-lg leading-relaxed">
            Client trusts you to explore the raw data, spot the unknowns, and convert ambiguity into
            clear business recommendations.
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Slide32x;
