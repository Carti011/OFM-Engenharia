import type { Metadata } from "next";
import NavegacaoInterna from "@/components/NavegacaoInterna";
import Rodape from "@/components/Rodape";
import ConfirmacaoOrcamento from "./ConfirmacaoOrcamento";

export const metadata: Metadata = {
  title: "Solicitação recebida | OFM Engenharia",
  description: "Recebemos sua solicitação de orçamento. A equipe da OFM entrará em contato.",
  robots: { index: false, follow: false },
};

export default function Pagina() {
  return (
    <>
      <NavegacaoInterna secao="Solicitação recebida" />

      <main className="pt-28 pb-24 md:pt-32 md:pb-32 bg-(--bg-principal) min-h-screen">
        <div className="max-w-2xl mx-auto px-6">
          <ConfirmacaoOrcamento />
        </div>
      </main>

      <Rodape />
    </>
  );
}
