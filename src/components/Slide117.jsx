import { motion } from 'framer-motion';

const steps = [
  'Job Description uthao',
  'Role ke top 8–10 keywords mark karo',
  'Apne resume ke:',
  'Summary',
  'Skills section',
  'Project bullets',
  ' ko un keywords ke around rearrange karo',
  'Customization ka matlab hota hai — sahi cheez pe spotlight daalna.',
];

const Slide117 = () => (
  <section className="slide-section min-h-screen w/full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-bl from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-5xl w/full space-y-8"><motion.h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
        “Resume Customization = 30 Minute Smart Work”
      </motion.h2>
      <motion.ul className="space-y-3 text-xl text-text-muted" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
        {steps.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </motion.ul>
    </div>
  </section>
);

export default Slide117;
