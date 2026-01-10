import { motion } from 'framer-motion';

const Slide42 = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-4xl text-center space-y-8"><motion.h2
        className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        Companies logo ko Kyun Hire Karti Hain?
      </motion.h2>
      <motion.div
        className="space-y-4 text-xl text-text-muted leading-relaxed"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <p>“Companies kisi ko ‘opportunity dene’ ke liye hire nahi karti.”</p>
        <p>“Companies hire karti hain problem solve karne ke liye.”</p>
        <p>“Simple rule hai: Jitni badi problem solve karoge, utni zada salary hogi.”</p>
      </motion.div>
    </div>
  </section>
);

export default Slide42;
