import { motion } from 'framer-motion';

import upworkLogo from '../../Freelancer logos/upwork-round-logo-icon-png-7017516949686332n4bo69bd8.png';
import upworkScreenshot from '../../Freelancer logos/image23.png';

const SlideUpwork = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-[#0c0c10] to-subtle-gray" />
    <motion.div
      className="relative z-10 w-full max-w-5xl space-y-8 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex items-center justify-center gap-4">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-premium-gold">Upwork</h2>
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden bg-white/10 flex items-center justify-center">
          <img src={upworkLogo} alt="Upwork logo" className="w-full h-full object-contain" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-5">
        <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
          <img
            src={upworkScreenshot}
            alt="Upwork job post screenshot"
            className="block w-screen h-[52vh] object-cover bg-white"
          />
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 text-lg md:text-xl text-white/80">
        <span>Create Profile</span>
        <span className="text-premium-gold">→</span>
        <span>Bid for Projects</span>
      </div>
    </motion.div>
  </section>
);

export default SlideUpwork;
