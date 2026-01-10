import { motion } from 'framer-motion';

const Slide118 = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-6xl w-full space-y-8"><motion.h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
        🎯 PRACTICAL EXAMPLE
      </motion.h2>
      <motion.p className="text-2xl text-text-muted" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
        “Same Skill, Do Alag Resume”
      </motion.p>
      <motion.div className="grid gap-6 md:grid-cols-2 text-text-muted" initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}>
        <div className="space-y-3 bg-white/5 border border-white/10 rounded-3xl p-6">
          <h3 className="text-white text-2xl">Left side: Company A – Operations Team</h3>
          <p>JD focus:</p>
          <ul className="space-y-1">
            <li>Reports</li>
            <li>Daily tracking</li>
            <li>Ops efficiency</li>
          </ul>
          <p>Resume Highlight:</p>
          <ul className="space-y-1">
            <li>“Built daily ops dashboard”</li>
            <li>“Reduced reporting time”</li>
            <li>“Handled city-wise performance”</li>
          </ul>
        </div>
        <div className="space-y-3 bg-white/5 border border-white/10 rounded-3xl p-6">
          <h3 className="text-white text-2xl">Right side: Company B – Marketing / CRM Team</h3>
          <p>JD focus:</p>
          <ul className="space-y-1">
            <li>Campaign analysis</li>
            <li>Funnels</li>
            <li>Attribution</li>
          </ul>
          <p>Resume Highlight:</p>
          <ul className="space-y-1">
            <li>“Analyzed campaign conversion data”</li>
            <li>“Built weekly funnel report”</li>
            <li>“Tracked CAC / ROAS trends”</li>
          </ul>
        </div>
      </motion.div>
      <motion.p className="text-xl text-text-muted" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}>
        “Skill same hai — Excel. Resume alag hai — kyunki problem alag hai.”
      </motion.p>
    </div>
  </section>
);

export default Slide118;
