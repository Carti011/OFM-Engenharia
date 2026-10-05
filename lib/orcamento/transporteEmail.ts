export interface MensagemEmail {
  para: string;
  assunto: string;
  corpo: string;
  responderPara?: string;
}

export interface TransporteEmail {
  enviar(mensagem: MensagemEmail): Promise<void>;
}
