import { motion } from 'framer-motion';

const Slide51NoExperience = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <motion.div
      className="relative z-10 max-w-3xl w-full text-center space-y-6 rounded-[2.5rem] border border-white/10 bg-white/5 px-8 py-12 shadow-[0_30px_70px_rgba(0,0,0,0.45)] backdrop-blur"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 className="font-display text-4xl md:text-5xl leading-tight">
        If You Do Not Have Relevant Experience
      </h2>
    </motion.div>
  </section>
);

export default Slide51NoExperience;
