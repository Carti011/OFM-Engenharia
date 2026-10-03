# ADR 011 — Backend para envio de solicitação de orçamento

## Status

Aceito

## Contexto

O site nasceu como export estático (`output: "export"` em `next.config.ts`), servido pela Vercel sem nenhum código rodando em servidor. O formulário de proposta em `components/Contato.tsx` reflete essa limitação: ele não envia nada — monta uma URL `wa.me` ou um `mailto:` e delega o envio ao aplicativo do cliente.

A campanha do Google Ads (tag instalada no ADR anterior, commit `f359f4b`) exige uma página de confirmação para medir conversão. O cliente da OFM pediu explicitamente:

1. O visitante conclui a solicitação dentro do site, sem abrir WhatsApp ou cliente de e-mail
2. Os dados chegam por e-mail em `fernando.franco@ofmengenharia.com.br`
3. Uma página `/obrigado` aparece somente quando o envio deu certo
4. A conversão é contada no pedido enviado, nunca em visita, recarga ou acesso direto à `/obrigado`

Os requisitos 1 e 2 são impossíveis em site estático: exigem código executando no servidor. Enquanto o envio depender do aplicativo do visitante, não há como saber se a mensagem foi realmente enviada — e sem essa certeza, os requisitos 3 e 4 também caem, porque a confirmação seria uma mentira.

Três caminhos foram avaliados:

| Caminho | Por que foi descartado ou aceito |
|---|---|
| Serviço de formulário de terceiro (Formspree, Web3Forms) | Mantém o site estático, mas expõe chave no HTML, entrega o e-mail pelo domínio do terceiro e limita a 50 envios/mês no plano gratuito |
| Route Handler + Resend | Boa entregabilidade, mas adiciona serviço externo e exige verificação de domínio por DNS |
| Route Handler + SMTP do domínio | **Escolhido.** O domínio já usa Google Workspace (MX aponta para `smtp.google.com`), então a infraestrutura de e-mail já existe e está paga |

## Decisão

Remover `output: "export"` e passar a usar Route Handlers do Next.js na Vercel.

As páginas continuam pré-renderizadas estaticamente — o que muda é que passa a existir uma função serverless para `POST /api/orcamento`.

Arquitetura em camadas, com o transporte de e-mail atrás de uma porta:

| Módulo | Responsabilidade |
|---|---|
| `app/api/orcamento/route.ts` | Controller. Traduz resultado do serviço em status HTTP. Sem regra de negócio |
| `lib/orcamento/solicitacao.ts` | DTO e validação da solicitação |
| `lib/orcamento/enviarSolicitacao.ts` | Serviço. Monta a mensagem e delega ao transporte recebido por parâmetro |
| `lib/orcamento/transporteSmtp.ts` | Adaptador SMTP via nodemailer |

Autenticação SMTP por **senha de app** do Google Workspace, nunca a senha da conta: ela é específica para SMTP e revogável isoladamente. Fica em variável de ambiente na Vercel, jamais no repositório.

Proteção anti-spam por campo honeypot e limite de envios por IP em memória.

## Consequências

**Melhora:**

- O visitante conclui a solicitação sem sair do site, que era o objetivo comercial
- A confirmação em `/obrigado` passa a significar "o e-mail saiu", não "o cliente foi redirecionado para outro aplicativo"
- A conversão do Google Ads passa a medir pedido real
- O transporte atrás de uma porta permite trocar SMTP por outro provedor sem tocar no serviço nem nos testes

**Piora:**

- O projeto deixa de ser um artefato estático puro — passa a depender de runtime da Vercel e de uma credencial em produção
- Surge um segredo para gerenciar e rotacionar (a senha de app)
- O limite por IP em memória não é compartilhado entre instâncias serverless: barra robô comum, não ataque dirigido. Aceito como proporcional ao porte do site; se houver abuso, migrar para armazenamento compartilhado
- O envio depende da conta do Google Workspace permanecer ativa e com a senha de app válida

**Pendente:**

- Página de política de privacidade, exigida pelas políticas do Google Ads para site que roda tag de anúncio e coleta dados
