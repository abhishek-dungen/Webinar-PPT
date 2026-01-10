import { motion } from 'framer-motion';

const steps = [
  { step: 'Step 1', title: 'Get JD and Work Exp Doc' },
  { step: 'Step 2', title: 'Make Major Sections of Your Resume' },
  { step: 'Step 3', title: 'Write Bullet Pointers for Each Header' },
  { step: 'Step 4', title: 'Convert All Bullet Pointers into RCA Format' },
  { step: 'Step 5', title: 'Refine Each Bullet Pointer' },
  { step: 'Step 6', title: 'Beautify your Resume: Use Templates' },
];

const Slide51StepsSummary = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <motion.div
      className="relative z-10 max-w-6xl w-full rounded-[2.5rem] border border-white/10 bg-white/5 px-10 py-12 shadow-[0_30px_70px_rgba(0,0,0,0.45)] backdrop-blur space-y-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="text-premium-gold uppercase tracking-[0.6em] text-sm">Summary</p>
      <h2 className="font-display text-4xl md:text-5xl leading-tight">
        6-Step Resume Workflow
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {steps.map((item, index) => (
          <div
            key={item.step}
            className="rounded-[1.75rem] border border-white/10 bg-white/5 px-6 py-6 shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
          >
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-2xl border border-premium-gold/40 bg-premium-gold/10 text-premium-gold font-semibold text-lg flex items-center justify-center">
                {index + 1}
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-text-muted">{item.step}</p>
                <p className="text-xl md:text-2xl text-white font-semibold">{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Slide51StepsSummary;
