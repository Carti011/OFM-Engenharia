# ADR 007 — Páginas dedicadas para serviços e obras com rota dinâmica

## Status

Aceito

## Contexto

O site inicialmente apresentava serviços e obras apenas como cards na página principal. Conforme o volume de conteúdo cresceu (PDFs técnicos, fotos de obras, galerias), ficou claro que um card de 100px não comporta o nível de detalhe que o cliente quer comunicar. Além disso, páginas dedicadas melhoram o SEO por serviço e criam URLs compartilháveis.

O projeto usa `output: 'export'` no Next.js, o que impõe uma restrição importante: páginas com rotas dinâmicas (`/servicos/[slug]`, `/obras/[slug]`) precisam de `generateStaticParams` para que o build saiba quais paths gerar. Essa função só pode existir em server components — não pode conviver com `"use client"` no mesmo arquivo. Mas a UI das páginas usa `useScrollReveal` (hook), que exige `"use client"`.

## Decisão

Usar o padrão de dois arquivos para todas as páginas dinâmicas:

- `page.tsx` — server component puro. Exporta `generateStaticParams` e recebe `params` como `Promise<{slug: string}>` (Next.js 16). Faz o lookup dos dados e passa como props para o componente de UI.
- `PaginaServico.tsx` / `PaginaObra.tsx` — client component (`"use client"`). Recebe os dados via props e renderiza toda a UI com hooks.

```tsx
// page.tsx
export function generateStaticParams() { ... }
export default async function Pagina({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  ...
  return <PaginaServico servico={servico} />;
}

// PaginaServico.tsx
"use client";
export default function PaginaServico({ servico }: { servico: ServicoDetalhado }) { ... }
```

A fonte de verdade para os dados de cada serviço fica em `data/servicos-detalhados.tsx`, exportando um array tipado `ServicoDetalhado[]`. Campos opcionais (`imagemHero?`, `galeria?`, `subsecao?`) permitem que serviços sem fotos ainda tenham página funcional (hero com blueprint grid).

Para obras, cada página é um arquivo standalone em `/app/obras/[nome]/page.tsx` com `"use client"` direto — não há rota dinâmica de obra, cada uma é uma rota estática dedicada.

## Consequências

**Melhora:**
- Cada serviço tem URL própria, indexável e compartilhável
- Conteúdo completo (galerias, métricas, aplicações, normas, obras relacionadas) sem limite de espaço
- Breadcrumb e navegação coerente: Serviços → Detalhe → volta para Serviços

**Piora:**
- Adicionar um novo serviço requer: (1) entrada em `servicos-detalhados.tsx`, (2) adicionar o card em `Servicos.tsx` se for âncora
- O padrão dois arquivos gera um pouco mais de boilerplate por rota dinâmica

**Pendente:**
- 4 serviços ainda têm conteúdo incompleto (`[TODO]`) em `servicos-detalhados.tsx` aguardando PDFs do cliente
- 6 obras em `ObrasDestaque.tsx` ainda não têm páginas dedicadas — aguardando fotos do cliente
