import { motion } from 'framer-motion';

const questions = [
  {
    title: '1️⃣ “Tell me about yourself”',
    summary: 'Structure, not script.',
    bullets: [
      'Flow: Background → Shift → Direction → Role',
      'Example lines ready (career story only)',
    ],
  },
  {
    title: '2️⃣ “Why should we hire you?”',
    summary: 'Answer = problem you solve.',
    bullets: [
      'Strength + proof + benefit',
      'Impact line: “Messy data → weekly report = my superpower”',
    ],
  },
  {
    title: '3️⃣ “Why this role / company?”',
    summary: 'Specific > clichés.',
    bullets: [
      'Role ke kaam ka reference',
      'Team problem hint + skill-fit',
    ],
  },
  {
    title: '4️⃣ “Weakness / past failure?”',
    summary: 'Process pe focus.',
    bullets: [
      'Weakness = habit, not character',
      'Bad: “I’m lazy” | Good: “Earlier no structure; now checklist”',
    ],
  },
  {
    title: '5️⃣ Salary / growth sawal',
    summary: 'Clarity = leverage.',
    bullets: [
      'Range ready, role-first mindset',
      'Calm tone: “Pehle kaam, phir number”',
    ],
  },
];

const Slide131 = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-6 md:px-12 lg:px-20 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-6xl w-full space-y-10"><motion.h2
        className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        Ye Sawal HR Round ke liye master kar lo
      </motion.h2>
      <motion.p
        className="text-xl text-text-muted"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        5 categories ko master karo — har interview inhi par test karta hai.
      </motion.p>
      <motion.div
        className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        {questions.map((item) => (
          <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-5 flex flex-col gap-2 text-left">
            <h3 className="text-white text-xl font-display">{item.title}</h3>
            <p className="text-premium-gold font-semibold text-xs uppercase tracking-[0.3em]">
              {item.summary}
            </p>
            <ul className="space-y-1.5 text-text-muted text-sm">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="leading-normal">
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Slide131;
