// Fonte de verdade para as páginas de detalhe de cada serviço.
// Para adicionar conteúdo do PDF: preencher os campos marcados com [TODO].

export interface Aplicacao {
  titulo: string;
  descricao: string;
}

export interface Equipamento {
  nome: string;
  detalhe: string;
}

export interface ObraRelacionada {
  titulo: string;
  local: string;
  tipo: string;
  slug?: string; // se tiver página dedicada, colocar o slug aqui
}

export interface Metrica {
  valor: string;
  unidade?: string;
  rotulo: string;
}

export interface GaleriaItem {
  src: string;
  alt: string;
  legenda?: string;
  destaque?: boolean; // se true, ocupa col-span-2 na grade
}

export interface ServicoDetalhado {
  slug: string;
  titulo: string;
  categoriaLabel: string; // ex: "Estruturas Fixas"
  acento: "azul" | "laranja";
  subtitulo: string;
  sobre: string[]; // parágrafos da seção "Sobre"
  metricas: Metrica[];
  aplicacoes: Aplicacao[];
  equipamentos: Equipamento[];
  normas: string[];
  obras: ObraRelacionada[];
  imagemHero?: string;  // foto para o hero (opcional — sem ela usa blueprint grid)
  galeria?: GaleriaItem[];
}

export const servicosDetalhados: ServicoDetalhado[] = [
  // ── 1 ─────────────────────────────────────────────────────
  {
    slug: "provas-de-carga",
    titulo: "Provas de Carga Estáticas e Dinâmicas",
    categoriaLabel: "Estruturas Fixas",
    acento: "azul",
    subtitulo:
      "Avaliação da rigidez, capacidade resistente e deformabilidade de estruturas sob carregamento controlado — com strain gages, LVDTs e aquisição multicanal em tempo real.",
    imagemHero: "/images/Obras/Ensaio Desempenho Estrutural e Comportamento sob Carga-02.png",
    sobre: [
      "O ensaio de desempenho estrutural e comportamento sob carga tem como objetivo avaliar a rigidez, a capacidade resistente e a deformabilidade de elementos estruturais submetidos a carregamentos controlados, reproduzindo as condições reais de utilização e verificando a integridade e o desempenho do sistema.",
      "Esses ensaios são amplamente aplicados em lajes de edifícios, arquibancadas, vagões ferroviários, passarelas e outras estruturas especiais, permitindo validar projetos, simulações numéricas e modelos de elementos finitos. Nas estruturas são monitoradas as deformações por strain gages e os deslocamentos verticais por LVDTs, possibilitando a obtenção do comportamento elástico e a verificação do limite de escoamento.",
      "Os dados são adquiridos por sistemas de aquisição multicanal e processamento em tempo real, permitindo determinar tensões e deslocamentos com elevada precisão. Os resultados asseguram que a estrutura atende aos critérios normativos de desempenho, segurança e serviço.",
    ],
    metricas: [
      { valor: "Estática", rotulo: "e Dinâmica" },
      { valor: "Multi", rotulo: "canal em tempo real" },
      { valor: "FEM", rotulo: "Validação de modelos" },
      { valor: "NBR", rotulo: "6118 / 7188 / 14931" },
    ],
    aplicacoes: [
      {
        titulo: "Arquibancadas e Estádios",
        descricao: "Aplicação de carga distribuída controlada nas arquibancadas com monitoramento simultâneo de deformações e deslocamentos. Referência: Arena Corinthians.",
      },
      {
        titulo: "Vagões Ferroviários",
        descricao: "Ensaio de desempenho estrutural em vagões do Metrô RJ e CPTM — carregamento simulando condições reais de serviço com passageiros.",
      },
      {
        titulo: "Pontes e Viadutos",
        descricao: "Provas de carga com veículos de referência para verificação de rigidez, integridade e segurança operacional de pontes em serviço.",
      },
      {
        titulo: "Passarelas e Estruturas Especiais",
        descricao: "Ensaios em estruturas esbeltas com avaliação simultânea de comportamento estático e dinâmico sob cargas controladas.",
      },
    ],
    equipamentos: [
      { nome: "Strain Gages", detalhe: "Monitoramento de deformações específicas" },
      { nome: "LVDTs", detalhe: "Deslocamentos verticais de alta resolução" },
      { nome: "Sistema Lynx Multicanal", detalhe: "Aquisição e processamento em tempo real" },
      { nome: "Células de Carga", detalhe: "Controle da força aplicada" },
    ],
    normas: ["ABNT NBR 6118", "ABNT NBR 7188", "ABNT NBR 14931"],
    obras: [
      { titulo: "Arena Corinthians", local: "São Paulo, SP", tipo: "Prova de Carga" },
      { titulo: "Metrô RJ / CPTM", local: "Rio de Janeiro & São Paulo", tipo: "Ferroviário" },
      { titulo: "Ponte Rio–Niterói", local: "Rio de Janeiro, RJ", tipo: "Análise Dinâmica", slug: "ponte-rio-niteroi" },
    ],
    galeria: [
      {
        src: "/images/Obras/Ensaio Desempenho Estrutural e Comportamento sob Carga-05.png",
        alt: "Equipe aplicando carga nas arquibancadas da Arena Corinthians",
        legenda: "Aplicação controlada de carga nas arquibancadas — Arena Corinthians, São Paulo",
        destaque: true,
      },
      {
        src: "/images/Obras/Ensaio Desempenho Estrutural e Comportamento sob Carga-06.png",
        alt: "Strain gage instalado na estrutura para monitoramento de deformações",
        legenda: "Strain gage fixado na armadura — monitoramento de deformações específicas",
      },
      {
        src: "/images/Obras/Ensaio Desempenho Estrutural e Comportamento sob Carga-01.png",
        alt: "Carregamento do vagão Metrô RJ para ensaio estrutural",
        legenda: "Carregamento do vagão Metrô RJ — simulação das condições de serviço",
      },
      {
        src: "/images/Obras/Ensaio Desempenho Estrutural e Comportamento sob Carga-4.png",
        alt: "Interior do vagão com carga distribuída durante o ensaio",
        legenda: "Carga distribuída no interior do vagão reproduzindo lotação real",
        destaque: true,
      },
      {
        src: "/images/Obras/Ensaio Desempenho Estrutural e Comportamento sob Carga-09.png",
        alt: "Sistema de aquisição multicanal Lynx com dados em tempo real",
        legenda: "Sistema Lynx multicanal — aquisição e processamento em tempo real",
      },
      {
        src: "/images/Obras/Ensaio Desempenho Estrutural e Comportamento sob Carga-07.png",
        alt: "LVDT instalado sob estrutura para monitoramento de deslocamentos",
        legenda: "LVDT posicionado para medição de deslocamentos verticais",
      },
      {
        src: "/images/Obras/Ensaio Desempenho Estrutural e Comportamento sob Carga-03.png",
        alt: "Prova de carga em ponte CCR com veículo de referência",
        legenda: "Prova de carga em ponte — carregamento com veículo CCR de referência",
      },
      {
        src: "/images/Obras/Ensaio Desempenho Estrutural e Comportamento sob Carga-08.png",
        alt: "Arena Corinthians em operação com torcida — estrutura validada",
        legenda: "Arena Corinthians em operação — estrutura validada pelo ensaio antes da inauguração",
        destaque: true,
      },
    ],
  },

  // ── 2 ─────────────────────────────────────────────────────
  {
    slug: "conforto-e-vibracao",
    titulo: "Ensaios de Conforto Humano e Vibração",
    categoriaLabel: "Estruturas Fixas",
    acento: "azul",
    subtitulo:
      "Avaliação de vibrações ambientais e conforto estrutural conforme NBR 6118 e 7188 — identificação de frequências naturais, amortecimentos e resposta dinâmica.",
    sobre: [
      // [TODO] Completar com texto do PDF
      "Estruturas sujeitas a cargas dinâmicas — vento, tráfego, uso humano sincronizado — podem apresentar vibrações incômodas ou até perigosas. A OFM avalia o comportamento dinâmico real dessas estruturas e verifica a conformidade com os limites de conforto normativos.",
      "Os ensaios de análise modal experimental identificam as frequências naturais e coeficientes de amortecimento da estrutura, que são comparados com as análises numéricas e utilizados na calibração dos modelos computacionais.",
      "Os resultados fornecem a base técnica para projetos de atenuação de vibração, reforços estruturais e, quando necessário, instalação de dispositivos de controle dinâmico.",
    ],
    metricas: [
      { valor: "Hz", rotulo: "Frequências naturais" },
      { valor: "Modal", rotulo: "Análise experimental" },
      // [TODO] Adicionar métricas numéricas do PDF
      { valor: "NBR", rotulo: "6118 / 7188" },
      { valor: "ADS", rotulo: "Atenuadores aferidos" },
    ],
    aplicacoes: [
      { titulo: "Passarelas e Estruturas Esbeltas", descricao: "Avaliação de conforto humano em estruturas sensíveis à excitação por pedestres." },
      { titulo: "Arquibancadas e Coberturas", descricao: "Análise dinâmica de estruturas com uso coletivo e excitação rítmica." },
      { titulo: "Pontes e Viadutos", descricao: "Avaliação de conforto veicular e resposta ao tráfego." },
      { titulo: "Aferição de Atenuadores", descricao: "Verificação do desempenho de ADS e outros dispositivos de controle de vibração." },
    ],
    equipamentos: [
      { nome: "Acelerômetros Triaxiais", detalhe: "Alta sensibilidade, resolução sub-mg" },
      { nome: "Acelerômetros Dytran (EUA)", detalhe: "Precisão metrológica certificada" },
      { nome: "Lynx ADS2002", detalhe: "Aquisição a até 1024 Hz" },
      { nome: "Software de Análise Modal", detalhe: "Identificação de frequências e amortecimentos" },
    ],
    normas: ["NBR 6118", "NBR 7188", "ISO 10137", "AISC Design Guide 11"],
    obras: [
      { titulo: "Ponte Rio–Niterói", local: "Rio de Janeiro, RJ", tipo: "Análise Dinâmica", slug: "ponte-rio-niteroi" },
      { titulo: "The Town 2025", local: "São Paulo, SP", tipo: "Estrutura Temporária" },
    ],
  },

  // ── 3 ─────────────────────────────────────────────────────
  {
    slug: "monitoramento-estrutural",
    titulo: "Monitoramento Estrutural",
    categoriaLabel: "Estruturas Fixas",
    acento: "azul",
    subtitulo:
      "Acompanhamento contínuo de tensões e deslocamentos em tempo real com strain gages e LVDTs — aquisição multicanal para obras em execução e estruturas em operação.",
    sobre: [
      // [TODO] Completar com texto do PDF
      "O monitoramento estrutural permite acompanhar o comportamento de uma estrutura ao longo do tempo, durante a construção ou em operação, garantindo que tensões e deformações permaneçam dentro dos limites de projeto.",
      "A OFM instala sistemas de instrumentação permanente ou temporária com strain gages, LVDTs e acelerômetros, configurados para aquisição multicanal em tempo real. Os dados são processados e apresentados em relatórios periódicos.",
      "O serviço é especialmente indicado para obras de grande porte durante fases críticas de execução, estruturas históricas ou em processo de requalificação, e verificações pós-intervenção.",
    ],
    metricas: [
      { valor: "Real", rotulo: "Tempo real" },
      { valor: "Multi", rotulo: "canais simultâneos" },
      // [TODO] Adicionar métricas numéricas do PDF
      { valor: "Strain", rotulo: "Gages + LVDTs" },
      { valor: "24/7", rotulo: "Monitoramento contínuo" },
    ],
    aplicacoes: [
      { titulo: "Obras em Execução", descricao: "Acompanhamento de fases críticas: concretagem, protensão, cimbramento e descimbramento." },
      { titulo: "Pontes e Viadutos", descricao: "Monitoramento sob tráfego normal para verificação de vida útil e segurança." },
      { titulo: "Estruturas Históricas", descricao: "Monitoramento de deslocamentos e deformações em edificações de valor patrimonial." },
      { titulo: "Estruturas Ferroviárias", descricao: "Acompanhamento de vagões, estruturas de plataforma e via permanente." },
    ],
    equipamentos: [
      { nome: "Strain Gages", detalhe: "Medição de deformação específica" },
      { nome: "LVDTs", detalhe: "Transdutores de deslocamento" },
      { nome: "Acelerômetros", detalhe: "Monitoramento dinâmico" },
      { nome: "Sistema de Aquisição", detalhe: "Multicanal, tempo real" },
    ],
    normas: ["NBR 6118", "NBR 6120", "ISO 13822"],
    obras: [
      { titulo: "Ponte Newton Navarro", local: "Natal, RN", tipo: "Ensaio Estrutural" },
      { titulo: "Metrô RJ / CPTM", local: "Rio de Janeiro & São Paulo", tipo: "Ferroviário" },
      { titulo: "Museu do Amanhã", local: "Rio de Janeiro, RJ", tipo: "Descimbramento", slug: "museu-do-amanha" },
    ],
  },

  // ── 4 ─────────────────────────────────────────────────────
  {
    slug: "validacao-numerica",
    titulo: "Validação de Modelos Numéricos",
    categoriaLabel: "Estruturas Fixas",
    acento: "azul",
    subtitulo:
      "Calibração experimental de simulações em elementos finitos — correlacionando dados de campo com modelos computacionais para validação do comportamento estrutural.",
    sobre: [
      // [TODO] Completar com texto do PDF
      "A validação experimental de modelos numéricos é o processo de confrontar os resultados de análises computacionais com medições reais obtidas em campo, garantindo que o modelo de cálculo representa fielmente o comportamento da estrutura.",
      "A OFM instrumenta as estruturas durante as fases mais representativas do carregamento e registra deformações, tensões e deslocamentos com alta precisão. Esses dados são então comparados com os resultados do modelo de elementos finitos.",
      "A excelente correlação entre dados experimentais e numéricos é o diferencial que transforma a instrumentação de um simples ensaio em uma ferramenta de engenharia — como demonstrado no descimbramento do Museu do Amanhã, cujos resultados foram citados em publicação técnica internacional.",
    ],
    metricas: [
      { valor: "FEM", rotulo: "Elementos Finitos" },
      // [TODO] Adicionar métricas numéricas do PDF
      { valor: "Exp.", rotulo: "vs. Numérico" },
      { valor: "Intl.", rotulo: "Publicações" },
      { valor: "Alta", rotulo: "Correlação" },
    ],
    aplicacoes: [
      { titulo: "Estruturas Metálicas", descricao: "Validação de modelos para estruturas em aço com geometrias complexas." },
      { titulo: "Concreto Armado e Protendido", descricao: "Calibração de modelos para estruturas de concreto em fases críticas." },
      { titulo: "Obras Especiais", descricao: "Validação de projetos experimentais e estruturas de referência nacional." },
      { titulo: "Publicações Técnicas", descricao: "Suporte a artigos científicos e trabalhos de pesquisa com dados experimentais." },
    ],
    equipamentos: [
      { nome: "Extensômetros Triaxiais", detalhe: "Tensões principais em qualquer direção" },
      { nome: "Extensômetros Uniaxiais", detalhe: "Deformações em direção conhecida" },
      { nome: "LVDTs", detalhe: "Deslocamentos com alta resolução" },
      { nome: "Sistema de Aquisição", detalhe: "Alta precisão metrológica" },
    ],
    normas: ["ASTM E1012", "ISO 6892-1"],
    obras: [
      { titulo: "Museu do Amanhã", local: "Rio de Janeiro, RJ", tipo: "Descimbramento", slug: "museu-do-amanha" },
      { titulo: "Ponte Rio–Niterói", local: "Rio de Janeiro, RJ", tipo: "Análise Dinâmica", slug: "ponte-rio-niteroi" },
    ],
  },

  // ── 5 ─────────────────────────────────────────────────────
  {
    slug: "trafegabilidade",
    titulo: "Ensaios de Trafegabilidade",
    categoriaLabel: "Estruturas Móveis e Especiais",
    acento: "laranja",
    subtitulo:
      "Avaliação da integridade estrutural e comportamento dinâmico de carretas transportadoras de subestações móveis — instrumentação em duas fases, com strain gages e acelerômetros de alta precisão.",
    imagemHero: "/images/Obras/Ensaio de Trafegabilidade-03.png",
    sobre: [
      "O ensaio de trafegabilidade tem como objetivo avaliar a integridade estrutural e o comportamento dinâmico da carreta que transporta a subestação móvel, garantindo que a unidade possa trafegar com segurança e confiabilidade entre as cidades.",
      "Na primeira fase, o ensaio é realizado com a carreta vazia. Strain gages são posicionados nos pontos de maior solicitação, previamente identificados por análise em elementos finitos. As medições determinam as deformações e tensões atuantes, verificando se estão dentro do limite de 70% da tensão de escoamento do material.",
      "Após a montagem da subestação sobre a carreta, acelerômetros de alta precisão são instalados nos principais componentes — para-raios, isoladores, trocadores de calor e suportes estruturais — para monitorar vibrações durante o deslocamento real. Essas medições asseguram que nenhum componente se desprenda ou apresente falhas estruturais durante o transporte.",
    ],
    metricas: [
      { valor: "70%", rotulo: "Limite da tensão de escoamento" },
      { valor: "2", rotulo: "Fases de instrumentação" },
      { valor: "FEM", rotulo: "Identificação dos pontos críticos" },
      { valor: "Real", rotulo: "Condições de tráfego monitoradas" },
    ],
    aplicacoes: [
      {
        titulo: "Carreta Vazia — Fase 1",
        descricao: "Strain gages nos pontos críticos (definidos por FEM). Verificação de deformações e tensões dentro do limite de 70% da tensão de escoamento.",
      },
      {
        titulo: "Subestação Montada — Fase 2",
        descricao: "Acelerômetros instalados em para-raios, isoladores, trocadores de calor e suportes. Monitoramento de vibrações durante deslocamento real.",
      },
      {
        titulo: "Componentes Críticos",
        descricao: "Validação de que nenhum componente da subestação se desprende ou falha estruturalmente durante o percurso entre cidades.",
      },
      {
        titulo: "Subestações Móveis WEG",
        descricao: "Ensaios realizados em unidades móveis de grande porte, com metodologia de duas fases e análise integrada de estrutura e equipamentos.",
      },
    ],
    equipamentos: [
      { nome: "Strain Gages", detalhe: "Posicionados por análise de elementos finitos" },
      { nome: "Acelerômetros de Alta Precisão", detalhe: "Para-raios, isoladores, trocadores e suportes" },
      { nome: "Sistema de Aquisição", detalhe: "Registro contínuo durante o deslocamento" },
      { nome: "Análise por Elementos Finitos", detalhe: "Identificação prévia dos pontos de maior solicitação" },
    ],
    normas: ["IEC 60068-2-64", "ABNT NBR 5422", "MIL-STD-810"],
    obras: [
      { titulo: "WEG – Subestação Móvel", local: "Brasil", tipo: "Trafegabilidade" },
    ],
    galeria: [
      {
        src: "/images/Obras/Ensaio de Trafegabilidade-02.png",
        alt: "Acelerômetro instalado na estrutura da carreta",
        legenda: "Acelerômetro posicionado nos pontos críticos da estrutura metálica da carreta",
        destaque: true,
      },
      {
        src: "/images/Obras/Ensaio de Trafegabilidade-01.png",
        alt: "Sistema de aquisição monitorando vibrações em campo",
        legenda: "Sistema de aquisição em operação durante o ensaio de deslocamento",
      },
      {
        src: "/images/Obras/Ensaio de Trafegabilidade-03.png",
        alt: "Subestação móvel em deslocamento sob monitoramento",
        legenda: "Unidade móvel em tráfego com instrumentação ativa",
      },
    ],
  },

  // ── 6 ─────────────────────────────────────────────────────
  {
    slug: "ensaios-industriais",
    titulo: "Ensaios Industriais Especiais",
    categoriaLabel: "Estruturas Móveis e Especiais",
    acento: "laranja",
    subtitulo:
      "Testes experimentais sob demanda para componentes industriais de alta precisão — pistões, cilindros pneumáticos, dispositivos de precisão e validação de soldas.",
    sobre: [
      // [TODO] Completar com texto do PDF — esta seção tem bastante conteúdo no PDF
      "A OFM oferece ensaios experimentais customizados para aplicações industriais onde os métodos convencionais de ensaio não são suficientes ou não existem padronizados.",
      "Com equipamentos de alta sensibilidade e experiência em metrologia de precisão, a equipe desenvolve procedimentos específicos para cada demanda — desde a verificação de novos dispositivos até a validação de processos de fabricação.",
      // [TODO] Adicionar casos específicos: ThyssenKrupp Synergy, etc.
    ],
    metricas: [
      // [TODO] Preencher com dados do PDF
      { valor: "Sob", rotulo: "Demanda" },
      { valor: "Alta", rotulo: "Precisão metrológica" },
      { valor: "Custom", rotulo: "Procedimentos" },
      { valor: "Exp.", rotulo: "Desenvolvimento" },
    ],
    aplicacoes: [
      { titulo: "Pistões e Atuadores", descricao: "Validação experimental de pistões e atuadores hidráulicos e pneumáticos." },
      { titulo: "Validação de Soldas", descricao: "Ensaios de integridade e resistência em juntas soldadas." },
      { titulo: "Dispositivos de Precisão", descricao: "Testes experimentais de componentes com tolerâncias críticas." },
      // [TODO] Adicionar mais aplicações do PDF
    ],
    equipamentos: [
      // [TODO] Confirmar equipamentos com o cliente
      { nome: "Strain Gages", detalhe: "Alta resolução para peças metálicas" },
      { nome: "Células de Carga", detalhe: "Força com rastreabilidade metrológica" },
      { nome: "Extensômetros", detalhe: "Deformação em componentes industriais" },
      { nome: "Sistema de Aquisição", detalhe: "Alta taxa de amostragem" },
    ],
    normas: ["ASTM E8", "ISO 6892-1", "AWS D1.1"],
    obras: [
      // [TODO] Adicionar projetos industriais específicos (ThyssenKrupp, etc.)
    ],
  },

  // ── 7 ─────────────────────────────────────────────────────
  {
    slug: "celulas-de-carga",
    titulo: "Fabricação e Calibração de Células de Carga",
    categoriaLabel: "Estruturas Móveis e Especiais",
    acento: "laranja",
    subtitulo:
      "Produção de células de carga sob medida para validações estruturais e sistemas de medição — com rastreabilidade metrológica e calibração certificada.",
    sobre: [
      // [TODO] Completar com texto do PDF
      "A fabricação própria de células de carga permite à OFM atender demandas específicas onde os transdutores comerciais disponíveis não atendem à geometria, faixa de medição ou condições de ensaio do projeto.",
      "Cada célula é projetada para a aplicação, fabricada com materiais adequados e calibrada com rastreabilidade metrológica, garantindo confiabilidade dos dados durante todo o ensaio.",
      // [TODO] Adicionar detalhes de fabricação e calibração do PDF
    ],
    metricas: [
      // [TODO] Preencher com dados do PDF
      { valor: "Custom", rotulo: "Sob medida" },
      { valor: "RBC", rotulo: "Rastreabilidade" },
      { valor: "Alta", rotulo: "Resolução" },
      { valor: "OFM", rotulo: "Produção própria" },
    ],
    aplicacoes: [
      { titulo: "Células para Provas de Carga", descricao: "Transdutores com faixa e geometria adequadas para ensaios estruturais." },
      { titulo: "Células para Sistemas de Medição", descricao: "Produção para sistemas de pesagem e monitoramento de força." },
      { titulo: "Geometrias Especiais", descricao: "Designs customizados para espaços confinados ou condições extremas." },
      // [TODO] Adicionar mais aplicações do PDF
    ],
    equipamentos: [
      { nome: "Usinagem de Precisão", detalhe: "Geometria controlada" },
      { nome: "Strain Gages de Precisão", detalhe: "Colagem metrológica certificada" },
      { nome: "Bancada de Calibração", detalhe: "Rastreabilidade INMETRO/RBC" },
      { nome: "Condicionamento de Sinal", detalhe: "Eletrônica de alta resolução" },
    ],
    normas: ["OIML R 60", "ABNT NBR ISO 376", "VIM — Vocabulário Internacional de Metrologia"],
    obras: [
      // [TODO] Adicionar projetos onde células OFM foram utilizadas
    ],
  },
];
