import { motion } from 'framer-motion';
import hourlyVsFixedImage from '../../Freelancer logos/image 9.png';

const decisions = [
  {
    condition: 'When scope is unclear',
    outcome: 'Hourly Wage',
  },
  {
    condition: 'When scope is clear',
    outcome: 'Fixed Outcome Fixed Price',
  },
];

const SlideHourlyVsFixedPrice = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-[#0c0c10] to-subtle-gray" />
    <motion.div
      className="relative z-10 w-full max-w-5xl space-y-12 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl">
        Hourly vs Fixed-Price Projects
      </h2>
      <div className="mx-auto w-full max-w-3xl">
        <img
          src={hourlyVsFixedImage}
          alt="Hourly versus fixed-price project examples"
          className="w-full max-h-[48vh] object-contain rounded-2xl border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.35)]"
        />
        <div className="mt-5 grid gap-5 md:grid-cols-2 text-left">
          {decisions.map(item => (
            <div key={item.condition} className="rounded-2xl border border-white/10 bg-white/5 px-6 py-6">
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">{item.condition}</p>
              <p className="mt-3 text-xl md:text-2xl font-semibold text-premium-gold">
                {item.outcome}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  </section>
);

export default SlideHourlyVsFixedPrice;
