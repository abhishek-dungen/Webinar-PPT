import { motion } from 'framer-motion';

const points = [
    'Wahan kitchens kam hain',
    'Wahan bachelors ya corporate crowd zyada hai',
    'Log cook nahi karte',
    'Demand daily hai, occasional nahi',
];

const Slide58 = () => (
    <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
        <div className="relative z-10 max-w-5xl w-full space-y-8"><motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-6 text-xl text-text-muted leading-relaxed"
            >
                <h2 className="font-display text-4xl md:text-5xl text-white">
                    Zada Lunch orders ka Matlab kya tha?
                </h2>
                <ul className="space-y-2 text-lg">
                    {points.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                            <span className="text-premium-gold">•</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <p>“So logical result: 👉 Bistro ke Cloud Kitchens wahi open karo.”</p>
            </motion.div>
        </div>
    </section>
);

export default Slide58;
