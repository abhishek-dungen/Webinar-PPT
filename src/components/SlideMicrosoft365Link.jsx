import { motion } from 'framer-motion';

const productImage = new URL('../../Product /image.png', import.meta.url).href;

const SlideMicrosoft365Link = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-[#111218] to-subtle-gray" />
    <div className="absolute -top-24 left-[-8%] h-72 w-72 rounded-full bg-white/5 blur-3xl" />
    <div className="absolute -bottom-20 right-[-6%] h-72 w-72 rounded-full bg-premium-gold/10 blur-3xl" />

    <div className="relative z-10 w-full max-w-4xl flex flex-col items-center gap-8 text-center">
      <motion.img
        src={productImage}
        alt="Microsoft 365"
        className="w-full max-w-3xl rounded-[2rem] border border-white/10 shadow-2xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="space-y-3"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <a
          href="https://www.microsoft.com/en-in/microsoft-365"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-3 rounded-full border border-premium-gold/40 bg-premium-gold/15 px-8 py-3 text-2xl md:text-3xl font-semibold text-premium-gold shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:bg-premium-gold/25 transition"
        >
          Microsoft 365
        </a>
      </motion.div>
    </div>
  </section>
);

export default SlideMicrosoft365Link;
