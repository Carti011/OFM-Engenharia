# ADR 008 — Arquitetura em dois níveis para a seção de serviços

## Status

Aceito

## Contexto

Com 13 serviços divididos em duas categorias, a seção "Serviços e Especialidades" na home acumulou dois grids com 6 e 7 cards cada. O resultado era uma seção longa, visualmente sobrecarregada e difícil de escanear — especialmente no mobile. Usuários que acessam a home buscam entender o que a empresa faz em alto nível, não navegar um catálogo completo.

O problema oposto também existia: se reduzirmos demais os cards na home, serviços importantes ficam escondidos e a empresa parece menor do que é.

## Decisão

Separar em dois níveis:

**Nível 1 — Home (`components/Servicos.tsx`):** 5 serviços âncora selecionados por impacto comercial e diversidade de atuação. Grid único `xl:grid-cols-5`. Link "Ver todos os N serviços" no header e botão no rodapé da seção apontando para `/servicos`. O número de serviços é dinâmico via `servicosDetalhados.length`.

**Serviços âncora escolhidos:**
- `provas-de-carga` — carro-chefe, mais buscado
- `estruturas-especiais` — portfólio de impacto (The Town 2025, pontes, eventos)
- `trafegabilidade` — diferencial competitivo único em pontes e rodovias
- `porta-paletes` — grande mercado industrial
- `arrancamento-soldas` — verificação de integridade estrutural crítica

**Nível 2 — Listagem (`app/servicos/page.tsx`):** página estática server component com todos os 13 serviços organizados por categoria (Estruturas Fixas: `lg:grid-cols-3`, Ensaios Especiais: `xl:grid-cols-4`). Header com blueprint grid, CTA de proposta, rodapé completo. Exporta `metadata` para SEO.

O breadcrumb nas páginas de detalhe (`PaginaServico.tsx`) aponta para `/servicos`, criando navegação coerente nos três níveis: `Início → /servicos → /servicos/[slug]`.

## Consequências

**Melhora:**
- Home mais limpa: seção de serviços com 5 cards em vez de 13
- `/servicos` funciona como catálogo indexável e compartilhável por categoria
- Navegação hierárquica coerente com breadcrumb funcional
- Fácil de escalar: novos serviços aparecem automaticamente em `/servicos`

**Piora:**
- Serviços que não são âncoras têm menos visibilidade imediata na home
- A escolha dos 5 âncoras é subjetiva e pode precisar de revisão conforme os serviços mais demandados mudam

**Pendente:**
- Avaliar métricas de acesso (quando disponíveis) para validar se os 5 âncoras escolhidos são de fato os mais relevantes para os clientes
