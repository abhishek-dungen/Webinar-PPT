import { motion } from 'framer-motion';

import JD1 from '../../JD/Customer-Service-Job-Description-Template-TemplateLab.com_.jpg';
import JD2 from '../../JD/Executive-Assistant-Job-Description-Template-edit-online.png';
import JD3 from '../../JD/Manager-Job-Description-Template-edit-online.png';

const images = [
  { src: JD1, alt: 'Customer Service JD' },
  { src: JD2, alt: 'Executive Assistant JD' },
  { src: JD3, alt: 'Manager JD' },
];

const Slide50JD = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-6 md:px-12 lg:px-20 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <motion.div
      className="relative z-10 w-full max-w-6xl space-y-10 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-[0.1em]">
        Job Description (JD)
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map(({ src, alt }) => (
          <div
            key={alt}
            className="rounded-[1.5rem] border border-white/10 bg-white/5 overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.45)]"
          >
            <img src={src} alt={alt} className="w-full h-full object-contain" />
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Slide50JD;
