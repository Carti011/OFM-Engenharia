"use client";

import Link from "next/link";
import { servicosDetalhados } from "@/data/servicos-detalhados";
import { useScrollReveal } from "../hooks/useScrollReveal";

const servicosAncora = [
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
    titulo: "Provas de Carga Estáticas e Dinâmicas",
    descricao:
      "Aplicadas em lajes, arquibancadas, pontes, passarelas e viadutos em todo o Brasil, com instrumentação de alta precisão.",
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
        <line x1="9" y1="14" x2="14" y2="9" />
        <line x1="15" y1="14" x2="10" y2="9" />
        <path d="M2 17 Q3.5 14.5 5 17" strokeOpacity="0.6" />
        <path d="M19 17 Q20.5 14.5 22 17" strokeOpacity="0.6" />
      </svg>
    ),
    titulo: "Ensaios Estáticos e Dinâmicos em Estruturas Especiais",
    descricao:
      "Validação experimental de torres, pontes, viadutos e instalações de eventos — acelerômetros triaxiais, strain gages e Lynx ADS2000.",
  },
  {
    slug: "trafegabilidade",
    acento: "laranja" as const,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="1" y1="13" x2="23" y2="13" />
        <line x1="4" y1="13" x2="4" y2="18" />
        <line x1="20" y1="13" x2="20" y2="18" />
        <path d="M4 13 Q12 7 20 13" />
        <polyline points="8 10 12 7 16 10" strokeDasharray="2 1" />
        <line x1="9" y1="5" x2="15" y2="5" />
        <polyline points="13 3 15 5 13 7" />
      </svg>
    ),
    titulo: "Ensaios de Trafegabilidade",
    descricao:
      "Subestações móveis WEG, análise de vibração e estabilidade com acelerômetros. Verificação de integridade estrutural em deslocamento.",
  },
  {
    slug: "porta-paletes",
    acento: "laranja" as const,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="2" y1="20" x2="22" y2="20" />
        <line x1="4" y1="20" x2="4" y2="4" />
        <line x1="20" y1="20" x2="20" y2="4" />
        <path d="M4 9 Q12 11 20 9" />
        <line x1="4" y1="14" x2="20" y2="14" />
        <rect x="7" y="5" width="10" height="4" rx="0.5" />
      </svg>
    ),
    titulo: "Ensaio de Carga em Porta Paletes",
    descricao:
      "Validação estrutural de sistemas de armazenagem em campo e fábrica — strain gages e LVDTs nas longarinas, conforme ABNT NBR 14762.",
  },
  {
    slug: "arrancamento-soldas",
    acento: "laranja" as const,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="14" x2="20" y2="14" />
        <path d="M4 14 Q6 11 8 14 Q10 17 12 14 Q14 11 16 14 Q18 17 20 14" strokeOpacity="0.7" />
        <line x1="12" y1="14" x2="12" y2="5" />
        <polyline points="9 8 12 5 15 8" />
        <line x1="6" y1="19" x2="18" y2="19" />
        <line x1="6" y1="22" x2="18" y2="22" />
        <line x1="6" y1="19" x2="6" y2="22" />
        <line x1="18" y1="19" x2="18" y2="22" />
      </svg>
    ),
    titulo: "Arrancamento e Verificação de Soldas Estruturais",
    descricao:
      "Resistência à tração e integridade de soldas em ancoragens e chapas metálicas — macaco hidráulico calibrado e curvas carga-deformação.",
  },
];

export default function Services() {
  const header = useScrollReveal({ threshold: 0.15 });

  const a0 = useScrollReveal({ threshold: 0.1 });
  const a1 = useScrollReveal({ threshold: 0.1 });
  const a2 = useScrollReveal({ threshold: 0.1 });
  const a3 = useScrollReveal({ threshold: 0.1 });
  const a4 = useScrollReveal({ threshold: 0.1 });
  const ancorasRefs = [a0, a1, a2, a3, a4];

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
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2
              className="text-4xl md:text-5xl font-black text-(--texto-principal) leading-tight max-w-2xl"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Serviços e
              <br />
              <span className="text-(--destaque-azul)">Especialidades</span>
            </h2>
            <Link
              href="/servicos"
              className="inline-flex items-center gap-2 text-sm text-(--destaque-laranja) hover:text-white font-semibold transition-colors duration-200 cursor-pointer shrink-0"
            >
              Ver todos os {servicosDetalhados.length} serviços
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Grid de âncoras */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-10">
          {servicosAncora.map((servico, i) => {
            const { ref, montado, visivel } = ancorasRefs[i];
            const corBorda =
              servico.acento === "azul"
                ? "hover:border-(--destaque-azul)/40"
                : "hover:border-(--destaque-laranja)/40";
            const corIcone =
              servico.acento === "azul"
                ? "text-(--destaque-azul)"
                : "text-(--destaque-laranja)";
            const corVer =
              servico.acento === "azul"
                ? "text-(--destaque-azul)"
                : "text-(--destaque-laranja)";
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

        {/* CTA para listagem completa */}
        <div className="flex justify-center">
          <Link
            href="/servicos"
            className="inline-flex items-center gap-2 px-6 py-3 border border-(--borda-principal) hover:border-(--destaque-laranja)/50 text-(--texto-secundario) hover:text-(--texto-principal) text-sm font-medium rounded-sm transition-colors duration-200 cursor-pointer"
          >
            Ver todos os {servicosDetalhados.length} serviços
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
