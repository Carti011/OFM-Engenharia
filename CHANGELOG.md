# Changelog

Todas as mudanças relevantes deste projeto serão documentadas aqui.

Formato baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/).

---

## [Não lançado]

---

## [2026-04-16] — Ajustes de logo na navbar

### Alterado

- Logo da navbar aumentada de `h-10` para `h-14` (56px) para melhorar legibilidade do texto na versão horizontal
- Adicionada pasta `public/images/Logos/logo-horizontal/` com versões horizontais da logo: `ofm_gold_transparent.png` e `ofm_graphite_transparent.png`
- Testadas versões horizontal gold e graphite; logo original (`logo_navbar_2x Removido.png`) mantida como definitiva com nova altura

---

## [2026-04-16] — Tema, navbar, animações e refinamentos visuais

### Adicionado

- Sistema de temas dark/light: `ProvedorTema.tsx` (next-themes), `BotaoTema.tsx` (toggle SVG sol/lua), variáveis CSS separadas em `html.dark` e `html.light` no `globals.css`
- Navbar flutuante no formato de ilha: wrapper `pointer-events-none` + `header` centralizado com `rounded-2xl`, `backdrop-blur` e transição de opacidade por scroll
- Logo da OFM na navbar via `next/image` (`logo_navbar_2x Removido.png`)
- Toggle de tema integrado na navbar, tanto no layout desktop quanto no menu mobile
- Paleta "Opção C": `--destaque-azul: #475569` (slate) e `--destaque-laranja: #b45309` (copper amber) — testadas três opções em branches separadas antes de fechar
- Logos institucionais na timeline de `Sobre.tsx`: USP, Falcão Bauer e OFM como marcadores visuais, cada um com cor de fundo adequada
- Logos dos softwares AqDados e AqDAnalysis em `AcervoTecnico.tsx` com container `bg-[#e8e8e8]`
- Dados institucionais no rodapé: Razão Social, CNPJ 65.669.828/0001-82 e Responsável Técnico Fernando Franco de Oliveira
- Botão de envio por e-mail no formulário de `Contato.tsx`, lado a lado com o botão de WhatsApp — abre cliente de e-mail com assunto e corpo pré-preenchidos via `mailto:`
- Hook `useScrollReveal` em `hooks/useScrollReveal.ts` — IntersectionObserver nativo, SSR-safe, disparo único por elemento
- Classes de animação no `globals.css`: `reveal-fade-up`, `reveal-fade-left`, `reveal-fade-right`, `reveal-scale`, `reveal-fade` e `.is-visible`
- Animações de entrada em todos os componentes: Capa, Sobre, Serviços, Obras de Destaque, Acervo Técnico, Contato e Rodapé
- Suporte a `prefers-reduced-motion`: elementos ficam visíveis imediatamente sem transição quando o usuário solicita menos animação
- Meta tags Open Graph completas (`og:title`, `og:description`, `og:image`, `og:type`, `og:url`) no `app/layout.tsx` para preview rico ao compartilhar o link no WhatsApp e redes sociais
- Meta tags Twitter Card configuradas junto ao Open Graph
- Constantes `URL_BASE`, `TITULO` e `DESCRICAO` no `layout.tsx` para centralizar os valores compartilhados entre OG e Twitter
- ADR 002 — animações scroll-reveal sem bibliotecas externas
- ADR 003 — sistema de temas dark/light com next-themes
- ADR 004 — navbar flutuante no formato de ilha
- `docs/handoff/` adicionado ao `.gitignore` — pasta de uso interno da IA

### Corrigido

- Período de Falcão Bauer na timeline corrigido para `"2010–2021"` conforme informação do engenheiro responsável
- `text-white` restaurado manualmente nos botões coloridos (CTA da Capa, CTAs da Navbar, botão WhatsApp do Contato) após substituição em massa que quebrou texto branco em fundos coloridos
- `suppressHydrationWarning` adicionado ao `<html>` em `layout.tsx` para eliminar warning de hidratação causado pelo next-themes
- Descrição do preview OG reformulada: removida a repetição do nome da empresa no início, que já aparece no título
- Pasta `public/images/Logos/Logo Full/` renomeada para `public/images/Logos/logo-full/` — espaço na URL quebrava o scraper do WhatsApp
- Imagem OG substituída por versão de menor tamanho para evitar timeout no scraper (`ofm_logo_full_navbar_2x.png` no lugar do arquivo de 7.2MB)

### Alterado

- Sintaxe de variáveis CSS nos componentes migrada de `bg-[var(--x)]` para `bg-(--x)` (sintaxe nativa Tailwind v4)
- Subtítulo da `Capa.tsx` atualizado para "Engenharia, Instrumentações e Análises Estruturais"
- Título da aba e metadados atualizados para "OFM | Engenharia, Instrumentações e Análises Estruturais"
- Texto auxiliar do formulário de contato atualizado para refletir os dois canais de envio (WhatsApp e e-mail)
