"use client";

import Image from "next/image";
import Link from "next/link";
import Rodape from "@/components/Rodape";
import BotaoWhatsApp from "@/components/BotaoWhatsApp";
import BotaoTema from "@/components/BotaoTema";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function NavObra() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 pointer-events-none">
      <div className="w-full max-w-5xl pointer-events-auto">
        <header className="rounded-2xl border bg-(--bg-cartao)/90 backdrop-blur-md border-(--borda-principal) shadow-lg shadow-black/20">
          <nav className="px-5 py-2.5 flex items-center justify-between gap-4">
            <Link href="/" className="cursor-pointer shrink-0">
              <Image src="/images/Logos/logo_navbar_2x Removido.png" alt="OFM Engenharia" width={100} height={40} className="h-10 w-auto object-contain" priority unoptimized />
            </Link>
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-(--texto-suave)">
              <Link href="/#obras" className="hover:text-(--texto-principal) transition-colors duration-200 cursor-pointer">Portfólio</Link>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6" /></svg>
              <span className="text-(--texto-principal)">The Town 2025</span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <BotaoTema />
              <Link href="/#obras" className="sm:hidden flex items-center gap-1.5 text-xs text-(--texto-secundario) hover:text-(--texto-principal) transition-colors duration-200 cursor-pointer">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6" /></svg>
                Voltar
              </Link>
              <Link href="/#contato" className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-(--destaque-azul) hover:bg-(--destaque-azul-hover) text-white text-sm font-semibold rounded-xl transition-colors duration-200 cursor-pointer">
                Solicitar Proposta
              </Link>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
}

const metricas = [
  {
    valor: "3",
    unidade: "",
    rotulo: "Cabos de Aço Ensaiados",
    icone: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 12h18M3 6h18M3 18h18" />
      </svg>
    ),
  },
  {
    valor: "200",
    unidade: "kg",
    rotulo: "Carga por Cabo Simulada",
    icone: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    valor: "4",
    unidade: "",
    rotulo: "Pontos de Extensometria",
    icone: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    valor: "4",
    unidade: "",
    rotulo: "Pontos de Aceleração",
    icone: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
];

const fichaTecnica = [
  { campo: "Local", valor: "São Paulo, SP" },
  { campo: "Evento", valor: "The Town 2025" },
  { campo: "Tipo de Ensaio", valor: "Prova de Carga Estática e Dinâmica" },
  { campo: "Estrutura", valor: "Torre da Tirolesa" },
  { campo: "Cabos de Aço", valor: "3 cabos (entre duas torres)" },
  { campo: "Carga por Cabo", valor: "200 kg (sacos de areia + guia rolante)" },
  { campo: "Pontos de Extensometria", valor: "4 pontos" },
  { campo: "Pontos de Aceleração", valor: "4 pontos" },
  { campo: "Resultado", valor: "Estrutura aprovada para o evento" },
];

export default function TheTown2025Page() {
  const sDescricao = useScrollReveal({ threshold: 0.1 });
  const sFicha = useScrollReveal({ threshold: 0.1 });
  const sCallout = useScrollReveal({ threshold: 0.1 });
  const sGaleria = useScrollReveal({ threshold: 0.08 });
  const sCta = useScrollReveal({ threshold: 0.1 });

  return (
    <>
      <NavObra />
      <main>

        {/* ── HERO ────────────────────────────────────────── */}
        <section className="relative min-h-[75vh] flex items-end overflow-hidden">
          <Image
            src="/images/Obras/The Town 2025/capa.jpg"
            alt="The Town 2025 — Torre da Tirolesa"
            fill
            className="object-cover"
            unoptimized
            priority
          />
          <div
            className="absolute inset-0 z-10 pointer-events-none opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(26,92,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(26,92,255,0.8) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div className="absolute inset-0 z-10 pointer-events-none bg-linear-to-t from-black via-black/55 to-black/15" />

          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 pb-16 pt-40">
            <Link
              href="/#obras"
              className="inline-flex items-center gap-2 text-xs text-white/60 hover:text-white/90 transition-colors duration-200 mb-8 cursor-pointer group"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-0.5 transition-transform duration-200">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              Voltar ao Portfólio
            </Link>

            <div className="flex flex-wrap gap-2 mb-5">
              <span className="px-3 py-1 bg-(--destaque-azul)/20 border border-(--destaque-azul)/40 text-(--destaque-azul) text-[11px] font-bold tracking-[0.2em] uppercase rounded-sm">
                Estrutura Temporária
              </span>
              <span className="px-3 py-1 bg-white/10 border border-white/20 text-white/70 text-[11px] tracking-[0.2em] uppercase rounded-sm">
                São Paulo, SP
              </span>
              <span className="px-3 py-1 bg-(--destaque-azul)/15 border border-(--destaque-azul)/30 text-white/70 text-[11px] tracking-[0.2em] uppercase rounded-sm">
                Aprovada para o Evento
              </span>
            </div>

            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-4"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              The Town 2025
            </h1>
            <p className="text-sm md:text-base text-white/65 max-w-2xl leading-relaxed">
              Prova de carga estática e dinâmica na Torre da Tirolesa do festival. Três cabos de aço ensaiados com 200 kg cada, 4 pontos de extensometria e 4 de aceleração — estrutura aprovada.
            </p>
          </div>
        </section>

        {/* ── MÉTRICAS ────────────────────────────────────── */}
        <section className="bg-(--bg-cartao) border-b border-(--borda-principal)">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {metricas.map((m, i) => (
                <div
                  key={i}
                  className={`py-8 px-6 flex flex-col gap-2 ${i < 3 ? "border-r border-(--borda-principal)/60" : ""} ${i >= 2 ? "border-t md:border-t-0 border-(--borda-principal)/60" : ""}`}
                >
                  <div className="text-(--destaque-azul)/60">{m.icone}</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl md:text-4xl font-black text-(--destaque-azul)" style={{ fontFamily: "var(--font-outfit)" }}>
                      {m.valor}
                    </span>
                    {m.unidade && (
                      <span className="text-sm font-semibold text-(--destaque-azul)/70">{m.unidade}</span>
                    )}
                  </div>
                  <span className="text-[11px] text-(--texto-suave) uppercase tracking-[0.18em] leading-snug">{m.rotulo}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTEÚDO ─────────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-(--bg-principal)">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-start">

              <div
                ref={sDescricao.ref}
                className={`${sDescricao.montado ? "reveal-fade-right" : ""} ${sDescricao.visivel ? "is-visible" : ""}`}
              >
                <p className="text-xs tracking-[0.35em] text-(--destaque-azul) uppercase font-medium mb-4">Sobre o Ensaio</p>
                <h2
                  className="text-2xl md:text-3xl font-black text-(--texto-principal) mb-6 leading-tight"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  Torre da Tirolesa — Prova de Carga Estática e Dinâmica
                </h2>
                <div className="space-y-5 text-sm text-(--texto-secundario) leading-relaxed">
                  <p>
                    A Torre da Tirolesa do The Town 2025 conta com{" "}
                    <strong className="text-(--texto-principal) font-semibold">três cabos de aço</strong> que partem de uma torre para outra, por onde os participantes do festival percorrem a tirolesa. Para garantir a segurança da estrutura e obter a aprovação técnica do evento, foram realizados ensaios de prova de carga estática e dinâmica.
                  </p>
                  <p>
                    O ensaio simulou fielmente a condição real de uso: foram aplicados{" "}
                    <strong className="text-(--texto-principal) font-semibold">200 kg em cada um dos três cabos</strong> por meio de sacos de areia fixados a uma guia rolante — reproduzindo o peso e o movimento de uma pessoa percorrendo a tirolesa. A resposta da estrutura foi monitorada em tempo real durante toda a simulação.
                  </p>
                  <p>
                    A instrumentação abrangeu{" "}
                    <strong className="text-(--texto-principal) font-semibold">4 pontos de extensometria</strong> para medição de deformações e{" "}
                    <strong className="text-(--texto-principal) font-semibold">4 pontos de aceleração</strong> para a análise dinâmica. A torre apresentou excelente comportamento estrutural em todas as condições ensaiadas, resultando na{" "}
                    <strong className="text-(--texto-principal) font-semibold">aprovação técnica para a realização do evento</strong>.
                  </p>
                </div>

                <div className="my-8 h-px bg-(--borda-principal)" />

                <p className="text-xs tracking-[0.3em] text-(--texto-suave) uppercase font-medium mb-4">Etapas do Ensaio</p>
                <ul className="space-y-3">
                  {[
                    "Instrumentação da torre em 4 pontos de extensometria",
                    "Instalação de 4 pontos de aceleração para análise dinâmica",
                    "Aplicação de 200 kg em cada cabo com sacos de areia e guia rolante",
                    "Simulação do movimento de pessoa percorrendo a tirolesa",
                    "Monitoramento simultâneo de deformações e acelerações",
                    "Emissão de relatório técnico com aprovação para o evento",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-(--texto-secundario)">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-(--destaque-azul)/60 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                ref={sFicha.ref}
                className={`${sFicha.montado ? "reveal-fade-left" : ""} ${sFicha.visivel ? "is-visible" : ""}`}
              >
                <p className="text-xs tracking-[0.35em] text-(--destaque-azul) uppercase font-medium mb-4">Ficha Técnica</p>
                <h2
                  className="text-2xl md:text-3xl font-black text-(--texto-principal) mb-6 leading-tight"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  Especificações
                </h2>

                <div className="border border-(--borda-principal) rounded-sm overflow-hidden">
                  {fichaTecnica.map((item, i) => (
                    <div
                      key={i}
                      className={`flex justify-between items-center px-4 py-3.5 border-b border-(--borda-principal) last:border-b-0 ${i % 2 === 0 ? "bg-(--bg-elevado)" : "bg-(--bg-cartao)"}`}
                    >
                      <span className="text-[11px] text-(--texto-suave) uppercase tracking-[0.15em] shrink-0">{item.campo}</span>
                      <span className="text-xs text-(--texto-principal) font-medium text-right ml-4">{item.valor}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <p className="text-xs tracking-[0.3em] text-(--texto-suave) uppercase font-medium mb-4">Equipamentos</p>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { nome: "Extensômetros", detalhe: "4 pontos de deformação" },
                      { nome: "Acelerômetros", detalhe: "4 pontos de análise dinâmica" },
                      { nome: "Guia Rolante", detalhe: "Simulação de movimento na tirolesa" },
                      { nome: "Sacos de Areia", detalhe: "200 kg por cabo ensaiado" },
                    ].map((eq, i) => (
                      <div key={i} className="p-3 bg-(--bg-elevado) border border-(--borda-principal) rounded-sm">
                        <p className="text-xs font-semibold text-(--texto-principal) mb-0.5">{eq.nome}</p>
                        <p className="text-[11px] text-(--texto-suave)">{eq.detalhe}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CALLOUT ──────────────────────────────────────── */}
        <section className="py-16 bg-(--bg-cartao) border-y border-(--borda-principal)">
          <div className="max-w-4xl mx-auto px-6">
            <div
              ref={sCallout.ref}
              className={`${sCallout.montado ? "reveal-fade-up" : ""} ${sCallout.visivel ? "is-visible" : ""}`}
            >
              <div className="relative pl-8 border-l-2 border-(--destaque-azul)">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="absolute -top-1 -left-5 text-(--destaque-azul)">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" fill="currentColor" opacity="0.25" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" fill="currentColor" opacity="0.25" />
                </svg>
                <p className="text-base md:text-lg text-(--texto-principal) leading-relaxed mb-6">
                  "Simulamos{" "}
                  <strong className="text-(--destaque-azul)">200 kg em cada um dos três cabos</strong>{" "}
                  com uma guia rolante — exatamente como uma pessoa na tirolesa. A torre se comportou muito bem em todos os ensaios e recebeu{" "}
                  <strong className="text-(--destaque-azul)">aprovação técnica</strong>{" "}
                  para a realização do evento."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-px bg-(--destaque-azul)/40" />
                  <p className="text-[11px] text-(--texto-suave) uppercase tracking-[0.25em]">
                    OFM — Relatório Técnico do Ensaio
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── GALERIA ──────────────────────────────────────── */}
        <section className="py-20 bg-(--bg-principal)">
          <div className="max-w-7xl mx-auto px-6">
            <div
              ref={sGaleria.ref}
              className={`mb-10 ${sGaleria.montado ? "reveal-fade-up" : ""} ${sGaleria.visivel ? "is-visible" : ""}`}
            >
              <p className="text-xs tracking-[0.35em] text-(--destaque-azul) uppercase font-medium mb-3">Galeria</p>
              <div className="flex items-end justify-between gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-(--texto-principal)" style={{ fontFamily: "var(--font-outfit)" }}>
                  Registros do Ensaio
                </h2>
              </div>
            </div>

            {/* Linha 1: destaque em evidência + lateral */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="md:col-span-2 relative h-72 md:h-105 bg-(--bg-cartao) border border-(--borda-principal) rounded-sm overflow-hidden">
                <Image
                  src="/images/Obras/The Town 2025/coloque-em-relavancia-essa.jpeg"
                  alt="The Town 2025 — Torre da Tirolesa em destaque"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/70 to-transparent">
                  <p className="text-xs text-white/70 tracking-wide">Torre da Tirolesa — The Town 2025, São Paulo</p>
                </div>
              </div>
              <div className="relative h-72 md:h-105 bg-(--bg-cartao) border border-(--borda-principal) rounded-sm overflow-hidden">
                <Image
                  src="/images/Obras/The Town 2025/001.jpg"
                  alt="The Town 2025 — Ensaio estrutural"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>

            {/* Linha 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { src: "/images/Obras/The Town 2025/004.jpg", legenda: "Vista da estrutura — cabos de aço" },
                { src: "/images/Obras/The Town 2025/IMG_20250818_134709.jpg", legenda: "Registro do ensaio — ago 2025" },
                { src: "/images/Obras/The Town 2025/IMG_20250821_094526.jpg", legenda: "Registro do ensaio — ago 2025" },
              ].map((foto, i) => (
                <div key={i} className="relative h-52 bg-(--bg-cartao) border border-(--borda-principal) rounded-sm overflow-hidden">
                  <Image
                    src={foto.src}
                    alt={foto.legenda}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-linear-to-t from-black/70 to-transparent">
                    <p className="text-xs text-white/70 tracking-wide">{foto.legenda}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────── */}
        <section className="py-20 bg-(--bg-cartao) border-t border-(--borda-principal)">
          <div
            ref={sCta.ref}
            className={`max-w-3xl mx-auto px-6 text-center ${sCta.montado ? "reveal-fade-up" : ""} ${sCta.visivel ? "is-visible" : ""}`}
          >
            <div className="inline-flex items-center justify-center w-12 h-12 bg-(--bg-elevado) border border-(--borda-principal) rounded-sm mb-6 text-(--destaque-azul)">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <p className="text-xs tracking-[0.35em] text-(--destaque-azul) uppercase font-medium mb-4">Precisa validar estruturas temporárias?</p>
            <h2 className="text-3xl md:text-4xl font-black text-(--texto-principal) mb-4 leading-tight" style={{ fontFamily: "var(--font-outfit)" }}>
              Fale com a OFM
            </h2>
            <p className="text-sm text-(--texto-secundario) leading-relaxed mb-8 max-w-xl mx-auto">
              Ensaios em estruturas temporárias, torres, palcos e equipamentos de eventos — provas de carga estática e dinâmica com emissão de relatório técnico para aprovação.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/#contato" className="inline-flex items-center gap-2 px-6 py-3 bg-(--destaque-azul) hover:bg-(--destaque-azul-hover) text-white text-sm font-semibold rounded-sm transition-colors duration-200 cursor-pointer">
                Solicitar Proposta
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
              </Link>
              <Link href="/#obras" className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-(--borda-principal) hover:border-(--destaque-azul)/40 text-(--texto-secundario) hover:text-(--texto-principal) text-sm font-medium rounded-sm transition-colors duration-200 cursor-pointer">
                Ver mais obras
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Rodape />
      <BotaoWhatsApp />
    </>
  );
}
