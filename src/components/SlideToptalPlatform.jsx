import { motion } from 'framer-motion';

import toptalLogo from '../../Freelancer logos/toptal_logo_icon_168482.webp';
import toptalShotOne from '../../Freelancer logos/Screenshot 2026-01-17 at 3.04.53 PM.png';
import toptalShotTwo from '../../Freelancer logos/Screenshot 2026-01-17 at 3.05.15 PM.png';

const SlideToptalPlatform = () => (
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
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-premium-gold">Toptal</h2>
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl overflow-hidden bg-white/10 flex items-center justify-center">
          <img src={toptalLogo} alt="Toptal logo" className="w-full h-full object-contain" />
        </div>
      </div>
      <div className="grid w-full max-w-6xl gap-6 md:grid-cols-2">
        <div className="flex flex-col items-center gap-2">
          <img
            src={toptalShotOne}
            alt="Toptal platform screenshot"
            className="block max-h-[48vh] w-auto max-w-full object-contain bg-white"
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <img
            src={toptalShotTwo}
            alt="Toptal platform screenshot"
            className="block max-h-[48vh] w-auto max-w-full object-contain bg-white"
          />
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3 text-sm md:text-base text-white/80 text-center max-w-6xl">
        <span>Create Profile</span>
        <span className="text-premium-gold">→</span>
        <span>Apply to the Toptal Talent Network</span>
        <span className="text-premium-gold">→</span>
        <span>Screening + Interviews</span>
        <span className="text-premium-gold">→</span>
        <span>Test Project</span>
        <span className="text-premium-gold">→</span>
        <span>Accepted (you are in the pool)</span>
        <span className="text-premium-gold">→</span>
        <span>Clients & Projects (After Acceptance)</span>
      </div>
    </motion.div>
  </section>
);

export default SlideToptalPlatform;
