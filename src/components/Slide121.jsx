import { motion } from 'framer-motion';

const Slide121 = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-bl from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-5xl w/full space-y-8"><motion.h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
        Har Point ko in 4 parts men likho
      </motion.h2>
      <motion.p className="text-xl text-text-muted" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
        Follow this template
        Action verb + What you did + How you did it + Result (with numbers if possible)
      </motion.p>
      <motion.div className="space-y-4 text-xl text-text-muted" initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}>
        <p>Examples (you can show on slide):</p>
        <p>❌ Bad bullet:
        “Made sales reports in Excel.”</p>
        <p>✅ Good bullet:
        “Built weekly sales report in Excel using VLOOKUP & Pivot Tables,
        helping manager track performance of 5 cities in 10 minutes instead of 1 hour.”</p>
        <p>Another example:</p>
        <p>❌ Bad:
        “Did data analysis.”</p>
        <p>✅ Good:
        “Cleaned and structured 20,000+ rows of order data
        to identify top 10% products driving 60% revenue.”</p>
        <p>“Har bullet mein
        ya toh time bacha hona chahiye,
        ya clarity create hui ho,
        ya better decision possible hua ho.”</p>
      </motion.div>
    </div>
  </section>
);

export default Slide121;
