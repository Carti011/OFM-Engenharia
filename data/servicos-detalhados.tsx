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

export interface Subsecao {
  titulo: string;
  subtitulo: string;
  sobre: string[];
  galeria?: GaleriaItem[];
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
  subsecao?: Subsecao;  // ensaio complementar dentro da mesma página
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

  // ── 1b ────────────────────────────────────────────────────
  {
    slug: "provas-de-carga-hidraulica",
    titulo: "Provas de Carga Hidráulica",
    categoriaLabel: "Estruturas Fixas",
    acento: "azul",
    subtitulo:
      "Aplicação gradual de carga por lâmina d'água em reservatórios e lajes — monitoramento com strain gages e LVDTs para avaliar rigidez, distribuição de tensões e integridade estrutural.",
    imagemHero: "/images/Obras/Prova de Carga Hidráulica e Análise de Deformações Estruturais-05.png",
    sobre: [
      "Os ensaios de prova de carga hidráulica consistem na aplicação gradual de carregamentos por lâminas d'água, simulando condições reais de uso em estruturas como reservatórios e lajes de edificações.",
      "Antes do carregamento, são instalados extensômetros elétricos (strain gages) e transdutores de deslocamento linear (LVDTs) para monitorar deformações e flechas nas vigas principais, avaliando o comportamento elástico e o limite de deformação admissível dos elementos estruturais.",
      "Os dados obtidos são processados e comparados com os critérios normativos da ABNT NBR 6118 e NBR 14931, assegurando que a estrutura atenda aos requisitos de segurança, rigidez e desempenho estrutural.",
    ],
    metricas: [
      { valor: "Lâmina", rotulo: "D'água como carga" },
      { valor: "LVDT", rotulo: "+ Strain Gages" },
      { valor: "Radial", rotulo: "Vigas monitoradas" },
      { valor: "NBR", rotulo: "6118 / 14931" },
    ],
    aplicacoes: [
      {
        titulo: "Reservatórios",
        descricao: "Análise do comportamento das vigas radiais sob pressão hidrostática — verificação de distribuição de tensões e integridade estrutural.",
      },
      {
        titulo: "Lajes de Edificações",
        descricao: "Simulação das condições reais de uso com lâmina d'água para verificação de rigidez e capacidade de serviço.",
      },
      {
        titulo: "Tanques e Estruturas Hídricas",
        descricao: "Ensaios em estruturas destinadas ao armazenamento ou condução de fluidos, com monitoramento de deformações e flechas.",
      },
      {
        titulo: "Validação Pós-Construção",
        descricao: "Verificação do desempenho real antes da entrega da obra — confronto dos dados com o modelo estrutural de projeto.",
      },
    ],
    equipamentos: [
      { nome: "Strain Gages", detalhe: "Extensômetros nas vigas principais" },
      { nome: "LVDTs", detalhe: "Flechas e deslocamentos verticais" },
      { nome: "Sistema Multicanal", detalhe: "Aquisição em tempo real" },
      { nome: "Mapeamento de pontos", detalhe: "Posicionamento por análise prévia" },
    ],
    normas: ["ABNT NBR 6118", "ABNT NBR 14931", "ABNT NBR 12655"],
    obras: [
      // [TODO] Confirmar nome do cliente / obra do reservatório com o cliente
    ],
    galeria: [
      {
        src: "/images/Obras/Prova de Carga Hidráulica e Análise de Deformações Estruturais-02.png",
        alt: "LVDT instalado na viga para monitoramento de deslocamentos",
        legenda: "LVDT fixado na viga principal — medição de flechas durante o enchimento",
        destaque: true,
      },
      {
        src: "/images/Obras/Prova de Carga Hidráulica e Análise de Deformações Estruturais-01.png",
        alt: "Strain gages instalados na estrutura do reservatório",
        legenda: "Extensômetros instalados na face inferior da viga — monitoramento de deformações",
      },
      {
        src: "/images/Obras/Prova de Carga Hidráulica e Análise de Deformações Estruturais-03.png",
        alt: "Sistema de aquisição multicanal conectado aos sensores",
        legenda: "Sistema de aquisição com múltiplos canais conectados simultaneamente",
      },
      {
        src: "/images/Obras/Prova de Carga Hidráulica e Análise de Deformações Estruturais-06.png",
        alt: "Laptop com dados de aquisição em tempo real durante o ensaio",
        legenda: "Monitoramento em tempo real dos dados durante o enchimento com água",
      },
      {
        src: "/images/Obras/Prova de Carga Hidráulica e Análise de Deformações Estruturais-04.png",
        alt: "Diagrama de posicionamento dos extensômetros no reservatório",
        legenda: "Planta de localização dos extensômetros — posicionamento definido por análise estrutural",
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
    categoriaLabel: "Ensaios Especiais e Instrumentação",
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
    categoriaLabel: "Ensaios Especiais e Instrumentação",
    acento: "laranja",
    imagemHero: "/images/Obras/ensaio-cilindros-pneumaticos-03.png",
    subtitulo:
      "Verificação de torque, desempenho e integridade de componentes industriais sob condições controladas — cilindros pneumáticos, pistões, fixadores e sistemas de acionamento eletropneumático.",
    sobre: [
      "O Ensaio de Verificação de Torque e Desempenho de Cilindros Pneumáticos tem como objetivo avaliar a resistência mecânica, a integridade dos fixadores e o comportamento estrutural dos conjuntos pneumáticos submetidos a esforços cíclicos e controlados.",
      "Durante o procedimento, o sistema é instrumentado com sensores de deslocamento e torque calibrados, sendo acionado por um circuito automatizado de controle eletropneumático e temporizador que reproduz as condições reais de operação.",
      "O ensaio permite identificar falhas prematuras, perdas de torque, desprendimentos de componentes e não conformidades em relação às especificações do fabricante — fornecendo dados precisos para otimização de projeto, validação de componentes e análise de desempenho.",
      "Com medições de alta resolução e aquisição em tempo real, os resultados gerados pela OFM são confiáveis, rastreáveis e tecnicamente fundamentados — essenciais para o controle de qualidade e certificação de sistemas pneumáticos em aplicações industriais e automotivas.",
    ],
    metricas: [
      { valor: "Cíclico", rotulo: "Esforços controlados" },
      { valor: "Real", rotulo: "Aquisição em tempo real" },
      { valor: "Alta", rotulo: "Resolução metrológica" },
      { valor: "RBC", rotulo: "Rastreabilidade" },
    ],
    aplicacoes: [
      {
        titulo: "Cilindros Pneumáticos",
        descricao: "Verificação de torque, desempenho e integridade estrutural de cilindros pneumáticos sob esforços cíclicos reproduzindo condições reais de operação.",
      },
      {
        titulo: "Pistões e Atuadores",
        descricao: "Validação experimental de pistões e atuadores — identificação de falhas prematuras e não conformidades com especificações do fabricante.",
      },
      {
        titulo: "Sistemas Eletropneumáticos",
        descricao: "Ensaios com circuito automatizado de controle eletropneumático e temporizador, simulando ciclos reais de trabalho.",
      },
      {
        titulo: "Controle de Qualidade Industrial",
        descricao: "Certificação e validação de componentes para aplicações industriais e automotivas com dados rastreáveis e laudo técnico.",
      },
    ],
    equipamentos: [
      { nome: "Sensores de Torque", detalhe: "Calibrados com rastreabilidade metrológica" },
      { nome: "Sensores de Deslocamento", detalhe: "Alta resolução para detecção de folgas" },
      { nome: "Circuito Eletropneumático", detalhe: "Controle automatizado de ciclos" },
      { nome: "Sistema de Aquisição", detalhe: "Tempo real, multicanal" },
    ],
    normas: ["ABNT NBR ISO 6358", "ISO 15552", "ASTM E8"],
    obras: [
      // [TODO] Confirmar nome do cliente dos cilindros pneumáticos com o cliente
    ],
    galeria: [
      {
        src: "/images/Obras/ensaio-cilindros-pneumaticos-04.png",
        alt: "Bancada de ensaio com cilindro pneumático montado e haste estendida",
        legenda: "Setup completo do ensaio — cilindro pneumático montado na bancada com haste em posição de trabalho",
        destaque: true,
      },
      {
        src: "/images/Obras/ensaio-cilindros-pneumaticos-01.png",
        alt: "Strain gage instalado no corpo do cilindro pneumático",
        legenda: "Strain gage fixado no cilindro — monitoramento de deformações durante os ciclos de esforço",
      },
      {
        src: "/images/Obras/ensaio-cilindros-pneumaticos-02.png",
        alt: "Sensor de deslocamento acoplado ao fixture de torque",
        legenda: "Sensor de deslocamento calibrado no fixture — medição da variação angular durante o ensaio de torque",
      },
    ],
  },

  // ── 7 ─────────────────────────────────────────────────────
  {
    slug: "celulas-de-carga",
    titulo: "Fabricação e Calibração de Células de Carga",
    categoriaLabel: "Ensaios Especiais e Instrumentação",
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

  // ── 8 ─────────────────────────────────────────────────────
  {
    slug: "analise-de-vibracao",
    titulo: "Análise de Vibração e Frequências Naturais",
    categoriaLabel: "Ensaios Especiais e Instrumentação",
    acento: "laranja",
    imagemHero: "/images/Obras/analise-vibracao-03.png",
    subtitulo:
      "Identificação de frequências de ressonância e modos de vibração em máquinas, equipamentos e estruturas de apoio — processamento espectral em tempo real para diagnóstico e prevenção de falhas.",
    sobre: [
      "O Ensaio de Análise de Vibração e Determinação de Frequências Naturais tem como objetivo identificar e quantificar as frequências de ressonância e modos de vibração de equipamentos, máquinas e estruturas de apoio, garantindo desempenho estável e seguro.",
      "Durante o ensaio, acelerômetros de alta sensibilidade são instalados nos pontos estratégicos do equipamento e na estrutura adjacente — como lajes ou bases de fundação — permitindo a separação das componentes estruturais e operacionais da vibração.",
      "A OFM realiza a aquisição de dados em alta taxa de amostragem com processamento espectral em tempo real, determinando com precisão as frequências dominantes (Hz), amplitudes e modos de resposta dinâmica.",
      "Essas informações permitem diagnosticar fontes de vibração excessiva, avaliar o risco de ressonância e propor medidas corretivas como alterações de rigidez, isolamento dinâmico ou ajuste de parâmetros de operação.",
    ],
    metricas: [
      { valor: "Hz", rotulo: "Frequências dominantes" },
      { valor: "Modal", rotulo: "Análise espectral" },
      { valor: "Alta", rotulo: "Taxa de amostragem" },
      { valor: "Real", rotulo: "Processamento em tempo real" },
    ],
    aplicacoes: [
      {
        titulo: "Máquinas e Equipamentos Industriais",
        descricao: "Diagnóstico de vibração excessiva em máquinas rotativas, compressores, bombas e equipamentos com base de fundação.",
      },
      {
        titulo: "Estruturas de Apoio e Fundações",
        descricao: "Separação das componentes estruturais e operacionais de vibração em lajes, bases e suportes de equipamentos.",
      },
      {
        titulo: "Avaliação de Risco de Ressonância",
        descricao: "Identificação de frequências naturais próximas às frequências de operação — prevenção de ressonância e falha por fadiga.",
      },
      {
        titulo: "Medidas Corretivas e Otimização",
        descricao: "Proposição de alterações de rigidez, isolamento dinâmico ou ajuste de parâmetros para redução de vibrações e aumento da vida útil.",
      },
    ],
    equipamentos: [
      { nome: "Acelerômetros de Alta Sensibilidade", detalhe: "Posicionados em pontos estratégicos" },
      { nome: "Sistema de Aquisição Multicanal", detalhe: "Alta taxa de amostragem" },
      { nome: "Processamento Espectral", detalhe: "FFT em tempo real" },
      { nome: "Software de Análise Modal", detalhe: "Identificação de frequências e modos" },
    ],
    normas: ["ISO 10816", "ISO 20816", "ABNT NBR 6118"],
    obras: [
      // [TODO] Confirmar nome do cliente / equipamento do ensaio com o cliente
    ],
    galeria: [
      {
        src: "/images/Obras/analise-vibracao-01.png",
        alt: "Setup completo do ensaio com sistema de aquisição multicanal e laptop em campo",
        legenda: "Setup em campo — sistema de aquisição multicanal com processamento espectral em tempo real",
        destaque: true,
      },
      {
        src: "/images/Obras/analise-vibracao-02.png",
        alt: "Acelerômetro instalado na base metálica do equipamento",
        legenda: "Acelerômetro posicionado na base estrutural — separação das componentes de vibração",
      },
    ],
  },

  // ── 9 ─────────────────────────────────────────────────────
  {
    slug: "porta-paletes",
    titulo: "Ensaio de Carga em Porta Paletes",
    categoriaLabel: "Ensaios Especiais e Instrumentação",
    acento: "laranja",
    imagemHero: "/images/Obras/porta-paletes-06.png",
    subtitulo:
      "Validação estrutural de sistemas de armazenagem em campo e fábrica — aplicação controlada de carga por etapas com strain gages e LVDTs nas longarinas, garantindo conformidade com a ABNT NBR 14762.",
    sobre: [
      "O Ensaio de Carga em Porta Paletes tem como objetivo avaliar a resistência, rigidez e estabilidade estrutural dos sistemas de armazenagem, assegurando o cumprimento dos requisitos de desempenho e segurança previstos em norma.",
      "A OFM realiza ensaios tanto em campo, em estruturas já instaladas, quanto em fábrica, antes da liberação para uso — aplicando carregamentos controlados por etapas com instrumentação de alta precisão composta por strain gages uniaxiais, biaxiais ou triaxiais e sensores LVDT para monitoramento dos deslocamentos verticais e deflexões nas longarinas.",
      "Nos ensaios em campo, os porta paletes são avaliados sob condições reais de operação, simulando o carregamento progressivo de produtos e monitorando o comportamento estrutural ao longo do tempo. Nos ensaios em fábrica, os testes seguem protocolos de carga máxima com 40% de margem de segurança, garantindo a conformidade dos projetos.",
      "A OFM também executa ensaios em sistemas automatizados e drive-in, oferecendo soluções completas de validação experimental, inspeção dimensional e monitoramento de alinhamento das estruturas.",
    ],
    metricas: [
      { valor: "+40%", rotulo: "Margem de segurança" },
      { valor: "Campo", rotulo: "e fábrica" },
      { valor: "LVDT", rotulo: "+ Strain Gages" },
      { valor: "NBR", rotulo: "14762" },
    ],
    aplicacoes: [
      {
        titulo: "Ensaios em Campo",
        descricao: "Validação de estruturas já instaladas em operação — carregamento progressivo simulando condições reais com monitoramento contínuo.",
      },
      {
        titulo: "Ensaios em Fábrica",
        descricao: "Certificação antes da liberação para uso — carga máxima com 40% de margem de segurança conforme protocolos normativos.",
      },
      {
        titulo: "Sistemas Drive-in e Automatizados",
        descricao: "Validação de sistemas de armazenagem especiais com maior complexidade estrutural e requisitos operacionais específicos.",
      },
      {
        titulo: "Inspeção e Alinhamento",
        descricao: "Monitoramento dimensional e de alinhamento das estruturas — verificação de plumb, nível e geometria das longarinas.",
      },
    ],
    equipamentos: [
      { nome: "Strain Gages Uni/Bi/Triaxiais", detalhe: "Longarinas e pontos de maior solicitação" },
      { nome: "LVDTs", detalhe: "Deflexões e deslocamentos verticais" },
      { nome: "Sistema de Aquisição", detalhe: "Multicanal em tempo real" },
      { nome: "Cargas Calibradas", detalhe: "Aplicação controlada por etapas" },
    ],
    normas: ["ABNT NBR 14762", "ABNT NBR 8800", "FEM 10.2.02"],
    obras: [
      // [TODO] Confirmar nome dos clientes dos ensaios de porta paletes
    ],
    galeria: [
      {
        src: "/images/Obras/porta-paletes-04.png",
        alt: "LVDT instalado na longarina azul para medição de deflexão",
        legenda: "LVDT posicionado na longarina — medição da deflexão durante o carregamento progressivo",
        destaque: true,
      },
      {
        src: "/images/Obras/porta-paletes-05.png",
        alt: "LVDT em ensaio de fábrica com estrutura laranja antes da liberação",
        legenda: "Ensaio em fábrica — LVDT na estrutura antes da liberação para uso comercial",
      },
      {
        src: "/images/Obras/porta-paletes-01.png",
        alt: "Sistema de aquisição instalado em campo durante ensaio em supermercado",
        legenda: "Aquisição em campo — sistema multicanal durante ensaio em estrutura instalada",
      },
      {
        src: "/images/Obras/porta-paletes-02.png",
        alt: "Strain gage biaxial instalado na longarina metálica",
        legenda: "Strain gage biaxial fixado na longarina — monitoramento de deformações nas direções principais",
      },
      {
        src: "/images/Obras/porta-paletes-03.png",
        alt: "LVDT sob longarina vermelha medindo deflexão vertical",
        legenda: "LVDT sob a longarina — medição precisa da deflexão vertical sob carga",
      },
    ],
    subsecao: {
      titulo: "Ensaio de Resistência e Desempenho Estrutural em Braços de Porta-Paletes",
      subtitulo:
        "Validação da capacidade resistente e do comportamento estrutural de braços de porta-paletes como componentes individuais — ensaio em bancada com célula de carga calibrada, LVDTs e strain gages.",
      sobre: [
        "Além dos ensaios no sistema completo de armazenagem, a OFM realiza a validação estrutural dos braços de porta-paletes como componentes individuais. O ensaio de resistência e desempenho estrutural em braços avalia a capacidade de carga, a rigidez e o comportamento à deformação de cada braço isoladamente, garantindo que o componente atenda aos requisitos de projeto antes da montagem ou após reparos.",
        "O ensaio é conduzido em bancada com aplicação de carga controlada por etapas, utilizando células de carga calibradas posicionadas no ponto de maior solicitação do braço. LVDTs medem os deslocamentos verticais e horizontais em tempo real, enquanto strain gages fixados nos pontos críticos registram as deformações específicas durante todo o carregamento.",
        "Os dados adquiridos pelo sistema multicanal permitem traçar as curvas de carga-deflexão de cada braço, identificar o ponto de plastificação, verificar a conformidade com as especificações do fabricante e detectar eventuais defeitos estruturais. O relatório técnico emitido ao final documenta os resultados e a aprovação ou reprovação de cada componente ensaiado.",
      ],
      galeria: [
        {
          src: "/images/Obras/bracos-porta-paletes-01.png",
          alt: "Bancada de ensaio com célula de carga e LVDT posicionados no braço de porta-paletes",
          legenda: "Bancada de ensaio — célula de carga e LVDT posicionados para aplicação e medição de carga no braço",
          destaque: true,
        },
        {
          src: "/images/Obras/bracos-porta-paletes-02.png",
          alt: "Sistema de aquisição de dados multicanal conectado aos sensores em bancada",
          legenda: "Sistema de aquisição multicanal — leitura simultânea de todos os sensores durante o ensaio",
        },
        {
          src: "/images/Obras/bracos-porta-paletes-03.png",
          alt: "Célula de carga calibrada fixada no ponto de aplicação de carga do braço",
          legenda: "Célula de carga calibrada — controle preciso da força aplicada ao braço durante cada etapa",
        },
        {
          src: "/images/Obras/bracos-porta-paletes-04.png",
          alt: "Strain gage instalado no braço metálico para medição de deformação específica",
          legenda: "Strain gage fixado no braço — monitoramento das deformações nos pontos de maior solicitação",
        },
      ],
    },
  },

  // ── 10 ────────────────────────────────────────────────────
  {
    slug: "monitoramento-termico",
    titulo: "Monitoramento Térmico e Detecção de Fumaça",
    categoriaLabel: "Ensaios Especiais e Instrumentação",
    acento: "laranja",
    subtitulo:
      "Ensaios de estudo de fuga de fumaça com sensores PT100 posicionados estrategicamente em pontos críticos — detecção precoce de variações térmicas e integração com sistemas de alarme em ambientes industriais e comerciais.",
    imagemHero: "/images/Obras/monitoramento-termico-01.png",
    sobre: [
      "O ensaio de estudo de fuga de fumaça com sensores PT100 é uma abordagem eficaz para monitorar e controlar a segurança em ambientes industriais e comerciais. O sensor PT100 é um termorresistor que oferece medição precisa da temperatura, essencial para detectar variações térmicas associadas à presença de fumaça.",
      "Durante o ensaio, os sensores são estrategicamente posicionados em locais críticos para garantir cobertura abrangente do ambiente. A detecção precoce de aumentos de temperatura indica a presença de fumaça, possibilitando resposta rápida para mitigar riscos de incêndio.",
      "A integração dos sensores com sistemas de alarme e controle automatizados aprimora a eficácia do monitoramento. A análise dos dados coletados permite ajustes e melhorias no sistema, garantindo que ele atenda aos padrões de segurança e eficiência exigidos.",
    ],
    metricas: [
      { valor: "PT100", rotulo: "Termorresistores de precisão" },
      { valor: "Early", rotulo: "Detecção precoce" },
      { valor: "360°", rotulo: "Cobertura do ambiente" },
      { valor: "Auto", rotulo: "Integração com alarmes" },
    ],
    aplicacoes: [
      {
        titulo: "Hangares e Galpões Industriais",
        descricao: "Ensaios em grandes estruturas com pé-direito elevado — posicionamento de sensores via plataforma elevatória para cobertura de toda a área.",
      },
      {
        titulo: "Ambientes Comerciais",
        descricao: "Verificação da eficácia do sistema de detecção e evacuação de fumaça em shoppings, arenas e edificações com público.",
      },
      {
        titulo: "Integração com Alarmes",
        descricao: "Validação da resposta automática dos sistemas de alarme e supressão de incêndio a partir das leituras térmicas dos sensores.",
      },
      {
        titulo: "Adequação Normativa",
        descricao: "Ensaios para certificação e conformidade com normas de segurança contra incêndio vigentes.",
      },
    ],
    equipamentos: [
      { nome: "Sensores PT100", detalhe: "Termorresistores de alta precisão" },
      { nome: "Sistema de Aquisição", detalhe: "Registro multicanal em tempo real" },
      { nome: "Plataforma Elevatória", detalhe: "Posicionamento em alturas críticas" },
      { nome: "Software de Análise", detalhe: "Mapeamento térmico e geração de relatórios" },
    ],
    normas: ["ABNT NBR 9441", "ABNT NBR 17240", "IT-14 CBPMESP"],
    obras: [
      // [TODO] Confirmar nome do cliente / local do ensaio (hangar) com o cliente
    ],
    galeria: [
      {
        src: "/images/Obras/monitoramento-termico-04.png",
        alt: "Plataforma elevatória posicionando sensores PT100 na estrutura metálica do teto",
        legenda: "Instalação dos sensores PT100 na estrutura do teto — posicionamento estratégico por plataforma elevatória",
        destaque: true,
      },
      {
        src: "/images/Obras/monitoramento-termico-02.png",
        alt: "Incêndio controlado durante ensaio de fuga de fumaça no hangar",
        legenda: "Fogo controlado durante o ensaio — simulação das condições reais de incêndio",
      },
      {
        src: "/images/Obras/monitoramento-termico-03.png",
        alt: "Sensor PT100 — termorresistor de alta precisão utilizado no monitoramento",
        legenda: "Sensor PT100 — termorresistor com blindagem para medição de temperatura em campo",
      },
    ],
  },

  // ── 11 ────────────────────────────────────────────────────
  {
    slug: "estruturas-especiais",
    titulo: "Ensaios Estáticos e Dinâmicos em Estruturas Especiais",
    categoriaLabel: "Estruturas Fixas",
    acento: "azul",
    subtitulo:
      "Validação experimental de estruturas temporárias e permanentes — ensaios estáticos e dinâmicos com acelerômetros triaxiais, strain gages e LVDTs integrados ao sistema Lynx ADS2000, garantindo segurança, desempenho e rastreabilidade técnica.",
    sobre: [
      "Os ensaios estáticos e dinâmicos em estruturas especiais têm como objetivo a validação experimental do comportamento estrutural de instalações temporárias e permanentes, assegurando segurança, desempenho e conformidade técnica. Esses ensaios avaliam a resposta real das estruturas sob ação de cargas estáticas controladas e excitações dinâmicas, garantindo estabilidade, rigidez e resposta vibratória dentro dos limites normativos.",
      "Durante o evento The Town 2025, a OFM executou o ensaio estrutural completo da torre da tirolesa, aplicando metodologia de instrumentação de alta precisão com strain gages, LVDTs e acelerômetros triaxiais integrados ao sistema de aquisição Lynx ADS2000, com processamento e análise realizados pelo software AqDados e AqDAnalysis. O ensaio assegurou a integridade estrutural da instalação durante todo o período do evento.",
      "A mesma metodologia é aplicada em pontes, passarelas, viadutos e torres metálicas, atendendo às normas ABNT NBR 8800 para estruturas de aço e ABNT NBR 6118 para estruturas de concreto. Cada ensaio é documentado em relatório técnico com resultados, análises e diagnóstico estrutural completo.",
      "A OFM oferece soluções completas de monitoramento e validação experimental, unindo engenharia aplicada, tecnologia de aquisição de dados e experiência de campo para entregar segurança estrutural comprovada e resultados tecnicamente rastreáveis.",
    ],
    metricas: [
      { valor: "3", unidade: "eixos", rotulo: "Acelerometria triaxial" },
      { valor: "Lynx", rotulo: "ADS2000" },
      { valor: "Estático", rotulo: "+ Dinâmico" },
      { valor: "NBR", rotulo: "8800 / 6118" },
    ],
    aplicacoes: [
      {
        titulo: "Torres e Estruturas de Eventos",
        descricao: "Validação de torres temporárias, estruturas de palco e instalações especiais — como a torre da tirolesa do The Town 2025.",
      },
      {
        titulo: "Pontes e Passarelas",
        descricao: "Ensaios estáticos e dinâmicos sob cargas controladas — verificação de rigidez, deslocamentos e resposta em frequência.",
      },
      {
        titulo: "Viadutos e Estruturas Urbanas",
        descricao: "Avaliação de desempenho estrutural e resposta dinâmica em viadutos e estruturas de infraestrutura urbana.",
      },
      {
        titulo: "Torres Metálicas",
        descricao: "Validação experimental de torres metálicas sob cargas estáticas e excitações dinâmicas — análise modal e verificação de estabilidade.",
      },
    ],
    equipamentos: [
      { nome: "Acelerômetros Triaxiais", detalhe: "Resposta dinâmica nos três eixos" },
      { nome: "Sistema Lynx ADS2000", detalhe: "Aquisição multicanal de alta precisão" },
      { nome: "Strain Gages", detalhe: "Deformações específicas nos pontos críticos" },
      { nome: "LVDTs", detalhe: "Deslocamentos estáticos e quase-estáticos" },
      { nome: "AqDados / AqDAnalysis", detalhe: "Processamento e análise espectral dos dados" },
    ],
    normas: ["ABNT NBR 8800", "ABNT NBR 6118"],
    obras: [
      { titulo: "Torre da Tirolesa — The Town 2025", local: "São Paulo, SP", tipo: "Ensaio estático e dinâmico" },
    ],
  },

  // ── 12 ────────────────────────────────────────────────────
  {
    slug: "arrancamento-soldas",
    titulo: "Ensaio de Arrancamento e Verificação de Soldas Estruturais",
    categoriaLabel: "Ensaios Especiais e Instrumentação",
    acento: "laranja",
    subtitulo:
      "Avaliação da resistência à tração, integridade e desempenho mecânico de soldas em barras de ancoragem, chapas metálicas e componentes estruturais — carregamento controlado com macaco hidráulico calibrado, strain gages e sensor de pressão.",
    sobre: [
      "O Ensaio de Arrancamento e Verificação de Soldas Estruturais tem como objetivo avaliar a resistência à tração, integridade e desempenho mecânico das soldas aplicadas em barras de ancoragem, chapas metálicas e componentes estruturais. O ensaio permite identificar falhas prematuras, avaliar reforços e validar processos de soldagem, assegurando que cada ponto soldado atenda aos critérios de segurança e desempenho normativos.",
      "Durante o ensaio, a amostra é instrumentada com strain gages para medição das deformações específicas e conectada a um sensor de pressão acoplado ao sistema de aquisição de dados, permitindo o registro simultâneo da força aplicada e da deformação estrutural ao longo de todo o carregamento.",
      "O carregamento é aplicado de forma controlada por meio de macaco hidráulico calibrado. Os dados adquiridos possibilitam a geração de gráficos de carga versus deformação e carga versus deslocamento, fundamentais para determinar o comportamento da solda até o ponto de ruptura ou escoamento e para a caracterização completa da resposta mecânica do elemento soldado.",
      "A OFM fornece relatórios técnicos completos com análise gráfica, resultados precisos e rastreáveis, garantindo confiabilidade, qualidade e desempenho estrutural em aplicações industriais e civis. Os ensaios seguem as normas AWS D1.1/D1.1M (American Welding Society) ou as normas brasileiras equivalentes ABNT NBR 6492 e ABNT NBR 8800, conforme a tipologia estrutural e o processo de soldagem utilizado.",
    ],
    metricas: [
      { valor: "F×δ", rotulo: "Curva carga vs deformação" },
      { valor: "AWS", rotulo: "D1.1/D1.1M" },
      { valor: "Ruptura", rotulo: "Ou escoamento" },
      { valor: "HJ", rotulo: "Macaco hidráulico calibrado" },
    ],
    aplicacoes: [
      {
        titulo: "Barras de Ancoragem",
        descricao: "Verificação da resistência à tração de chumbadores, tirantes e ancoragens estruturais fixados em concreto ou aço.",
      },
      {
        titulo: "Chapas e Ligações Metálicas",
        descricao: "Avaliação da integridade de soldas em chapas de ligação, placas de base e nós estruturais.",
      },
      {
        titulo: "Validação de Processos de Soldagem",
        descricao: "Qualificação experimental de procedimentos de soldagem — determinação da resistência real dos cordões executados.",
      },
      {
        titulo: "Reforços e Reparos Estruturais",
        descricao: "Ensaios em soldas de intervenções de reforço e reparo — verificação do desempenho mecânico pós-execução.",
      },
    ],
    equipamentos: [
      { nome: "Macaco Hidráulico Calibrado", detalhe: "Aplicação controlada da carga de tração" },
      { nome: "Sensor de Pressão", detalhe: "Registro da força aplicada em tempo real" },
      { nome: "Strain Gages", detalhe: "Deformações específicas ao longo do carregamento" },
      { nome: "Sistema de Aquisição", detalhe: "Registro simultâneo de força e deformação" },
    ],
    normas: ["AWS D1.1/D1.1M", "ABNT NBR 6492", "ABNT NBR 8800"],
    obras: [],
    imagemHero: "/images/Obras/arrancamento-soldas-03.png",
    galeria: [
      {
        src: "/images/Obras/arrancamento-soldas-03.png",
        alt: "Macaco hidráulico com célula de carga acoplado a barra de ancoragem sob laje de concreto armado",
        legenda: "Setup do ensaio — macaco hidráulico e célula de carga aplicando carga de tração na barra de ancoragem",
        destaque: true,
      },
      {
        src: "/images/Obras/arrancamento-soldas-01.png",
        alt: "Engenheiro com capacete vermelho acompanhando leitura do sistema de aquisição em campo",
        legenda: "Monitoramento em tempo real — operador acompanha as leituras de força e deformação durante o ensaio",
      },
      {
        src: "/images/Obras/arrancamento-soldas-02.png",
        alt: "Sensor e cabos de instrumentação fixados na face inferior de viga metálica",
        legenda: "Instrumentação na viga — sensor posicionado na face inferior para medição durante o carregamento",
      },
      {
        src: "/images/Obras/arrancamento-soldas-04.png",
        alt: "Soldador realizando solda em viga metálica com faíscas visíveis",
        legenda: "Execução da solda — registro do processo de soldagem antes da verificação experimental",
      },
    ],
  },
];
