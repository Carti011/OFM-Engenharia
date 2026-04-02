"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Hook de contagem crescente
function useContador(alvo: number, ativo: boolean, delay: number) {
  const [valor, setValor] = useState(0);
  useEffect(() => {
    if (!ativo) return;
    const timeout = setTimeout(() => {
      const duracao = 1400;
      const inicio = performance.now();
      const animar = (agora: number) => {
        const progresso = Math.min((agora - inicio) / duracao, 1);
        const eased = 1 - Math.pow(1 - progresso, 3);
        setValor(Math.round(eased * alvo));
        if (progresso < 1) requestAnimationFrame(animar);
      };
      requestAnimationFrame(animar);
    }, delay);
    return () => clearTimeout(timeout);
  }, [ativo, alvo, delay]);
  return valor;
}

// Estilos de transição em longhand para evitar conflito com transitionDelay
const transicao = {
  transitionProperty: "transform, opacity",
  transitionDuration: "0.7s",
  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
} as const;

export default function Hero() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisivel(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const contadorAnos  = useContador(20,  visivel, 600);
  const contadorObras = useContador(100, visivel, 700);

  const fadeUp = (delay: number) => ({
    ...transicao,
    transitionDelay: `${delay}ms`,
    opacity: visivel ? 1 : 0,
    transform: visivel ? "none" : "translateY(40px)",
  });

  const scaleIn = (delay: number) => ({
    ...transicao,
    transitionDelay: `${delay}ms`,
    opacity: visivel ? 1 : 0,
    transform: visivel ? "none" : "scale(0.85)",
  });

  return (
    <section
      id="hero"
      className="relative min-h-dvh flex flex-col justify-center overflow-hidden bg-(--bg-principal)"
    >
      {/* Blueprint grid background */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(var(--blueprint-15) 1px, transparent 1px), linear-gradient(90deg, var(--blueprint-15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Radial vignette over grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_30%,var(--bg-principal)_100%)]" />

      {/* Accent line top */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-(--destaque-azul) to-transparent" />

      <div className="hero-inner relative z-10 max-w-5xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-6 items-center">

          {/* Coluna esquerda — conteúdo */}
          <div>
            {/* Eyebrow */}
            <p
              className="text-xs tracking-[0.4em] text-(--destaque-laranja) uppercase font-medium mb-6"
              style={{
                fontFamily: "var(--font-work-sans)",
                ...fadeUp(100),
              }}
            >
              Engenharia Experimental — Desde 2002
            </p>

            {/* Main heading */}
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-black text-(--texto-principal) leading-[0.95] tracking-tight mb-2 max-w-5xl"
              style={{
                fontFamily: "var(--font-outfit)",
                ...fadeUp(200),
              }}
            >
              OFM
            </h1>
            <h2
              className="text-xl md:text-3xl lg:text-4xl font-light text-(--texto-secundario) tracking-wide mb-7 md:mb-8 max-w-4xl"
              style={{
                fontFamily: "var(--font-outfit)",
                ...fadeUp(300),
              }}
            >
              Engenharia, Instrumentações e{" "}
              <span className="text-(--texto-principal) font-semibold">Análises Estruturais</span>
            </h2>

            {/* Tagline */}
            <p
              className="text-base md:text-xl text-(--texto-secundario) max-w-2xl leading-relaxed"
              style={{
                fontFamily: "var(--font-work-sans)",
                ...fadeUp(400),
              }}
            >
              Transformando medições em conhecimento estrutural — promovendo
              segurança, desempenho e inovação em obras de grande porte.
            </p>

            {/* Linha ECG */}
            <svg
              className="ecg-line"
              height="40"
              viewBox="0 0 480 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                className="ecg-path"
                d="M0 20 L190 20 L196 26 L204 2 L212 38 L220 20 L480 20"
                stroke="#1A5CFF"
                strokeWidth="2.5"
                fill="none"
              />
            </svg>

            {/* CTAs */}
            <div className="flex flex-row gap-3" style={fadeUp(500)}>
              <a
                href="#contato"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 sm:px-8 py-4 bg-(--destaque-laranja) hover:bg-(--destaque-laranja-hover) text-white font-bold text-sm sm:text-base rounded-sm transition-colors duration-200 cursor-pointer"
              >
                Solicitar Proposta
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#servicos"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 sm:px-8 py-4 border border-(--destaque-azul) text-(--destaque-azul) hover:bg-(--destaque-azul)/10 font-semibold text-sm sm:text-base rounded-sm transition-colors duration-200 cursor-pointer"
              >
                Nossos Serviços
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-xl" style={{ marginTop: '30px' }}>
              {[
                { value: `${contadorAnos}+`, label: "Anos de experiência", delay: 600 },
                { value: `${contadorObras}+`, label: "Obras instrumentadas", delay: 700 },
                { value: "Alta", label: "Precisão metrológica", delay: 800 },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col" style={scaleIn(stat.delay)}>
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

          {/* Coluna direita — capacete */}
          <div
            className="relative hidden md:flex items-center justify-center"
            style={scaleIn(300)}
          >
            <div className="hero-glow" />
            <Image
              src="/images/Capacete_fundo.png"
              alt="OFM Engenharia"
              width={600}
              height={450}
              priority
              className="hero-img"
              unoptimized
            />
          </div>

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
