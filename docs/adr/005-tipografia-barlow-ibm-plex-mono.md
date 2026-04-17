# ADR 005 — Tipografia: Barlow Condensed + Barlow + IBM Plex Mono

## Status

Aceito

## Contexto

O projeto utilizava Outfit (títulos) e Work Sans (corpo) como fontes principais. Após avaliação visual no contexto do site, as fontes não transmitiam a identidade técnica/industrial esperada para uma empresa de instrumentação estrutural.

A proposta foi substituir por um conjunto tipográfico com mais personalidade técnica:

- **Barlow Condensed** — para títulos: condensada, forte, de leitura rápida. Transmite robustez e precisão
- **Barlow** — para corpo: família complementar ao Condensed, legível e compatível com fundos escuros
- **IBM Plex Mono** — para dados técnicos (anos na timeline, tags de normas, labels): monoespaciada com identidade de engenharia/dados

## Decisão

Substituição das três fontes em `app/layout.tsx`:

```tsx
import { Barlow_Condensed, Barlow, IBM_Plex_Mono } from "next/font/google";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-outfit",       // mantém nome da variável para compatibilidade
  weight: ["300","400","700","900"],
  subsets: ["latin"],
  display: "swap",
});

const barlow = Barlow({
  variable: "--font-work-sans",    // mantém nome da variável para compatibilidade
  weight: ["300","400","500","600"],
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ["400","500"],
  subsets: ["latin"],
  display: "swap",
});
```

Os nomes das variáveis CSS (`--font-outfit`, `--font-work-sans`) foram **mantidos intencionalmente** para não exigir refatoração em todos os componentes que já usavam `style={{ fontFamily: "var(--font-outfit)" }}`.

## Consequências

**Melhora:**
- Identidade visual alinhada ao posicionamento técnico/industrial da OFM
- Barlow Condensed melhora hierarquia em títulos grandes (h1, h2)
- IBM Plex Mono reforça a linguagem de dados em elementos técnicos
- Zero refatoração de componentes — variáveis CSS preservadas

**Piora:**
- Os nomes das variáveis (`--font-outfit`, `--font-work-sans`) são enganosos — quem lê o código verá o nome errado referenciando a fonte nova. Trade-off consciente de legibilidade vs. esforço de migração

**Pendente:**
- Se uma terceira fonte precisar ser introduzida, considerar renomear as variáveis para semânticas (`--font-display`, `--font-body`) nesse momento, junto com a migração dos componentes
