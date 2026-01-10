const SlideDataModelingOptions = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-[#0B0B0F] via-premium-black to-[#1D1D22]" />
    <div className="relative z-10 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="relative rounded-3xl border-2 border-sky-400/70 bg-gradient-to-br from-sky-400/25 via-sky-400/10 to-[#101219] shadow-[0_25px_80px_rgba(56,189,248,0.3)] px-8 py-12 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-sky-300/15 to-transparent blur-3xl opacity-70" />
        <div className="relative font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-sky-200">
          Option A: Data Modeling
        </div>
      </div>
      <div className="relative rounded-3xl border-2 border-emerald-400/70 bg-gradient-to-br from-emerald-400/25 via-emerald-400/10 to-[#101219] shadow-[0_25px_80px_rgba(52,211,153,0.3)] px-8 py-12 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-emerald-300/15 to-transparent blur-3xl opacity-70" />
        <div className="relative font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-emerald-200">
          Option B: Job Section
        </div>
      </div>
    </div>
  </section>
);

export default SlideDataModelingOptions;
