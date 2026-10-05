export interface Armazenamento {
  getItem(chave: string): string | null;
  setItem(chave: string, valor: string): void;
  removeItem(chave: string): void;
}

const CHAVE = "ofm-orcamento-enviado";

export function registrarEnvio(armazenamento: Armazenamento) {
  try {
    armazenamento.setItem(CHAVE, "1");
  } catch {
    // navegador com armazenamento bloqueado: segue sem confirmação
  }
}

// consome de uma vez: recarregar ou voltar não conta outro pedido
export function consumirConfirmacao(armazenamento: Armazenamento) {
  try {
    if (armazenamento.getItem(CHAVE) === null) return false;
    armazenamento.removeItem(CHAVE);
    return true;
  } catch {
    return false;
  }
}
