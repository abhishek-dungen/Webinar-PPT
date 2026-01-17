import { motion } from 'framer-motion';

const SlideGoldenRule = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-[#0c0c10] to-subtle-gray" />
    <motion.div
      className="relative z-10 w-full max-w-5xl space-y-10 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-premium-gold">
        One Golden Rule
      </h2>
      <p className="text-xl md:text-2xl font-semibold text-white text-center">Emphasize Outcomes</p>
      <div className="space-y-5 text-left text-lg md:text-xl font-semibold text-white">
        <p>1. I will give an automated Excel solution will save your 10 hours a week or save 50000 per month</p>
        <p>2. I will reduce this monthly reporting from 6 hours to 6 minutes</p>
        <p>3. I will make your file refreshable + error-proof + auditable</p>
        <p>4. I will build a template your team can use without you</p>
      </div>
    </motion.div>
  </section>
);

export default SlideGoldenRule;
