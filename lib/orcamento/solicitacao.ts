export interface Solicitacao {
  nome: string;
  email: string;
  telefone: string;
  empresa?: string;
  cidadeObra: string;
  servico: string;
  descricao: string;
}

export type ResultadoValidacao =
  | { valida: true; solicitacao: Solicitacao }
  | { valida: false; erros: string[] };

const OBRIGATORIOS = [
  "nome",
  "email",
  "telefone",
  "cidadeObra",
  "servico",
  "descricao",
] as const;

const FORMATO_EMAIL = /^[^\s@]+@[^\s@.]+(\.[^\s@.]+)+$/;

function texto(valor: unknown) {
  return typeof valor === "string" ? valor.trim() : "";
}

export function validarSolicitacao(dados: unknown): ResultadoValidacao {
  const bruto = (dados ?? {}) as Record<string, unknown>;
  const erros: string[] = [];

  for (const campo of OBRIGATORIOS) {
    if (!texto(bruto[campo])) erros.push(campo);
  }

  if (!erros.includes("email") && !FORMATO_EMAIL.test(texto(bruto.email))) {
    erros.push("email");
  }

  if (erros.length > 0) return { valida: false, erros };

  return {
    valida: true,
    solicitacao: {
      nome: texto(bruto.nome),
      email: texto(bruto.email),
      telefone: texto(bruto.telefone),
      empresa: texto(bruto.empresa) || undefined,
      cidadeObra: texto(bruto.cidadeObra),
      servico: texto(bruto.servico),
      descricao: texto(bruto.descricao),
    },
  };
}
