import { motion } from 'framer-motion';

const Slide60 = () => (
    <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
        <div className="relative z-10 max-w-5xl w-full space-y-8 text-center"><motion.p className="text-xl md:text-2xl text-text-muted leading-relaxed"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
                “Data analyst ne sirf Excel mein numbers nahi dekhe. Usne business ko samjha.”
            </motion.p>
        </div>
    </section>
);

export default Slide60;
