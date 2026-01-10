import { motion } from 'framer-motion';

const tiers = [
  { title: 'Delivery', width: '40%', color: 'from-premium-gold to-yellow-200' },
  { title: 'Automation', width: '55%', color: 'from-amber-500 to-orange-300' },
  { title: 'Data Presentation', width: '70%', color: 'from-orange-500 to-pink-400' },
  { title: 'Data Analysis', width: '85%', color: 'from-pink-500 to-purple-400' },
  { title: 'Data Cleaning', width: '100%', color: 'from-purple-600 to-indigo-500' },
];

const Slide69b = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-6 md:px-12 lg:px-20 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-4xl w-full space-y-8 text-center"><motion.h2
        className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        Skill Pyramid: Low Effort → High Value
      </motion.h2>
      <div className="flex flex-col items-center gap-3 pt-4">
        {tiers.map((tier, index) => (
          <motion.div
            key={tier.title}
            className={`relative rounded-3xl text-white font-semibold text-xl py-4 px-6 bg-gradient-to-r ${tier.color} shadow-[0_15px_45px_rgba(0,0,0,0.35)]`}
            style={{ width: tier.width }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 + index * 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            {tier.title}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Slide69b;
