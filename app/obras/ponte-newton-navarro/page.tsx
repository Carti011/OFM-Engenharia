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
              <span className="text-(--texto-principal)">Ponte Newton Navarro</span>
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
    valor: "6",
    unidade: "",
    rotulo: "Tipos de Sensor Utilizados",
    icone: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
  },
  {
    valor: "Estai",
    unidade: "",
    rotulo: "Célula de Carga em Cada",
    icone: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    valor: "Nordeste",
    unidade: "",
    rotulo: "Maior Ponte Estaiada do",
    icone: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    valor: "Completo",
    unidade: "",
    rotulo: "Da Construção à Inauguração",
    icone: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

const fichaTecnica = [
  { campo: "Local", valor: "Natal, RN" },
  { campo: "Tipo de Ensaio", valor: "Monitoramento da Construção + Estático e Dinâmico" },
  { campo: "Células de Carga", valor: "Uma por estai — verificação do estaiamento" },
  { campo: "PT-100", valor: "Temperatura dentro do concreto (antes da concretagem)" },
  { campo: "Inclinômetros", valor: "Inclinação dos pilares" },
  { campo: "LVDTs", valor: "Sensores de deslocamento" },
  { campo: "Anemômetros", valor: "Velocidade do vento" },
  { campo: "Acelerômetros", valor: "Análise dinâmica pós-construção" },
  { campo: "Responsabilidade Técnica", valor: "Eng. Fernando Franco de Oliveira" },
];

export default function PonteNewtonNavarroPage() {
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
            src="/images/Obras/Ponte Newton Navarro/Ponte Estaiada Newton Navarro (Natal-RN).jpeg"
            alt="Ponte Estaiada Newton Navarro — Natal, RN"
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
                Ensaio Estrutural
              </span>
              <span className="px-3 py-1 bg-white/10 border border-white/20 text-white/70 text-[11px] tracking-[0.2em] uppercase rounded-sm">
                Natal, RN
              </span>
              <span className="px-3 py-1 bg-white/10 border border-white/20 text-white/70 text-[11px] tracking-[0.2em] uppercase rounded-sm">
                Da Construção à Inauguração
              </span>
              <span className="px-3 py-1 bg-(--destaque-azul)/10 border border-(--destaque-azul)/20 text-(--destaque-azul)/80 text-[11px] tracking-[0.2em] uppercase rounded-sm">
                Acervo do Engenheiro
              </span>
            </div>

            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-4"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Ponte Newton
              <br />Navarro
            </h1>
            <p className="text-sm md:text-base text-white/65 max-w-2xl leading-relaxed">
              Instrumentação completa da maior ponte estaiada do Nordeste — células de carga em cada estai, PT-100, inclinômetros, LVDTs, anemômetros e acelerômetros. Ensaios estático e dinâmico.
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
                  Instrumentação da Construção à Inauguração
                </h2>
                <div className="space-y-5 text-sm text-(--texto-secundario) leading-relaxed">
                  <p>
                    A Ponte Newton Navarro, maior ponte estaiada do Nordeste brasileiro, recebeu instrumentação completa desde a fase de construção até a inauguração. A mesma metodologia aplicada em outras grandes pontes estaiadas do país foi replicada aqui, com{" "}
                    <strong className="text-(--texto-principal) font-semibold">seis tipos de sensores</strong> monitorando cada aspecto crítico da estrutura.
                  </p>
                  <p>
                    Cada estai da ponte foi equipado com uma{" "}
                    <strong className="text-(--texto-principal) font-semibold">célula de carga</strong> para verificação do estaiamento — garantindo que a força em cada cabo estava dentro dos valores de projeto. Antes da concretagem do tabuleiro, foram instalados sensores{" "}
                    <strong className="text-(--texto-principal) font-semibold">PT-100</strong> para monitoramento de temperatura dentro do concreto, além de{" "}
                    <strong className="text-(--texto-principal) font-semibold">inclinômetros</strong> nos pilares e{" "}
                    <strong className="text-(--texto-principal) font-semibold">LVDTs</strong> para medição de deslocamentos.
                  </p>
                  <p>
                    <strong className="text-(--texto-principal) font-semibold">Anemômetros</strong> registraram a velocidade do vento durante toda a obra. Após a conclusão da construção, foram realizados ensaios com{" "}
                    <strong className="text-(--texto-principal) font-semibold">acelerômetros</strong> para a análise dinâmica da estrutura, complementados por um{" "}
                    <strong className="text-(--texto-principal) font-semibold">ensaio estático e um ensaio dinâmico</strong> completos — encerrando o ciclo de instrumentação com a aprovação da estrutura para inauguração.
                  </p>
                </div>

                <div className="my-8 h-px bg-(--borda-principal)" />

                <p className="text-xs tracking-[0.3em] text-(--texto-suave) uppercase font-medium mb-4">Sensores Utilizados</p>
                <ul className="space-y-3">
                  {[
                    "Células de carga — verificação do estaiamento em cada cabo",
                    "PT-100 — temperatura dentro do concreto (antes da concretagem)",
                    "Inclinômetros — monitoramento da inclinação dos pilares",
                    "LVDTs — sensores de deslocamento",
                    "Anemômetros — velocidade do vento durante a obra",
                    "Acelerômetros — análise dinâmica pós-construção",
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
                      { nome: "Células de Carga", detalhe: "Uma por estai" },
                      { nome: "PT-100", detalhe: "Temperatura no concreto" },
                      { nome: "Inclinômetros", detalhe: "Pilares" },
                      { nome: "LVDTs", detalhe: "Deslocamentos" },
                      { nome: "Anemômetros", detalhe: "Velocidade do vento" },
                      { nome: "Acelerômetros", detalhe: "Análise dinâmica" },
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
                  "A maior ponte estaiada do Nordeste, instrumentada com a mesma metodologia completa — cada estai com{" "}
                  <strong className="text-(--destaque-azul)">célula de carga</strong>, temperatura dentro do concreto antes de concretar, inclinômetros, LVDTs, anemômetros e, ao final,{" "}
                  <strong className="text-(--destaque-azul)">ensaios estático e dinâmico</strong> completos na estrutura."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-px bg-(--destaque-azul)/40" />
                  <p className="text-[11px] text-(--texto-suave) uppercase tracking-[0.25em]">
                    Eng. Fernando Franco de Oliveira — Responsabilidade Técnica
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
                <p className="text-xs text-(--texto-suave) hidden sm:block">Mais fotos em breve</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2 relative h-72 md:h-105 bg-(--bg-cartao) border border-(--borda-principal) rounded-sm overflow-hidden">
                <Image
                  src="/images/Obras/Ponte Newton Navarro/Ponte Estaiada Newton Navarro (Natal-RN).jpeg"
                  alt="Ponte Estaiada Newton Navarro — Natal, RN"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/70 to-transparent">
                  <p className="text-xs text-white/70 tracking-wide">Ponte Estaiada Newton Navarro — Natal, RN</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                {["Instrumentação dos estais — células de carga", "Ensaio dinâmico pós-construção"].map((legenda, i) => (
                  <div key={i} className="relative flex-1 min-h-32 bg-(--bg-cartao) border border-(--borda-principal) border-dashed rounded-sm flex flex-col items-center justify-center gap-2 overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "linear-gradient(var(--blueprint-30) 1px, transparent 1px), linear-gradient(90deg, var(--blueprint-30) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-(--icone-placeholder) relative z-10">
                      <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
                    </svg>
                    <span className="text-[10px] text-(--icone-placeholder) tracking-[0.2em] uppercase relative z-10 text-center px-4">{legenda}</span>
                    <span className="text-[9px] text-(--icone-placeholder)/60 tracking-widest uppercase relative z-10">Em breve</span>
                  </div>
                ))}
              </div>
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
            <p className="text-xs tracking-[0.35em] text-(--destaque-azul) uppercase font-medium mb-4">Precisa instrumentar uma grande estrutura?</p>
            <h2 className="text-3xl md:text-4xl font-black text-(--texto-principal) mb-4 leading-tight" style={{ fontFamily: "var(--font-outfit)" }}>
              Fale com a OFM
            </h2>
            <p className="text-sm text-(--texto-secundario) leading-relaxed mb-8 max-w-xl mx-auto">
              Instrumentação completa de pontes e grandes estruturas — células de carga, PT-100, inclinômetros, LVDTs, anemômetros e acelerômetros, do início da construção à inauguração.
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
