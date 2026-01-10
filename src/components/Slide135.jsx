import { motion } from 'framer-motion';

const cards = [
  {
    title: 'What it looks like',
    items: ['Messy Excel export', 'Wrong dates, spaces, duplicates, formats', 'Client wants “clean usable sheet”'],
  },
  {
    title: 'Skills required',
    items: ['TRIM, CLEAN, LEFT, RIGHT, MID, FIND UPPER, LOWER, PROPER, TEXTBEFORE, TEXT AFTER, TEXTJOIN', 'Basic formulas, sorting, filtering'],
  },
  {
    title: 'Typical pricing',
    items: ['India: ₹500 – ₹2,000 per file', 'Foreign: $10 – $30 per task'],
  },
  {
    title: 'Reality',
    items: ['Very low barrier', 'Lots of demand', 'Boring but good for beginners'],
  },
];

const Slide135 = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-6xl w-full space-y-8"><motion.h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
        1️⃣ Data Cleaning Work (MOST COMMON)
      </motion.h2>
      <motion.div className="grid gap-5 md:grid-cols-2 text-text-muted" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
        {cards.map((card) => (
          <div key={card.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left space-y-3">
            <h3 className="text-white text-xl font-display">{card.title}</h3>
            <ul className="space-y-1.5">
              {card.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Slide135;
