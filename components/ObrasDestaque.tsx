"use client";

import Link from "next/link";
import Image from "next/image";
import { useScrollReveal } from "../hooks/useScrollReveal";

const obras = [
  {
    titulo: "Ponte Rio–Niterói",
    local: "Rio de Janeiro, RJ",
    tipo: "Análise Dinâmica",
    descricao:
      "Aferição dos Atenuadores Dinâmicos Sincronizados (ADS) da maior ponte do Brasil. Acelerômetros Dytran e sistema Lynx ADS2002 a 1024 Hz.",
    etiquetas: ["Vibração", "ADS", "Acelerômetros"],
    slug: "ponte-rio-niteroi",
    imagem: "/images/Obras/Fernando-Ponte Rio Niteroi.jpeg",
    acervo: false,
  },
  {
    titulo: "Museu do Amanhã",
    local: "Rio de Janeiro, RJ",
    tipo: "Descimbramento",
    descricao:
      "Instrumentação de 10 pontos de extensiometria na estrutura metálica. Resultados citados em publicação técnica internacional.",
    etiquetas: ["Strain Gages", "Extensometria", "Estrutura Metálica"],
    slug: "museu-do-amanha",
    imagem: "/images/Obras/Museu do Amanhã.jpeg",
    acervo: false,
  },
  {
    titulo: "Arena Corinthians",
    local: "São Paulo, SP",
    tipo: "Prova de Carga",
    descricao:
      "Provas de carga estática e dinâmica nas arquibancadas da Copa 2014. Shaker de 1 a 10 Hz, strain gages e monitoramento ao vivo no primeiro jogo.",
    etiquetas: ["Strain Gages", "Prova de Carga", "Shaker", "Copa 2014"],
    slug: "arena-corinthians",
    imagem: "/images/Obras/Arena Corinthians/capa.jpg",
    acervo: true,
  },
  {
    titulo: "Ponte Estaiada Octávio Frias",
    local: "São Paulo, SP",
    tipo: "Análise Estrutural",
    descricao:
      "Instrumentação e análise de comportamento dinâmico da icônica ponte estaiada da capital paulista.",
    etiquetas: ["Pontes", "Dinâmica", "SP"],
    slug: null,
    imagem: null,
    acervo: true,
  },
  {
    titulo: "Ponte Newton Navarro",
    local: "Natal, RN",
    tipo: "Ensaio Estrutural",
    descricao:
      "Monitoramento estrutural e validação experimental da maior ponte estaiada do nordeste brasileiro.",
    etiquetas: ["Pontes Estaiadas", "RN", "Monitoramento"],
    slug: null,
    imagem: null,
    acervo: true,
  },
  {
    titulo: "The Town 2025",
    local: "São Paulo, SP",
    tipo: "Estrutura Temporária",
    descricao:
      "Ensaio completo da torre da tirolesa com strain gages, LVDTs e acelerômetros triaxiais integrados ao Lynx ADS2000.",
    etiquetas: ["Torre", "Estático", "Dinâmico"],
    slug: null,
    imagem: null,
    acervo: false,
  },
  {
    titulo: "WEG – Subestação Móvel",
    local: "Brasil",
    tipo: "Trafegabilidade",
    descricao:
      "Ensaio de integridade estrutural e comportamento dinâmico durante transporte. Verificação com acelerômetros de alta precisão.",
    etiquetas: ["Trafegabilidade", "Industrial", "WEG"],
    slug: null,
    imagem: null,
    acervo: false,
  },
  {
    titulo: "Metrô RJ / CPTM",
    local: "Rio de Janeiro, RJ",
    tipo: "Prova de Carga",
    descricao:
      "Prova de carga em 10 vagões com extensômetros, LVDT e PT-100 de temperatura. Ciclos de carregamento e descarregamento com estabilização — todos aprovados.",
    etiquetas: ["Extensômetros", "LVDT", "PT-100", "Ferroviário"],
    slug: "metro-rj-cptm",
    imagem: "/images/Obras/Metrô RJ : CPTM/capa.jpg",
    acervo: false,
  },
];

export default function Portfolio() {
  const tituloEsq = useScrollReveal({ threshold: 0.15 });
  const textoDir = useScrollReveal({ threshold: 0.15 });

  const o0 = useScrollReveal({ threshold: 0.08 });
  const o1 = useScrollReveal({ threshold: 0.08 });
  const o2 = useScrollReveal({ threshold: 0.08 });
  const o3 = useScrollReveal({ threshold: 0.08 });
  const o4 = useScrollReveal({ threshold: 0.08 });
  const o5 = useScrollReveal({ threshold: 0.08 });
  const o6 = useScrollReveal({ threshold: 0.08 });
  const o7 = useScrollReveal({ threshold: 0.08 });
  const obrasRefs = [o0, o1, o2, o3, o4, o5, o6, o7];

  return (
    <section id="obras" className="py-24 md:py-32 bg-(--bg-principal)">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div
            ref={tituloEsq.ref}
            className={`${tituloEsq.montado ? "reveal-fade-right" : ""} ${tituloEsq.visivel ? "is-visible" : ""}`}
          >
            <p className="text-xs tracking-[0.35em] text-(--destaque-laranja) uppercase font-medium mb-4">
              Portfólio
            </p>
            <h2
              className="text-4xl md:text-5xl font-black text-(--texto-principal) leading-tight"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Obras de
              <br />
              <span className="text-(--destaque-azul)">Destaque</span>
            </h2>
          </div>
          <div
            ref={textoDir.ref}
            className={`flex flex-col gap-4 ${textoDir.montado ? "reveal-fade-left" : ""} ${textoDir.visivel ? "is-visible" : ""}`}
          >
            <p className="text-(--texto-suave) text-sm max-w-xs leading-relaxed">
              Projetos executados pela OFM e obras do acervo técnico do
              engenheiro responsável — referência em instrumentação estrutural
              com décadas de atuação nacional.
            </p>
            {/* Legenda */}
            <div className="flex items-center gap-4 text-[10px] tracking-widest uppercase">
              <span className="flex items-center gap-1.5 text-(--texto-fraco)">
                <span className="w-2 h-2 rounded-none bg-(--destaque-laranja) inline-block" />
                OFM Engenharia
              </span>
              <span className="flex items-center gap-1.5 text-(--texto-fraco)">
                <span className="w-2 h-2 rounded-none bg-(--destaque-azul)/60 inline-block" />
                Acervo do Engenheiro
              </span>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {obras.map((obra, i) => {
            const { ref, montado, visivel } = obrasRefs[i];
            const delay = (i % 4) * 100;
            return (
              <article
                key={i}
                ref={ref}
                className={`relative group bg-(--bg-cartao) border rounded-sm overflow-hidden transition-colors duration-200 ${obra.slug ? "cursor-pointer" : "cursor-default"} ${obra.acervo ? "border-(--borda-principal) hover:border-(--destaque-azul)/20" : "border-(--borda-principal) hover:border-(--destaque-laranja)/30"} ${montado ? "reveal-scale" : ""} ${visivel ? "is-visible" : ""}`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                <div className="card-linha-hover w-0 group-hover:w-full" />

                {/* Link invisível sobreposto — apenas para cards com página dedicada */}
                {obra.slug && (
                  <Link
                    href={`/obras/${obra.slug}`}
                    className="absolute inset-0 z-20"
                    aria-label={`Ver obra: ${obra.titulo}`}
                  />
                )}

                {/* Área da imagem */}
                <div className="relative h-44 overflow-hidden">
                  {obra.imagem ? (
                    <>
                      <Image
                        src={obra.imagem}
                        alt={`Obra: ${obra.titulo}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        unoptimized
                      />
                      {/* Gradiente para legibilidade do badge */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />

                      {/* Indicador "Ver obra →" no hover */}
                      <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <span>Ver obra</span>
                        <svg
                          width="12"
                          height="12"
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
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-(--bg-elevado)" />
                      <div
                        className="absolute inset-0 opacity-20"
                        style={{
                          backgroundImage:
                            "linear-gradient(var(--blueprint-30) 1px, transparent 1px), linear-gradient(90deg, var(--blueprint-30) 1px, transparent 1px)",
                          backgroundSize: "24px 24px",
                        }}
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          className="text-(--icone-placeholder)"
                        >
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <polyline points="21 15 16 10 5 21" />
                        </svg>
                        <span className="text-[10px] text-(--icone-placeholder) tracking-widest uppercase">
                          Foto do Projeto
                        </span>
                      </div>
                    </>
                  )}

                  {/* Badge de tipo (sempre visível) */}
                  <span
                    className={`absolute top-3 right-3 px-2 py-1 bg-(--bg-principal)/80 text-[10px] font-bold tracking-wide uppercase rounded-sm ${obra.acervo ? "text-(--destaque-azul)/70" : "text-(--destaque-laranja)"}`}
                  >
                    {obra.tipo}
                  </span>
                </div>

                {/* Conteúdo */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-[10px] text-(--texto-fraco) tracking-widest uppercase">
                      {obra.local}
                    </p>
                    {obra.acervo && (
                      <span className="flex items-center gap-1 text-[9px] tracking-widest uppercase text-(--destaque-azul)/60 font-medium">
                        <span className="w-1.5 h-1.5 bg-(--destaque-azul)/60 inline-block" />
                        Acervo Técnico
                      </span>
                    )}
                  </div>
                  <h3
                    className="text-sm font-bold text-(--texto-principal) mb-2 leading-snug group-hover:text-(--destaque-azul-hover) transition-colors duration-200"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {obra.titulo}
                  </h3>
                  <p className="text-xs text-(--texto-suave) leading-relaxed mb-4">
                    {obra.descricao}
                  </p>
                  {/* Etiquetas */}
                  <div className="flex flex-wrap gap-1.5">
                    {obra.etiquetas.map((etiqueta) => (
                      <span
                        key={etiqueta}
                        className="px-2 py-0.5 bg-(--bg-elemento) border border-(--borda-etiqueta) text-(--texto-suave) text-[10px] rounded-sm"
                      >
                        {etiqueta}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
