import { motion } from 'framer-motion';

const nodes = [
  {
    label: 'Company kya karti hai?',
    detail: '',
    position: { top: '4%', left: '50%', translate: '-50%, -50%' },
  },
  {
    label: 'Job Description',
    detail: '',
    position: { top: '92%', left: '87%', translate: '-50%, -50%' },
  },
  {
    label: 'Skills + Background',
    detail: '',
    position: { top: '92%', left: '13%', translate: '-50%, -50%' },
  },
];

const Slide115b = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-6 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-4xl w-full space-y-6 text-center">
      <motion.p
        className="text-sm uppercase tracking-[0.5em] text-text-muted/70"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        Triangle Alignment
      </motion.p>
      <motion.div
        className="relative mx-auto w-full max-w-2xl"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <svg viewBox="0 0 400 360" className="w-full h-auto">
          <polygon
            points="200,20 380,330 20,330"
            fill="url(#triangleGradient)"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="2"
          />
          <defs>
            <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.03)" />
            </linearGradient>
          </defs>
        </svg>
        {nodes.map((node) => (
          <motion.div
            key={node.label}
            className="absolute w-48 text-left"
            style={{
              top: node.position.top,
              left: node.position.left,
              transform: `translate(${node.position.translate})`,
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white/90 shadow-lg shadow-black/30">
              <p className="text-premium-gold font-semibold text-base">{node.label}</p>
              <p className="text-text-muted mt-2 leading-snug">{node.detail}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Slide115b;
