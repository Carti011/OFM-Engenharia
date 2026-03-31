const historico = [
  {
    ano: "2002",
    titulo: "LSE – USP",
    descricao:
      "Início da trajetória no Laboratório de Sistemas Estruturais da USP, aprendendo instrumentação com strain gages e acelerômetros no sistema ADS2000.",
    cor: "#2563eb",
  },
  {
    ano: "2010",
    titulo: "Falcão Bauer",
    descricao:
      "Integração à Falcão Bauer, executando ensaios estruturais e especiais: provas de carga, vibração, conforto humano e fogo e fumaça. Participação em obras como o Estádio do Corinthians, o Museu do Amanhã e a Ponte Rio–Niterói.",
    cor: "#f97316",
  },
  {
    ano: "OFM",
    titulo: "Fundação da OFM",
    descricao:
      "Consolidação de toda a trajetória em uma empresa própria, oferecendo instrumentação de alta precisão, fabricação de células de carga, ensaios estáticos e dinâmicos e validação experimental de modelos numéricos.",
    cor: "#f97316",
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Esquerda: texto */}
          <div>
            <p className="text-xs tracking-[0.35em] text-[#f97316] uppercase font-medium mb-4">
              Nossa História
            </p>
            <h2
              className="text-4xl md:text-5xl font-black text-white leading-tight mb-8"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Paixão pela
              <br />
              <span className="text-[#2563eb]">Engenharia</span>
              <br />
              Experimental
            </h2>
            <div className="space-y-5 text-[#9ca3af] leading-relaxed text-[15px]">
              <p>
                A OFM nasceu da paixão pela engenharia experimental e da
                experiência do{" "}
                <span className="text-white font-medium">
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
                <span className="text-white font-medium">
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
            <div className="absolute left-6 top-3 bottom-3 w-[1px] bg-gradient-to-b from-[#2563eb] via-[#f97316] to-transparent" />

            <div className="space-y-10">
              {historico.map((etapa, i) => (
                <div key={i} className="relative pl-16">
                  {/* Marcador */}
                  <div
                    className="absolute left-0 top-1 w-12 h-12 rounded-sm flex items-center justify-center text-white text-xs font-black tracking-tight border"
                    style={{
                      backgroundColor: `${etapa.cor}15`,
                      borderColor: `${etapa.cor}40`,
                      fontFamily: "var(--font-outfit)",
                      color: etapa.cor,
                    }}
                  >
                    {etapa.ano}
                  </div>

                  <h3
                    className="text-lg font-bold text-white mb-2"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {etapa.titulo}
                  </h3>
                  <p className="text-sm text-[#9ca3af] leading-relaxed">
                    {etapa.descricao}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Barra de destaques */}
        <div className="mt-20 pt-10 border-t border-[#1e1e1e] grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { nome: "Ponte Rio–Niterói", estado: "RJ" },
            { nome: "Museu do Amanhã", estado: "RJ" },
            { nome: "Arena Corinthians", estado: "SP" },
            { nome: "Ponte Octávio Frias", estado: "SP" },
          ].map((obra) => (
            <div
              key={obra.nome}
              className="flex items-center gap-3 p-4 bg-[#111111] border border-[#1e1e1e] rounded-sm"
            >
              <div className="w-1.5 h-6 bg-[#f97316] rounded-full flex-shrink-0" />
              <div>
                <p className="text-white text-sm font-semibold leading-snug">
                  {obra.nome}
                </p>
                <p className="text-[#6b7280] text-xs">{obra.estado}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
