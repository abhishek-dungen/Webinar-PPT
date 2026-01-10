import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Local businesses need',
    items: ['Inventory tracking', 'Sales sheet', 'Expense tracking', 'Employee attendance'],
  },
  {
    title: 'Pricing (India)',
    items: ['₹2,000 – ₹8,000 per setup', '₹500 – ₹2,000 monthly support'],
  },
  {
    title: 'Why it matters',
    items: ['UNDERUTILIZED market', 'Every city/town has repeat demand'],
  },
];

const Slide138 = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-bl from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-5xl w-full space-y-8"><motion.h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
        4️⃣ Small Business Excel Help
      </motion.h2>
      <motion.div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 text-text-muted" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
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

export default Slide138;
