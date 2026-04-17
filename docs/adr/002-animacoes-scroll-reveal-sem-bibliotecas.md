# ADR 002 — Animações de scroll-reveal com IntersectionObserver nativo

## Status

Aceito

## Contexto

O site não tinha nenhuma animação de entrada além de um `animate-bounce` no indicador de scroll da hero. Para elevar a qualidade da experiência visual — compatível com o posicionamento premium do serviço — era necessário implementar scroll-reveal em todos os componentes.

As opções consideradas foram:

1. **Biblioteca externa** (Framer Motion, AOS, Animate.css): adiciona dependência ao projeto, aumenta o bundle e nem sempre respeita `prefers-reduced-motion` por padrão
2. **IntersectionObserver nativo**: API disponível em todos os browsers modernos, zero dependência, controle total sobre comportamento e acessibilidade

O projeto já usa `output: 'export'` (site estático), portanto SSR/hidratação precisa ser tratada manualmente — os elementos devem ser visíveis no HTML gerado em build e só receber as classes de animação após a montagem no client.

## Decisão

- Implementar um hook `useScrollReveal` usando `IntersectionObserver` nativo, sem bibliotecas externas
- O hook usa uma flag `montado` (via `useEffect`) para aplicar as classes de animação apenas no client-side, evitando flash de conteúdo invisível
- As classes de animação (`.reveal-fade-up`, `.reveal-fade-right`, etc.) ficam no `globals.css` e são ativadas pela classe `.is-visible`
- A `Capa.tsx` (hero) usa `useEffect + useState` diretamente, sem IntersectionObserver, pois os elementos já estão na viewport ao carregar
- `prefers-reduced-motion` é tratado no CSS: elementos com classes `.reveal-*` têm `opacity: 1` e `transform: none` forçados nesse contexto
- O `useRef` interno do hook é tipado como `any` para aceitar qualquer elemento HTML (`div`, `a`, `article`, etc.) sem erro de covariância no TypeScript

## Consequências

**Melhora:**
- Zero dependências adicionadas ao projeto
- Bundle não aumenta
- Comportamento de acessibilidade (`prefers-reduced-motion`) totalmente controlado
- Animações disparam uma única vez por elemento (`triggerOnce`) — sem re-animação ao rolar para cima

**Piora:**
- Mais código manual comparado a uma biblioteca: delays escalonados precisam ser gerenciados explicitamente em cada componente
- O padrão de declarar um hook por elemento animado (ex: `const c0 = useScrollReveal(...)`) é verboso para seções com muitos itens

**Pendente:**
- Avaliar extração de um componente `<RevealWrapper>` se o padrão de uso se repetir em novas páginas
