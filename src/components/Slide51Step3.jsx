import { motion } from 'framer-motion';
import Step3Image from '../../hedaers and pointers CV/Screenshot 2026-01-08 at 5.46.42 PM.png';

const Slide51Step3 = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <motion.div
      className="relative z-10 max-w-4xl w-full rounded-[2.5rem] border border-white/10 bg-white/5 px-8 py-12 shadow-[0_30px_70px_rgba(0,0,0,0.45)] backdrop-blur space-y-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="text-premium-gold uppercase tracking-[0.6em] text-sm">Step 3</p>
      <h2 className="font-display text-4xl md:text-5xl leading-tight">
        Write Bullet Pointers for Each Header
      </h2>
      <div className="w-full flex justify-center">
        <img
          src={Step3Image}
          alt="Bullet pointers layout example"
          className="w-full max-w-2xl rounded-3xl border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.45)]"
        />
      </div>
    </motion.div>
  </section>
);

export default Slide51Step3;
