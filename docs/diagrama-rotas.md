# Diagrama de Rotas — OFM Engenharia

Mapa completo das rotas geradas no export estático do site.

```mermaid
graph TD
    raiz["/ (home)"]

    raiz --> sobre["#sobre"]
    raiz --> servicos_ancora["#servicos"]
    raiz --> obras["#obras"]
    raiz --> acervo["#acervo"]
    raiz --> contato["#contato"]

    raiz --> pag_servicos["/servicos"]
    pag_servicos --> slug["/servicos/[slug]"]

    slug --> provas_carga["/servicos/provas-de-carga"]
    slug --> provas_hidraulica["/servicos/provas-de-carga-hidraulica"]
    slug --> trafegabilidade["/servicos/trafegabilidade"]
    slug --> monitoramento["/servicos/monitoramento-termico"]
    slug --> industriais["/servicos/ensaios-industriais"]
    slug --> estruturas["/servicos/estruturas-especiais"]
    slug --> porta_paletes["/servicos/porta-paletes"]
    slug --> arrancamento["/servicos/arrancamento-soldas"]
    slug --> vibracao["/servicos/analise-de-vibracao"]

    raiz --> pag_obras["/obras"]
    pag_obras --> museu["/obras/museu-do-amanha"]
    pag_obras --> ponte["/obras/ponte-rio-niteroi"]
```

## Notas

- Âncoras (`#sobre`, `#servicos`, etc.) são seções da página principal — não são rotas separadas.
- `/servicos/[slug]` é uma rota dinâmica com `generateStaticParams` — cada slug vira uma página estática no build.
- `/obras/[slug]` não usa rota dinâmica — cada página de obra é um arquivo estático dedicado.
- Todas as rotas geram arquivos `.html` na pasta `/out` via `output: 'export'`.
