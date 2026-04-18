import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Rodape from "@/components/Rodape";
import BotaoWhatsApp from "@/components/BotaoWhatsApp";
import BotaoTema from "@/components/BotaoTema";
import { servicosDetalhados } from "@/data/servicos-detalhados";

export const metadata: Metadata = {
  title: "Serviços | OFM Engenharia",
  description:
    "Todos os serviços de instrumentação estrutural, provas de carga, ensaios especiais e análises oferecidos pela OFM Engenharia.",
};

function NavListagem() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 pointer-events-none">
      <div className="w-full max-w-5xl pointer-events-auto">
        <header className="rounded-2xl border bg-(--bg-cartao)/90 backdrop-blur-md border-(--borda-principal) shadow-lg shadow-black/20">
          <nav className="px-5 py-2.5 flex items-center justify-between gap-4">
            <Link href="/" className="cursor-pointer shrink-0">
              <Image
                src="/images/Logos/logo_navbar_2x Removido.png"
                alt="OFM Engenharia"
                width={100}
                height={40}
                className="h-10 w-auto object-contain"
                priority
                unoptimized
              />
            </Link>

            <div className="hidden sm:flex items-center gap-1.5 text-xs text-(--texto-suave)">
              <Link
                href="/"
                className="hover:text-(--texto-principal) transition-colors duration-200 cursor-pointer"
              >
                Início
              </Link>
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
              <span className="text-(--texto-principal)">Serviços</span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <BotaoTema />
              <Link
                href="/"
                className="sm:hidden flex items-center gap-1.5 text-xs text-(--texto-secundario) hover:text-(--texto-principal) transition-colors duration-200 cursor-pointer"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
                Voltar
              </Link>
              <Link
                href="/#contato"
                className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-(--destaque-azul) hover:bg-(--destaque-azul-hover) text-white text-sm font-semibold rounded-xl transition-colors duration-200 cursor-pointer"
              >
                Solicitar Proposta
              </Link>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
}

const etapas = [
  {
    numero: "01",
    titulo: "Análise e Planejamento",
    descricao:
      "Estudo da estrutura, definição dos pontos críticos de medição e seleção dos sensores adequados ao tipo de ensaio e às exigências normativas do projeto.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="13" y2="17" />
        <circle cx="17" cy="17" r="3" />
        <line x1="19.5" y1="19.5" x2="21" y2="21" />
      </svg>
    ),
  },
  {
    numero: "02",
    titulo: "Instrumentação",
    descricao:
      "Instalação de strain gages, LVDTs, acelerômetros, células de carga e demais sensores nos pontos definidos, com cabeamento e condicionamento de sinal integrados ao sistema de aquisição.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
      </svg>
    ),
  },
  {
    numero: "03",
    titulo: "Ensaio e Aquisição",
    descricao:
      "Aplicação de carga ou excitação controlada com leitura simultânea de todos os canais em tempo real. Os dados são monitorados e registrados ao longo de todo o ensaio.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12 Q4.5 5 7 12 Q9.5 19 12 12 Q14.5 5 17 12 Q19.5 19 22 12" />
        <line x1="2" y1="12" x2="22" y2="12" strokeOpacity="0.2" />
      </svg>
    ),
  },
  {
    numero: "04",
    titulo: "Análise e Relatório",
    descricao:
      "Processamento dos dados, geração de gráficos carga-deformação e emissão de laudo técnico com resultados rastreáveis. Quando aplicável, calibração do modelo numérico (FEM).",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="13" rx="0" />
        <polyline points="6 12 9 7 12 10 15 5 18 8" />
        <line x1="9" y1="19" x2="15" y2="19" />
        <line x1="12" y1="16" x2="12" y2="19" />
      </svg>
    ),
  },
];

const icones: Record<string, React.ReactNode> = {
  "provas-de-carga": (
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
  "analise-de-vibracao": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12 Q4.5 5 7 12 Q9.5 19 12 12 Q14.5 5 17 12 Q19.5 19 22 12" />
      <line x1="2" y1="12" x2="22" y2="12" strokeOpacity="0.2" />
      <circle cx="7" cy="5.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="17" cy="18.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  "monitoramento-estrutural": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="13" rx="0" />
      <polyline points="6 12 9 7 12 10 15 5 18 8" />
      <line x1="9" y1="19" x2="15" y2="19" />
      <line x1="12" y1="16" x2="12" y2="19" />
    </svg>
  ),
  "estruturas-especiais": (
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
  "ensaios-industriais": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="9" width="3" height="11" rx="0" />
      <rect x="10.5" y="5" width="3" height="15" rx="0" />
      <rect x="16" y="12" width="3" height="8" rx="0" />
      <line x1="2" y1="20" x2="22" y2="20" />
      <line x1="5" y1="7" x2="8" y2="7" strokeDasharray="1.5 1.5" />
      <line x1="10.5" y1="3" x2="13.5" y2="3" strokeDasharray="1.5 1.5" />
    </svg>
  ),
};

export default function PaginaListaServicos() {
  return (
    <>
      <NavListagem />

      {/* Header */}
      <section className="relative pt-40 pb-20 bg-(--bg-principal) overflow-hidden">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "linear-gradient(var(--blueprint-15) 1px, transparent 1px), linear-gradient(90deg, var(--blueprint-15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_30%,var(--bg-principal)_100%)]" />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <p
            className="text-xs tracking-[0.4em] text-(--destaque-azul) uppercase font-medium mb-4"
            style={{ fontFamily: "var(--font-work-sans)" }}
          >
            O que fazemos
          </p>
          <h1
            className="text-4xl md:text-6xl font-black text-(--texto-principal) leading-tight mb-4"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Todos os Serviços
          </h1>
          <p
            className="text-base md:text-lg text-(--texto-secundario) max-w-2xl leading-relaxed"
            style={{ fontFamily: "var(--font-work-sans)" }}
          >
            Instrumentação e análise experimental para estruturas civis e
            industriais — do ensaio de carga à validação numérica.
          </p>
        </div>
      </section>

      {/* Listagem */}
      <section className="py-16 md:py-24 bg-(--bg-secao)">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {servicosDetalhados.map((servico) => (
              <div
                key={servico.slug}
                className="relative overflow-hidden p-6 bg-(--bg-cartao) border border-(--borda-principal) hover:border-(--destaque-azul)/40 rounded-sm transition-colors duration-200 cursor-pointer group"
              >
                <div className="card-linha-hover w-0 group-hover:w-full" />
                <Link
                  href={`/servicos/${servico.slug}`}
                  className="absolute inset-0 z-20"
                  aria-label={`Ver serviço: ${servico.titulo}`}
                />
                {icones[servico.slug] && (
                  <div className="w-10 h-10 flex items-center justify-center mb-5 text-(--destaque-azul) group-hover:text-(--texto-principal) transition-colors duration-200">
                    {icones[servico.slug]}
                  </div>
                )}
                <h3
                  className="text-sm font-bold text-(--texto-principal) mb-3 leading-snug group-hover:text-(--destaque-azul) transition-colors duration-200"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {servico.titulo}
                </h3>
                <p className="text-xs text-(--texto-suave) leading-relaxed line-clamp-3">
                  {servico.subtitulo}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-[11px] text-(--destaque-azul) font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Ver serviço
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo de Trabalho */}
      <section className="py-20 md:py-28 bg-(--bg-principal)">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p
              className="text-xs tracking-[0.4em] text-(--destaque-azul) uppercase font-medium mb-4"
              style={{ fontFamily: "var(--font-work-sans)" }}
            >
              Metodologia
            </p>
            <h2
              className="text-3xl md:text-4xl font-black text-(--texto-principal) leading-tight"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Como trabalhamos
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-(--borda-principal)">
            {etapas.map((etapa) => (
              <div
                key={etapa.numero}
                className="bg-(--bg-principal) p-8 flex flex-col gap-6"
              >
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 flex items-center justify-center text-(--destaque-azul)">
                    {etapa.icon}
                  </div>
                  <span
                    className="text-4xl font-black text-(--texto-fraco)/30 leading-none"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {etapa.numero}
                  </span>
                </div>
                <div>
                  <h3
                    className="text-sm font-bold text-(--texto-principal) mb-3 leading-snug"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {etapa.titulo}
                  </h3>
                  <p className="text-xs text-(--texto-suave) leading-relaxed">
                    {etapa.descricao}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-(--bg-secao)">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2
            className="text-3xl md:text-4xl font-black text-(--texto-principal) mb-4"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Precisa de um serviço específico?
          </h2>
          <p
            className="text-(--texto-secundario) mb-8 max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-work-sans)" }}
          >
            Nossa equipe pode desenvolver soluções de instrumentação sob medida
            para a necessidade da sua obra ou projeto.
          </p>
          <Link
            href="/#contato"
            className="inline-flex items-center gap-2 px-8 py-4 bg-(--destaque-azul) hover:bg-(--destaque-azul-hover) text-white font-bold rounded-sm transition-colors duration-200 cursor-pointer"
          >
            Solicitar Proposta
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      <Rodape />
      <BotaoWhatsApp />
    </>
  );
}
