import { motion } from 'framer-motion';

const questions = [
  'What decision will this spreadsheet enable?',
  'Who uses it (role + skill level)?',
  'Current process: how is it done today?',
  'Inputs: what are the data sources (CSV, ERP export, emails)?',
  'Frequency: daily/weekly/monthly?',
  'Output: what exactly should be produced (dashboard, PDF, file for upload)?',
  'Volume: rows/files per period?',
  'Edge cases: missing values, duplicates, partial matches?',
  'Success metric: “from X hours to Y minutes”, “errors reduced”, etc.',
  'Constraints: Mac vs Windows, Excel version, corporate restrictions',
  'Security: can data be shared? anonymized sample?',
  'Timeline + “must-have vs nice-to-have”',
];

const SlideScreeningCall = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-[#0c0c10] to-subtle-gray" />
    <motion.div
      className="relative z-10 w-full max-w-6xl space-y-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-center text-premium-gold">
        Familiarization/Screening Call
      </h2>
      <div className="space-y-3 text-sm md:text-base text-white/90">
        {questions.map((item, index) => (
          <div key={item} className="flex items-start gap-3">
            <span className="text-premium-gold font-semibold">{index + 1}.</span>
            <p className="font-semibold text-white">{item}</p>
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default SlideScreeningCall;
