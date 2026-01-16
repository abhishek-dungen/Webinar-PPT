import { motion } from 'framer-motion';

const SlideFreelanceProjectsProcess = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <motion.div
      className="relative z-10 max-w-5xl w-full space-y-12 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl">How to get Projects?</h2>
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
        <div className="rounded-3xl border border-white/10 bg-white/5 px-8 py-10 shadow-[0_25px_60px_rgba(0,0,0,0.35)] backdrop-blur min-w-[240px]">
          <p className="text-2xl md:text-3xl font-semibold text-white">Inbound Process</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 px-8 py-10 shadow-[0_25px_60px_rgba(0,0,0,0.35)] backdrop-blur min-w-[240px]">
          <p className="text-2xl md:text-3xl font-semibold text-white">Outbound Process</p>
        </div>
      </div>
    </motion.div>
  </section>
);

export default SlideFreelanceProjectsProcess;
