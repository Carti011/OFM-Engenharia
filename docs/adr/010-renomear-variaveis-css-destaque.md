# ADR 010 — Renomear variáveis CSS de destaque para nomes semanticamente corretos

## Status

Aceito

## Contexto

O ADR 006 documentou a migração do accent laranja para azul `#1A5CFF`, mas manteve o nome `--destaque-laranja` como "artefato histórico" para evitar refatoração nos componentes. O mesmo ADR registrou como pendência: renomear para nomes semânticos.

Com o crescimento do projeto (17 arquivos usando as variáveis), a nomenclatura incorreta gerava erros reais de manutenção: ao tentar diferenciar visualmente elementos OFM Engenharia (azul) e Acervo do Engenheiro (cinza), o código usava `--destaque-azul` para obter cinza e `--destaque-laranja` para obter azul — exatamente o inverso do que os nomes descrevem.

Adicionalmente, existia uma variável `--destaque-azul` cujo valor real era `#475569` (cinza/slate), criada em sessão anterior sem coordenação com `--destaque-laranja`.

## Decisão

Renomear todas as variáveis de destaque em `app/globals.css` e atualizar todas as referências nos 17 arquivos afetados:

| Nome antigo           | Nome novo              | Cor real   |
|-----------------------|------------------------|------------|
| `--destaque-laranja`  | `--destaque-azul`      | `#1a5cff`  |
| `--destaque-laranja-hover` | `--destaque-azul-hover` | `#1248cc` |
| `--destaque-azul`     | `--destaque-cinza`     | `#475569`  |
| `--destaque-azul-hover` | `--destaque-cinza-hover` | `#64748b` |

Valores finais em `globals.css` (dark mode):

```css
--destaque-azul: #1a5cff;
--destaque-azul-hover: #1248cc;
--destaque-cinza: #475569;
--destaque-cinza-hover: #64748b;
```

## Consequências

**Melhora:**
- Nomes de variável descrevem a cor real — manutenção sem necessidade de decodificar histórico
- Diferenciação OFM Engenharia (azul) vs Acervo do Engenheiro (cinza) agora está expressa no nome da variável
- Elimina a pendência registrada no ADR 006

**Piora:**
- Refatoração de 17 arquivos com risco de erro de substituição (mitigado por revisão de build após cada passo)
- Commits de renomeação polui o histórico git com mudanças mecânicas
