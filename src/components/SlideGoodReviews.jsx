import { motion } from 'framer-motion';

const steps = ['Start Cheaper', 'Get Reviews', 'Raise Rates'];

const SlideGoodReviews = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-[#0c0c10] to-subtle-gray" />
    <motion.div
      className="relative z-10 w-full max-w-5xl space-y-10 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-premium-gold">
        How to get Good Reviews?
      </h2>
      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-lg md:text-xl font-semibold text-white shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur">
              {step}
            </div>
            {index < steps.length - 1 && (
              <span className="hidden md:inline-block text-3xl text-premium-gold">→</span>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default SlideGoodReviews;
