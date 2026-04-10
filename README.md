# OFM Engenharia — Site Institucional

Site institucional da OFM — Instrumentações e Análises Estruturais,
empresa especializada em monitoramento e avaliação de estruturas civis.

**Acesso:** [ofmengenharia.com.br](https://ofmengenharia.com.br)

---

## Stack

| Camada    | Tecnologia                        |
|-----------|-----------------------------------|
| Framework | Next.js 16 (App Router)           |
| Linguagem | TypeScript                        |
| Estilo    | Tailwind CSS v4                   |
| Fontes    | Outfit + Work Sans (Google Fonts) |
| Deploy    | Vercel (export estático)          |

---

## Estrutura

```
/app
  layout.tsx       — metadados globais, fontes e configurações
  page.tsx         — composição das seções da página

/components
  Navegacao.tsx        — navbar fixa com detecção de scroll
  Capa.tsx             — seção hero com fundo blueprint
  Sobre.tsx            — história e timeline da empresa
  Servicos.tsx         — serviços por categoria
  ObrasDestaque.tsx    — portfólio de obras
  AcervoTecnico.tsx    — acervo técnico e normas de referência
  Contato.tsx          — formulário de proposta via WhatsApp
  Rodape.tsx           — rodapé institucional
  BotaoWhatsApp.tsx    — botão flutuante de contato

/public/images/        — fotos das obras do portfólio
```

---

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

---

## Formulário de contato

Não utiliza backend. Os dados preenchidos são formatados e enviados
como mensagem pré-preenchida via URL `wa.me` para o WhatsApp da empresa.

---

## Portfólio de obras

As fotos das obras ficam em `/public/images/`. Para adicionar novas fotos,
basta inserir os arquivos na pasta e atualizar o componente `ObrasDestaque.tsx`
com o nome do arquivo correspondente.

---

## Desenvolvido por

[Weslley Cardoso](https://github.com/Carti011)
