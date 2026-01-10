import { motion } from 'framer-motion';

const Slide52InterviewTypes = () => (
  <section className="slide-section min-h-screen w/full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <motion.div
      className="relative z-10 max-w-4xl w/full text-center space-y-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 className="font-display text-5xl md:text-6xl">Interview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {['Technical Round', 'HR Round'].map(label => (
          <div
            key={label}
            className="rounded-[2rem] border border-white/10 bg-white/5 px-6 py-8 text-2xl font-semibold shadow-[0_25px_60px_rgba(0,0,0,0.4)] backdrop-blur"
          >
            {label}
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Slide52InterviewTypes;
