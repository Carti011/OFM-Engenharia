# ADR 001 — Configuração de meta tags Open Graph para preview social

## Status

Aceito

## Contexto

Ao compartilhar o link do site no WhatsApp ou redes sociais, o preview exibia apenas o favicon (ícone com triângulo) como imagem, sem descrição personalizada. O cliente usa o link do site para apresentar o portfólio da empresa a potenciais clientes — um preview genérico prejudica essa apresentação.

O projeto usa Next.js 16 com App Router, que oferece suporte nativo a meta tags OG via objeto `metadata` exportado do `layout.tsx`.

## Decisão

- Configurar as meta tags Open Graph diretamente no `app/layout.tsx` via objeto `metadata` do Next.js, usando `metadataBase` apontando para `https://ofmengenharia.com.br`
- Centralizar título, descrição e URL base em constantes no topo do arquivo para evitar duplicação entre `openGraph` e `twitter`
- Usar imagem leve (abaixo de ~500KB) na pasta `public/images/Logos/logo-full/` — scrapers do WhatsApp têm timeout curto e rejeitam arquivos grandes silenciosamente, caindo de volta ao favicon
- Renomear pasta `Logo Full` → `logo-full` para eliminar espaços em URLs

## Consequências

**Melhora:**
- Preview no WhatsApp exibe título, descrição e logo da empresa ao compartilhar o link
- Twitter/X e LinkedIn também recebem as meta tags corretamente
- Valores centralizados em constantes facilitam futuras atualizações

**Piora:**
- A imagem OG ideal teria 1200×630px — a atual é menor, o que pode reduzir a qualidade do preview em plataformas que exibem imagem grande (LinkedIn, por exemplo)

**Pendente:**
- Confirmar que a imagem `ofm_logo_full_navbar_2x.png` aparece corretamente após o deploy usando o [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- Avaliar criação de uma imagem OG dedicada no formato 1200×630px para melhor apresentação no LinkedIn
