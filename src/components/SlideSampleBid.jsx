import { motion } from 'framer-motion';

import sampleBid from '../assets/freelancer-logos/image32.png';

const SlideSampleBid = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-6 md:px-12 lg:px-20 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <motion.div
      className="relative z-10 w-full max-w-6xl space-y-8 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl">Sample Bid</h2>
      <div className="rounded-3xl border border-white/10 bg-white/5 px-4 md:px-6 py-4 md:py-6 shadow-[0_25px_60px_rgba(0,0,0,0.35)] backdrop-blur">
        <img src={sampleBid} alt="Sample bid" className="w-full h-auto max-h-[70vh] object-contain" />
      </div>
    </motion.div>
  </section>
);

export default SlideSampleBid;
