"use client";

import Image from "next/image";
import Link from "next/link";
import Rodape from "@/components/Rodape";
import BotaoWhatsApp from "@/components/BotaoWhatsApp";
import BotaoTema from "@/components/BotaoTema";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// ── Navegação simplificada para páginas de obra ─────────────
function NavObra() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 pointer-events-none">
      <div className="w-full max-w-5xl pointer-events-auto">
        <header className="rounded-2xl border bg-(--bg-cartao)/90 backdrop-blur-md border-(--borda-principal) shadow-lg shadow-black/20">
          <nav className="px-5 py-2.5 flex items-center justify-between gap-4">
            {/* Logo */}
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

            {/* Breadcrumb */}
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-(--texto-suave)">
              <Link
                href="/#obras"
                className="hover:text-(--texto-principal) transition-colors duration-200 cursor-pointer"
              >
                Portfólio
              </Link>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
              <span className="text-(--texto-principal)">Museu do Amanhã</span>
            </div>

            {/* Ações */}
            <div className="flex items-center gap-2 shrink-0">
              <BotaoTema />
              <Link
                href="/#obras"
                className="sm:hidden flex items-center gap-1.5 text-xs text-(--texto-secundario) hover:text-(--texto-principal) transition-colors duration-200 cursor-pointer"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
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

// ── Dados da obra ────────────────────────────────────────────
const metricas = [
  {
    valor: "16",
    rotulo: "Pontos de Extensometria",
    icone: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
  },
  {
    valor: "2",
    rotulo: "Balanços — Terra e Mar",
    icone: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    valor: "70",
    unidade: "m",
    rotulo: "Maior Balanço — Lado Terra",
    icone: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 12h20M2 12c0-3 2-5 5-5s5 2 5 5 2 5 5 5 5-2 5-5" />
        <path d="M7 12v4M17 12v4" />
      </svg>
    ),
  },
  {
    valor: "Intl.",
    rotulo: "Artigo Publicado",
    icone: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
];

const fichaTecnica = [
  { campo: "Local", valor: "Rio de Janeiro, RJ" },
  { campo: "Tipo de Ensaio", valor: "Descimbramento — Monitoramento de Tensões" },
  { campo: "Estrutura", valor: "Metálica — 3.810 t de aço (Santiago Calatrava)" },
  { campo: "Balanços", valor: "Lado terra: 70 m / Lado mar: 65 m" },
  { campo: "Pontos de Medição", valor: "16 pontos — 8 por balanço" },
  { campo: "Sensores", valor: "Excel Sensors PA-06-250BA-120L (120 Ω, Constantan)" },
  { campo: "Sistema de Aquisição", valor: "Lynx ADS2000-IP — AqDados 7.2" },
  { campo: "Taxa de Aquisição", valor: "60 Hz" },
  { campo: "Duração", valor: "13 h (lado terra) / 15 h (lado mar)" },
  { campo: "Resultado", valor: "Tensões dentro do regime elástico — até 40% do previsto" },
  { campo: "Responsabilidade Técnica", valor: "Eng. Fernando Franco de Oliveira" },
];

// ── Página ───────────────────────────────────────────────────
export default function MuseuDoAmanhaPage() {
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
          {/* Foto de fundo */}
          <Image
            src="/images/Obras/Museu do Amanhã/Vista panorâmica do Museu do Amanhã na praça Mauá.png"
            alt="Museu do Amanhã — Vista panorâmica da Praça Mauá"
            fill
            className="object-cover"
            unoptimized
            priority
          />

          {/* Grade blueprint */}
          <div
            className="absolute inset-0 z-10 pointer-events-none opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(26,92,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(26,92,255,0.8) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          {/* Gradiente escuro de baixo para cima */}
          <div className="absolute inset-0 z-10 pointer-events-none bg-linear-to-t from-black via-black/55 to-black/15" />

          {/* Conteúdo sobre a imagem */}
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 pb-16 pt-40">
            {/* Voltar */}
            <Link
              href="/#obras"
              className="inline-flex items-center gap-2 text-xs text-white/60 hover:text-white/90 transition-colors duration-200 mb-8 cursor-pointer group"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:-translate-x-0.5 transition-transform duration-200"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
              Voltar ao Portfólio
            </Link>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="px-3 py-1 bg-(--destaque-azul)/20 border border-(--destaque-azul)/40 text-(--destaque-azul) text-[11px] font-bold tracking-[0.2em] uppercase rounded-sm">
                Descimbramento
              </span>
              <span className="px-3 py-1 bg-white/10 border border-white/20 text-white/70 text-[11px] tracking-[0.2em] uppercase rounded-sm">
                Rio de Janeiro, RJ
              </span>
              <span className="px-3 py-1 bg-white/10 border border-white/20 text-white/70 text-[11px] tracking-[0.2em] uppercase rounded-sm">
                Publicação Internacional
              </span>
              <span className="px-3 py-1 bg-(--destaque-azul)/10 border border-(--destaque-azul)/20 text-(--destaque-azul)/80 text-[11px] tracking-[0.2em] uppercase rounded-sm">
                Acervo do Engenheiro
              </span>
            </div>

            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-4"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Museu do Amanhã
            </h1>
            <p className="text-sm md:text-base text-white/65 max-w-2xl leading-relaxed">
              16 pontos de extensometria monitorando as tensões mecânicas durante o descimbramento dos balanços de 70 m e 65 m da cobertura metálica de 3.810 t — os maiores do Brasil à época. Resultados publicados em artigo técnico internacional.
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
                  className={`py-8 px-6 flex flex-col gap-2 ${
                    i < 3
                      ? "border-r border-(--borda-principal)/60"
                      : ""
                  } ${
                    i >= 2
                      ? "border-t md:border-t-0 border-(--borda-principal)/60"
                      : ""
                  }`}
                >
                  <div className="text-(--destaque-azul)/60">{m.icone}</div>
                  <span
                    className="text-3xl md:text-4xl font-black text-(--destaque-azul)"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {m.valor}
                  </span>
                  <span className="text-[11px] text-(--texto-suave) uppercase tracking-[0.18em] leading-snug">
                    {m.rotulo}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTEÚDO ─────────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-(--bg-principal)">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-start">

              {/* Esquerda: descrição técnica */}
              <div
                ref={sDescricao.ref}
                className={`${sDescricao.montado ? "reveal-fade-right" : ""} ${sDescricao.visivel ? "is-visible" : ""}`}
              >
                <p className="text-xs tracking-[0.35em] text-(--destaque-azul) uppercase font-medium mb-4">
                  Sobre o Ensaio
                </p>
                <h2
                  className="text-2xl md:text-3xl font-black text-(--texto-principal) mb-6 leading-tight"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  Descimbramento da Estrutura Metálica
                </h2>
                <div className="space-y-5 text-sm text-(--texto-secundario) leading-relaxed">
                  <p>
                    O Museu do Amanhã, projetado pelo arquiteto Santiago Calatrava, possui uma cobertura metálica de{" "}
                    <strong className="text-(--texto-principal) font-semibold">3.810 t de aço</strong>{" "}
                    com dois imponentes balanços — 70 m no lado terra e 65 m no lado mar — que, na época da construção, eram os maiores do Brasil. O descimbramento desses balanços foi um dos maiores desafios da engenharia nacional.
                  </p>
                  <p>
                    Foram instalados{" "}
                    <strong className="text-(--texto-principal) font-semibold">16 pontos de extensometria</strong>{" "}
                    (8 por balanço), distribuídos em 4 pontos nos banzos superiores e 4 nos banzos inferiores de cada balanço. Os sensores utilizados foram extensômetros elétricos{" "}
                    <strong className="text-(--texto-principal) font-semibold">Excel Sensors PA-06-250BA-120L</strong>{" "}
                    (120 Ω, Constantan), adquiridos a 60 Hz pelo sistema{" "}
                    <strong className="text-(--texto-principal) font-semibold">Lynx ADS2000-IP</strong>.
                  </p>
                  <p>
                    Os dados foram acompanhados em tempo real pelo projetista e pelo fabricante. O monitoramento durou{" "}
                    <strong className="text-(--texto-principal) font-semibold">13 horas no lado terra</strong>{" "}
                    e{" "}
                    <strong className="text-(--texto-principal) font-semibold">15 horas no lado mar</strong>, com período adicional pós-descimbre para estabilização. Todas as tensões ficaram dentro do regime elástico do aço, atingindo no máximo 40% dos valores previstos no modelo numérico — resultado muito bem sucedido.
                  </p>
                  <p>
                    O trabalho foi documentado e publicado como{" "}
                    <strong className="text-(--texto-principal) font-semibold">artigo técnico internacional</strong>, apresentado pelo Grupo Falcão Bauer, com a participação direta do Eng. Fernando Franco de Oliveira na execução do ensaio.
                  </p>
                </div>

                <div className="my-8 h-px bg-(--borda-principal)" />

                <p className="text-xs tracking-[0.3em] text-(--texto-suave) uppercase font-medium mb-4">
                  Etapas do Processo
                </p>
                <ul className="space-y-3">
                  {[
                    "Inspeção e análise dos extensômetros previamente instalados",
                    "Conexão ao sistema de aquisição Lynx ADS2000-IP",
                    "Aquisição contínua a 60 Hz durante o descimbramento",
                    "Acompanhamento em tempo real pelo projetista e fabricante",
                    "Monitoramento de 6 h pós-descimbre para estabilização",
                    "Correlação com modelo de elementos finitos fornecido pelo projetista",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-(--texto-secundario)">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-(--destaque-azul)/60 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direita: ficha técnica */}
              <div
                ref={sFicha.ref}
                className={`${sFicha.montado ? "reveal-fade-left" : ""} ${sFicha.visivel ? "is-visible" : ""}`}
              >
                <p className="text-xs tracking-[0.35em] text-(--destaque-azul) uppercase font-medium mb-4">
                  Ficha Técnica
                </p>
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
                      className={`flex justify-between items-center px-4 py-3.5 border-b border-(--borda-principal) last:border-b-0 ${
                        i % 2 === 0 ? "bg-(--bg-elevado)" : "bg-(--bg-cartao)"
                      }`}
                    >
                      <span className="text-[11px] text-(--texto-suave) uppercase tracking-[0.15em] shrink-0">
                        {item.campo}
                      </span>
                      <span className="text-xs text-(--texto-principal) font-medium text-right ml-4">
                        {item.valor}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Equipamentos utilizados */}
                <div className="mt-8">
                  <p className="text-xs tracking-[0.3em] text-(--texto-suave) uppercase font-medium mb-4">
                    Equipamentos
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { nome: "Excel Sensors PA-06-250BA-120L", detalhe: "120 Ω — Constantan" },
                      { nome: "Lynx ADS2000-IP", detalhe: "Sistema de aquisição" },
                      { nome: "AqDados 7.2", detalhe: "Software de aquisição" },
                      { nome: "AqDAnalysis", detalhe: "Tratamento de dados" },
                    ].map((eq, i) => (
                      <div
                        key={i}
                        className="p-3 bg-(--bg-elevado) border border-(--borda-principal) rounded-sm"
                      >
                        <p className="text-xs font-semibold text-(--texto-principal) mb-0.5">
                          {eq.nome}
                        </p>
                        <p className="text-[11px] text-(--texto-suave)">{eq.detalhe}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CALLOUT — Publicação Internacional ───────────── */}
        <section className="py-16 bg-(--bg-cartao) border-y border-(--borda-principal)">
          <div className="max-w-4xl mx-auto px-6">
            <div
              ref={sCallout.ref}
              className={`${sCallout.montado ? "reveal-fade-up" : ""} ${sCallout.visivel ? "is-visible" : ""}`}
            >
              <div className="relative pl-8 border-l-2 border-(--destaque-azul)">
                {/* Ícone de citação */}
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="absolute -top-1 -left-5 text-(--destaque-azul)"
                >
                  <path
                    d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"
                    fill="currentColor"
                    opacity="0.25"
                  />
                  <path
                    d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"
                    fill="currentColor"
                    opacity="0.25"
                  />
                </svg>

                <p className="text-base md:text-lg text-(--texto-principal) leading-relaxed mb-6">
                  "Todas as variações de tensões mecânicas e suas magnitudes ficaram abaixo das tensões previstas e{" "}
                  <strong className="text-(--destaque-azul)">bem abaixo do limite de escoamento do aço ASTM A572</strong>{" "}
                  — as tensões se estabilizaram em até 40% das previstas, confirmando que a estrutura trabalhou dentro do{" "}
                  <strong className="text-(--destaque-azul)">regime elástico e das condições de projeto</strong>. Foi feito com dados muito precisos e foi muito bem sucedido."
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
              <p className="text-xs tracking-[0.35em] text-(--destaque-azul) uppercase font-medium mb-3">
                Galeria
              </p>
              <h2
                className="text-2xl md:text-3xl font-black text-(--texto-principal)"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Registros do Ensaio
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2 relative h-72 md:h-[420px] bg-(--bg-cartao) border border-(--borda-principal) rounded-sm overflow-hidden">
                <Image
                  src="/images/Obras/Museu do Amanhã/003.jpg"
                  alt="Museu do Amanhã — Descimbramento lado terra"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/70 to-transparent">
                  <p className="text-xs text-white/70 tracking-wide">Lado terra durante o descimbramento — 20/02/2015</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                {[
                  { src: "/images/Obras/Museu do Amanhã/001.jpg", legenda: "Balanço lado terra sendo montado — 10/01/2015" },
                  { src: "/images/Obras/Museu do Amanhã/002.jpg", legenda: "Ponta içada e cimbramento completo — 14/02/2015" },
                ].map((foto, i) => (
                  <div key={i} className="relative flex-1 min-h-49 bg-(--bg-cartao) border border-(--borda-principal) rounded-sm overflow-hidden">
                    <Image src={foto.src} alt={foto.legenda} fill className="object-cover" unoptimized />
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-linear-to-t from-black/70 to-transparent">
                      <p className="text-[10px] text-white/60 tracking-wide">{foto.legenda}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              {[
                { src: "/images/Obras/Museu do Amanhã/004.jpg", legenda: "Após descimbramento — 05/04/2015" },
                { src: "/images/Obras/Museu do Amanhã/005.jpg", legenda: "Balanço lado mar — montagem — 10/01/2015" },
                { src: "/images/Obras/Museu do Amanhã/006.jpg", legenda: "Lado mar durante descimbramento — 09/04/2015" },
              ].map((foto, i) => (
                <div key={i} className="relative h-56 bg-(--bg-cartao) border border-(--borda-principal) rounded-sm overflow-hidden">
                  <Image src={foto.src} alt={foto.legenda} fill className="object-cover" unoptimized />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-linear-to-t from-black/70 to-transparent">
                    <p className="text-[10px] text-white/60 tracking-wide">{foto.legenda}</p>
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
            {/* Ícone decorativo */}
            <div className="inline-flex items-center justify-center w-12 h-12 bg-(--bg-elevado) border border-(--borda-principal) rounded-sm mb-6 text-(--destaque-azul)">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>

            <p className="text-xs tracking-[0.35em] text-(--destaque-azul) uppercase font-medium mb-4">
              Precisa de instrumentação?
            </p>
            <h2
              className="text-3xl md:text-4xl font-black text-(--texto-principal) mb-4 leading-tight"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Fale com a OFM
            </h2>
            <p className="text-sm text-(--texto-secundario) leading-relaxed mb-8 max-w-xl mx-auto">
              Projetos de instrumentação, provas de carga, ensaios dinâmicos e análises estruturais para obras de qualquer porte — com precisão metrológica e validação técnica comprovada.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/#contato"
                className="inline-flex items-center gap-2 px-6 py-3 bg-(--destaque-azul) hover:bg-(--destaque-azul-hover) text-white text-sm font-semibold rounded-sm transition-colors duration-200 cursor-pointer"
              >
                Solicitar Proposta
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </Link>
              <Link
                href="/#obras"
                className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-(--borda-principal) hover:border-(--destaque-azul)/40 text-(--texto-secundario) hover:text-(--texto-principal) text-sm font-medium rounded-sm transition-colors duration-200 cursor-pointer"
              >
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
