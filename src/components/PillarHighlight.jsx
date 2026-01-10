import clsx from 'clsx';
import { motion } from 'framer-motion';

const PillarHighlight = ({
    index,
    label,
    isActive = true,
    isDimmed = false,
    layoutId,
    motionProps = {},
}) => {
    return (
        <motion.div
            layoutId={layoutId}
            {...motionProps}
            className={clsx(
                'relative overflow-hidden rounded-3xl border p-8 backdrop-blur transition-all duration-500',
                isActive
                    ? 'border-premium-gold/60 bg-gradient-to-br from-premium-gold/20 via-white/10 to-transparent shadow-2xl shadow-premium-gold/30'
                    : 'border-white/10 bg-gradient-to-br from-white/5 to-transparent',
                isDimmed && 'opacity-40 scale-[0.98]'
            )}
        >
            <div
                className={clsx(
                    'absolute inset-0 pointer-events-none transition-opacity duration-500',
                    isActive ? 'opacity-100 bg-premium-gold/10' : 'opacity-20 bg-gradient-to-br from-premium-gold/20 to-transparent'
                )}
            />
            <div className="relative flex flex-col gap-4">
                <span
                    className={clsx(
                        'text-sm uppercase tracking-[0.25em]',
                        isActive ? 'text-premium-gold' : 'text-text-muted'
                    )}
                >
                    {String(index + 1).padStart(2, '0')}
                </span>
                <p
                    className={clsx(
                        'font-display text-2xl md:text-3xl leading-snug transition-colors duration-500',
                        isActive ? 'text-white' : 'text-text-muted'
                    )}
                >
                    {label}
                </p>
                <div
                    className={clsx(
                        'h-[1px] w-16 transition-colors duration-500',
                        isActive ? 'bg-premium-gold' : 'bg-white/20'
                    )}
                />
            </div>
        </motion.div>
    );
};

export default PillarHighlight;
