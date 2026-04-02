"use client";

import Link from "next/link";
import { useScrollReveal } from "../hooks/useScrollReveal";

const servicosFixos = [
  {
    slug: "provas-de-carga",
    icon: (
      // Viga apoiada com seta de força no centro
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
    slug: "conforto-e-vibracao",
    icon: (
      // Onda senoidal com amortecimento
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="2" y1="12" x2="22" y2="12" strokeOpacity="0.3" />
        <path d="M2 12 Q4 5 6 12 Q8 19 10 12 Q11.5 7 13 12 Q14.5 17 16 12 Q17 9 18 12 Q19 15 20 12" />
      </svg>
    ),
    titulo: "Ensaios de Conforto Humano e Vibração",
    descricao:
      "Avaliação de vibrações ambientais e conforto estrutural conforme NBR 6118 e 7188. Análise de frequências naturais e amortecimentos.",
  },
  {
    slug: "monitoramento-estrutural",
    icon: (
      // Três círculos concêntricos (radar) com linha de sinal
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="2" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="2" x2="12" y2="6" />
        <line x1="22" y1="12" x2="18" y2="12" />
      </svg>
    ),
    titulo: "Monitoramento Estrutural",
    descricao:
      "Acompanhamento de tensões e deslocamentos em tempo real com strain gages e LVDTs. Aquisição multicanal e processamento em tempo real.",
  },
  {
    slug: "validacao-numerica",
    icon: (
      // Malha de elementos finitos (grid triangulado)
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" />
        <line x1="3" y1="3" x2="13" y2="13" />
        <line x1="13" y1="3" x2="3" y2="13" />
        <line x1="13" y1="3" x2="21" y2="13" />
        <line x1="13" y1="13" x2="21" y2="3" />
        <line x1="3" y1="13" x2="13" y2="21" />
        <line x1="13" y1="13" x2="21" y2="21" />
        <line x1="3" y1="13" x2="21" y2="13" />
        <line x1="13" y1="3" x2="13" y2="21" />
      </svg>
    ),
    titulo: "Validação de Modelos Numéricos",
    descricao:
      "Calibração experimental de simulações estruturais em elementos finitos — correlacionando dados de campo com modelos computacionais.",
  },
  {
    slug: "provas-de-carga-hidraulica",
    icon: (
      // Lâmina d'água sobre viga com seta de pressão hidrostática
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18 Q5 14 7 18 Q9 22 11 18 Q13 14 15 18 Q17 22 19 18" />
        <line x1="2" y1="12" x2="22" y2="12" strokeDasharray="2 2" strokeOpacity="0.4" />
        <line x1="4" y1="22" x2="20" y2="22" />
        <line x1="12" y1="4" x2="12" y2="10" />
        <polyline points="9 7 12 4 15 7" />
      </svg>
    ),
    titulo: "Provas de Carga Hidráulica",
    descricao:
      "Aplicação de carga por lâmina d'água em reservatórios e lajes. Monitoramento com strain gages e LVDTs nas vigas principais conforme NBR 6118.",
  },
];

const servicosMoveis = [
  {
    slug: "trafegabilidade",
    icon: (
      // Perfil de ponte com seta de veículo
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
    slug: "ensaios-industriais",
    icon: (
      // Chave sobre dois nós conectados (circuito/instrumentação)
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="5" cy="19" r="2" />
        <circle cx="19" cy="5" r="2" />
        <line x1="7" y1="17" x2="17" y2="7" />
        <path d="M15 3a4 4 0 0 1 0 5.66L9 14.66A4 4 0 0 1 3.34 9L9 3.34A4 4 0 0 1 15 3z" />
      </svg>
    ),
    titulo: "Ensaios Industriais Especiais",
    descricao:
      "Testes experimentais sob demanda: pistões ThyssenKrupp Synergy, dispositivos de precisão, cilindros pneumáticos e validação de soldas.",
  },
  {
    slug: "celulas-de-carga",
    icon: (
      // Cilindro com setas de compressão e escala graduada
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="7" y="6" width="10" height="12" rx="1" />
        <line x1="7" y1="9" x2="17" y2="9" strokeDasharray="1.5 1.5" />
        <line x1="7" y1="12" x2="17" y2="12" strokeDasharray="1.5 1.5" />
        <line x1="7" y1="15" x2="17" y2="15" strokeDasharray="1.5 1.5" />
        <line x1="12" y1="2" x2="12" y2="5" />
        <polyline points="10 4 12 6 14 4" />
        <line x1="12" y1="19" x2="12" y2="22" />
        <polyline points="10 20 12 18 14 20" />
      </svg>
    ),
    titulo: "Fabricação e Calibração de Células de Carga",
    descricao:
      "Produção sob medida para validações estruturais e sistemas de medição. Células calibradas com rastreabilidade metrológica.",
  },
  {
    slug: "monitoramento-termico",
    icon: (
      // Termômetro com onda de calor irradiando
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
        <line x1="17" y1="5" x2="19" y2="5" />
        <line x1="17" y1="8" x2="20" y2="8" />
        <line x1="17" y1="11" x2="19" y2="11" />
      </svg>
    ),
    titulo: "Monitoramento Térmico e Detecção de Fumaça",
    descricao:
      "Ensaios de fuga de fumaça com sensores PT100 posicionados em pontos críticos — detecção precoce de variações térmicas e integração com sistemas de alarme.",
  },
  {
    slug: "analise-de-vibracao",
    icon: (
      // Espectro de frequência com pico de ressonância
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="2" y1="20" x2="22" y2="20" />
        <line x1="4" y1="20" x2="4" y2="16" />
        <line x1="7" y1="20" x2="7" y2="12" />
        <line x1="10" y1="20" x2="10" y2="4" />
        <line x1="13" y1="20" x2="13" y2="10" />
        <line x1="16" y1="20" x2="16" y2="15" />
        <line x1="19" y1="20" x2="19" y2="18" />
      </svg>
    ),
    titulo: "Análise de Vibração e Frequências Naturais",
    descricao:
      "Identificação de frequências de ressonância e modos de vibração em máquinas e estruturas de apoio — processamento espectral em tempo real com acelerômetros de alta sensibilidade.",
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
  const f4 = useScrollReveal({ threshold: 0.1 });
  const fixosRefs = [f0, f1, f2, f3, f4];

  const m0 = useScrollReveal({ threshold: 0.1 });
  const m1 = useScrollReveal({ threshold: 0.1 });
  const m2 = useScrollReveal({ threshold: 0.1 });
  const m3 = useScrollReveal({ threshold: 0.1 });
  const m4 = useScrollReveal({ threshold: 0.1 });
  const moveisRefs = [m0, m1, m2, m3, m4];

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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {servicosFixos.map((servico, i) => {
              const { ref, montado, visivel } = fixosRefs[i];
              return (
                <div
                  key={i}
                  ref={ref}
                  className={`relative overflow-hidden p-6 bg-(--bg-cartao) border border-(--borda-principal) hover:border-(--destaque-azul)/40 rounded-sm transition-colors duration-200 cursor-pointer group ${montado ? "reveal-fade-up" : ""} ${visivel ? "is-visible" : ""}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="card-linha-hover w-0 group-hover:w-full" />
                  <Link href={`/servicos/${servico.slug}`} className="absolute inset-0 z-20" aria-label={`Ver serviço: ${servico.titulo}`} />
                  <div className="w-10 h-10 flex items-center justify-center mb-5 text-(--destaque-azul) group-hover:text-(--texto-principal) transition-colors duration-200">
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
                  <div className="mt-4 flex items-center gap-1.5 text-[11px] text-(--destaque-azul) font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
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
              Ensaios Especiais e Instrumentação — 40%
            </span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {servicosMoveis.map((servico, i) => {
              const { ref, montado, visivel } = moveisRefs[i];
              return (
                <div
                  key={i}
                  ref={ref}
                  className={`relative overflow-hidden p-6 bg-(--bg-cartao) border border-(--borda-principal) hover:border-(--destaque-laranja)/40 rounded-sm transition-colors duration-200 cursor-pointer group ${montado ? "reveal-fade-up" : ""} ${visivel ? "is-visible" : ""}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="card-linha-hover w-0 group-hover:w-full" />
                  <Link href={`/servicos/${servico.slug}`} className="absolute inset-0 z-20" aria-label={`Ver serviço: ${servico.titulo}`} />
                  <div className="w-10 h-10 flex items-center justify-center mb-5 text-(--destaque-laranja) group-hover:text-(--texto-principal) transition-colors duration-200">
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
                  <div className="mt-4 flex items-center gap-1.5 text-[11px] text-(--destaque-laranja) font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
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
      </div>
    </section>
  );
}
