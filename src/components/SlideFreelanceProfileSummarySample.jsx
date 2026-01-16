import { motion } from 'framer-motion';

const SlideFreelanceProfileSummarySample = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <motion.div
      className="relative z-10 max-w-5xl w-full space-y-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-center">
        Sample Summary
      </h2>
      <div className="rounded-3xl border border-white/10 bg-white/5 px-8 py-8 text-lg md:text-xl text-white/85 space-y-5">
        <p>
          I help businesses turn raw Excel data into clean, automated reports and dashboards.
        </p>
        <p>
          My work focuses on advanced Excel solutions such as automated reporting, dynamic
          dashboards, data cleaning, and performance tracking.
        </p>
        <p>
          I regularly work with formulas like XLOOKUP, INDEX-MATCH, dynamic arrays, PivotTables,
          Power Query, and Excel automation to reduce manual work and errors.
        </p>
        <p>
          If you are spending hours in Excel every week, I can help you simplify and automate the
          process.
        </p>
      </div>
    </motion.div>
  </section>
);

export default SlideFreelanceProfileSummarySample;
