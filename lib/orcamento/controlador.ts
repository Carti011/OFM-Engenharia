import { enviarSolicitacao } from "./enviarSolicitacao";
import type { TransporteEmail } from "./transporteEmail";

interface Dependencias {
  transporte: TransporteEmail;
  limite: { permite(ip: string): boolean };
}

function respostaJson(corpo: unknown, status: number) {
  return new Response(JSON.stringify(corpo), {
    status,
    headers: { "content-type": "application/json" },
  });
}

// atrás da Vercel o endereço real chega no cabeçalho de encaminhamento
function enderecoDeOrigem(requisicao: Request) {
  const encaminhado = requisicao.headers.get("x-forwarded-for") ?? "";
  return encaminhado.split(",")[0].trim() || "desconhecido";
}

export async function processarRequisicao(
  requisicao: Request,
  { transporte, limite }: Dependencias
): Promise<Response> {
  if (!limite.permite(enderecoDeOrigem(requisicao))) {
    return respostaJson({ situacao: "excedida" }, 429);
  }

  let dados: unknown;
  try {
    dados = await requisicao.json();
  } catch {
    return respostaJson({ situacao: "invalida", erros: ["corpo"] }, 400);
  }

  const resultado = await enviarSolicitacao(dados, transporte);

  if (resultado.situacao === "invalida") {
    return respostaJson({ situacao: resultado.situacao, erros: resultado.erros }, 400);
  }

  if (resultado.situacao === "falha") {
    return respostaJson({ situacao: resultado.situacao }, 502);
  }

  return respostaJson({ situacao: resultado.situacao }, 200);
}
