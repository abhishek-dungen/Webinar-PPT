import { motion } from 'framer-motion';

const antiGravityImage = new URL(
  '../../AI Tools/google-antigravity-ide-gemini-3.webp',
  import.meta.url
).href;

const SlideGoogleAntiGravity = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <motion.img
      src={antiGravityImage}
      alt="Google Anti Gravity"
      className="relative z-10 w-full h-full object-cover"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
    />
  </section>
);

export default SlideGoogleAntiGravity;
