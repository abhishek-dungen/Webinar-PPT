import { motion } from 'framer-motion';

const wrongTitles = ['Excel Expert', 'Data Analyst', 'Freelancer'];
const examples = [
  'Advanced Excel Expert | Dashboards, Automation & Reporting',
  'Excel Automation Specialist | Reports, Dashboards, Power Query',
  'Business Excel Analyst | Sales, Finance & Operations Reporting',
];

const SlideFreelanceProfileTitle = () => (
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
        Profile Title
      </h2>
      <div className="space-y-6 text-xl md:text-2xl text-white/85">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 px-6 py-6 space-y-4">
            <p className="text-white font-semibold flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-500/15 text-red-400 text-lg">
                ✗
              </span>
              Wrong Titles
            </p>
            <ul className="space-y-2 text-white/70">
              {wrongTitles.map(title => (
                <li key={title}>“{title}”</li>
              ))}
            </ul>
            <p className="text-white/70">Too generic. Nobody cares.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 px-6 py-6 space-y-4">
            <p className="text-white font-semibold flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/15 text-emerald-400 text-lg">
                ✓
              </span>
              Correct Title Formula
            </p>
            <p className="text-premium-gold font-semibold">Role + Outcome + Tool</p>
            <div className="space-y-2 text-white/80">
              {examples.map(example => (
                <p key={example}>• {example}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

export default SlideFreelanceProfileTitle;
