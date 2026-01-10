import { motion } from 'framer-motion';

const Slide45 = () => (
    <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-bl from-premium-black via-premium-black to-subtle-gray" />
        <div className="relative z-10 max-w-5xl w-full space-y-10"><motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight"
            >
                Game Change Yahin Hota Hai
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="grid gap-6 md:grid-cols-2"
            >
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-4">
                    <h3 className="text-lg uppercase tracking-[0.3em] text-text-muted/70">Old thinking</h3>
                    <p className="font-display text-2xl text-white">❌ “Mujhe job chahiye.”</p>
                </div>
                <div className="rounded-3xl border border-premium-gold/30 bg-gradient-to-br from-premium-gold/20 to-transparent p-6 space-y-4">
                    <h3 className="text-lg uppercase tracking-[0.3em] text-text-muted/70">New thinking</h3>
                    <p className="font-display text-2xl text-white">✅ “Mujhe system ke liye useful banna hai.”</p>
                </div>
            </motion.div>
        </div>
    </section>
);

export default Slide45;
