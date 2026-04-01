const historico = [
  {
    ano: "2002",
    titulo: "LSE – USP",
    descricao:
      "Início da trajetória no Laboratório de Sistemas Estruturais da USP, aprendendo instrumentação com strain gages e acelerômetros no sistema ADS2000.",
    corTexto: "var(--destaque-azul)",
    corFundo: "var(--timeline-azul-bg)",
    corBorda: "var(--timeline-azul-borda)",
  },
  {
    ano: "2010",
    titulo: "Falcão Bauer",
    descricao:
      "Integração à Falcão Bauer, executando ensaios estruturais e especiais: provas de carga, vibração, conforto humano e fogo e fumaça. Participação em obras como o Estádio do Corinthians, o Museu do Amanhã e a Ponte Rio–Niterói.",
    corTexto: "var(--destaque-laranja)",
    corFundo: "var(--timeline-laranja-bg)",
    corBorda: "var(--timeline-laranja-borda)",
  },
  {
    ano: "OFM",
    titulo: "Fundação da OFM",
    descricao:
      "Consolidação de toda a trajetória em uma empresa própria, oferecendo instrumentação de alta precisão, fabricação de células de carga, ensaios estáticos e dinâmicos e validação experimental de modelos numéricos.",
    corTexto: "var(--destaque-laranja)",
    corFundo: "var(--timeline-laranja-bg)",
    corBorda: "var(--timeline-laranja-borda)",
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-(--bg-principal)">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Esquerda: texto */}
          <div>
            <p className="text-xs tracking-[0.35em] text-(--destaque-laranja) uppercase font-medium mb-4">
              Nossa História
            </p>
            <h2
              className="text-4xl md:text-5xl font-black text-(--texto-principal) leading-tight mb-8"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Paixão pela
              <br />
              <span className="text-(--destaque-azul)">Engenharia</span>
              <br />
              Experimental
            </h2>
            <div className="space-y-5 text-(--texto-secundario) leading-relaxed text-[15px]">
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
            <div className="absolute left-6 top-3 bottom-3 w-[1px] bg-gradient-to-b from-(--destaque-azul) via-(--destaque-laranja) to-transparent" />

            <div className="space-y-10">
              {historico.map((etapa, i) => (
                <div key={i} className="relative pl-16">
                  {/* Marcador */}
                  <div
                    className="absolute left-0 top-1 w-12 h-12 rounded-sm flex items-center justify-center text-xs font-black tracking-tight border"
                    style={{
                      backgroundColor: etapa.corFundo,
                      borderColor: etapa.corBorda,
                      fontFamily: "var(--font-outfit)",
                      color: etapa.corTexto,
                    }}
                  >
                    {etapa.ano}
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
              ))}
            </div>
          </div>
        </div>

        {/* Barra de destaques */}
        <div className="mt-20 pt-10 border-t border-(--borda-principal) grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { nome: "Ponte Rio–Niterói", estado: "RJ" },
            { nome: "Museu do Amanhã", estado: "RJ" },
            { nome: "Arena Corinthians", estado: "SP" },
            { nome: "Ponte Octávio Frias", estado: "SP" },
          ].map((obra) => (
            <div
              key={obra.nome}
              className="flex items-center gap-3 p-4 bg-(--bg-cartao) border border-(--borda-principal) rounded-sm"
            >
              <div className="w-1.5 h-6 bg-(--destaque-laranja) rounded-full flex-shrink-0" />
              <div>
                <p className="text-(--texto-principal) text-sm font-semibold leading-snug">
                  {obra.nome}
                </p>
                <p className="text-(--texto-suave) text-xs">{obra.estado}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
