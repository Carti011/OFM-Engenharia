# ADR 006 — Paleta: substituição do accent laranja por azul #1A5CFF

## Status

Aceito

## Contexto

O accent secundário do projeto era laranja (`#f97316`, depois `#b45309` copper amber). Esse tom foi adotado na fase inicial como diferenciador visual quente em contraste com o fundo escuro.

Após ver o site mais completo, o laranja criava ambiguidade semântica — o mesmo tom usado em CTAs era idêntico ao usado em bordas hover, tags de tipo de obra e ícones de serviços. O resultado visual não tinha hierarquia clara entre "elemento interativo" e "elemento de destaque informativo".

A proposta foi migrar todo o accent para azul `#1A5CFF` — tom mais associado a tecnologia, engenharia e confiança, alinhado ao posicionamento da empresa.

## Decisão

Substituição global em `app/globals.css`:

```css
/* antes */
--destaque-laranja: #b45309;
--destaque-laranja-hover: #92400e;

/* depois */
--destaque-laranja: #1A5CFF;
--destaque-laranja-hover: #1248CC;
```

As variáveis mantiveram os nomes `--destaque-laranja` e `--destaque-laranja-hover` para evitar refatoração nos componentes. O valor foi alterado, o nome é um artefato histórico.

Outros pontos atualizados:
- `.card-linha-hover`: `background: #1A5CFF`
- `.hero-glow`: `background: radial-gradient(... #1A5CFF ...)`
- `.ecg-path`: `stroke: #1A5CFF`
- `--timeline-laranja-borda`: migrado para rgba do azul
- Badge de tipo de obra e ícones de serviços: mantidos na variável, herdaram a cor nova

## Consequências

**Melhora:**
- Identidade visual coesa em tom único (azul técnico) — sem conflito semântico laranja/azul
- Tom alinhado ao mercado de engenharia e precisão instrumental
- Linha hover, ECG, glow e CTAs em cor consistente

**Piora:**
- Nome de variável `--destaque-laranja` agora descreve uma cor azul — qualquer dev novo precisa entender que o nome é histórico
- Perda do contraste quente/frio que o laranja proporcionava ao escuro profundo do fundo

**Pendente:**
- Se a identidade visual for revisada com designer, considerar renomear para `--accent-primario` / `--accent-primario-hover` e unificar com `--destaque-azul`
