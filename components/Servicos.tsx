"use client";

import Link from "next/link";
import { useScrollReveal } from "../hooks/useScrollReveal";

const servicos = [
  {
    slug: "provas-de-carga",
    acento: "azul" as const,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="2" y1="17" x2="22" y2="17" />
        <line x1="2" y1="17" x2="5" y2="21" />
        <line x1="5" y1="21" x2="8" y2="17" />
        <line x1="22" y1="17" x2="19" y2="21" />
        <line x1="19" y1="21" x2="16" y2="17" />
        <line x1="12" y1="4" x2="12" y2="14" />
        <polyline points="9 11 12 14 15 11" />
        <line x1="8" y1="9" x2="16" y2="9" strokeDasharray="2 2" />
      </svg>
    ),
    titulo: "Provas de Carga",
    descricao:
      "Quatro modalidades — estática, dinâmica, hidráulica e em porta paletes — com instrumentação de alta precisão aplicada em lajes, pontes, arquibancadas e sistemas de armazenagem.",
  },
  {
    slug: "analise-de-vibracao",
    acento: "azul" as const,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12 Q4.5 5 7 12 Q9.5 19 12 12 Q14.5 5 17 12 Q19.5 19 22 12" />
        <line x1="2" y1="12" x2="22" y2="12" strokeOpacity="0.2" />
        <circle cx="7" cy="5.5" r="1" fill="currentColor" stroke="none" />
        <circle cx="17" cy="18.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
    titulo: "Análise de Vibração",
    descricao:
      "Identificação de frequências naturais, modos de vibração e conforto humano em edifícios, pontes, vias públicas, passarelas e equipamentos industriais.",
  },
  {
    slug: "monitoramento-estrutural",
    acento: "azul" as const,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="13" rx="0" />
        <polyline points="6 12 9 7 12 10 15 5 18 8" />
        <line x1="9" y1="19" x2="15" y2="19" />
        <line x1="12" y1="16" x2="12" y2="19" />
      </svg>
    ),
    titulo: "Monitoramento e Validação",
    descricao:
      "Acompanhamento contínuo de estruturas em execução e operação, combinado com a calibração experimental de modelos de elementos finitos (FEM).",
  },
  {
    slug: "estruturas-especiais",
    acento: "azul" as const,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="8" y1="20" x2="16" y2="20" />
        <line x1="9" y1="20" x2="12" y2="4" />
        <line x1="15" y1="20" x2="12" y2="4" />
        <line x1="9" y1="14" x2="15" y2="14" />
        <line x1="10" y1="9" x2="14" y2="9" />
        <path d="M2 17 Q3.5 14.5 5 17" strokeOpacity="0.6" />
        <path d="M19 17 Q20.5 14.5 22 17" strokeOpacity="0.6" />
      </svg>
    ),
    titulo: "Ensaios em Estruturas",
    descricao:
      "Validação estática e dinâmica de torres, pontes, viadutos e instalações de eventos, incluindo ensaios de trafegabilidade em equipamentos de grande porte.",
  },
  {
    slug: "ensaios-industriais",
    acento: "azul" as const,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="9" width="3" height="11" rx="0" />
        <rect x="10.5" y="5" width="3" height="15" rx="0" />
        <rect x="16" y="12" width="3" height="8" rx="0" />
        <line x1="2" y1="20" x2="22" y2="20" />
        <line x1="5" y1="7" x2="8" y2="7" strokeDasharray="1.5 1.5" />
        <line x1="10.5" y1="3" x2="13.5" y2="3" strokeDasharray="1.5 1.5" />
      </svg>
    ),
    titulo: "Ensaios Industriais",
    descricao:
      "Cilindros pneumáticos, fabricação de células de carga sob medida, verificação de soldas estruturais e monitoramento térmico para segurança contra incêndio.",
  },
];

export default function Servicos() {
  const header = useScrollReveal({ threshold: 0.15 });

  const a0 = useScrollReveal({ threshold: 0.1 });
  const a1 = useScrollReveal({ threshold: 0.1 });
  const a2 = useScrollReveal({ threshold: 0.1 });
  const a3 = useScrollReveal({ threshold: 0.1 });
  const a4 = useScrollReveal({ threshold: 0.1 });
  const refs = [a0, a1, a2, a3, a4];

  return (
    <section id="servicos" className="py-24 md:py-32 bg-(--bg-secao)">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div
          ref={header.ref}
          className={`mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6 ${header.montado ? "reveal-fade-up" : ""} ${header.visivel ? "is-visible" : ""}`}
        >
          <div>
            <p className="text-xs tracking-[0.35em] text-(--destaque-azul) uppercase font-medium mb-4">
              O que fazemos
            </p>
            <h2
              className="text-4xl md:text-5xl font-black text-(--texto-principal) leading-tight"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Serviços e
              <br />
              <span className="text-(--destaque-azul)">Especialidades</span>
            </h2>
          </div>
          <Link
            href="/servicos"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-(--destaque-azul) hover:bg-(--destaque-azul-hover) text-white text-sm font-semibold rounded-sm transition-colors duration-200 cursor-pointer"
          >
            Ver todos os serviços
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </Link>
        </div>

        {/* Grid de serviços */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {servicos.map((servico, i) => {
            const { ref, montado, visivel } = refs[i];
            const corBorda =
              servico.acento === "azul"
                ? "hover:border-(--destaque-azul)/40"
                : "hover:border-(--destaque-azul)/40";
            const corIcone =
              servico.acento === "azul"
                ? "text-(--destaque-azul)"
                : "text-(--destaque-azul)";
            const corVer =
              servico.acento === "azul"
                ? "text-(--destaque-azul)"
                : "text-(--destaque-azul)";
            return (
              <div
                key={servico.slug}
                ref={ref}
                className={`relative overflow-hidden p-6 bg-(--bg-cartao) border border-(--borda-principal) ${corBorda} rounded-sm transition-colors duration-200 cursor-pointer group ${montado ? "reveal-fade-up" : ""} ${visivel ? "is-visible" : ""}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="card-linha-hover w-0 group-hover:w-full" />
                <Link
                  href={`/servicos/${servico.slug}`}
                  className="absolute inset-0 z-20"
                  aria-label={`Ver serviço: ${servico.titulo}`}
                />
                <div
                  className={`w-10 h-10 flex items-center justify-center mb-5 ${corIcone} group-hover:text-(--texto-principal) transition-colors duration-200`}
                >
                  {servico.icon}
                </div>
                <h3
                  className="text-sm font-bold text-(--texto-principal) mb-3 leading-snug group-hover:text-(--destaque-azul-hover) transition-colors duration-200"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {servico.titulo}
                </h3>
                <p className="text-xs text-(--texto-suave) leading-relaxed">
                  {servico.descricao}
                </p>
                <div
                  className={`mt-4 flex items-center gap-1.5 text-[11px] ${corVer} font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200`}
                >
                  Ver detalhes
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
