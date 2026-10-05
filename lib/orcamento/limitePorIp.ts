interface Configuracao {
  maximo: number;
  janelaMs: number;
  agora?: () => number;
}

export function criarLimitePorIp({ maximo, janelaMs, agora = Date.now }: Configuracao) {
  const registros = new Map<string, number[]>();

  return {
    permite(ip: string) {
      const instante = agora();
      const recentes = (registros.get(ip) ?? []).filter(
        (momento) => instante - momento < janelaMs
      );

      if (recentes.length >= maximo) {
        registros.set(ip, recentes);
        return false;
      }

      recentes.push(instante);
      registros.set(ip, recentes);
      return true;
    },
  };
}
