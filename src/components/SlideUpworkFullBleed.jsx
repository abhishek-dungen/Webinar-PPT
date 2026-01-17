import { motion } from 'framer-motion';

import upworkScreenshot from '../../Freelancer logos/image231.png';
import upworkLogo from '../../Freelancer logos/upwork-round-logo-icon-png-7017516949686332n4bo69bd8.png';

const SlideUpworkFullBleed = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center relative overflow-hidden">
    <div className="absolute inset-0 bg-premium-black" />
    <motion.div
      className="relative z-10 w-full flex flex-col items-center justify-center gap-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-center justify-center gap-3">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-premium-gold">Upwork</h2>
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl overflow-hidden bg-white/10 flex items-center justify-center">
          <img src={upworkLogo} alt="Upwork logo" className="w-full h-full object-contain" />
        </div>
      </div>
      <img
        src={upworkScreenshot}
        alt="Upwork job post screenshot"
        className="block max-h-[72vh] w-auto max-w-full object-contain bg-white"
      />
      <div className="flex items-center justify-center gap-3 text-base md:text-lg text-white/80">
        <span>Create Profile</span>
        <span className="text-premium-gold">→</span>
        <span>Bid for Projects</span>
      </div>
    </motion.div>
  </section>
);

export default SlideUpworkFullBleed;
