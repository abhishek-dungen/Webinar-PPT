import { motion } from 'framer-motion';

import linkedinLogo from '../assets/freelancer-logos/linkedin.png';

const SlideFreelancingPlatformsLinkedIn = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <motion.div
      className="relative z-10 max-w-4xl w-full text-center space-y-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl">Freelancing Platforms</h2>
      <div className="flex items-center justify-center">
        <div className="rounded-3xl border border-white/10 bg-white/5 px-8 py-10 shadow-[0_25px_60px_rgba(0,0,0,0.4)] backdrop-blur flex flex-col items-center gap-5">
          <div className="w-32 h-32 rounded-2xl overflow-hidden bg-white/10 flex items-center justify-center">
            <img src={linkedinLogo} alt="LinkedIn" className="w-full h-full object-contain" />
          </div>
          <p className="text-3xl font-semibold">LinkedIn</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 text-lg md:text-xl text-white/80">
        <span>Create Profile</span>
        <span className="text-premium-gold">→</span>
        <span>Outreach</span>
      </div>
    </motion.div>
  </section>
);

export default SlideFreelancingPlatformsLinkedIn;
