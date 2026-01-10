import { motion } from 'framer-motion';

const phases = [
  {
    title: '🧱 PHASE 1 – Skill Foundation (Excel + AI thinking)',
    points: [
      'Excel from basics → job-level',
      'Data cleaning, analysis, reporting logic',
      'AI as assistant, not replacement',
    ],
  },
  {
    title: '🧪 PHASE 2 – Projects & Portfolio',
    points: [
      'Role-specific projects',
      'Business problem solving',
      'Interview-ready stories',
      'Real datasets, not academic garbage',
    ],
  },
  {
    title: '📄 PHASE 3 – Resume + Applications',
    points: [
      'Resume customised to your background & role',
      'JD decoding',
      'Targeted application strategy',
      'ATS + human both considered',
    ],
  },
  {
    title: '🎤 PHASE 4 – Interviews & Job Conversion',
    points: [
      'Technical rounds: how to think & explain',
      'HR/behavioral: maturity, clarity',
      'Mock interviews + feedback',
      'Salary discussion guidance',
    ],
  },
];

const Slide151 = () => (
  <section className="slide-section min-h-screen w/full flex items-center justify-center px-6 md:px-12 lg:px-20 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-6xl w/full space-y-8"><motion.h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
        “What Happens in These 90 Days”
      </motion.h2>
      <motion.div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
        {phases.map((phase) => (
          <div key={phase.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-3">
            <h3 className="text-white text-xl font-display">{phase.title}</h3>
            <ul className="space-y-2 text-text-muted text-sm md:text-base">
              {phase.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Slide151;
