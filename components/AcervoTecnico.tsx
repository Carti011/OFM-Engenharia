"use client";

import Image from "next/image";
import { useScrollReveal } from "../hooks/useScrollReveal";

const capacidades = [
  "Ensaios estáticos e dinâmicos em pontes e viadutos ferroviários e rodoviários",
  "Provas de carga hidráulicas e estruturais em lajes, passarelas e edificações",
  "Ensaios de trafegabilidade e vibração em estruturas móveis e estações energéticas",
  "Instrumentação com strain gages, LVDTs e acelerômetros em campo e laboratório",
  "Análises de deformação, deslocamento e frequências naturais",
  "Validação experimental de modelos numéricos de elementos finitos",
  "Fabricação e calibração de células de carga especiais sob demanda",
  "Estudos de conforto humano e comportamento dinâmico em grandes estruturas",
  "Ensaios de arrancamento e verificação de soldas estruturais",
  "Análise de vibração e determinação de frequências naturais em equipamentos",
  "Ensaios de carga em porta-paletes e estruturas de armazenagem (ABNT NBR 14762)",
  "Monitoramento térmico e detecção de fumaça com sensores PT100",
];

const programas = [
  {
    nome: "AqDados",
    descricao: "Programa de aquisição de dados multicanal Lynx — configuração de canais, calibração de sensores e gravação em tempo real com taxas de amostragem elevadas.",
    logo: "/images/AqDados.png",
  },
  {
    nome: "AqDAnalysis",
    descricao: "Análise e processamento de sinais adquiridos — domínio do tempo e frequência, filtros digitais e geração de relatórios técnicos.",
    logo: "/images/AqDAnalysis.png",
  },
];

const normas = ["ABNT NBR 6118", "NBR 7188", "NBR 8800", "NBR 14931", "NBR 14762", "AWS D1.1", "ISO 6892-1"];

export default function TechnicalScope() {
  const header   = useScrollReveal({ threshold: 0.15 });
  const destaque = useScrollReveal({ threshold: 0.15 });

  const c0  = useScrollReveal({ threshold: 0.05 });
  const c1  = useScrollReveal({ threshold: 0.05 });
  const c2  = useScrollReveal({ threshold: 0.05 });
  const c3  = useScrollReveal({ threshold: 0.05 });
  const c4  = useScrollReveal({ threshold: 0.05 });
  const c5  = useScrollReveal({ threshold: 0.05 });
  const c6  = useScrollReveal({ threshold: 0.05 });
  const c7  = useScrollReveal({ threshold: 0.05 });
  const c8  = useScrollReveal({ threshold: 0.05 });
  const c9  = useScrollReveal({ threshold: 0.05 });
  const c10 = useScrollReveal({ threshold: 0.05 });
  const c11 = useScrollReveal({ threshold: 0.05 });
  const capRefs = [c0, c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11];

  const sw0 = useScrollReveal({ threshold: 0.1 });
  const sw1 = useScrollReveal({ threshold: 0.1 });
  const swRefs = [sw0, sw1];

  const normasRef = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="acervo" className="py-24 md:py-32 bg-(--bg-secao)">
      <div className="max-w-7xl mx-auto px-6">

        {/* Bloco 1: Título + Banner equipamentos */}
        <div className="grid lg:grid-cols-2 gap-10 items-start mb-14">
          <div
            ref={header.ref}
            className={`${header.montado ? "reveal-fade-up" : ""} ${header.visivel ? "is-visible" : ""}`}
          >
            <p className="text-xs tracking-[0.35em] text-(--destaque-laranja) uppercase font-medium mb-4">
              Capacidade Técnica
            </p>
            <h2
              className="text-4xl md:text-5xl font-black text-(--texto-principal) leading-tight"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Acervo
              <br />
              <span className="text-(--destaque-azul)">Técnico</span>
            </h2>
          </div>

          <div
            ref={destaque.ref}
            className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 h-full bg-(--bg-cartao) border border-(--destaque-laranja)/30 rounded-sm ${destaque.montado ? "reveal-fade-up" : ""} ${destaque.visivel ? "is-visible" : ""}`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="w-10 h-10 bg-(--destaque-laranja)/10 border border-(--destaque-laranja)/30 rounded-sm flex items-center justify-center shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--destaque-laranja)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div>
              <p className="text-(--texto-principal) text-sm font-bold mb-0.5" style={{ fontFamily: "var(--font-outfit)" }}>
                Equipamentos 100% próprios
              </p>
              <p className="text-(--texto-suave) text-xs leading-relaxed">
                Todos os instrumentos e sistemas de aquisição de dados são de propriedade da OFM — sem locação, sem dependência de terceiros. Isso garante disponibilidade imediata, calibração controlada e redução de custo para o cliente.
              </p>
            </div>
          </div>
        </div>

        {/* Bloco 2: Capacidades em 3 colunas */}
        <div className="mb-14">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
            {capacidades.map((item, i) => {
              const { ref, montado, visivel } = capRefs[i];
              return (
                <div
                  key={i}
                  ref={ref}
                  className={`flex items-start gap-3 py-2 border-b border-(--borda-fina) ${montado ? "reveal-fade-right" : ""} ${visivel ? "is-visible" : ""}`}
                  style={{ transitionDelay: `${(i % 6) * 60}ms` }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-(--destaque-azul) shrink-0 mt-0.5"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-(--texto-secundario) text-sm leading-snug">{item}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bloco 3: Softwares + Normas em linha */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programas.map((programa, i) => {
            const { ref, montado, visivel } = swRefs[i];
            return (
              <div
                key={programa.nome}
                ref={ref}
                className={`relative overflow-hidden group p-5 bg-(--bg-cartao) border border-(--borda-principal) rounded-sm ${montado ? "reveal-scale" : ""} ${visivel ? "is-visible" : ""}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="card-linha-hover w-0 group-hover:w-full" />
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-sm overflow-hidden shrink-0 bg-[#e8e8e8]">
                    <Image
                      src={programa.logo}
                      alt={programa.nome}
                      width={40}
                      height={40}
                      className="w-full h-full object-contain"
                      unoptimized
                    />
                  </div>
                  <span
                    className="text-(--texto-principal) font-bold text-sm"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {programa.nome}
                  </span>
                </div>
                <p className="text-xs text-(--texto-suave) leading-relaxed">{programa.descricao}</p>
              </div>
            );
          })}

          <div
            ref={normasRef.ref}
            className={`p-5 bg-(--bg-cartao) border border-(--borda-principal) rounded-sm ${normasRef.montado ? "reveal-fade-up" : ""} ${normasRef.visivel ? "is-visible" : ""}`}
            style={{ transitionDelay: "200ms" }}
          >
            <h4
              className="text-(--texto-principal) text-sm font-bold mb-3"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Normas de Referência
            </h4>
            <div className="flex flex-wrap gap-2">
              {normas.map((norm) => (
                <span
                  key={norm}
                  className="px-2 py-1 bg-(--bg-elemento) border border-(--borda-etiqueta) text-(--texto-suave) text-[10px] font-mono rounded-sm"
                >
                  {norm}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
