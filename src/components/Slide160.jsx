import { motion } from 'framer-motion';

const Slide160 = () => (
  <section className="slide-section min-h-screen w/full flex items-center justify-center px-6 md:px-12 lg:px-20 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-5xl w/full space-y-8 text-center"><motion.h2 className="font-display text-3xl md:text-4xl text-white leading-tight" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
        Jo log aaj is masterclass ke end tak aaye hain, woh sirf curious nahi — woh apne career ko lekar serious hain.
      </motion.h2>
      <motion.div className="space-y-4 text-xl text-text-muted" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
        <p>Isliye—sirf aaj ke webinar participants ke liye:</p>
        <p>💥 50% Exclusive Webinar Discount</p>
        <div className="flex flex-col items-center gap-2 pt-2">
          <span className="text-2xl font-semibold text-rose-400 line-through decoration-4 decoration-rose-500">
            ₹15,000
          </span>
          <span className="text-6xl font-extrabold text-premium-gold tracking-wide px-8 py-2 rounded-[2rem] border border-premium-gold/50 bg-premium-gold/10 shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
            ₹6,999
          </span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Slide160;
