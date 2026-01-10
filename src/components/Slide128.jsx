import { motion } from 'framer-motion';

const Slide128 = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-5xl w/full space-y-8"><motion.h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
        Rule 3: If you don’t know—DO NOT BLUFF
      </motion.h2>
      <motion.div className="space-y-4 text-xl text-text-muted leading-relaxed" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
        <p>“Interview mein sabse bura kaam hota hai— jhoot bolna ya bluff karna.”</p>
        <p>Correct response example:</p>
        <p>“Is exact formula ka naam yaad nahi, par logic yeh hai… aur main 2 minute mein nikaal sakta hoon.”</p>
        <p>This increases credibility.</p>
      </motion.div>
    </div>
  </section>
);

export default Slide128;
