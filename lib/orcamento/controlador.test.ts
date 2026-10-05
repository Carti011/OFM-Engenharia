import { describe, it, expect } from "vitest";
import { processarRequisicao } from "./controlador";
import { criarLimitePorIp } from "./limitePorIp";
import type { MensagemEmail, TransporteEmail } from "./transporteEmail";

const solicitacaoValida = {
  nome: "Maria Souza",
  email: "maria@construtorasouza.com.br",
  telefone: "11999998888",
  cidadeObra: "Santo André",
  servico: "Prova de Carga Estática",
  descricao: "Laje de galpão com 2 pontos de ensaio",
};

function ambiente() {
  const enviadas: MensagemEmail[] = [];
  const transporte: TransporteEmail = {
    async enviar(mensagem) {
      enviadas.push(mensagem);
    },
  };
  return {
    enviadas,
    dependencias: {
      transporte,
      limite: criarLimitePorIp({ maximo: 5, janelaMs: 60_000 }),
    },
  };
}

function requisicao(corpo: unknown, ip = "203.0.113.7") {
  return new Request("https://ofmengenharia.com.br/api/orcamento", {
    method: "POST",
    headers: { "content-type": "application/json", "x-forwarded-for": ip },
    body: JSON.stringify(corpo),
  });
}

describe("POST /api/orcamento", () => {
  it("aceita a solicitação e confirma o envio", async () => {
    const { dependencias, enviadas } = ambiente();

    const resposta = await processarRequisicao(requisicao(solicitacaoValida), dependencias);

    expect(resposta.status).toBe(200);
    expect(await resposta.json()).toEqual({ situacao: "enviada" });
    expect(enviadas).toHaveLength(1);
  });

  it("responde 400 e devolve os campos com problema", async () => {
    const { dependencias, enviadas } = ambiente();

    const resposta = await processarRequisicao(
      requisicao({ ...solicitacaoValida, nome: "" }),
      dependencias
    );

    expect(resposta.status).toBe(400);
    expect((await resposta.json()).erros).toContain("nome");
    expect(enviadas).toHaveLength(0);
  });

  it("responde 429 quando o mesmo endereço insiste além do limite", async () => {
    const { enviadas, dependencias } = ambiente();
    const dependenciasApertadas = {
      ...dependencias,
      limite: criarLimitePorIp({ maximo: 2, janelaMs: 60_000 }),
    };

    await processarRequisicao(requisicao(solicitacaoValida), dependenciasApertadas);
    await processarRequisicao(requisicao(solicitacaoValida), dependenciasApertadas);
    const resposta = await processarRequisicao(
      requisicao(solicitacaoValida),
      dependenciasApertadas
    );

    expect(resposta.status).toBe(429);
    expect(enviadas).toHaveLength(2);
  });

  it("responde 502 quando o servidor de e-mail falha, sem vazar o motivo", async () => {
    const dependencias = {
      transporte: {
        async enviar() {
          throw new Error("535 5.7.8 Username and Password not accepted");
        },
      },
      limite: criarLimitePorIp({ maximo: 5, janelaMs: 60_000 }),
    };

    const resposta = await processarRequisicao(requisicao(solicitacaoValida), dependencias);

    expect(resposta.status).toBe(502);
    expect(await resposta.text()).not.toContain("Password");
  });

  it("responde 400 em vez de quebrar quando o corpo não é JSON válido", async () => {
    const { dependencias } = ambiente();
    const corpoQuebrado = new Request("https://ofmengenharia.com.br/api/orcamento", {
      method: "POST",
      headers: { "content-type": "application/json", "x-forwarded-for": "203.0.113.9" },
      body: "{ isso não é json",
    });

    const resposta = await processarRequisicao(corpoQuebrado, dependencias);

    expect(resposta.status).toBe(400);
  });
});
