import { motion } from 'framer-motion';

const steps = [
  {
    title: '1️⃣ Problem Statement',
    lines: ['One clear business question', '“Why are lunch-order locations performing better?”', 'No jargon.'],
  },
  {
    title: '2️⃣ Cleaning of Raw Data',
    lines: ['Realistic columns', 'Missing values', 'Dirty city names', 'Duplicates', 'Recruiters LOVE seeing messy data handled properly.'],
  },
  {
    title: '3️⃣ Analysis & Modeling',
    lines: ['Cleaning logic', 'Summaries', 'Comparisons', 'Pivots / logic flow'],
  },
  {
    title: '4️⃣ Insights',
    lines: ['You must teach this sentence structure:', '“I noticed that…”', '“This indicates that…”', '“Which suggests that…”', 'No insights = no project.'],
  },
  {
    title: '5️⃣ Business Action',
    lines: ['Example:', '“Increase cloud kitchen focus in high lunch-order zones.”', 'This makes them look like managers, not Excel operators.'],
  },
];

const Slide111 = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-6xl w-full space-y-8"><motion.h2
        className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        PROJECT STRUCTURE
      </motion.h2>
      <motion.p
        className="text-xl text-text-muted"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        Har Project mein yeh 5 Cheeze honi mandatory hai
      </motion.p>
      <motion.div
        className="grid gap-6 md:grid-cols-2 xl:grid-cols-5"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        {steps.map((step) => (
          <div
            key={step.title}
            className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-6 flex flex-col gap-3 text-sm text-text-muted"
          >
            <h3 className="text-2xl text-white font-display">{step.title}</h3>
            <div className="space-y-2">
              {step.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Slide111;
