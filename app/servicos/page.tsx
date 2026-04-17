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

export default function PaginaListaServicos() {
  const fixos = servicosDetalhados.filter(
    (s) => s.categoriaLabel === "Estruturas Fixas"
  );
  const especiais = servicosDetalhados.filter(
    (s) => s.categoriaLabel === "Ensaios Especiais e Instrumentação"
  );

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
        <div className="max-w-7xl mx-auto px-6 space-y-16">

          {/* Estruturas Fixas */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-8 bg-(--destaque-azul)" />
              <span
                className="text-sm font-bold text-(--destaque-azul) tracking-widest uppercase"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Estruturas Fixas
              </span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {fixos.map((servico) => (
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

          {/* Ensaios Especiais e Instrumentação */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-8 bg-(--destaque-azul)" />
              <span
                className="text-sm font-bold text-(--destaque-azul) tracking-widest uppercase"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Ensaios Especiais e Instrumentação
              </span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {especiais.map((servico) => (
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

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-(--bg-principal)">
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
