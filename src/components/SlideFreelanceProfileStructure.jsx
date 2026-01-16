import { motion } from 'framer-motion';

const sections = ['Title / Headline', 'Summary / About section', 'Skills', 'Portfolio', 'Profile photo'];

const SlideFreelanceProfileStructure = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <motion.div
      className="relative z-10 max-w-5xl w-full space-y-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-center">
        Profile Sections
      </h2>
      <div className="space-y-6 text-xl md:text-2xl text-white/85">
        <div className="flex flex-col gap-5 max-w-3xl mx-auto">
          {sections.map((item, index) => (
            <div
              key={item}
              className="rounded-3xl border border-white/10 bg-white/5 px-6 py-6 flex items-center gap-4"
            >
              <div className="text-premium-gold text-lg tracking-[0.3em]">{index + 1}</div>
              <p className="font-semibold text-white">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  </section>
);

export default SlideFreelanceProfileStructure;
