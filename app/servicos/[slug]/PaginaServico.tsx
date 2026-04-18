"use client";

import Link from "next/link";
import Image from "next/image";
import Rodape from "@/components/Rodape";
import BotaoWhatsApp from "@/components/BotaoWhatsApp";
import BotaoTema from "@/components/BotaoTema";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { ServicoDetalhado, BlocoServico } from "@/data/servicos-detalhados";

// ── Navegação ────────────────────────────────────────────────
function NavServico({ titulo }: { titulo: string }) {
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

            <div className="hidden sm:flex items-center gap-1.5 text-xs text-(--texto-suave) min-w-0">
              <Link
                href="/servicos"
                className="hover:text-(--texto-principal) transition-colors duration-200 cursor-pointer shrink-0"
              >
                Serviços
              </Link>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="shrink-0">
                <polyline points="9 18 15 12 9 6" />
              </svg>
              <span className="text-(--texto-principal) truncate">{titulo}</span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <BotaoTema />
              <Link
                href="/servicos"
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

// ── Bloco de tipo de serviço (subcomponente com hooks próprios) ──
function SecaoBloco({
  bloco,
  ehAzul,
  indice,
  total,
}: {
  bloco: BlocoServico;
  ehAzul: boolean;
  indice: number;
  total: number;
}) {
  const sSobre = useScrollReveal({ threshold: 0.08 });
  const sAplicacoes = useScrollReveal({ threshold: 0.06 });
  const sEquipamentos = useScrollReveal({ threshold: 0.06 });
  const sNormas = useScrollReveal({ threshold: 0.08 });
  const sGaleria = useScrollReveal({ threshold: 0.05 });

  const corAcento = ehAzul ? "text-(--destaque-azul)" : "text-(--destaque-azul)";
  const bgAcento = ehAzul ? "bg-(--destaque-azul)" : "bg-(--destaque-azul)";
  const bgAcentoSuave = ehAzul ? "bg-(--destaque-azul)/10" : "bg-(--destaque-azul)/10";
  const bordaAcento = ehAzul ? "border-(--destaque-azul)/30" : "border-(--destaque-azul)/30";
  const ultimoBloco = indice === total - 1;

  return (
    <div
      id={bloco.ancora}
      className={`border-t border-(--borda-principal) ${ultimoBloco ? "" : ""}`}
    >
      {/* Cabeçalho do bloco */}
      <div className={`py-16 md:py-20 ${indice % 2 === 0 ? "bg-(--bg-principal)" : "bg-(--bg-cartao)"}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div
            ref={sSobre.ref}
            className={`${sSobre.montado ? "reveal-fade-right" : ""} ${sSobre.visivel ? "is-visible" : ""}`}
          >
            {/* Indicador numérico + título */}
            <div className="flex items-start gap-5 mb-8">
              <div
                className={`shrink-0 w-10 h-10 flex items-center justify-center rounded-sm border ${bgAcentoSuave} ${bordaAcento} ${corAcento} font-black text-sm`}
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                {String(indice + 1).padStart(2, "0")}
              </div>
              <div>
                <h2
                  className="text-2xl md:text-3xl font-black text-(--texto-principal) leading-tight mb-2"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {bloco.titulo}
                </h2>
                <p className="text-sm text-(--texto-secundario) leading-relaxed max-w-2xl">
                  {bloco.subtitulo}
                </p>
              </div>
            </div>

            {/* Parágrafos */}
            <div className="max-w-3xl space-y-4 pl-15">
              {bloco.sobre.map((p, i) => (
                <p key={i} className="text-sm text-(--texto-secundario) leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Aplicações */}
      {bloco.aplicacoes && bloco.aplicacoes.length > 0 && (
        <div className={`py-14 border-t border-(--borda-principal) ${indice % 2 === 0 ? "bg-(--bg-cartao)" : "bg-(--bg-principal)"}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div
              ref={sAplicacoes.ref}
              className={`${sAplicacoes.montado ? "reveal-fade-up" : ""} ${sAplicacoes.visivel ? "is-visible" : ""}`}
            >
              <p className={`text-xs tracking-[0.35em] uppercase font-medium mb-3 ${corAcento}`}>
                Onde Aplicamos
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {bloco.aplicacoes.map((a, i) => (
                  <div
                    key={i}
                    className={`p-5 border border-(--borda-principal) rounded-sm ${indice % 2 === 0 ? "bg-(--bg-principal)" : "bg-(--bg-cartao)"}`}
                  >
                    <div className={`w-1.5 h-1.5 rounded-full mb-4 ${bgAcento}`} />
                    <h3
                      className="text-sm font-bold text-(--texto-principal) mb-2 leading-snug"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      {a.titulo}
                    </h3>
                    <p className="text-xs text-(--texto-suave) leading-relaxed">{a.descricao}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Equipamentos */}
      {bloco.equipamentos && bloco.equipamentos.length > 0 && (
        <div className={`py-14 border-t border-(--borda-principal) ${indice % 2 === 0 ? "bg-(--bg-principal)" : "bg-(--bg-cartao)"}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div
              ref={sEquipamentos.ref}
              className={`${sEquipamentos.montado ? "reveal-fade-up" : ""} ${sEquipamentos.visivel ? "is-visible" : ""}`}
            >
              <p className={`text-xs tracking-[0.35em] uppercase font-medium mb-3 ${corAcento}`}>
                Instrumentação
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {bloco.equipamentos.map((e, i) => (
                  <div
                    key={i}
                    className={`p-4 border border-(--borda-principal) rounded-sm ${indice % 2 === 0 ? "bg-(--bg-cartao)" : "bg-(--bg-principal)"}`}
                  >
                    <div className={`h-0.5 w-6 mb-4 ${bgAcento}/60`} />
                    <p className="text-xs font-bold text-(--texto-principal) mb-1 leading-snug">
                      {e.nome}
                    </p>
                    <p className="text-[11px] text-(--texto-suave) leading-relaxed">{e.detalhe}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Normas do bloco */}
      {bloco.normas && bloco.normas.length > 0 && (
        <div className={`py-8 border-t border-(--borda-principal) ${indice % 2 === 0 ? "bg-(--bg-cartao)" : "bg-(--bg-principal)"}`}>
          <div
            ref={sNormas.ref}
            className={`max-w-7xl mx-auto px-6 ${sNormas.montado ? "reveal-fade-up" : ""} ${sNormas.visivel ? "is-visible" : ""}`}
          >
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <span className="text-[11px] text-(--texto-suave) uppercase tracking-[0.25em] shrink-0">
                Normas aplicáveis
              </span>
              <div className="h-px flex-1 bg-(--borda-principal) hidden sm:block" />
              <div className="flex flex-wrap gap-2">
                {bloco.normas.map((n, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-(--bg-elemento) border border-(--borda-etiqueta) text-(--texto-suave) text-[11px] font-mono rounded-sm"
                  >
                    {n}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Galeria do bloco */}
      {bloco.galeria && bloco.galeria.length > 0 && (
        <div className={`py-14 border-t border-(--borda-principal) ${indice % 2 === 0 ? "bg-(--bg-principal)" : "bg-(--bg-cartao)"}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div
              ref={sGaleria.ref}
              className={`${sGaleria.montado ? "reveal-fade-up" : ""} ${sGaleria.visivel ? "is-visible" : ""}`}
            >
              <p className={`text-xs tracking-[0.35em] uppercase font-medium mb-3 ${corAcento}`}>
                Galeria
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {bloco.galeria.map((item, i) => (
                  <div
                    key={i}
                    className={`relative bg-(--bg-cartao) border border-(--borda-principal) rounded-sm overflow-hidden ${
                      item.destaque ? "md:col-span-2 h-72 md:h-95" : "h-52"
                    }`}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    {item.legenda && (
                      <div className="absolute bottom-0 left-0 right-0 p-3 bg-linear-to-t from-black/70 to-transparent">
                        <p className="text-[11px] text-white/70 tracking-wide">{item.legenda}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Página ───────────────────────────────────────────────────
export default function PaginaServico({ servico }: { servico: ServicoDetalhado }) {
  const ehAzul = servico.acento === "azul";
  const temTipos = !!servico.tiposDeServico && servico.tiposDeServico.length > 0;

  const sSobre = useScrollReveal({ threshold: 0.1 });
  const sMetricas = useScrollReveal({ threshold: 0.1 });
  const sAplicacoes = useScrollReveal({ threshold: 0.08 });
  const sEquipamentos = useScrollReveal({ threshold: 0.08 });
  const sNormas = useScrollReveal({ threshold: 0.1 });
  const sGaleria = useScrollReveal({ threshold: 0.08 });
  const sObras = useScrollReveal({ threshold: 0.08 });
  const sCta = useScrollReveal({ threshold: 0.1 });
  const sNav = useScrollReveal({ threshold: 0.1 });

  const corAcento = ehAzul ? "text-(--destaque-azul)" : "text-(--destaque-azul)";
  const bgAcento = ehAzul ? "bg-(--destaque-azul)" : "bg-(--destaque-azul)";

  // obras agregadas de todos os tipos (quando tiposDeServico presente)
  const obrasAgregadas = temTipos
    ? (servico.tiposDeServico ?? [])
        .flatMap((t) => t.obras ?? [])
        .filter(
          (obra, idx, arr) =>
            arr.findIndex((o) => o.titulo === obra.titulo) === idx
        )
    : servico.obras;

  return (
    <>
      <NavServico titulo={servico.titulo} />
      <main>

        {/* ── HERO ────────────────────────────────────────── */}
        {servico.imagemHero ? (
          <section className="relative min-h-[65vh] flex items-end overflow-hidden">
            <Image
              src={servico.imagemHero}
              alt={servico.titulo}
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
                href="/#servicos"
                className="inline-flex items-center gap-2 text-xs text-white/60 hover:text-white/90 transition-colors duration-200 mb-8 cursor-pointer group"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-0.5 transition-transform duration-200">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
                Voltar aos Serviços
              </Link>
              <div className="flex flex-wrap gap-2 mb-5">
                <span className={`px-3 py-1 text-[11px] font-bold tracking-[0.2em] uppercase rounded-sm border ${ehAzul ? "bg-(--destaque-azul)/20 border-(--destaque-azul)/40 text-white/80" : "bg-(--destaque-azul)/20 border-(--destaque-azul)/40 text-(--destaque-azul)"}`}>
                  {servico.categoriaLabel}
                </span>
                <span className="px-3 py-1 bg-white/10 border border-white/20 text-white/70 text-[11px] tracking-[0.2em] uppercase rounded-sm">
                  O Que Fazemos
                </span>
              </div>
              <h1
                className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-4"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                {servico.titulo}
              </h1>
              <p className="text-sm md:text-base text-white/65 max-w-2xl leading-relaxed">
                {servico.subtitulo}
              </p>
            </div>
          </section>
        ) : (
          <section className="relative pt-40 pb-20 bg-(--bg-secao) border-b border-(--borda-principal) overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.05]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(26,92,255,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(26,92,255,0.9) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />
            <div className="absolute left-0 inset-y-0 w-px bg-(--destaque-azul)/10 pointer-events-none" />
            <div className="absolute left-5 inset-y-0 w-px bg-(--destaque-azul)/06 pointer-events-none" />
            <div
              className="absolute right-6 md:right-20 top-1/2 -translate-y-1/2 text-[160px] md:text-[260px] font-black leading-none select-none pointer-events-none opacity-[0.025]"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              {ehAzul ? "F" : "M"}
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-6">
              <Link
                href="/#servicos"
                className="inline-flex items-center gap-2 text-xs text-(--texto-suave) hover:text-(--texto-principal) transition-colors duration-200 mb-8 cursor-pointer group"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-0.5 transition-transform duration-200">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
                Voltar aos Serviços
              </Link>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className={`px-3 py-1 text-[11px] font-bold tracking-[0.2em] uppercase rounded-sm border ${ehAzul ? "bg-(--destaque-azul)/15 border-(--destaque-azul)/30 text-(--destaque-azul)" : "bg-(--destaque-azul)/15 border-(--destaque-azul)/30 text-(--destaque-azul)"}`}>
                  {servico.categoriaLabel}
                </span>
                <span className="px-3 py-1 bg-(--bg-elemento) border border-(--borda-principal) text-(--texto-suave) text-[11px] tracking-[0.2em] uppercase rounded-sm">
                  O Que Fazemos
                </span>
              </div>
              <h1
                className="text-4xl md:text-6xl font-black text-(--texto-principal) leading-[1.05] mb-5 max-w-3xl"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                {servico.titulo}
              </h1>
              <p className="text-sm md:text-base text-(--texto-secundario) max-w-2xl leading-relaxed">
                {servico.subtitulo}
              </p>
            </div>
          </section>
        )}

        {/* ── MÉTRICAS ────────────────────────────────────── */}
        <section className="bg-(--bg-cartao) border-b border-(--borda-principal)">
          <div
            ref={sMetricas.ref}
            className={`max-w-7xl mx-auto px-6 ${sMetricas.montado ? "reveal-fade-up" : ""} ${sMetricas.visivel ? "is-visible" : ""}`}
          >
            <div className="grid grid-cols-2 md:grid-cols-4">
              {servico.metricas.map((m, i) => (
                <div
                  key={i}
                  className={`py-8 px-6 flex flex-col gap-1 ${i < 3 ? "border-r border-(--borda-principal)/60" : ""} ${i >= 2 ? "border-t md:border-t-0 border-(--borda-principal)/60" : ""}`}
                >
                  <div className="flex items-baseline gap-1">
                    <span
                      className={`text-3xl md:text-4xl font-black ${ehAzul ? "text-(--destaque-azul)" : "text-(--destaque-azul)"}`}
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      {m.valor}
                    </span>
                    {m.unidade && (
                      <span className={`text-sm font-semibold ${ehAzul ? "text-(--destaque-azul)/70" : "text-(--destaque-azul)/70"}`}>
                        {m.unidade}
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] text-(--texto-suave) uppercase tracking-[0.18em] leading-snug">
                    {m.rotulo}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SOBRE (intro) ────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-(--bg-principal)">
          <div className="max-w-7xl mx-auto px-6">
            <div
              ref={sSobre.ref}
              className={`max-w-3xl ${sSobre.montado ? "reveal-fade-right" : ""} ${sSobre.visivel ? "is-visible" : ""}`}
            >
              <p className="text-xs tracking-[0.35em] text-(--destaque-azul) uppercase font-medium mb-4">
                Sobre o Serviço
              </p>
              <h2
                className="text-2xl md:text-3xl font-black text-(--texto-principal) mb-8 leading-tight"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                O que é e como funciona
              </h2>
              <div className="space-y-5">
                {servico.sobre.map((p, i) => (
                  <p key={i} className="text-sm text-(--texto-secundario) leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── NAVEGAÇÃO POR TIPOS (quando tiposDeServico presente) ── */}
        {temTipos && (
          <section className="bg-(--bg-cartao) border-y border-(--borda-principal) sticky top-[72px] z-40">
            <div
              ref={sNav.ref}
              className={`max-w-7xl mx-auto px-6 ${sNav.montado ? "reveal-fade-up" : ""} ${sNav.visivel ? "is-visible" : ""}`}
            >
              <div className="flex items-center gap-1 overflow-x-auto py-3 no-scrollbar">
                <span className="text-[10px] text-(--texto-fraco) uppercase tracking-[0.25em] shrink-0 mr-3">
                  Tipos
                </span>
                {servico.tiposDeServico!.map((tipo, i) => (
                  <a
                    key={tipo.ancora}
                    href={`#${tipo.ancora}`}
                    className={`shrink-0 px-3 py-1.5 text-[11px] font-semibold rounded-sm border transition-colors duration-200 cursor-pointer ${
                      ehAzul
                        ? "border-(--destaque-azul)/30 text-(--destaque-azul) hover:bg-(--destaque-azul)/10"
                        : "border-(--destaque-azul)/30 text-(--destaque-azul) hover:bg-(--destaque-azul)/10"
                    }`}
                  >
                    <span className="opacity-50 mr-1.5">{String(i + 1).padStart(2, "0")}</span>
                    {tipo.titulo}
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── TIPOS DE SERVIÇO ─────────────────────────────── */}
        {temTipos && (
          <div>
            {servico.tiposDeServico!.map((bloco, i) => (
              <SecaoBloco
                key={bloco.ancora}
                bloco={bloco}
                ehAzul={ehAzul}
                indice={i}
                total={servico.tiposDeServico!.length}
              />
            ))}
          </div>
        )}

        {/* ── APLICAÇÕES (serviços sem tiposDeServico) ─────── */}
        {!temTipos && servico.aplicacoes.length > 0 && (
          <section className="py-16 bg-(--bg-cartao) border-y border-(--borda-principal)">
            <div className="max-w-7xl mx-auto px-6">
              <div
                ref={sAplicacoes.ref}
                className={`${sAplicacoes.montado ? "reveal-fade-up" : ""} ${sAplicacoes.visivel ? "is-visible" : ""}`}
              >
                <p className="text-xs tracking-[0.35em] text-(--destaque-azul) uppercase font-medium mb-4">
                  Onde Aplicamos
                </p>
                <h2
                  className="text-2xl md:text-3xl font-black text-(--texto-principal) mb-10 leading-tight"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  Aplicações
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {servico.aplicacoes.map((a, i) => (
                    <div key={i} className="p-5 bg-(--bg-principal) border border-(--borda-principal) rounded-sm">
                      <div className={`w-1.5 h-1.5 rounded-full mb-4 ${bgAcento}`} />
                      <h3
                        className="text-sm font-bold text-(--texto-principal) mb-2 leading-snug"
                        style={{ fontFamily: "var(--font-outfit)" }}
                      >
                        {a.titulo}
                      </h3>
                      <p className="text-xs text-(--texto-suave) leading-relaxed">{a.descricao}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── EQUIPAMENTOS (serviços sem tiposDeServico) ───── */}
        {!temTipos && servico.equipamentos.length > 0 && (
          <section className="py-20 bg-(--bg-principal)">
            <div className="max-w-7xl mx-auto px-6">
              <div
                ref={sEquipamentos.ref}
                className={`${sEquipamentos.montado ? "reveal-fade-up" : ""} ${sEquipamentos.visivel ? "is-visible" : ""}`}
              >
                <p className="text-xs tracking-[0.35em] text-(--destaque-azul) uppercase font-medium mb-4">
                  Instrumentação
                </p>
                <h2
                  className="text-2xl md:text-3xl font-black text-(--texto-principal) mb-10 leading-tight"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  Equipamentos Utilizados
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {servico.equipamentos.map((e, i) => (
                    <div key={i} className="p-4 bg-(--bg-cartao) border border-(--borda-principal) rounded-sm">
                      <div className={`h-0.5 w-6 mb-4 ${bgAcento}/60`} />
                      <p className="text-xs font-bold text-(--texto-principal) mb-1 leading-snug">{e.nome}</p>
                      <p className="text-[11px] text-(--texto-suave) leading-relaxed">{e.detalhe}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── NORMAS GERAIS (serviços sem tiposDeServico) ──── */}
        {!temTipos && servico.normas.length > 0 && (
          <section className="py-10 bg-(--bg-cartao) border-y border-(--borda-principal)">
            <div
              ref={sNormas.ref}
              className={`max-w-7xl mx-auto px-6 ${sNormas.montado ? "reveal-fade-up" : ""} ${sNormas.visivel ? "is-visible" : ""}`}
            >
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                <span className="text-[11px] text-(--texto-suave) uppercase tracking-[0.25em] shrink-0">
                  Normas aplicáveis
                </span>
                <div className="h-px flex-1 bg-(--borda-principal) hidden sm:block" />
                <div className="flex flex-wrap gap-2">
                  {servico.normas.map((n, i) => (
                    <span key={i} className="px-3 py-1 bg-(--bg-elemento) border border-(--borda-etiqueta) text-(--texto-suave) text-[11px] font-mono rounded-sm">
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── GALERIA (serviços sem tiposDeServico) ────────── */}
        {!temTipos && servico.galeria && servico.galeria.length > 0 && (
          <section className="py-20 bg-(--bg-principal)">
            <div className="max-w-7xl mx-auto px-6">
              <div
                ref={sGaleria.ref}
                className={`${sGaleria.montado ? "reveal-fade-up" : ""} ${sGaleria.visivel ? "is-visible" : ""}`}
              >
                <p className="text-xs tracking-[0.35em] text-(--destaque-azul) uppercase font-medium mb-3">
                  Galeria
                </p>
                <div className="flex items-end justify-between gap-4 mb-10">
                  <h2
                    className="text-2xl md:text-3xl font-black text-(--texto-principal)"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    Registros do Ensaio
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {servico.galeria.map((item, i) => (
                    <div
                      key={i}
                      className={`relative bg-(--bg-cartao) border border-(--borda-principal) rounded-sm overflow-hidden ${
                        item.destaque ? "md:col-span-2 h-72 md:h-95" : "h-52"
                      }`}
                    >
                      <Image src={item.src} alt={item.alt} fill className="object-cover" unoptimized />
                      {item.legenda && (
                        <div className="absolute bottom-0 left-0 right-0 p-3 bg-linear-to-t from-black/70 to-transparent">
                          <p className="text-[11px] text-white/70 tracking-wide">{item.legenda}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── NORMAS GERAIS (serviços COM tiposDeServico — resumo no final) ── */}
        {temTipos && servico.normas.length > 0 && (
          <section className="py-10 bg-(--bg-cartao) border-y border-(--borda-principal)">
            <div
              ref={sNormas.ref}
              className={`max-w-7xl mx-auto px-6 ${sNormas.montado ? "reveal-fade-up" : ""} ${sNormas.visivel ? "is-visible" : ""}`}
            >
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                <span className="text-[11px] text-(--texto-suave) uppercase tracking-[0.25em] shrink-0">
                  Normas aplicáveis
                </span>
                <div className="h-px flex-1 bg-(--borda-principal) hidden sm:block" />
                <div className="flex flex-wrap gap-2">
                  {servico.normas.map((n, i) => (
                    <span key={i} className="px-3 py-1 bg-(--bg-elemento) border border-(--borda-etiqueta) text-(--texto-suave) text-[11px] font-mono rounded-sm">
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── OBRAS RELACIONADAS ────────────────────────────── */}
        {obrasAgregadas.length > 0 && (
          <section className="py-20 bg-(--bg-principal)">
            <div className="max-w-7xl mx-auto px-6">
              <div
                ref={sObras.ref}
                className={`${sObras.montado ? "reveal-fade-up" : ""} ${sObras.visivel ? "is-visible" : ""}`}
              >
                <p className="text-xs tracking-[0.35em] text-(--destaque-azul) uppercase font-medium mb-4">
                  Portfólio
                </p>
                <h2
                  className="text-2xl md:text-3xl font-black text-(--texto-principal) mb-10 leading-tight"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  Obras Relacionadas
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {obrasAgregadas.map((o, i) => {
                    const conteudo = (
                      <>
                        <div className="card-linha-hover w-0 group-hover:w-full" />
                        <div className="p-5">
                          <p className="text-[10px] text-(--texto-fraco) tracking-widest uppercase mb-1">
                            {o.local}
                          </p>
                          <h3
                            className="text-sm font-bold text-(--texto-principal) mb-2 leading-snug group-hover:text-(--destaque-azul-hover) transition-colors duration-200"
                            style={{ fontFamily: "var(--font-outfit)" }}
                          >
                            {o.titulo}
                          </h3>
                          <span className="inline-block px-2 py-0.5 bg-(--bg-elemento) border border-(--borda-etiqueta) text-(--texto-suave) text-[10px] rounded-sm">
                            {o.tipo}
                          </span>
                          {o.slug && (
                            <div className="mt-4 flex items-center gap-1.5 text-[11px] text-(--destaque-azul) font-medium">
                              Ver obra
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6" />
                              </svg>
                            </div>
                          )}
                        </div>
                      </>
                    );

                    const classeBase = `relative group bg-(--bg-cartao) border border-(--borda-principal) rounded-sm overflow-hidden transition-colors duration-200 ${
                      o.slug ? "hover:border-(--destaque-azul)/30 cursor-pointer" : "cursor-default"
                    }`;

                    return o.slug ? (
                      <Link key={i} href={`/obras/${o.slug}`} className={classeBase}>
                        {conteudo}
                      </Link>
                    ) : (
                      <div key={i} className={classeBase}>
                        {conteudo}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── CTA ──────────────────────────────────────────── */}
        <section className="py-20 bg-(--bg-cartao) border-t border-(--borda-principal)">
          <div
            ref={sCta.ref}
            className={`max-w-3xl mx-auto px-6 text-center ${sCta.montado ? "reveal-fade-up" : ""} ${sCta.visivel ? "is-visible" : ""}`}
          >
            <div className={`inline-flex items-center justify-center w-12 h-12 bg-(--bg-elevado) border border-(--borda-principal) rounded-sm mb-6 ${corAcento}`}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>

            <p className="text-xs tracking-[0.35em] text-(--destaque-azul) uppercase font-medium mb-4">
              Precisa desse serviço?
            </p>
            <h2
              className="text-3xl md:text-4xl font-black text-(--texto-principal) mb-4 leading-tight"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Fale com a OFM
            </h2>
            <p className="text-sm text-(--texto-secundario) leading-relaxed mb-8 max-w-xl mx-auto">
              Entre em contato para discutir as necessidades do seu projeto. Elaboramos propostas técnicas detalhadas para cada demanda específica.
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
                href="/#servicos"
                className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-(--borda-principal) hover:border-(--destaque-azul)/40 text-(--texto-secundario) hover:text-(--texto-principal) text-sm font-medium rounded-sm transition-colors duration-200 cursor-pointer"
              >
                Ver todos os serviços
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
