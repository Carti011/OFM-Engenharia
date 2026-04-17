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
              <span className="text-(--texto-principal)">Metrô RJ / CPTM</span>
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
    valor: "10",
    unidade: "",
    rotulo: "Vagões Instrumentados",
    icone: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="1" y="6" width="22" height="12" rx="2" />
        <path d="M1 12h22" />
        <path d="M7 18v2M17 18v2" />
      </svg>
    ),
  },
  {
    valor: "3",
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
    valor: "2–3",
    unidade: "h",
    rotulo: "Estabilização por Ensaio",
    icone: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    valor: "100%",
    unidade: "",
    rotulo: "Vagões Aprovados",
    icone: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

const fichaTecnica = [
  { campo: "Local", valor: "Rio de Janeiro, RJ" },
  { campo: "Sistema", valor: "Metrô do Rio de Janeiro / CPTM" },
  { campo: "Tipo de Ensaio", valor: "Prova de Carga Estrutural" },
  { campo: "Unidades Testadas", valor: "10 vagões (carros)" },
  { campo: "Carga Aplicada", valor: "Sacos de areia (carga distribuída)" },
  { campo: "Sensores", valor: "Extensômetros elétricos, LVDT, PT-100" },
  { campo: "Processo", valor: "Carregamento e descarregamento controlado" },
  { campo: "Estabilização", valor: "2 a 3 horas por ensaio" },
  { campo: "Resultado", valor: "Todos os vagões aprovados" },
];

export default function MetroRjCptmPage() {
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
            src="/images/Obras/Metrô RJ : CPTM/capa.jpg"
            alt="Metrô RJ / CPTM — Prova de Carga em Vagões"
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
                Rio de Janeiro, RJ
              </span>
              <span className="px-3 py-1 bg-(--destaque-azul)/15 border border-(--destaque-azul)/30 text-white/70 text-[11px] tracking-[0.2em] uppercase rounded-sm">
                10 Vagões — Todos Aprovados
              </span>
            </div>

            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-4"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Metrô RJ / CPTM
            </h1>
            <p className="text-sm md:text-base text-white/65 max-w-2xl leading-relaxed">
              Prova de carga em 10 vagões com extensômetros elétricos, LVDT e PT-100 de temperatura — validação estrutural para continuidade em operação com todos os carros aprovados.
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
                  Prova de Carga em Vagões Ferroviários
                </h2>
                <div className="space-y-5 text-sm text-(--texto-secundario) leading-relaxed">
                  <p>
                    Para verificar a integridade estrutural após período em operação, foram realizados ensaios de prova de carga em{" "}
                    <strong className="text-(--texto-principal) font-semibold">10 vagões do Metrô do Rio de Janeiro</strong>. Cada carro foi instrumentado com extensômetros elétricos para medição de deformações,{" "}
                    <strong className="text-(--texto-principal) font-semibold">LVDTs</strong> para deslocamentos e sensores{" "}
                    <strong className="text-(--texto-principal) font-semibold">PT-100</strong> para monitoramento de temperatura ao longo do ensaio.
                  </p>
                  <p>
                    O carregamento foi aplicado de forma controlada com{" "}
                    <strong className="text-(--texto-principal) font-semibold">sacos de areia</strong>. Após a aplicação da carga, aguardou-se entre{" "}
                    <strong className="text-(--texto-principal) font-semibold">2 e 3 horas</strong> para estabilização completa antes da leitura final — garantindo que os dados de deformação e deslocamento representassem o comportamento real da estrutura sob carga permanente.
                  </p>
                  <p>
                    Concluída a fase de carregamento, foi realizado o{" "}
                    <strong className="text-(--texto-principal) font-semibold">descarregamento controlado</strong> para completar o ciclo do ensaio. O resultado determinou a aprovação ou reprovação de cada vagão individualmente.{" "}
                    <strong className="text-(--texto-principal) font-semibold">Todos os 10 vagões foram aprovados</strong>, confirmando sua aptidão para continuidade em operação.
                  </p>
                </div>

                <div className="my-8 h-px bg-(--borda-principal)" />

                <p className="text-xs tracking-[0.3em] text-(--texto-suave) uppercase font-medium mb-4">Etapas do Ensaio</p>
                <ul className="space-y-3">
                  {[
                    "Instrumentação de 10 vagões com extensômetros, LVDT e PT-100",
                    "Aplicação de carga distribuída com sacos de areia",
                    "Estabilização de 2 a 3 horas após carregamento",
                    "Leitura simultânea de deformações, deslocamentos e temperatura",
                    "Descarregamento controlado e análise dos resultados",
                    "Aprovação individual de cada vagão para continuidade em operação",
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
                      { nome: "Extensômetros Elétricos", detalhe: "Deformações na estrutura" },
                      { nome: "LVDT", detalhe: "Medição de deslocamentos" },
                      { nome: "PT-100", detalhe: "Monitoramento de temperatura" },
                      { nome: "Sacos de Areia", detalhe: "Carga distribuída controlada" },
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
                  "Os vagões já estavam em operação há algum tempo. O ensaio foi feito para verificar se podiam continuar rodando —{" "}
                  <strong className="text-(--destaque-azul)">todos os 10 foram aprovados</strong>, com integridade estrutural confirmada e aptidão para continuidade em operação."
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

            {/* Linha 1: destaque + lateral */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="md:col-span-2 relative h-72 md:h-105 bg-(--bg-cartao) border border-(--borda-principal) rounded-sm overflow-hidden">
                <Image
                  src="/images/Obras/Metrô RJ : CPTM/20221216_135437.jpg"
                  alt="Metrô RJ — Instrumentação dos vagões"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/70 to-transparent">
                  <p className="text-xs text-white/70 tracking-wide">Instrumentação — vagões do Metrô do Rio de Janeiro</p>
                </div>
              </div>
              <div className="relative h-72 md:h-105 bg-(--bg-cartao) border border-(--borda-principal) rounded-sm overflow-hidden">
                <Image
                  src="/images/Obras/Metrô RJ : CPTM/20221227_131758.jpg"
                  alt="Metrô RJ — Ensaio de carga"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>

            {/* Linha 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { src: "/images/Obras/Metrô RJ : CPTM/20221227_131813.jpg", legenda: "Aplicação de carga — sacos de areia" },
                { src: "/images/Obras/Metrô RJ : CPTM/20221227_131822.jpg", legenda: "Monitoramento de deformações e deslocamentos" },
                { src: "/images/Obras/Metrô RJ : CPTM/20221227_131838.jpg", legenda: "Registro do ensaio — dez 2022" },
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
            <p className="text-xs tracking-[0.35em] text-(--destaque-azul) uppercase font-medium mb-4">Precisa validar estruturas em operação?</p>
            <h2 className="text-3xl md:text-4xl font-black text-(--texto-principal) mb-4 leading-tight" style={{ fontFamily: "var(--font-outfit)" }}>
              Fale com a OFM
            </h2>
            <p className="text-sm text-(--texto-secundario) leading-relaxed mb-8 max-w-xl mx-auto">
              Provas de carga em estruturas ferroviárias, instrumentação com extensômetros, LVDT e sensores de temperatura — para validação e certificação de qualquer estrutura em operação.
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
