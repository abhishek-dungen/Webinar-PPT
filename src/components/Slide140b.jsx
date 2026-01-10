import { motion } from 'framer-motion';

const links = [
  { label: 'Ola Electric IPO', url: 'https://docs.google.com/spreadsheets/d/1_57S5NNshprjjBHlBh_RV9idE_UqenfM/edit?usp=sharing&ouid=112402912695012483097&rtpof=true&sd=true' },
  { label: 'Excitel Data Analysis', url: 'https://docs.google.com/spreadsheets/d/10_s8P-hR2WO58vlqWRzRwre_UIrYX5J8/edit?usp=sharing&ouid=112402912695012483097&rtpof=true&sd=true' },
  { label: 'Axis ESG Integration Strategy Fund', url: 'https://docs.google.com/spreadsheets/d/18HtNTsz_XlN9zB-U9KKvhXd5zYRVVA-L/edit?usp=sharing&ouid=112402912695012483097&rtpof=true&sd=true' },
  { label: 'Jagsonpal Pharmaceuticals', url: 'https://docs.google.com/spreadsheets/d/1Egvpr7oW8a3VUB3qoBjr3QT2FYtEPV9j/edit?usp=sharing&ouid=112402912695012483097&rtpof=true&sd=true' },
  { label: 'Oil and Gas Industry', url: 'https://docs.google.com/spreadsheets/d/1HbWmPgIJKRHoazte6aXDeSGTJpEUT7Y7/edit?usp=sharing&ouid=112402912695012483097&rtpof=true&sd=true' },
];

const Slide140b = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-6 md:px-12 lg:px-20 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-5xl w/full space-y-8 text-center"><motion.h2 className="font-display text-4xl md:text-5xl leading-tight" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
        Freelancing ke Project Examples
      </motion.h2>
      <motion.div className="grid gap-4 md:grid-cols-2 text-lg" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
        {links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            className="rounded-3xl border border-white/10 bg-white/5 px-6 py-4 text-left text-premium-gold hover:text-white transition underline decoration-dotted"
          >
            {link.label}
          </a>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Slide140b;
