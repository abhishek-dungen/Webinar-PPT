import { motion } from 'framer-motion';

import upworkLogo from '../../Freelancer logos/upwork-round-logo-icon-png-7017516949686332n4bo69bd8.png';
import upworkScreenshot from '../../Freelancer logos/image23.png';

const platforms = [
  { name: 'Upwork', screenshot: upworkScreenshot },
];

const SlideFreelancingPlatformsFocus = () => (
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
      <div className="grid grid-cols-1 gap-6">
        {platforms.map(({ name, screenshot }) => (
          <div
            key={name}
            className="rounded-3xl border border-white/10 bg-white/5 px-5 py-6 shadow-[0_25px_60px_rgba(0,0,0,0.4)] backdrop-blur flex flex-col items-center gap-4"
          >
            <div className="w-20 h-20 rounded-2xl overflow-hidden bg-white/10 flex items-center justify-center">
              <img src={upworkLogo} alt={`${name} logo`} className="w-full h-full object-contain" />
            </div>
            <img
              src={screenshot}
              alt={`${name} job post screenshot`}
              className="w-full max-w-3xl max-h-[46vh] rounded-2xl object-contain bg-white shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
            />
            <p className="text-2xl font-semibold">{name}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-4 text-lg md:text-xl text-white/80">
        <span>Create Profile</span>
        <span className="text-premium-gold">→</span>
        <span>Bid for Projects</span>
      </div>
    </motion.div>
  </section>
);

export default SlideFreelancingPlatformsFocus;
