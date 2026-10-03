import { describe, it, expect } from "vitest";
import { enviarSolicitacao } from "./enviarSolicitacao";
import type { MensagemEmail, TransporteEmail } from "./transporteEmail";

function transporteFalso() {
  const enviadas: MensagemEmail[] = [];
  const transporte: TransporteEmail = {
    async enviar(mensagem) {
      enviadas.push(mensagem);
    },
  };
  return { transporte, enviadas };
}

const solicitacaoValida = {
  nome: "Maria Souza",
  email: "maria@construtorasouza.com.br",
  telefone: "11999998888",
  empresa: "Construtora Souza",
  cidadeObra: "Santo André",
  servico: "Prova de Carga Estática",
  descricao: "Laje de galpão com 2 pontos de ensaio",
};

describe("enviarSolicitacao", () => {
  it("entrega a solicitação no e-mail da OFM com os dados informados pelo cliente", async () => {
    const { transporte, enviadas } = transporteFalso();

    const resultado = await enviarSolicitacao(solicitacaoValida, transporte);

    expect(resultado.situacao).toBe("enviada");
    expect(enviadas).toHaveLength(1);
    expect(enviadas[0].para).toBe("fernando.franco@ofmengenharia.com.br");
    expect(enviadas[0].corpo).toContain("Maria Souza");
    expect(enviadas[0].corpo).toContain("11999998888");
    expect(enviadas[0].corpo).toContain("Prova de Carga Estática");
    expect(enviadas[0].corpo).toContain("Santo André");
  });

  it("recusa solicitação sem os campos obrigatórios e não envia nada", async () => {
    const { transporte, enviadas } = transporteFalso();

    const resultado = await enviarSolicitacao(
      { ...solicitacaoValida, nome: "", telefone: "" },
      transporte
    );

    expect(resultado.situacao).toBe("invalida");
    expect(resultado.situacao === "invalida" && resultado.erros).toContain("nome");
    expect(resultado.situacao === "invalida" && resultado.erros).toContain("telefone");
    expect(enviadas).toHaveLength(0);
  });

  it("recusa e-mail malformado, porque é por ele que a OFM responde o cliente", async () => {
    const { transporte, enviadas } = transporteFalso();

    const resultado = await enviarSolicitacao(
      { ...solicitacaoValida, email: "maria@@construtora" },
      transporte
    );

    expect(resultado.situacao).toBe("invalida");
    expect(resultado.situacao === "invalida" && resultado.erros).toContain("email");
    expect(enviadas).toHaveLength(0);
  });

  it("descarta em silêncio quando o campo isca vem preenchido, sem avisar o robô", async () => {
    const { transporte, enviadas } = transporteFalso();

    const resultado = await enviarSolicitacao(
      { ...solicitacaoValida, site: "http://spam.example.com" },
      transporte
    );

    expect(resultado.situacao).toBe("enviada");
    expect(enviadas).toHaveLength(0);
  });

  it("relata falha sem expor o erro interno quando o servidor de e-mail recusa", async () => {
    const transporte: TransporteEmail = {
      async enviar() {
        throw new Error("535 5.7.8 Username and Password not accepted");
      },
    };

    const resultado = await enviarSolicitacao(solicitacaoValida, transporte);

    expect(resultado.situacao).toBe("falha");
    expect(JSON.stringify(resultado)).not.toContain("Password");
  });
});
