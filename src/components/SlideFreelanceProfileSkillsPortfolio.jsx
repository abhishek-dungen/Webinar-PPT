import { motion } from 'framer-motion';

const skills = [
  'Microsoft Excel',
  'Advanced Excel',
  'Excel Dashboards',
  'Excel Automation',
  'Power Query',
  'Pivot Tables',
  'Data Cleaning',
  'Reporting & Analysis',
];

const SlideFreelanceProfileSkillsPortfolio = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <motion.div
      className="relative z-10 max-w-6xl w-full space-y-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-center">
        Skills Section
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-lg md:text-xl text-white/85">
        <div className="rounded-3xl border border-white/10 bg-white/5 px-6 py-6 space-y-4 lg:col-span-2">
          <p className="text-white font-semibold">Skills Section (Do NOT overload)</p>
          <p className="text-white font-semibold">Correct (Excel-specific, 10-15 max)</p>
          <ul className="space-y-1 text-white/70">
            {skills.map(skill => (
              <li key={skill}>• {skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  </section>
);

export default SlideFreelanceProfileSkillsPortfolio;
