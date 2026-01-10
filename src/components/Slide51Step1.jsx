import { motion } from 'framer-motion';
import jdImage from '../../JOb exp and JD/JD.png';
import workExpImage from '../../JOb exp and JD/Work Exp.png';

const stepItems = [
  {
    text: 'Get the JD',
    image: jdImage,
    alt: 'Job description document',
  },
  {
    text: 'Write down your work experience in detail (6-7 pages)',
    image: workExpImage,
    alt: 'Work experience notes',
  },
];

const Slide51Step1 = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <motion.div
      className="relative z-10 max-w-6xl w-full rounded-[2.5rem] border border-white/10 bg-white/5 px-10 py-12 shadow-[0_30px_70px_rgba(0,0,0,0.45)] backdrop-blur"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="text-premium-gold uppercase tracking-[0.6em] text-sm mb-4">Step 1</p>
      <div className="h-2" />
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 text-text-muted">
        {stepItems.map((item) => (
          <li
            key={item.text}
            className="flex flex-col items-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <div className="w-64 md:w-72 lg:w-80 shrink-0">
              <img
                src={item.image}
                alt={item.alt}
                className="h-40 md:h-48 w-full rounded-2xl object-cover"
                loading="lazy"
              />
            </div>
            <span className="text-white text-2xl md:text-3xl font-semibold leading-snug text-center">
              • {item.text}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  </section>
);

export default Slide51Step1;
