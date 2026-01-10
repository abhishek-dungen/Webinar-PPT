import { motion } from 'framer-motion';

const services = ['Dashboard creation', 'Monthly reporting', 'Data cleanup'];

const incomeCurve = [
  { timeline: '1–2 months', income: '₹0 – ₹5k (learning)' },
  { timeline: '3–4 months', income: '₹10k – ₹25k' },
  { timeline: '6–12 months', income: '₹30k – ₹60k' },
  { timeline: 'Skilled + niche', income: '₹1L+ possible' },
];

const reality = ['❌ Not passive income', '✅ Skill + credibility dependent'];

const Slide100 = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-6 md:px-12 lg:px-20 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-6xl w-full space-y-8"><motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight"
      >
        Side-Income / Freelance (Excel-based)
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="grid gap-6 md:grid-cols-2"
      >
        <div className="space-y-3 bg-premium-black/50 border border-white/5 rounded-2xl p-6">
          <h3 className="text-xl text-white">Common Services</h3>
          <ul className="space-y-1 text-text-muted">
            {services.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="space-y-3 bg-premium-black/50 border border-white/5 rounded-2xl p-6">
          <h3 className="text-xl text-white">Realistic Income Curve</h3>
          <div className="grid grid-cols-2 gap-2 text-text-muted">
            <p className="font-semibold">Timeline</p>
            <p className="font-semibold">Income</p>
            {incomeCurve.map((row) => (
              <>
                <p key={`${row.timeline}-time`}>{row.timeline}</p>
                <p key={`${row.timeline}-income`}>{row.income}</p>
              </>
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-2"
      >
        <h3 className="text-xl text-white">Reality Check</h3>
        <ul className="space-y-1 text-text-muted">
          {reality.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

export default Slide100;
