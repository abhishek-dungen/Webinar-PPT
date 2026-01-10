import { motion } from 'framer-motion';

const rcaSegments = [
  {
    key: 'result',
    label: 'R – Result (Outcome / Impact)',
    color: 'text-emerald-400',
    border: 'border-emerald-400/40',
    text: 'Reduced reporting effort 40% and turnaround',
  },
  {
    key: 'action',
    label: 'A – Action (What YOU did)',
    color: 'text-amber-300',
    border: 'border-amber-300/40',
    text:
      'by automating Excel dashboards with PivotTables, dynamic formulas, standardized templates',
  },
  {
    key: 'context',
    label: 'C – Context (Situation / Problem)',
    color: 'text-sky-300',
    border: 'border-sky-300/40',
    text: 'replacing manual multi-file reporting.',
  },
];

const Slide51Step5Example = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <motion.div
      className="relative z-10 max-w-6xl w-full rounded-[2.5rem] border border-white/10 bg-white/5 px-10 py-12 shadow-[0_30px_70px_rgba(0,0,0,0.45)] backdrop-blur space-y-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="text-premium-gold uppercase tracking-[0.6em] text-sm">Refined Bullet</p>
      <p className="text-2xl md:text-3xl font-semibold leading-snug text-white">
        {rcaSegments.map((segment, index) => (
          <span key={segment.key} className={segment.color}>
            {segment.text}
            {index < rcaSegments.length - 1 ? ' ' : ''}
          </span>
        ))}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        {rcaSegments.map((segment) => (
          <div
            key={segment.key}
            className={`rounded-2xl border ${segment.border} bg-white/5 p-5`}
          >
            <p className={`text-sm uppercase tracking-[0.2em] ${segment.color}`}>
              {segment.label}
            </p>
            <p className={`mt-3 text-lg ${segment.color}`}>{segment.text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Slide51Step5Example;
