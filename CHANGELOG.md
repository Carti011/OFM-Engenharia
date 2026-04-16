# Changelog

Todas as mudanças relevantes deste projeto serão documentadas aqui.

Formato baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/).

---

## [Não lançado]

---

## [2026-04-16] — Correção de links de navegação em sub-rotas

### Corrigido

- Links de navegação na Navbar e no Rodapé usavam âncoras relativas (`#sobre`, `#servicos`, etc.) — em sub-rotas como `/servicos/provas-de-carga` o browser resolvia para `/servicos/provas-de-carga#servicos`, URL inexistente
- Âncoras corrigidas para absolutas (`/#sobre`, `/#servicos`, etc.) em `Navegacao.tsx` e `Rodape.tsx`
- Logo da navbar corrigida de `href="#"` para `href="/"` — evita reload indesejado ao clicar estando em sub-rota

---

## [2026-04-16] — Atualização de e-mails para domínio profissional

### Alterado

- Botão "E-mail" no formulário de contato passa a enviar para `ofmengenharia@ofmengenharia.com.br`
- Card de informações de contato exibe `fernando.franco@ofmengenharia.com.br` (link principal) e `ofmengenharia@ofmengenharia.com.br` (referência secundária)
- Link de e-mail no rodapé atualizado para `ofmengenharia@ofmengenharia.com.br`

### Removido

- Todas as referências ao e-mail pessoal `oliveiraff2@gmail.com` removidas do projeto

---

## [2026-04-16] — Reorganização da seção de serviços e página de catálogo

### Adicionado

- Página `/servicos` (server component) com todos os 13 serviços organizados por categoria — Estruturas Fixas (`lg:grid-cols-3`) e Ensaios Especiais e Instrumentação (`xl:grid-cols-4`)
- Hero com blueprint grid, CTA de proposta e rodapé completo na página `/servicos`
- Metadados SEO (`metadata`) exportados da página `/servicos`
- ADR 008 — arquitetura em dois níveis para a seção de serviços

### Alterado

- `Servicos.tsx` (home) reduzido de 13 cards em dois grids para 5 serviços âncora em grid único (`xl:grid-cols-5`)
- Âncoras selecionados: Provas de Carga, Estruturas Especiais, Trafegabilidade, Porta Paletes, Arrancamento de Soldas
- Link "Ver todos os N serviços" adicionado no header da seção e como botão no rodapé — número dinâmico via `servicosDetalhados.length`
- Breadcrumb "Serviços" em `PaginaServico.tsx` atualizado de `/#servicos` para `/servicos`

---

## [2026-04-16] — Páginas de obras, serviços e conteúdo técnico dos PDFs

### Adicionado

- Páginas dedicadas para obras: `/obras/museu-do-amanha` e `/obras/ponte-rio-niteroi` — hero com foto, métricas, galeria, CTA e navegação com breadcrumb
- Rota dinâmica `/servicos/[slug]` com padrão server+client (ADR 007): `page.tsx` exporta `generateStaticParams`, `PaginaServico.tsx` tem a UI com hooks
- `data/servicos-detalhados.tsx` — fonte de verdade para conteúdo de todos os serviços (interface `ServicoDetalhado`, array `servicosDetalhados`)
- Conteúdo completo de PDFs adicionado para: `provas-de-carga`, `provas-de-carga-hidraulica`, `trafegabilidade`, `monitoramento-termico`, `ensaios-industriais`, `estruturas-especiais`, `porta-paletes`, `arrancamento-soldas`, `analise-de-vibracao`
- Suporte a `imagemHero` opcional nos serviços — serviços sem foto usam blueprint grid como hero
- Galeria de imagens nas páginas de serviço (campo `galeria?: GaleriaItem[]`)
- Cards de obras e serviços clicáveis: `<Link className="absolute inset-0 z-20" />` invisível + indicador "Ver detalhes →" ao hover
- ADR 007 — páginas dedicadas para serviços e obras com rota dinâmica

### Alterado

- Nome da empresa atualizado para "OFM — Engenharia, Instrumentações, Inspeções e Análises Estruturais" em `Capa.tsx`, `Rodape.tsx` e `layout.tsx`
- Categorias de serviços renomeadas: "Estruturas Móveis e Especiais" → "Ensaios Especiais e Instrumentação"

### Corrigido

- Scroll horizontal no mobile corrigido via `overflow-x: hidden` em `body` no `globals.css`
- Gradient Tailwind v4 corrigido de `bg-gradient-to-t` para `bg-linear-to-t` nas páginas de obra e serviço

---

## [2026-04-16] — Hero redesenhado, tipografia e identidade visual

### Adicionado

- Seção hero com capacete flutuante na coluna direita (`/public/images/Capacete_fundo.png`) — visível apenas em desktop (`hidden md:flex`)
- Glow âmbar/azul por trás do capacete via classe `.hero-glow` com `radial-gradient`
- Linha ECG animada (`stroke-dasharray/offset`, duração 2s) em SVG inline abaixo do título, com espessura 3.5px no mobile
- Animação de contagem ao carregar: stats `20+` anos e `100+` obras sobem de 0 com easing cúbico via `requestAnimationFrame`
- Linha de hover deslizante em cards de Obras de Destaque e Acervo Técnico (`.card-linha-hover w-0 group-hover:w-full`)
- Indicador "Ver obra →" nos cards de Obras de Destaque ao hover — visível apenas ao passar o mouse

### Alterado

- Tipografia migrada de Outfit/Work Sans para **Barlow Condensed** (títulos), **Barlow** (corpo) e **IBM Plex Mono** (dados técnicos) — variáveis CSS mantidas para zero refatoração de componentes (ADR-005)
- Accent laranja (`#b45309`) substituído globalmente por azul `#1A5CFF` em todas as variáveis, classes e SVGs inline — CTAs, hover, ECG, glow e linha de cards (ADR-006)
- Visibilidade das linhas do grid blueprint aumentada: `rgba(71, 85, 105, 0.22)` dark / `rgba(51, 65, 85, 0.18)` light
- Hero migrado de `min-h-screen` para `min-h-dvh` para corrigir espaço excessivo no iOS Safari (barra de endereço não subtrai do `100vh`)
- Botões CTA do hero reorganizados: "Solicitar Proposta" e "Nossos Serviços" lado a lado com `flex-1` em todos os breakpoints (antes "Nossos Serviços" era `hidden` no mobile)
- Padding-top do hero ajustado para `103px` (media query `844px` aplica `101px`) via classe `.hero-inner`
- Grid do hero rebalanceado para `grid-cols-[3fr_2fr]` para aproximar o texto da imagem do capacete

### Removido

- Bloco "Obras em Destaque" dentro da seção `Sobre` — redundante com a seção `ObrasDestaque` já existente na página
- Botão "Nossos Serviços" oculto no mobile foi reativado (agora aparece lado a lado com "Solicitar Proposta")

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
