import { motion } from 'framer-motion';

import jobscanLogo from '../../Logos/logo_blue_square-og.jpg';

const variants = [
  {
    title: 'ATS Friendly Resume',
    icon: '✔︎',
    iconClass: 'text-emerald-400',
    bg: 'from-emerald-500/20 via-transparent to-transparent',
  },
  {
    title: 'Not ATS Friendly Resume',
    icon: '✘',
    iconClass: 'text-rose-400',
    bg: 'from-rose-500/20 via-transparent to-transparent',
  },
];

const Slide51ATSFriendly = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <motion.div
      className="relative z-10 max-w-5xl w-full space-y-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 className="font-display text-4xl md:text-5xl text-center">ATS Resume Reality Check</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {variants.map(({ title, icon, iconClass, bg }) => (
          <div
            key={title}
            className={`rounded-[2rem] border border-white/15 bg-gradient-to-br ${bg} px-6 py-10 shadow-[0_30px_70px_rgba(0,0,0,0.45)] backdrop-blur flex flex-col items-center gap-3`}
          >
            <span className={`text-4xl ${iconClass}`}>{icon}</span>
            <p className="text-2xl font-semibold text-white text-center">{title}</p>
          </div>
        ))}
      </div>
      <a
        href="https://www.jobscan.co/"
        target="_blank"
        rel="noreferrer"
        className="mx-auto flex items-center gap-4 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-base font-semibold text-premium-gold underline decoration-dotted w-max"
      >
        <img src={jobscanLogo} alt="Jobscan" className="w-10 h-10 rounded-full object-cover" />
        Jobscan
      </a>
    </motion.div>
  </section>
);

export default Slide51ATSFriendly;
