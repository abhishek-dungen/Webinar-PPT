import { motion } from 'framer-motion';

const SlideWhereToLearnAllThis = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="absolute -top-24 right-[-8%] h-72 w-72 rounded-full bg-premium-gold/10 blur-3xl" />
    <div className="absolute -bottom-24 left-[-5%] h-72 w-72 rounded-full bg-white/5 blur-3xl" />

    <div className="relative z-10 w-full max-w-5xl space-y-10">
      <div className="grid grid-cols-1 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl border border-white/10 bg-white/5 px-8 py-6 text-center"
        >
          <p className="text-2xl md:text-3xl font-semibold text-white">
            Learn Excel in a structured manner
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl border border-premium-gold/30 bg-premium-gold/10 px-8 py-6 text-center"
        >
          <p className="text-2xl md:text-3xl font-semibold text-premium-gold">
            Basic -&gt; Intermediate -&gt; Advanced -&gt; Pro
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl border border-emerald-200/30 bg-emerald-500/10 px-8 py-6 text-center"
        >
          <p className="text-2xl md:text-3xl font-semibold text-emerald-200">
            Always use Microsoft Office 365 (Advanced Version) only.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default SlideWhereToLearnAllThis;
