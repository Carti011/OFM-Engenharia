import { processarRequisicao } from "@/lib/orcamento/controlador";
import { criarLimitePorIp } from "@/lib/orcamento/limitePorIp";
import { criarTransporteSmtp } from "@/lib/orcamento/transporteSmtp";

export const runtime = "nodejs";

const limite = criarLimitePorIp({ maximo: 5, janelaMs: 10 * 60 * 1000 });

export async function POST(requisicao: Request) {
  return processarRequisicao(requisicao, {
    transporte: criarTransporteSmtp(),
    limite,
  });
}
