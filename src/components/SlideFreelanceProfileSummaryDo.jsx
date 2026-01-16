import { motion } from 'framer-motion';

const excelWork = [
  'Advanced formulas',
  'Dashboards',
  'Automation',
  'Data cleaning',
  'Reporting',
];

const SlideFreelanceProfileSummaryDo = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-6 md:px-10 lg:px-16 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <motion.div
      className="relative z-10 max-w-6xl w-full space-y-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-center">
        Profile Summary / About Section
      </h2>
      <div className="flex flex-col gap-3 max-w-4xl mx-auto text-sm md:text-base text-white/85">
        <div className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 space-y-2">
          <p className="text-premium-gold font-semibold text-sm md:text-base">
            Paragraph 1: Who you help + problem
          </p>
          <p>I help businesses and professionals save time and make better decisions using Excel.</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 space-y-2">
          <p className="text-premium-gold font-semibold text-sm md:text-base">
            Paragraph 2: What exactly you do
          </p>
          <p>Mention specific Excel work:</p>
          <ul className="space-y-0.5 text-white/70">
            {excelWork.map(item => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 space-y-2">
          <p className="text-premium-gold font-semibold text-sm md:text-base">Paragraph 3: Proof</p>
          <p>Years of experience, types of projects, tools used.</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 space-y-2">
          <p className="text-premium-gold font-semibold text-sm md:text-base">
            Paragraph 4: How client benefits
          </p>
          <p>Faster reports, fewer errors, clear insights.</p>
        </div>
      </div>
    </motion.div>
  </section>
);

export default SlideFreelanceProfileSummaryDo;
