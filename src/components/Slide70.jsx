import { motion } from 'framer-motion';

const Slide70 = () => (
    <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
        <div className="relative z-10 max-w-5xl w-full space-y-8"><motion.h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
                👉 “Par Yahan Ek Problem Hai…”
            </motion.h2>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-4 text-xl text-text-muted leading-relaxed"
            >
                <p>YouTube ya online courses mein jo log Excel sikha rahe hote hain — wo khud kabhi decision-making role mein rahe hi nahi hote.</p>
                <p>Isliye wo sirf shortcuts aur basic-level Excel hi sikha paate hain.</p>
                <p>Wo yeh nahi sikha paate ki:</p>
                <ul className="space-y-2 text-lg">
                    <li className="flex items-start gap-3">
                        <span className="text-premium-gold">•</span>
                        <span>Business problem ko kaise samjha jaata hai</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-premium-gold">•</span>
                        <span>Data se decision kaise nikale jaate hain</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-premium-gold">•</span>
                        <span>Excel ko manager ki language mein kaise use kiya jaata hai</span>
                    </li>
                </ul>
                <p>Isi wajah se learning galat direction mein chali jaati hai.</p>
            </motion.div>
        </div>
    </section>
);

export default Slide70;
