import { motion } from 'framer-motion';

const steps = ['Skill', 'Resume', 'Projects/Portfolio', 'Job Application', 'Interviews'];

const baseCard =
  'relative flex flex-col items-center gap-3 text-center rounded-[2rem] border border-white/5 bg-transparent px-4 md:px-5 py-7 shadow-[0_18px_50px_rgba(0,0,0,0.15)] backdrop-blur transition-all duration-500 text-white/30';

const Slide32bFlowProjectsOne = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-6 md:px-12 lg:px-20 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 w-full max-w-6xl space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="text-center space-y-4"
      >
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
          How to get Job?
        </h2>
        <p className="text-lg text-text-muted">
          Spotlight on Projects/Portfolio—your best substitute for experience.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full"
      >
        <div className="absolute left-[5%] right-[5%] top-0 h-0.5 bg-white/15" />
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {steps.map((title, index) => {
            const isProjects = index === 2;
            return (
              <div key={title} className="relative flex flex-col items-center text-center flex-1">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 w-0.5 h-8 bg-white/20" />
                <div
                  className={`${baseCard} ${
                    isProjects
                      ? 'text-white border-premium-gold/80 shadow-[0_30px_90px_rgba(255,215,0,0.35)] bg-gradient-to-br from-premium-gold/25 via-premium-gold/10 to-transparent'
                      : 'opacity-60'
                  }`}
                >
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-full font-semibold ${
                      isProjects
                        ? 'bg-white/20 text-premium-gold border border-premium-gold/60 shadow-[0_0_25px_rgba(255,215,0,0.5)]'
                        : 'bg-transparent border border-white/10 text-white/40'
                    }`}
                  >
                    {index + 1}
                  </div>
                  <h4 className="text-xl font-semibold text-white">{title}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Slide32bFlowProjectsOne;
