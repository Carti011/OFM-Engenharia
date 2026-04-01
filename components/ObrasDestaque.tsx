const obras = [
  {
    titulo: "Ponte Rio–Niterói",
    local: "Rio de Janeiro, RJ",
    tipo: "Análise Dinâmica",
    descricao:
      "Aferição dos Atenuadores Dinâmicos Sincronizados (ADS) da maior ponte do Brasil. Acelerômetros Dytran e sistema Lynx ADS2002 a 1024 Hz.",
    etiquetas: ["Vibração", "ADS", "Acelerômetros"],
  },
  {
    titulo: "Museu do Amanhã",
    local: "Rio de Janeiro, RJ",
    tipo: "Descimbramento",
    descricao:
      "Instrumentação de 10 pontos de extensiometria na estrutura metálica. Resultados citados em publicação técnica internacional.",
    etiquetas: ["Strain Gages", "Extensometria", "Estrutura Metálica"],
  },
  {
    titulo: "Arena Corinthians",
    local: "São Paulo, SP",
    tipo: "Prova de Carga",
    descricao:
      "Ensaios de desempenho estrutural nas arquibancadas e lajes do estádio. Monitoramento de deformações e deslocamentos.",
    etiquetas: ["LVDT", "Prova de Carga", "Estádio"],
  },
  {
    titulo: "Ponte Estaiada Octávio Frias",
    local: "São Paulo, SP",
    tipo: "Análise Estrutural",
    descricao:
      "Instrumentação e análise de comportamento dinâmico da icônica ponte estaiada da capital paulista.",
    etiquetas: ["Pontes", "Dinâmica", "SP"],
  },
  {
    titulo: "Ponte Newton Navarro",
    local: "Natal, RN",
    tipo: "Ensaio Estrutural",
    descricao:
      "Monitoramento estrutural e validação experimental da maior ponte estaiada do nordeste brasileiro.",
    etiquetas: ["Pontes Estaiadas", "RN", "Monitoramento"],
  },
  {
    titulo: "The Town 2025",
    local: "São Paulo, SP",
    tipo: "Estrutura Temporária",
    descricao:
      "Ensaio completo da torre da tirolesa com strain gages, LVDTs e acelerômetros triaxiais integrados ao Lynx ADS2000.",
    etiquetas: ["Torre", "Estático", "Dinâmico"],
  },
  {
    titulo: "WEG – Subestação Móvel",
    local: "Brasil",
    tipo: "Trafegabilidade",
    descricao:
      "Ensaio de integridade estrutural e comportamento dinâmico durante transporte. Verificação com acelerômetros de alta precisão.",
    etiquetas: ["Trafegabilidade", "Industrial", "WEG"],
  },
  {
    titulo: "Metrô RJ / CPTM",
    local: "Rio de Janeiro & São Paulo",
    tipo: "Ferroviário",
    descricao:
      "Ensaios estruturais em vagões ferroviários, estruturas de plataforma e componentes de via permanente.",
    etiquetas: ["Ferroviário", "Metrô", "CPTM"],
  },
];

export default function Portfolio() {
  return (
    <section id="obras" className="py-24 md:py-32 bg-(--bg-principal)">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
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
          <p className="text-(--texto-suave) text-sm max-w-xs leading-relaxed">
            Participação em projetos de referência nacional e internacional,
            com instrumentação e análises de alto nível técnico.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {obras.map((obra, i) => (
            <article
              key={i}
              className="group bg-(--bg-cartao) border border-(--borda-principal) hover:border-(--destaque-azul)/30 rounded-sm overflow-hidden transition-colors duration-200 cursor-default"
            >
              {/* Placeholder de imagem */}
              <div className="relative h-44 bg-(--bg-elevado) flex flex-col items-center justify-center gap-2 overflow-hidden">
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "linear-gradient(var(--blueprint-30) 1px, transparent 1px), linear-gradient(90deg, var(--blueprint-30) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-(--icone-placeholder) relative z-10"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
                <span className="text-[10px] text-(--icone-placeholder) tracking-widest uppercase relative z-10">
                  Foto do Projeto
                </span>

                {/* Etiqueta de tipo */}
                <span className="absolute top-3 right-3 px-2 py-1 bg-(--bg-principal)/80 text-(--destaque-laranja) text-[10px] font-bold tracking-wide uppercase rounded-sm">
                  {obra.tipo}
                </span>
              </div>

              {/* Conteúdo */}
              <div className="p-5">
                <p className="text-[10px] text-(--texto-fraco) tracking-widest uppercase mb-1">
                  {obra.local}
                </p>
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
          ))}
        </div>
      </div>
    </section>
  );
}
