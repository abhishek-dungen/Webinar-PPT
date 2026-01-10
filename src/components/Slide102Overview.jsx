import { motion } from 'framer-motion';

const pillars = [
  '✅ Advance Excel full depth',
  '✅ #2 REAL PROJECTS + STRONG PORTFOLIO (Proof > Practice)',
  '✅ #3 — Presentation & Explanation Skill',
  '✅ #4 — Role-Specific Resume (No Generic CV)',
  '✅ #5 — Interview Reality (Har Round Ka Game Alag)',
];

const Slide102Overview = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="absolute inset-y-12 right-12 w-[45%] bg-premium-gold/10 blur-[120px] opacity-30" />
    <div className="relative z-10 max-w-6xl w-full space-y-10"><motion.h2
        className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        👉 “Track Alag Ho Sakta Hai… Par Yeh 5 Cheezein SABKE Liye Mandatory Hain”
      </motion.h2>
      <motion.div
        className="grid gap-4 md:grid-cols-2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {pillars.map((item) => (
          <div
            key={item}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl px-6 py-5 text-lg text-white"
          >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Slide102Overview;
