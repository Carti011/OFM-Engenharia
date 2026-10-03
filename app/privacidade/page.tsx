import type { Metadata } from "next";
import Link from "next/link";
import NavegacaoInterna from "@/components/NavegacaoInterna";
import Rodape from "@/components/Rodape";

export const metadata: Metadata = {
  title: "Política de Privacidade | OFM Engenharia",
  description:
    "Como a OFM Engenharia coleta, usa e protege os dados pessoais informados no site, conforme a Lei Geral de Proteção de Dados.",
};

const ATUALIZADO_EM = "25 de setembro de 2026";

function Secao({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2
        className="text-xl md:text-2xl font-bold text-(--texto-principal) mb-4"
        style={{ fontFamily: "var(--font-outfit)" }}
      >
        {titulo}
      </h2>
      <div className="space-y-3 text-sm md:text-base text-(--texto-suave) leading-relaxed">
        {children}
      </div>
    </section>
  );
}

export default function Pagina() {
  return (
    <>
      <NavegacaoInterna secao="Política de Privacidade" />

      <main className="pt-28 pb-24 md:pt-32 md:pb-32 bg-(--bg-principal) min-h-screen">
        <div className="max-w-3xl mx-auto px-6">
          <header className="mb-12">
            <p className="text-xs tracking-[0.35em] text-(--destaque-azul) uppercase font-medium mb-4">
              Transparência
            </p>
            <h1
              className="text-4xl md:text-5xl font-black text-(--texto-principal) leading-tight mb-4"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Política de
              <br />
              <span className="text-(--destaque-azul)">Privacidade</span>
            </h1>
            <p className="text-(--texto-fraco) text-sm">
              Última atualização: {ATUALIZADO_EM}
            </p>
          </header>

          <Secao titulo="Quem trata seus dados">
            <p>
              OFM Engenharia e Inspeções Ltda., CNPJ 65.669.828/0001-82, com sede na Rua Pangaré,
              40 — Vila Butantã, São Paulo — SP, CEP 05360-130.
            </p>
            <p>
              Para qualquer assunto relacionado a esta política, o contato é{" "}
              <a
                href="mailto:fernando.franco@ofmengenharia.com.br"
                className="text-(--destaque-azul) hover:text-(--destaque-azul-hover) transition-colors duration-200 break-all"
              >
                fernando.franco@ofmengenharia.com.br
              </a>
              .
            </p>
          </Secao>

          <Secao titulo="Que dados coletamos">
            <p>
              <strong className="text-(--texto-principal)">
                Quando você pede um orçamento:
              </strong>{" "}
              nome, telefone, e-mail, cidade da obra, serviço desejado, a descrição que você
              escrever e, se informar, o nome da empresa. Todos partem de você — o site não busca
              informação sua em nenhum outro lugar.
            </p>
            <p>
              <strong className="text-(--texto-principal)">Seu endereço de IP:</strong> registrado
              no momento do envio e usado apenas para limitar solicitações repetidas em sequência,
              o que protege o formulário contra envio automatizado.
            </p>
            <p>
              <strong className="text-(--texto-principal)">Dados de navegação:</strong> usamos a
              tag do Google Ads para entender quantas pessoas chegam ao site pelos nossos anúncios
              e quantas pedem orçamento. Esses cookies são do Google, não nossos.
            </p>
            <p>
              Não coletamos CPF, dados bancários, documentos nem qualquer informação sensível pelo
              site. Se algum serviço exigir esse tipo de dado, isso acontece fora daqui, no contrato.
            </p>
          </Secao>

          <Secao titulo="Para que usamos">
            <p>
              Os dados do formulário servem para responder à sua solicitação e preparar a proposta
              — nada além disso. Não enviamos newsletter, não usamos seus dados para propaganda e
              não vendemos nem cedemos sua informação para ninguém.
            </p>
            <p>
              As bases legais são o artigo 7º, inciso V da LGPD, que permite o tratamento para
              atender a pedido seu antes de um contrato, e o artigo 7º, inciso IX, legítimo
              interesse, para proteger o formulário contra abuso.
            </p>
          </Secao>

          <Secao titulo="Com quem compartilhamos">
            <p>
              Apenas com quem faz a infraestrutura do site funcionar, e sempre limitado ao
              necessário:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-(--destaque-azul)">
              <li>
                <strong className="text-(--texto-principal)">Google</strong> — o e-mail da OFM roda
                no Google Workspace, então sua solicitação chega por lá. O Google Ads também recebe
                a informação de que um pedido foi enviado, sem os seus dados pessoais.
              </li>
              <li>
                <strong className="text-(--texto-principal)">Vercel</strong> — empresa que hospeda
                o site e processa o envio do formulário.
              </li>
            </ul>
            <p>
              Essas empresas podem processar dados fora do Brasil. Fora isso, seus dados só saem da
              OFM por ordem judicial ou exigência legal.
            </p>
          </Secao>

          <Secao titulo="Por quanto tempo guardamos">
            <p>
              A solicitação fica na nossa caixa de e-mail enquanto durar o atendimento e, depois,
              por até cinco anos. Esse prazo existe porque é o período em que uma discussão sobre
              serviço prestado ainda pode ser levantada, e o registro do que foi combinado protege
              as duas partes.
            </p>
            <p>Você pode pedir a exclusão antes disso a qualquer momento.</p>
          </Secao>

          <Secao titulo="Seus direitos">
            <p>A LGPD garante que você pode, a qualquer momento:</p>
            <ul className="list-disc pl-5 space-y-2 marker:text-(--destaque-azul)">
              <li>saber se temos dados seus e pedir uma cópia</li>
              <li>corrigir informação errada ou incompleta</li>
              <li>pedir a exclusão dos seus dados</li>
              <li>saber com quem compartilhamos</li>
              <li>retirar um consentimento que você tenha dado</li>
            </ul>
            <p>
              Basta escrever para{" "}
              <a
                href="mailto:fernando.franco@ofmengenharia.com.br"
                className="text-(--destaque-azul) hover:text-(--destaque-azul-hover) transition-colors duration-200 break-all"
              >
                fernando.franco@ofmengenharia.com.br
              </a>
              . Respondemos em até 15 dias. Não cobramos nada por isso e você não precisa
              justificar o pedido.
            </p>
          </Secao>

          <Secao titulo="Cookies e como recusar">
            <p>
              O site usa a tag do Google Ads para medir o resultado dos anúncios. Se você preferir
              não ser medido, dá para bloquear cookies de terceiros nas configurações do seu
              navegador, ou ajustar as preferências de anúncio na sua conta Google. O site continua
              funcionando normalmente — inclusive o formulário.
            </p>
          </Secao>

          <Secao titulo="Mudanças nesta política">
            <p>
              Se algo mudar, atualizamos esta página e a data no topo. Alterações que afetem o uso
              dos seus dados passam a valer a partir da publicação aqui.
            </p>
          </Secao>

          <div className="mt-12 pt-8 border-t border-(--borda-principal)">
            <Link
              href="/orcamento"
              className="inline-flex items-center gap-2 text-sm text-(--destaque-azul) hover:text-(--destaque-azul-hover) transition-colors duration-200 cursor-pointer"
            >
              Voltar para a solicitação de orçamento
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </main>

      <Rodape />
    </>
  );
}
