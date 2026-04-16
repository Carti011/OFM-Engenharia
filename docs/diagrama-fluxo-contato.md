# Diagrama de Fluxo — Formulário de Contato

Fluxo completo do formulário de proposta em `components/Contato.tsx`.

```mermaid
flowchart TD
    A([Usuário acessa o formulário]) --> B[Preenche os campos]

    B --> C{Campos obrigatórios\npreenchidos?}
    C -- Não --> D[Exibe erro de validação visual]
    D --> B

    C -- Sim --> E{Escolhe o canal}

    E -- WhatsApp --> F["Formata mensagem em texto\ncom os dados do formulário"]
    F --> G["Monta URL\nwa.me/5511964866459?text=..."]
    G --> H[Abre WhatsApp no navegador]

    E -- E-mail --> I["Formata assunto e corpo\ncom os dados do formulário"]
    I --> J["Monta URL\nmailto:ofmengenharia@ofmengenharia.com.br"]
    J --> K[Abre cliente de e-mail padrão]
```

## Campos do formulário

| Campo        | Obrigatório | Tipo     |
|--------------|-------------|----------|
| Nome         | Sim         | texto    |
| Empresa      | Não         | texto    |
| Telefone     | Sim         | texto    |
| Serviço      | Sim         | select   |
| Descrição    | Não         | textarea |

## Notas

- Não há backend, banco de dados nem envio de e-mail server-side.
- O formulário depende inteiramente de aplicativos instalados no dispositivo do usuário (WhatsApp e cliente de e-mail).
- Número de WhatsApp e endereço de e-mail estão hardcoded em `Contato.tsx` — alterar diretamente no arquivo se mudar.
