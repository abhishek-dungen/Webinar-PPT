const FocusBadge = ({ label }) => (
    <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-white/10 via-transparent to-transparent px-6 py-7 text-right">
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-premium-gold/30 blur-3xl opacity-70" aria-hidden="true" />
        <div className="absolute inset-0 border border-white/10 rounded-3xl opacity-40" aria-hidden="true" />
        <div className="relative flex flex-col items-end gap-3">
            <span className="text-[0.65rem] uppercase tracking-[0.65em] text-text-muted/70">
                Focus
            </span>
            <p className="font-display text-2xl text-white leading-tight">
                {label}
            </p>
            <div className="h-[2px] w-full bg-gradient-to-l from-premium-gold via-premium-gold/20 to-transparent" />
        </div>
    </div>
);

export default FocusBadge;
