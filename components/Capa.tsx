export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-(--bg-principal)"
    >
      {/* Blueprint grid background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(var(--blueprint-15) 1px, transparent 1px), linear-gradient(90deg, var(--blueprint-15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Radial vignette over grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_30%,var(--bg-principal)_100%)]" />

      {/* Accent line top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-(--destaque-azul) to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        {/* Eyebrow */}
        <p
          className="text-xs tracking-[0.4em] text-(--destaque-laranja) uppercase font-medium mb-6"
          style={{ fontFamily: "var(--font-work-sans)" }}
        >
          Engenharia Experimental — Desde 2002
        </p>

        {/* Main heading */}
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-black text-(--texto-principal) leading-[0.95] tracking-tight mb-2 max-w-5xl"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          OFM
        </h1>
        <h2
          className="text-xl md:text-3xl lg:text-4xl font-light text-(--texto-secundario) tracking-wide mb-8 max-w-4xl"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          Engenharia, Instrumentações e{" "}
          <span className="text-(--texto-principal) font-semibold">Análises Estruturais</span>
        </h2>

        {/* Tagline */}
        <p
          className="text-lg md:text-xl text-(--texto-secundario) max-w-2xl mb-12 leading-relaxed"
          style={{ fontFamily: "var(--font-work-sans)" }}
        >
          Transformando medições em conhecimento estrutural — promovendo
          segurança, desempenho e inovação em obras de grande porte.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contato"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-(--destaque-laranja) hover:bg-(--destaque-laranja-hover) text-white font-bold text-base rounded-sm transition-colors duration-200 cursor-pointer"
          >
            Solicitar Proposta
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-(--destaque-azul) text-(--destaque-azul) hover:bg-(--destaque-azul)/10 font-semibold text-base rounded-sm transition-colors duration-200 cursor-pointer"
          >
            Nossos Serviços
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-6 max-w-xl">
          {[
            { value: "20+", label: "Anos de experiência" },
            { value: "100+", label: "Obras instrumentadas" },
            { value: "Alta", label: "Precisão metrológica" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span
                className="text-2xl md:text-3xl font-black text-(--texto-principal)"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                {stat.value}
              </span>
              <span className="text-xs text-(--texto-suave) mt-1 leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-(--texto-fraco)">
        <span className="text-xs tracking-widest uppercase">Rolar</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="animate-bounce"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}
