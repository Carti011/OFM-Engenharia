import { describe, it, expect } from "vitest";
import { registrarEnvio, consumirConfirmacao } from "./confirmacao";

function armazenamentoFalso() {
  const dados = new Map<string, string>();
  return {
    getItem: (chave: string) => dados.get(chave) ?? null,
    setItem: (chave: string, valor: string) => void dados.set(chave, valor),
    removeItem: (chave: string) => void dados.delete(chave),
  };
}

describe("confirmação de envio", () => {
  it("reconhece a confirmação de quem acabou de enviar o formulário", () => {
    const armazenamento = armazenamentoFalso();

    registrarEnvio(armazenamento);

    expect(consumirConfirmacao(armazenamento)).toBe(true);
  });

  it("não reconhece a segunda vez, para recarregar a página não contar outro pedido", () => {
    const armazenamento = armazenamentoFalso();
    registrarEnvio(armazenamento);

    expect(consumirConfirmacao(armazenamento)).toBe(true);
    expect(consumirConfirmacao(armazenamento)).toBe(false);
  });

  it("não reconhece quem abriu a página de obrigado direto, sem ter enviado nada", () => {
    expect(consumirConfirmacao(armazenamentoFalso())).toBe(false);
  });

  it("não quebra quando o navegador bloqueia o armazenamento", () => {
    const bloqueado = {
      getItem() {
        throw new Error("acesso negado");
      },
      setItem() {
        throw new Error("acesso negado");
      },
      removeItem() {
        throw new Error("acesso negado");
      },
    };

    expect(() => registrarEnvio(bloqueado)).not.toThrow();
    expect(consumirConfirmacao(bloqueado)).toBe(false);
  });
});
