import { motion } from 'framer-motion';

import linkedinLogo from '../../Job apps/Linkedin.png';
import naukriLogo from '../../Job apps/Naukri.png';
import founditLogo from '../../Job apps/Foundit.jpg';

const platforms = [
  { name: 'LinkedIn', logo: linkedinLogo },
  { name: 'Naukri', logo: naukriLogo },
  { name: 'Foundit', logo: founditLogo },
];

const Slide52JobApplications = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <motion.div
      className="relative z-10 max-w-4xl w/full text-center space-y-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 className="font-display text-4xl md:text-5xl">Job Applications</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {platforms.map(({ name, logo }) => (
          <div
            key={name}
            className="rounded-3xl border border-white/10 bg-white/5 px-6 py-8 shadow-[0_25px_60px_rgba(0,0,0,0.4)] backdrop-blur flex flex-col items-center gap-4"
          >
            <div className="w-24 h-24 rounded-2xl overflow-hidden bg-white/10 flex items-center justify-center">
              <img src={logo} alt={name} className="w-full h-full object-contain" />
            </div>
            <p className="text-2xl font-semibold">{name}</p>
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Slide52JobApplications;
