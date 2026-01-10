import { motion } from 'framer-motion';

const tiers = [
  { title: 'Delivery', width: '40%', active: false },
  { title: 'Automation', width: '55%', active: false },
  { title: 'Data Presentation', width: '70%', active: true },
  { title: 'Data Analysis', width: '85%', active: false },
  { title: 'Data Cleaning', width: '100%', active: false },
];

const links = [
  { label: 'Presentation 1', url: 'https://drive.google.com/file/d/1xF2XgyQwExfxa2ehZNJLBG3H_ha_YlqZ/view?usp=sharing' },
  { label: 'Presentation 2', url: 'https://drive.google.com/file/d/1E2UhP3oOp95NUFCq9JiP6W6LMGpcRm1t/view?usp=sharing' },
  { label: 'Presentation 3', url: 'https://drive.google.com/file/d/1LM56yubDzDcCPktLXVRpC3D3Xtmbmzd8/view?usp=sharing' },
];

const Slide69d = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-6 md:px-12 lg:px-20 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-6xl w-full grid gap-12 lg:grid-cols-2 items-center">
      <div className="space-y-6 text-center lg:text-left"><motion.h2 className="font-display text-4xl md:text-5xl leading-tight" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
          Skill Pyramid (Focus: Data Presentation)
        </motion.h2>
        <motion.div className="flex flex-col gap-3 text-lg" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
          {links.map((link) => (
            <a key={link.label} href={link.url} className="text-premium-gold underline decoration-dotted hover:text-white transition">
              {link.label}
            </a>
          ))}
        </motion.div>
      </div>
      <div className="flex flex-col items-center gap-3">
        {tiers.map((tier, index) => (
          <motion.div
            key={tier.title}
            className={`relative rounded-3xl text-xl font-semibold py-4 px-6 shadow-[0_15px_45px_rgba(0,0,0,0.35)] ${
              tier.active ? 'text-white bg-gradient-to-r from-premium-gold to-yellow-300' : 'text-text-muted bg-white/10 border border-white/10'
            }`}
            style={{ width: tier.width }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 + index * 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            {tier.title}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Slide69d;
