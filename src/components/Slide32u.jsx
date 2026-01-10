import { motion } from 'framer-motion';

const examples = [
  {
    title: 'AI is like a very fast car.',
    lines: [
      'In the hands of an experienced driver, it wins races.',
      'In the hands of a kid, it leads to disaster.',
    ],
  },
  {
    title: 'AI is like a machine gun.',
    lines: [
      'In the hands of a trained soldier, it is precise and effective.',
      'In the hands of a monkey, it creates chaos.',
    ],
  },
  {
    title: 'AI is not intelligence. It is horsepower.',
    lines: ['And horsepower is useful only when the driver knows where to go.'],
  },
];

const Slide32u = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-6xl w-full space-y-8">
      <motion.div
        className="grid gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
      >
        {examples.map((item) => (
          <motion.div
            key={item.title}
            className="rounded-[2.5rem] border border-white/10 bg-white/5 p-6 space-y-3"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <p className="text-premium-gold text-2xl font-display">{item.title}</p>
            {item.lines.map((line) => (
              <p key={line} className="text-white/85 text-xl">
                {line}
              </p>
            ))}
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Slide32u;
