# ADR 004 — Navbar flutuante no formato de ilha

## Status

Aceito

## Contexto

A navbar original era um `header` fixado no topo com largura total, fundo opaco ao rolar. O padrão visual resultava numa barra pesada que ocupava o topo inteiro da viewport, comum e sem personalidade.

O padrão "navbar ilha" (floating island) — popularizado por produtos de design como Linear, Vercel e Arc Browser — posiciona a navbar como um elemento flutuante centralizado, com `border-radius`, separado das bordas da tela. O efeito visual é mais moderno e compatível com o posicionamento premium do serviço.

O desafio técnico: com `position: fixed`, o elemento cobre a página inteira horizontalmente. Para permitir cliques na área fora da ilha (o espaço entre a ilha e as bordas da tela), a camada fixa precisa ser não-interativa (`pointer-events: none`), mas a ilha em si precisa receber eventos (`pointer-events: auto`).

## Decisão

Estrutura de dois níveis:

```tsx
{/* camada fixa não-interativa — cobre a viewport inteira */}
<div className="fixed top-0 left-0 right-0 z-50 pointer-events-none px-4 pt-4">
  {/* ilha — centralizada, pointer-events habilitado */}
  <div className="max-w-5xl mx-auto pointer-events-auto">
    <header className="rounded-2xl border ...">
      {/* conteúdo da navbar */}
    </header>
  </div>
</div>
```

- O wrapper externo (`fixed ... pointer-events-none`) intercepta zero eventos — cliques atravessam para o conteúdo da página
- O `header` interno (`pointer-events-auto`) recebe todos os eventos normalmente
- `backdrop-blur` e `bg-opacity` são aplicados no `header` com transição baseada em scroll (opaco ao rolar, semi-transparente no topo)
- Logo usa `next/image` com `h-10 w-auto` e arquivo `logo_navbar_2x Removido.png` (melhor versão disponível com remoção parcial de fundo)
- `BotaoTema` é incluído na ilha tanto no layout desktop quanto no menu mobile

## Consequências

**Melhora:**
- Visual moderno e diferenciado, compatível com o posicionamento premium
- Conteúdo abaixo da ilha permanece clicável na área lateral (sem zona morta)
- Transition de scroll suave sem reflow de layout

**Piora:**
- `pointer-events: none` no wrapper é um padrão não-óbvio — qualquer dev que editar o componente precisa entender essa estrutura para não quebrar a interatividade
- O logo atual ainda tem resquício de fundo na imagem PNG — aguardando versão com transparência real

**Pendente:**
- Substituir `logo_navbar_2x Removido.png` por PNG com canal alpha real quando o designer ou o cliente fornecer o arquivo
