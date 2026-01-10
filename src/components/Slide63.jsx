import { motion } from 'framer-motion';

const Slide63 = () => (
    <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
        <div className="relative z-10 max-w-6xl w-full space-y-8"><motion.h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
                👉 “Aur Yahin Excel Aata Hai ”
            </motion.h2>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-4 text-xl text-text-muted leading-relaxed"
            >
                <p>“Ab ek honest baat.”</p>
                <p>“95% companies ke andar:</p>
                <ul className="space-y-2 text-lg">
                    <li className="flex items-start gap-3"><span className="text-premium-gold">–</span><span>raw data messy hota hai</span></li>
                    <li className="flex items-start gap-3"><span className="text-premium-gold">–</span><span>tools alag-alag hote hain”</span></li>
                </ul>
                <p>“Par decision banane se pehle data almost hamesha Excel / Sheets mein aata hai.”</p>
            </motion.div>
        </div>
    </section>
);

export default Slide63;
