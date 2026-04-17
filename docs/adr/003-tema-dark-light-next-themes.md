# ADR 003 — Sistema de temas dark/light com next-themes e CSS custom properties

## Status

Aceito

## Contexto

O site foi inicialmente desenvolvido apenas em modo escuro (dark industrial). Surgiu a necessidade de oferecer alternância entre tema escuro e claro, mantendo a mesma identidade visual e sem duplicar os estilos dos componentes.

As opções consideradas foram:

1. **Classe manual via `useState`**: toggle de classe `dark` no `<html>` com estado React — não persiste entre recarregamentos, não respeita preferência do sistema (`prefers-color-scheme`)
2. **`next-themes`**: biblioteca pequena e específica para Next.js, persiste no `localStorage`, respeita preferência do sistema, aplica a classe no `<html>` antes da hidratação para evitar flash

O projeto usa CSS custom properties (variáveis) para todas as cores desde o início da refatoração de paleta — isso tornou a implementação do tema trivial: basta sobrescrever as variáveis em `html.light`.

## Decisão

- Usar `next-themes` com `attribute="class"` para aplicar `html.dark` / `html.light`
- `defaultTheme: "dark"` — o site abre no tema escuro por padrão
- Criar `components/ProvedorTema.tsx` como wrapper `"use client"` para isolar a dependência client-side do `ThemeProvider`
- Criar `components/BotaoTema.tsx` como `"use client"` com ícone SVG inline que alterna entre sol (modo escuro ativo) e lua (modo claro ativo)
- Adicionar `suppressHydrationWarning` no `<html>` em `app/layout.tsx` para suprimir o aviso de hidratação causado pelo `style="color-scheme: ..."` injetado pelo next-themes no client
- Todas as cores dos componentes usam `var(--nome-variavel)` via sintaxe Tailwind v4 `(--nome-variavel)` — nenhum componente precisa saber qual tema está ativo

**Variáveis sobrescritas no tema claro (`html.light` em `globals.css`):**
```css
html.light {
  --bg-principal: #f8f8f8;
  --bg-cartao: #ffffff;
  --bg-elevado: #f0f0f0;
  --bg-elemento: #e8e8e8;
  --texto-principal: #111111;
  --texto-suave: #374151;
  --texto-fraco: #6b7280;
  --borda-principal: #e5e5e5;
  --destaque-azul: #334155;
  --destaque-laranja: #92400e;
  /* ... demais variáveis */
}
```

## Consequências

**Melhora:**
- Tema persiste no `localStorage` e respeita `prefers-color-scheme` automaticamente via next-themes
- Nenhum componente precisa ser alterado para suportar novos temas — basta editar as variáveis no `globals.css`
- Flash de tema incorreto (FOUC) é prevenido pelo next-themes antes da hidratação

**Piora:**
- `suppressHydrationWarning` no `<html>` suprime avisos legítimos de hidratação na tag raiz — qualquer mismatch real nessa tag passará despercebido
- Adiciona uma dependência ao projeto (`next-themes`)

**Pendente:**
- Nenhum
