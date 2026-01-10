import { motion } from 'framer-motion';

const entryRoles = ['MIS Executive', 'Reporting Executive', 'Operations MIS', 'Business Support Analyst'];

const progression = [
  { year: '0–1', designation: 'MIS Executive', salary: '₹15k – ₹25k' },
  { year: '2', designation: 'Senior MIS / Reporting Analyst', salary: '₹30k – ₹45k' },
  { year: '3', designation: 'Analyst / Lead MIS', salary: '₹45k – ₹60k' },
];

const checks = [
  '❌ Low ceiling if you don’t move into analysis',
  '✅ Best launchpad for non-tech / Tier-3 students',
];

const Slide94 = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-6 md:px-12 lg:px-20 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-6xl w-full space-y-8"><motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-2"
      >
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight">TRACK 1:</h2>
        <p className="text-2xl text-text-muted">MIS / Reporting Track</p>
        <p className="text-lg text-text-muted">(Most common Excel entry point)</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="grid gap-6 md:grid-cols-2"
      >
        <div className="space-y-3 bg-premium-black/50 border border-white/5 rounded-2xl p-6">
          <h3 className="text-xl text-white">Entry Roles</h3>
          <ul className="space-y-1 text-text-muted">
            {entryRoles.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>
          <div className="pt-4 space-y-2 text-text-muted">
            <p>Entry Salary (India)</p>
            <p>₹12,000 – ₹25,000 / month</p>
            <p>Typical CTC: ₹1.8L – ₹3.5L</p>
          </div>
        </div>
        <div className="space-y-3 bg-premium-black/50 border border-white/5 rounded-2xl p-6">
          <h3 className="text-xl text-white">2–3 Year Progression</h3>
          <div className="grid grid-cols-3 gap-2 text-sm md:text-base text-text-muted">
            <p className="font-semibold">Year</p>
            <p className="font-semibold col-span-1 md:col-span-1">Designation</p>
            <p className="font-semibold">Salary (Monthly)</p>
            {progression.map((row) => (
              <>
                <p key={`${row.year}-year`}>{row.year}</p>
                <p key={`${row.year}-desg`}>{row.designation}</p>
                <p key={`${row.year}-sal`}>{row.salary}</p>
              </>
            ))}
          </div>
          <div className="pt-4 space-y-2 text-text-muted">
            <p>5–7 Year Ceiling</p>
            <p>₹6L – ₹9L CTC</p>
            <p>Growth stagnates if you remain only a “report maker”</p>
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
          {checks.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

export default Slide94;
