import { motion } from 'framer-motion';

const cards = [
  {
    title: 'What client asks',
    items: ['“Main weekly / monthly report chahta hoon.”'],
  },
  {
    title: 'Skills required',
    items: ['Pivot Tables', 'Basic formulas', 'Formatting + charts'],
  },
  {
    title: 'Pricing (realistic)',
    items: ['India: ₹1,500 – ₹5,000 per report', 'Foreign: $25 – $80'],
  },
  {
    title: 'Frequency',
    items: ['One-time clean-up', 'Recurring monthly retainers (best)'],
  },
];

const Slide136 = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-bl from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-6xl w-full space-y-8"><motion.h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
        2️⃣ Reports & MIS Creation
      </motion.h2>
      <motion.div className="grid gap-5 md:grid-cols-2 text-text-muted" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
        {cards.map((card) => (
          <div key={card.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left space-y-2">
            <h3 className="text-white text-xl font-display">{card.title}</h3>
            <ul className="space-y-1.5 text-base">
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

export default Slide136;
