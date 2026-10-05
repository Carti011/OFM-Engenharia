import type { Metadata } from "next";
import NavegacaoInterna from "@/components/NavegacaoInterna";
import Rodape from "@/components/Rodape";
import FormularioOrcamento from "./FormularioOrcamento";

export const metadata: Metadata = {
  title: "Solicitar Orçamento | OFM Engenharia",
  description:
    "Peça um orçamento de prova de carga, análise de vibração, monitoramento estrutural ou ensaio especial. A equipe da OFM responde pelos dados informados.",
};

export default function Pagina() {
  return (
    <>
      <NavegacaoInterna secao="Solicitar orçamento" />

      <main className="pt-28 pb-24 md:pt-32 md:pb-32 bg-(--bg-principal) min-h-screen">
        <div className="max-w-3xl mx-auto px-6">
          <header className="mb-10">
            <p className="text-xs tracking-[0.35em] text-(--destaque-azul) uppercase font-medium mb-4">
              Solicitação de proposta
            </p>
            <h1
              className="text-4xl md:text-5xl font-black text-(--texto-principal) leading-tight mb-4"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Conte sobre a<br />
              <span className="text-(--destaque-azul)">sua obra</span>
            </h1>
            <p className="text-(--texto-suave) text-sm md:text-base max-w-xl">
              Preencha os dados abaixo e a equipe da OFM retorna com uma proposta. Quanto mais
              detalhe sobre a estrutura e o prazo, mais precisa fica a resposta.
            </p>
          </header>

          <FormularioOrcamento />
        </div>
      </main>

      <Rodape />
    </>
  );
}
