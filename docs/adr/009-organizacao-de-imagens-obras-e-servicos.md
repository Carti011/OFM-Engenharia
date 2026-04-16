# ADR 009 — Organização de imagens em dois grupos: Obras e Serviços

## Status

Aceito

## Contexto

Com o crescimento do portfólio, `public/images/Obras/` passou a acumular dois tipos de foto com propósitos distintos:

1. **Fotos de portfólio** — registros técnicos das obras em si (instrumentação, canteiro, equipamentos). Aparecem nas páginas dedicadas de cada obra (`/obras/[slug]`).
2. **Fotos editoriais** — imagens usadas para ilustrar páginas de serviço (`/servicos/[slug]`). Eram fotos das obras reutilizadas como ilustração de um serviço, mas ficavam soltas na raiz de `Obras/` sem vínculo explícito com o serviço que ilustravam.

O resultado era uma pasta `Obras/` com arquivos soltos na raiz (sem subpasta) misturados com subpastas de obras específicas. Ficava difícil saber qual imagem pertencia a qual contexto, e os caminhos no código apontavam para a raiz de `Obras/` sem indicar a obra ou serviço de origem.

## Decisão

Separar `public/images/` em dois grupos, cada um com subpastas:

```
public/images/
  Obras/
    [Nome da Obra]/       — fotos de portfólio desta obra específica
  Servicos/
    [slug-do-servico]/    — fotos editoriais usadas neste serviço
  Logos/
    ...
```

**Regras:**

- Fotos que aparecem em páginas de obra (`/obras/*`) ficam em `Obras/[Nome da Obra]/`
- Fotos usadas como hero ou galeria em páginas de serviço (`/servicos/*`) ficam em `Servicos/[slug]/`
- Uma mesma foto pode existir nos dois lugares se for usada em contextos diferentes
- Nenhuma imagem fica solta na raiz de `Obras/` ou `Servicos/`

## Consequências

**Melhora:**

- Caminho do arquivo indica imediatamente o contexto de uso — `Obras/Arena Corinthians/capa.jpg` vs `Servicos/provas-de-carga/arena-01.jpg`
- Fácil localizar todas as fotos de uma obra ou de um serviço
- Facilita a adição de novas fotos sem criar ambiguidade

**Piora:**

- Fotos que servem aos dois contextos precisam ser duplicadas fisicamente (ou o código aponta para `Obras/` mesmo quando usado em serviço — solução adotada quando a obra é a única fonte da imagem)
- Renomear uma obra ou um serviço exige atualizar a subpasta e todos os caminhos referenciados no código

**Pendente:**

- Serviços sem fotos próprias (`provas-de-carga-hidraulica`) ainda não têm subpasta em `Servicos/` — aguardando fotos do cliente
