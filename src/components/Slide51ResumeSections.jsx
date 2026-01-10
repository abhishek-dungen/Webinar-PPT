import { motion } from 'framer-motion';

const sections = [
  {
    title: '1. Experience Section',
    desc: '',
  },
  {
    title: '2. Projects/Portfolio Section',
    desc: '',
  },
];

const Slide51ResumeSections = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-6 md:px-12 lg:px-20 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 w-full max-w-5xl space-y-10">
      <motion.h2
        className="font-display text-4xl md:text-5xl lg:text-6xl text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        Most Important Sections of Resume
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {sections.map(({ title, desc }) => (
          <div
            key={title}
            className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 via-transparent to-transparent px-6 py-8 shadow-[0_25px_60px_rgba(0,0,0,0.4)] backdrop-blur"
          >
            <h3 className="text-2xl font-semibold text-white">{title}</h3>
            {desc && <p className="text-base text-text-muted mt-3">{desc}</p>}
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Slide51ResumeSections;
