"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";

const servicosFixos = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11M8 10v11M16 10v11M12 10v11" />
      </svg>
    ),
    titulo: "Provas de Carga Estáticas e Dinâmicas",
    descricao:
      "Aplicadas em lajes, arquibancadas, pontes, passarelas e viadutos em todo o Brasil, com instrumentação de alta precisão.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    titulo: "Ensaios de Conforto Humano e Vibração",
    descricao:
      "Avaliação de vibrações ambientais e conforto estrutural conforme NBR 6118 e 7188. Análise de frequências naturais e amortecimentos.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 8l3 3 2-2 3 3" />
      </svg>
    ),
    titulo: "Monitoramento Estrutural",
    descricao:
      "Acompanhamento de tensões e deslocamentos em tempo real com strain gages e LVDTs. Aquisição multicanal e processamento em tempo real.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <path d="M17.5 17.5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        <path d="M14 17.5h1.5M17.5 14v1.5" />
      </svg>
    ),
    titulo: "Validação de Modelos Numéricos",
    descricao:
      "Calibração experimental de simulações estruturais em elementos finitos — correlacionando dados de campo com modelos computacionais.",
  },
];

const servicosMoveis = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 3h15v13H1z" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    titulo: "Ensaios de Trafegabilidade",
    descricao:
      "Subestações móveis WEG, análise de vibração e estabilidade com acelerômetros. Verificação de integridade estrutural em deslocamento.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    titulo: "Ensaios Industriais Especiais",
    descricao:
      "Testes experimentais sob demanda: pistões ThyssenKrupp Synergy, dispositivos de precisão, cilindros pneumáticos e validação de soldas.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v18M3 9h18M3 15h18" />
        <rect x="3" y="3" width="18" height="18" rx="2" />
      </svg>
    ),
    titulo: "Fabricação e Calibração de Células de Carga",
    descricao:
      "Produção sob medida para validações estruturais e sistemas de medição. Células calibradas com rastreabilidade metrológica.",
  },
];

export default function Services() {
  const header = useScrollReveal({ threshold: 0.15 });
  const labelFixos = useScrollReveal({ threshold: 0.15 });
  const labelMoveis = useScrollReveal({ threshold: 0.15 });

  const f0 = useScrollReveal({ threshold: 0.1 });
  const f1 = useScrollReveal({ threshold: 0.1 });
  const f2 = useScrollReveal({ threshold: 0.1 });
  const f3 = useScrollReveal({ threshold: 0.1 });
  const fixosRefs = [f0, f1, f2, f3];

  const m0 = useScrollReveal({ threshold: 0.1 });
  const m1 = useScrollReveal({ threshold: 0.1 });
  const m2 = useScrollReveal({ threshold: 0.1 });
  const moveisRefs = [m0, m1, m2];

  return (
    <section id="servicos" className="py-24 md:py-32 bg-(--bg-secao)">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          ref={header.ref}
          className={`mb-16 ${header.montado ? "reveal-fade-up" : ""} ${header.visivel ? "is-visible" : ""}`}
        >
          <p className="text-xs tracking-[0.35em] text-(--destaque-laranja) uppercase font-medium mb-4">
            O que fazemos
          </p>
          <h2
            className="text-4xl md:text-5xl font-black text-(--texto-principal) leading-tight max-w-2xl"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Serviços e
            <br />
            <span className="text-(--destaque-azul)">Especialidades</span>
          </h2>
        </div>

        {/* Estruturas Fixas */}
        <div className="mb-14">
          <div
            ref={labelFixos.ref}
            className={`flex items-center gap-4 mb-8 ${labelFixos.montado ? "reveal-fade-right" : ""} ${labelFixos.visivel ? "is-visible" : ""}`}
          >
            <div className="h-px w-8 bg-(--destaque-azul)" />
            <span
              className="text-sm font-bold text-(--destaque-azul) tracking-widest uppercase"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Estruturas Fixas — 60%
            </span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {servicosFixos.map((servico, i) => {
              const { ref, montado, visivel } = fixosRefs[i];
              return (
                <div
                  key={i}
                  ref={ref}
                  className={`p-6 bg-(--bg-cartao) border border-(--borda-principal) hover:border-(--destaque-azul)/40 rounded-sm transition-colors duration-200 cursor-default group ${montado ? "reveal-fade-up" : ""} ${visivel ? "is-visible" : ""}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-10 h-10 flex items-center justify-center mb-5 text-(--destaque-azul) group-hover:text-(--texto-principal) transition-colors duration-200">
                    {servico.icon}
                  </div>
                  <h3
                    className="text-sm font-bold text-(--texto-principal) mb-3 leading-snug"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {servico.titulo}
                  </h3>
                  <p className="text-xs text-(--texto-suave) leading-relaxed">
                    {servico.descricao}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Estruturas Móveis */}
        <div>
          <div
            ref={labelMoveis.ref}
            className={`flex items-center gap-4 mb-8 ${labelMoveis.montado ? "reveal-fade-right" : ""} ${labelMoveis.visivel ? "is-visible" : ""}`}
          >
            <div className="h-px w-8 bg-(--destaque-laranja)" />
            <span
              className="text-sm font-bold text-(--destaque-laranja) tracking-widest uppercase"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Estruturas Móveis e Especiais — 40%
            </span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {servicosMoveis.map((servico, i) => {
              const { ref, montado, visivel } = moveisRefs[i];
              return (
                <div
                  key={i}
                  ref={ref}
                  className={`p-6 bg-(--bg-cartao) border border-(--borda-principal) hover:border-(--destaque-laranja)/40 rounded-sm transition-colors duration-200 cursor-default group ${montado ? "reveal-fade-up" : ""} ${visivel ? "is-visible" : ""}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-10 h-10 flex items-center justify-center mb-5 text-(--destaque-laranja) group-hover:text-(--texto-principal) transition-colors duration-200">
                    {servico.icon}
                  </div>
                  <h3
                    className="text-sm font-bold text-(--texto-principal) mb-3 leading-snug"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {servico.titulo}
                  </h3>
                  <p className="text-xs text-(--texto-suave) leading-relaxed">
                    {servico.descricao}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
