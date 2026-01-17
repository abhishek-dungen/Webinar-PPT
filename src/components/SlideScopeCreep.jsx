import { motion } from 'framer-motion';

const SlideScopeCreep = () => (
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
        Scope Creep
      </h2>
      <div className="flex flex-col gap-5 text-left">
        <div className="rounded-3xl border border-white/10 bg-white/5 px-6 py-6">
          <p className="text-lg md:text-xl font-semibold text-white">Specify What’s Included:</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 px-6 py-6">
          <p className="text-lg md:text-xl font-semibold text-white">State What’s Not Included:</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 px-6 py-6">
          <p className="text-lg md:text-xl font-semibold text-white">Limit Revisions:</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 px-6 py-6">
          <p className="text-lg md:text-xl font-semibold text-white">Use Written Scope Agreements:</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 px-6 py-6">
          <p className="text-lg md:text-xl font-semibold text-white">
            Refer Back to the Scope Document:
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 px-6 py-6">
          <p className="text-lg md:text-xl font-semibold text-white">
            Offer Options for Extra Requests:
          </p>
        </div>
      </div>
    </motion.div>
  </section>
);

export default SlideScopeCreep;
