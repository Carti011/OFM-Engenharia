"use client";

import Image from "next/image";
import { useScrollReveal } from "../hooks/useScrollReveal";

const historico = [
  {
    ano: "2002",
    titulo: "LSE – USP",
    descricao:
      "Início da trajetória no Laboratório de Sistemas Estruturais da USP, aprendendo instrumentação com strain gages e acelerômetros no sistema ADS2000.",
    corBorda: "var(--timeline-azul-borda)",
    logo: "/images/usp_universidadedesaopaulo.png",
    logoBg: "#ffffff",
  },
  {
    ano: "2010–2021",
    titulo: "Falcão Bauer",
    descricao:
      "Integração à Falcão Bauer, executando ensaios estruturais e especiais: provas de carga, vibração, conforto humano e fogo e fumaça. Participação em obras como o Estádio do Corinthians, o Museu do Amanhã e a Ponte Rio–Niterói.",
    corBorda: "var(--timeline-laranja-borda)",
    logo: "/images/Falcão Bauer.png",
    logoBg: "#ffffff",
  },
  {
    ano: "Atual",
    titulo: "Fundação da OFM",
    descricao:
      "Consolidação de toda a trajetória em uma empresa própria, oferecendo instrumentação de alta precisão, fabricação de células de carga, ensaios estáticos e dinâmicos e validação experimental de modelos numéricos.",
    corBorda: "var(--timeline-laranja-borda)",
    logo: "/images/Logos/logo_v2Removido.png",
    logoBg: "#0a0a0a",
  },
];

const obrasDestaque = [
  { nome: "Ponte Rio–Niterói", estado: "RJ" },
  { nome: "Museu do Amanhã", estado: "RJ" },
  { nome: "Arena Corinthians", estado: "SP" },
  { nome: "Ponte Octávio Frias", estado: "SP" },
];

export default function About() {
  const label = useScrollReveal({ threshold: 0.15 });
  const titulo = useScrollReveal({ threshold: 0.15 });
  const texto = useScrollReveal({ threshold: 0.15 });

  const timeline0 = useScrollReveal({ threshold: 0.1 });
  const timeline1 = useScrollReveal({ threshold: 0.1 });
  const timeline2 = useScrollReveal({ threshold: 0.1 });
  const timelineRefs = [timeline0, timeline1, timeline2];

  const obras0 = useScrollReveal({ threshold: 0.1 });
  const obras1 = useScrollReveal({ threshold: 0.1 });
  const obras2 = useScrollReveal({ threshold: 0.1 });
  const obras3 = useScrollReveal({ threshold: 0.1 });
  const obrasRefs = [obras0, obras1, obras2, obras3];

  return (
    <section id="sobre" className="py-24 md:py-32 bg-(--bg-principal)">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Esquerda: texto */}
          <div>
            <p
              ref={label.ref}
              className={`text-xs tracking-[0.35em] text-(--destaque-laranja) uppercase font-medium mb-4 ${label.montado ? "reveal-fade-right" : ""} ${label.visivel ? "is-visible" : ""}`}
            >
              Nossa História
            </p>
            <h2
              ref={titulo.ref}
              className={`text-4xl md:text-5xl font-black text-(--texto-principal) leading-tight mb-8 ${titulo.montado ? "reveal-fade-right" : ""} ${titulo.visivel ? "is-visible" : ""}`}
              style={{ fontFamily: "var(--font-outfit)", transitionDelay: "100ms" }}
            >
              Paixão pela
              <br />
              <span className="text-(--destaque-azul)">Engenharia</span>
              <br />
              Experimental
            </h2>
            <div
              ref={texto.ref}
              className={`space-y-5 text-(--texto-secundario) leading-relaxed text-[15px] ${texto.montado ? "reveal-fade-right" : ""} ${texto.visivel ? "is-visible" : ""}`}
              style={{ transitionDelay: "200ms" }}
            >
              <p>
                A OFM nasceu da paixão pela engenharia experimental e da
                experiência do{" "}
                <span className="text-(--texto-principal) font-medium">
                  Eng. Fernando Franco de Oliveira
                </span>
                , que iniciou sua trajetória em 2002 no LSE–USP, aprendendo
                instrumentação com strain gages e acelerômetros no sistema
                ADS2000.
              </p>
              <p>
                Com atuação em obras marcantes como as Pontes Estaiadas Octávio
                Frias de Oliveira (SP), Newton Navarro (RN), João Alves (SE) e a
                Passarela da Gameleira (AC), a empresa tem como propósito{" "}
                <span className="text-(--texto-principal) font-medium">
                  transformar medições em conhecimento estrutural
                </span>
                , promovendo segurança, desempenho e inovação.
              </p>
              <p>
                Cada projeto é conduzido com rigor metrológico, tecnologia de
                ponta e comprometimento técnico — da instrumentação ao relatório
                final.
              </p>
            </div>
          </div>

          {/* Direita: histórico */}
          <div className="relative">
            {/* Linha vertical */}
            <div className="absolute left-6 top-3 bottom-3 w-px bg-linear-to-b from-(--destaque-azul) via-(--destaque-laranja) to-transparent" />

            <div className="space-y-10">
              {historico.map((etapa, i) => {
                const { ref, montado, visivel } = timelineRefs[i];
                return (
                  <div
                    key={i}
                    ref={ref}
                    className={`relative pl-16 ${montado ? "reveal-fade-left" : ""} ${visivel ? "is-visible" : ""}`}
                    style={{ transitionDelay: `${i * 150}ms` }}
                  >
                    {/* Marcador com logo */}
                    <div
                      className="absolute left-0 top-1 w-12 h-12 rounded-sm overflow-hidden border shrink-0"
                      style={{ borderColor: etapa.corBorda, backgroundColor: etapa.logoBg }}
                    >
                      <Image
                        src={etapa.logo}
                        alt={etapa.titulo}
                        width={48}
                        height={48}
                        className="w-full h-full object-contain p-1"
                        unoptimized
                      />
                    </div>

                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono text-(--texto-fraco) tracking-widest">
                        {etapa.ano}
                      </span>
                    </div>
                    <h3
                      className="text-lg font-bold text-(--texto-principal) mb-2"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      {etapa.titulo}
                    </h3>
                    <p className="text-sm text-(--texto-secundario) leading-relaxed">
                      {etapa.descricao}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Barra de destaques */}
        <div className="mt-20 pt-10 border-t border-(--borda-principal) grid grid-cols-2 md:grid-cols-4 gap-6">
          {obrasDestaque.map((obra, i) => {
            const { ref, montado, visivel } = obrasRefs[i];
            return (
              <div
                key={obra.nome}
                ref={ref}
                className={`flex items-center gap-3 p-4 bg-(--bg-cartao) border border-(--borda-principal) rounded-sm ${montado ? "reveal-scale" : ""} ${visivel ? "is-visible" : ""}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-1.5 h-6 bg-(--destaque-laranja) rounded-full shrink-0" />
                <div>
                  <p className="text-(--texto-principal) text-sm font-semibold leading-snug">
                    {obra.nome}
                  </p>
                  <p className="text-(--texto-suave) text-xs">{obra.estado}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
