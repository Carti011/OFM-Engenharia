# OFM Engenharia — Site Institucional

Site institucional da OFM — Instrumentações e Análises Estruturais,
empresa especializada em monitoramento e avaliação de estruturas civis.

**Acesso:** [ofmengenharia.com.br](https://ofmengenharia.com.br)

<img src="docs/home.png" alt="Preview da página inicial" width="600" />

---

## Stack

| Camada    | Tecnologia                                               |
| --------- | -------------------------------------------------------- |
| Framework | Next.js 16 (App Router)                                  |
| Linguagem | TypeScript                                               |
| Estilo    | Tailwind CSS v4                                          |
| Fontes    | Barlow Condensed + Barlow + IBM Plex Mono (Google Fonts) |
| Deploy    | Vercel (export estático)                                 |

---

## Estrutura

```text
/app
  layout.tsx       — metadados globais, fontes e configurações
  page.tsx         — composição das seções da página

/components
  Navegacao.tsx        — navbar flutuante (ilha) com logo e toggle de tema
  Capa.tsx             — seção hero com fundo blueprint
  Sobre.tsx            — história e timeline com logos institucionais
  Servicos.tsx         — serviços por categoria
  ObrasDestaque.tsx    — portfólio de obras (placeholders até chegarem as fotos)
  AcervoTecnico.tsx    — acervo técnico, normas e softwares utilizados
  Contato.tsx          — formulário de proposta via WhatsApp ou e-mail
  Rodape.tsx           — rodapé com dados institucionais (CNPJ, RT)
  BotaoWhatsApp.tsx    — botão flutuante de contato
  ProvedorTema.tsx     — wrapper next-themes (dark/light)
  BotaoTema.tsx        — toggle de tema com SVG (sol/lua)

/hooks
  useScrollReveal.ts   — IntersectionObserver nativo para animações de entrada

/public/images/        — fotos das obras e logos institucionais

/docs
  /adr                 — Architecture Decision Records
```

---

## Pré-requisitos

- Node.js 18+
- npm 9+

## Como rodar localmente

```bash
npm install
npm run dev       # http://localhost:3000
```

## Build e deploy

```bash
npm run build     # gera export estático em /out
```

O deploy é feito automaticamente via Vercel a cada push na branch `main`.

## Variáveis de ambiente

Este projeto não utiliza variáveis de ambiente. Não há backend, banco de dados ou serviços externos autenticados — o número de WhatsApp da empresa está hardcoded no componente `Contato.tsx`.

---

## Formulário de contato

Não utiliza backend. O usuário preenche os campos e escolhe o canal de envio:

- **WhatsApp** — abre `wa.me/5511964866459` com a mensagem pré-formatada
- **E-mail** — abre o cliente de e-mail com `mailto:oliveiraff2@gmail.com`, assunto e corpo pré-preenchidos

## Tema claro/escuro

O site oferece alternância entre tema escuro (padrão) e claro via `next-themes`.
O toggle fica na navbar. O tema é persistido no `localStorage` do navegador.
As cores são controladas inteiramente por CSS custom properties em `app/globals.css`.

---

## Portfólio de obras

As fotos das obras ficam em `/public/images/`. Para adicionar novas fotos,
basta inserir os arquivos na pasta e atualizar o componente `ObrasDestaque.tsx`
com o nome do arquivo correspondente.

---

## Desenvolvido por

[Weslley Cardoso](https://github.com/Carti011)
