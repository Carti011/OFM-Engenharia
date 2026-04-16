# Changelog

Todas as mudanças relevantes deste projeto serão documentadas aqui.

Formato baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/).

---

## [Não lançado]

## [2026-04-16]

### Adicionado

- Meta tags Open Graph completas (`og:title`, `og:description`, `og:image`, `og:type`, `og:url`) no `app/layout.tsx` para preview rico ao compartilhar o link no WhatsApp e redes sociais
- Meta tags Twitter Card configuradas junto ao Open Graph
- Constantes `URL_BASE`, `TITULO` e `DESCRICAO` no `layout.tsx` para centralizar os valores compartilhados entre OG e Twitter

### Corrigido

- Descrição do preview reformulada: removida a repetição do nome da empresa no início, que já aparece no título
- Pasta `public/images/Logos/Logo Full/` renomeada para `public/images/Logos/logo-full/` — espaço na URL quebrava o scraper do WhatsApp
- Imagem OG substituída por versão de menor tamanho para evitar timeout no scraper (`ofm_logo_full_navbar_2x.png` no lugar do arquivo de 7.2MB)
