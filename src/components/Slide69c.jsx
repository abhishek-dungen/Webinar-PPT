import { motion } from 'framer-motion';

const tiers = [
  { title: 'Delivery', width: '40%', active: false },
  { title: 'Automation', width: '55%', active: false },
  { title: 'Data Presentation', width: '70%', active: false },
  { title: 'Data Analysis', width: '85%', active: true },
  { title: 'Data Cleaning', width: '100%', active: true },
];

const links = [
  { label: 'Blinkit Data 1', url: 'https://docs.google.com/spreadsheets/d/1a-zXGg3wUqVHyet5fmbv_nhQuNoeY-fQ/edit?usp=sharing&ouid=112402912695012483097&rtpof=true&sd=true' },
  { label: 'Blinkit Data 2', url: 'https://docs.google.com/spreadsheets/d/11YSXCd8wFSbsr_AgheFAQRnBB8XufdIv/edit?usp=sharing&ouid=112402912695012483097&rtpof=true&sd=true' },
  { label: 'Blinkit Data 3', url: 'https://docs.google.com/spreadsheets/d/1SN38d-NxaosqO_pLG2ApSnMIR-N4Ikla/edit?usp=sharing&ouid=112402912695012483097&rtpof=true&sd=true' },
];

const Slide69c = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-6 md:px-12 lg:px-20 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-6xl w-full grid gap-12 lg:grid-cols-2 items-center">
      <div className="space-y-6 text-center lg:text-left"><motion.h2 className="font-display text-4xl md:text-5xl leading-tight" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
          Skill Pyramid (Focus: Cleaning → Analysis)
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

export default Slide69c;
