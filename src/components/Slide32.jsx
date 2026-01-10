import { motion } from 'framer-motion';

const headings = [
  '“INSIDE vs OUTSIDE”',
  '“I DON’T JUST DO WORK, I DECIDE WORK”',
  'THIS IS WHY I KNOW WHAT WORKS',
];

const Slide32 = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-6xl w-full">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        {headings.map((heading, idx) => (
          <motion.div
            key={heading}
            className="bg-gradient-to-br from-[#1B1B1F] via-premium-black to-[#2B2B30] border border-[#2F2F35] rounded-3xl p-8 shadow-2xl"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.9, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <p className="text-premium-gold/70 text-sm uppercase tracking-[0.4em] mb-4">Perspective</p>
            <h2 className="font-display text-3xl md:text-4xl leading-tight text-white">
              {heading}
            </h2>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Slide32;
