import { motion } from 'framer-motion';

const categories = [
  {
    title: '✅ Category 1 — Performance Drop / Growth Analysis',
    examples: [
      'Why are orders dropping in City X?',
      'Which category is pulling growth down?',
      'Which product is cannibalizing another?',
    ],
    shows: '✅ Shows: analysis + reasoning',
  },
  {
    title: '✅ Category 2 — Efficiency / Speed / Automation',
    examples: [
      'Manual report → automated Excel model',
      'Reduced reporting time from 2 hours → 10 minutes',
      'Cleaned messy raw export → usable table',
    ],
    shows: '✅ Shows: productivity + value creation',
  },
  {
    title: '✅ Category 3 — Decision Support',
    examples: [
      'Should we expand to City B?',
      'Which SKU should be discontinued?',
      'Which team/location performs best?',
    ],
    shows: '✅ Shows: decision impact',
  },
];

const Slide110 = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-bl from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-6xl w-full space-y-8"><motion.h2
        className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        Portfolio mein 3 types ke projects ho sakte hain
      </motion.h2>
      <motion.div
        className="grid gap-6 md:grid-cols-3"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        {categories.map((category) => (
          <div
            key={category.title}
            className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/0 px-6 py-7 flex flex-col gap-4"
          >
            <h3 className="text-2xl text-white font-display">{category.title}</h3>
            <div className="space-y-3 text-base text-text-muted flex-1">
              <p className="uppercase text-xs tracking-[0.4em] text-text-muted/60">Examples</p>
              <ul className="space-y-2">
                {category.examples.map((example) => (
                  <li key={example} className="leading-snug">{example}</li>
                ))}
              </ul>
            </div>
            <div className="text-sm font-semibold text-premium-gold/90 bg-premium-gold/10 border border-premium-gold/20 rounded-full px-4 py-2">
              {category.shows}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Slide110;
