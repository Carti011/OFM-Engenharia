import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { SMTPServer } from "smtp-server";
import { enviarSolicitacao } from "./enviarSolicitacao";
import { criarTransporteSmtp } from "./transporteSmtp";

const PORTA = 2599;
const USUARIO = "ofmengenharia@ofmengenharia.com.br";
const SENHA = "abcdefghijklmnop";

const recebidas: string[] = [];
let servidor: SMTPServer;

beforeAll(async () => {
  servidor = new SMTPServer({
    authOptional: false,
    disabledCommands: ["STARTTLS"],
    onAuth(credenciais, _sessao, pronto) {
      if (credenciais.username === USUARIO && credenciais.password === SENHA) {
        return pronto(null, { user: credenciais.username });
      }
      return pronto(new Error("credenciais recusadas"));
    },
    onData(fluxo, _sessao, pronto) {
      let conteudo = "";
      fluxo.on("data", (parte) => (conteudo += parte));
      fluxo.on("end", () => {
        recebidas.push(conteudo);
        pronto();
      });
    },
  });

  await new Promise<void>((resolver) => servidor.listen(PORTA, "127.0.0.1", resolver));

  process.env.SMTP_HOST = "127.0.0.1";
  process.env.SMTP_PORTA = String(PORTA);
  process.env.SMTP_USUARIO = USUARIO;
  process.env.SMTP_SENHA = SENHA;
});

afterAll(async () => {
  await new Promise<void>((resolver) => servidor.close(() => resolver()));
});

describe("transporte SMTP", () => {
  it("autentica e entrega a mensagem num servidor SMTP de verdade", async () => {
    const resultado = await enviarSolicitacao(
      {
        nome: "Maria Souza",
        email: "maria@construtorasouza.com.br",
        telefone: "11999998888",
        empresa: "Construtora Souza",
        cidadeObra: "Santo André",
        servico: "Prova de Carga Estática",
        descricao: "Laje de galpão, 2 pontos de ensaio",
      },
      criarTransporteSmtp()
    );

    expect(resultado.situacao).toBe("enviada");
    expect(recebidas).toHaveLength(1);

    const mensagem = recebidas[0];
    expect(mensagem).toContain("fernando.franco@ofmengenharia.com.br");
    expect(mensagem).toContain("maria@construtorasouza.com.br");
    expect(mensagem).toContain("Prova de Carga");
  }, 30_000);

  it("relata falha quando a senha de app está errada", async () => {
    process.env.SMTP_SENHA = "senha-errada";

    const resultado = await enviarSolicitacao(
      {
        nome: "Maria Souza",
        email: "maria@construtorasouza.com.br",
        telefone: "11999998888",
        cidadeObra: "Santo André",
        servico: "Prova de Carga Estática",
        descricao: "Laje de galpão",
      },
      criarTransporteSmtp()
    );

    expect(resultado.situacao).toBe("falha");
    process.env.SMTP_SENHA = SENHA;
  }, 30_000);

  it("aceita a senha de app colada com os espaços que o Google exibe na tela", async () => {
    process.env.SMTP_SENHA = "abcd efgh ijkl mnop";

    const resultado = await enviarSolicitacao(
      {
        nome: "Maria Souza",
        email: "maria@construtorasouza.com.br",
        telefone: "11999998888",
        cidadeObra: "Santo André",
        servico: "Prova de Carga Estática",
        descricao: "Laje de galpão",
      },
      criarTransporteSmtp()
    );

    expect(resultado.situacao).toBe("enviada");
    process.env.SMTP_SENHA = SENHA;
  }, 30_000);
});
