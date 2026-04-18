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
              <span className="text-(--texto-principal)">Arena Corinthians</span>
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
    valor: "20.000",
    unidade: "",
    rotulo: "Lugares nas Arquibancadas Provisórias",
    icone: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    valor: "~80",
    unidade: "kg",
    rotulo: "Carga por Assento Simulada",
    icone: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    valor: "10",
    unidade: "Hz",
    rotulo: "Frequência Máxima Ensaiada",
    icone: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    valor: "2,5",
    unidade: "Hz",
    rotulo: "Vibração Real Aferida em Jogo",
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
  { campo: "Evento", valor: "Copa do Mundo FIFA 2014" },
  { campo: "Tipo de Ensaio", valor: "Prova de Carga Estática e Dinâmica" },
  { campo: "Estrutura", valor: "Arquibancadas Provisórias de Aço" },
  { campo: "Capacidade Original", valor: "40.000 pessoas" },
  { campo: "Capacidade Ampliada", valor: "60.000 pessoas" },
  { campo: "Carga por Assento", valor: "~80 kg (sacos de areia)" },
  { campo: "Frequência Ensaiada", valor: "1 a 10 Hz (Shaker)" },
  { campo: "Freq. Real Aferida", valor: "~2,5 Hz (torcida em gol)" },
  { campo: "Responsabilidade Técnica", valor: "Eng. Fernando Franco de Oliveira" },
];

export default function ArenaCorinthiansPage() {
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
            src="/images/Obras/Arena Corinthians/capa.jpg"
            alt="Arena Corinthians — Prova de Carga Copa 2014"
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
                Prova de Carga
              </span>
              <span className="px-3 py-1 bg-white/10 border border-white/20 text-white/70 text-[11px] tracking-[0.2em] uppercase rounded-sm">
                São Paulo, SP
              </span>
              <span className="px-3 py-1 bg-white/10 border border-white/20 text-white/70 text-[11px] tracking-[0.2em] uppercase rounded-sm">
                Copa do Mundo FIFA 2014
              </span>
              <span className="px-3 py-1 bg-(--destaque-azul)/10 border border-(--destaque-azul)/20 text-(--destaque-azul)/80 text-[11px] tracking-[0.2em] uppercase rounded-sm">
                Acervo do Engenheiro
              </span>
            </div>

            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-4"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Arena Corinthians
            </h1>
            <p className="text-sm md:text-base text-white/65 max-w-2xl leading-relaxed">
              Prova de carga estática e dinâmica nas arquibancadas provisórias construídas para ampliar a capacidade do estádio de 40 mil para 60 mil pessoas — Copa do Mundo FIFA 2014.
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
                  Prova de Carga Estática e Dinâmica
                </h2>
                <div className="space-y-5 text-sm text-(--texto-secundario) leading-relaxed">
                  <p>
                    Para a Copa do Mundo FIFA 2014, a Arena Corinthians precisou ampliar sua capacidade de{" "}
                    <strong className="text-(--texto-principal) font-semibold">40.000 para 60.000 pessoas</strong>. Foram construídas duas arquibancadas provisórias de aço com capacidade para{" "}
                    <strong className="text-(--texto-principal) font-semibold">10.000 lugares cada</strong>, exigindo validação estrutural completa antes do evento.
                  </p>
                  <p>
                    O ensaio estático instrumentou toda a estrutura com{" "}
                    <strong className="text-(--texto-principal) font-semibold">strain gages</strong> para monitoramento contínuo das tensões no aço, simulando a carga de ocupação com sacos de areia de aproximadamente{" "}
                    <strong className="text-(--texto-principal) font-semibold">80 kg por assento</strong> — reproduzindo fielmente a condição de lotação.
                  </p>
                  <p>
                    Na fase dinâmica, um{" "}
                    <strong className="text-(--texto-principal) font-semibold">Shaker</strong> foi instalado em pilares estruturais específicos, excitando a estrutura de{" "}
                    <strong className="text-(--texto-principal) font-semibold">1 a 10 Hz</strong>. Antes dos ensaios controlados, o monitoramento em jogo real constatou cerca de{" "}
                    <strong className="text-(--texto-principal) font-semibold">2,5 Hz</strong> como frequência de vibração da torcida ao pular em momentos de gol — garantindo uma margem de segurança expressiva frente à frequência ensaiada.
                  </p>
                </div>

                <div className="my-8 h-px bg-(--borda-principal)" />

                <p className="text-xs tracking-[0.3em] text-(--texto-suave) uppercase font-medium mb-4">Etapas do Ensaio</p>
                <ul className="space-y-3">
                  {[
                    "Instrumentação com strain gages em toda a estrutura de aço",
                    "Prova de carga estática com sacos de areia (~80 kg por assento)",
                    "Monitoramento em jogo real para aferir frequência natural da torcida",
                    "Ensaio dinâmico com Shaker de 1 a 10 Hz em pilares estruturais",
                    "Monitoramento ao vivo no primeiro jogo da Copa do Mundo 2014",
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
                      { nome: "Strain Gages", detalhe: "Tensões no aço estrutural" },
                      { nome: "Shaker", detalhe: "Excitação 1–10 Hz" },
                      { nome: "Sistema de Aquisição", detalhe: "Monitoramento em tempo real" },
                      { nome: "Sacos de Areia", detalhe: "Simulação de carga (~80 kg/assento)" },
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
                  "A vibração da torcida em um gol chegou a{" "}
                  <strong className="text-(--destaque-azul)">2,5 Hz</strong>. Ensaiamos a estrutura até{" "}
                  <strong className="text-(--destaque-azul)">10 Hz</strong> — essa margem de segurança comprovou a aptidão das arquibancadas para a Copa do Mundo, com{" "}
                  <strong className="text-(--destaque-azul)">monitoramento ao vivo</strong> durante o primeiro jogo da competição."
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
              </div>
            </div>

            {/* Linha 1: panorâmica grande + capa alternativa */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="md:col-span-2 relative h-72 md:h-105 bg-(--bg-cartao) border border-(--borda-principal) rounded-sm overflow-hidden">
                <Image
                  src="/images/Obras/Arena Corinthians/20140612_162007-PANO.jpg"
                  alt="Arena Corinthians — Vista panorâmica do ensaio"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/70 to-transparent">
                  <p className="text-xs text-white/70 tracking-wide">Vista panorâmica — arquibancadas provisórias durante ensaio</p>
                </div>
              </div>
              <div className="relative h-72 md:h-105 bg-(--bg-cartao) border border-(--borda-principal) rounded-sm overflow-hidden">
                <Image
                  src="/images/Obras/Arena Corinthians/Capa-2-opcao.jpg"
                  alt="Arena Corinthians — Copa do Mundo 2014"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>

            {/* Linha 2: registros do ensaio */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { src: "/images/Obras/Arena Corinthians/20140605_095714.jpg", legenda: "Registro do ensaio — 05 jun 2014" },
                { src: "/images/Obras/Arena Corinthians/20140605_095747.jpg", legenda: "Registro do ensaio — 05 jun 2014" },
              ].map((foto, i) => (
                <div key={i} className="relative h-56 bg-(--bg-cartao) border border-(--borda-principal) rounded-sm overflow-hidden">
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
            <p className="text-xs tracking-[0.35em] text-(--destaque-azul) uppercase font-medium mb-4">Precisa de provas de carga?</p>
            <h2 className="text-3xl md:text-4xl font-black text-(--texto-principal) mb-4 leading-tight" style={{ fontFamily: "var(--font-outfit)" }}>
              Fale com a OFM
            </h2>
            <p className="text-sm text-(--texto-secundario) leading-relaxed mb-8 max-w-xl mx-auto">
              Provas de carga estáticas e dinâmicas, instrumentação com strain gages, ensaios com Shaker e monitoramento ao vivo — para estruturas de qualquer porte e complexidade.
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
