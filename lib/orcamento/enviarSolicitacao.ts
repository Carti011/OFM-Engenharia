import type { TransporteEmail } from "./transporteEmail";
import { validarSolicitacao, type Solicitacao } from "./solicitacao";

export type ResultadoEnvio =
  | { situacao: "enviada" }
  | { situacao: "invalida"; erros: string[] }
  | { situacao: "falha" };

const DESTINO_PADRAO = "fernando.franco@ofmengenharia.com.br";

function destino() {
  return process.env.EMAIL_DESTINO_ORCAMENTO ?? DESTINO_PADRAO;
}

// campo isca: invisível no formulário, só robô preenche
function pareceRobo(dados: unknown) {
  const bruto = (dados ?? {}) as Record<string, unknown>;
  return typeof bruto.site === "string" && bruto.site.trim() !== "";
}

function montarCorpo(solicitacao: Solicitacao) {
  return [
    "Nova solicitação de orçamento pelo site",
    "",
    `Nome: ${solicitacao.nome}`,
    `E-mail: ${solicitacao.email}`,
    `Telefone: ${solicitacao.telefone}`,
    `Empresa: ${solicitacao.empresa || "Não informado"}`,
    `Cidade da obra: ${solicitacao.cidadeObra}`,
    `Serviço: ${solicitacao.servico}`,
    "",
    "Descrição:",
    solicitacao.descricao,
  ].join("\n");
}

export async function enviarSolicitacao(
  dados: unknown,
  transporte: TransporteEmail
): Promise<ResultadoEnvio> {
  if (pareceRobo(dados)) {
    return { situacao: "enviada" };
  }

  const validacao = validarSolicitacao(dados);
  if (!validacao.valida) {
    return { situacao: "invalida", erros: validacao.erros };
  }

  const solicitacao = validacao.solicitacao;

  try {
    await transporte.enviar({
      para: destino(),
      assunto: `Solicitação de orçamento — ${solicitacao.nome}`,
      corpo: montarCorpo(solicitacao),
      responderPara: solicitacao.email,
    });
  } catch (erro) {
    // detalhe do SMTP fica no log do servidor, nunca na resposta ao visitante
    console.error("falha ao enviar solicitação de orçamento", erro);
    return { situacao: "falha" };
  }

  return { situacao: "enviada" };
}
