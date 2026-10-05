declare global {
  interface Window {
    gtag?: (...argumentos: unknown[]) => void;
  }
}

const ROTULO_ORCAMENTO = process.env.NEXT_PUBLIC_ROTULO_CONVERSAO_ORCAMENTO;

// pedido de proposta concluído pelo site — a conversão que o Google Ads otimiza
export function registrarConversaoOrcamento() {
  if (!ROTULO_ORCAMENTO) return;
  window.gtag?.("event", "conversion", { send_to: ROTULO_ORCAMENTO });
}

// contato por WhatsApp — medido à parte, nunca somado aos pedidos do formulário
export function registrarCliqueWhatsApp(origem: string) {
  window.gtag?.("event", "clique_whatsapp", { origem });
}
