"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { tiposEnsaio } from "@/data/tipos-ensaio";
import { validarSolicitacao } from "@/lib/orcamento/solicitacao";
import { registrarEnvio } from "@/lib/orcamento/confirmacao";

const CAMPOS_VAZIOS = {
  nome: "",
  empresa: "",
  telefone: "",
  email: "",
  cidadeObra: "",
  servico: "",
  descricao: "",
  site: "",
};

const ROTULOS: Record<string, string> = {
  nome: "Nome",
  telefone: "Telefone",
  email: "E-mail",
  cidadeObra: "Cidade da obra",
  servico: "Serviço desejado",
  descricao: "Descrição",
};

type Situacao = "parado" | "enviando" | "erro";

const estiloInput =
  "w-full bg-(--bg-cartao) border border-(--borda-input) focus:border-(--destaque-azul) outline-none text-(--texto-principal) text-sm px-4 py-3 rounded-sm placeholder:text-(--texto-fraco) transition-colors duration-200";

const estiloRotulo =
  "block text-xs text-(--texto-suave) mb-1.5 uppercase tracking-wide";

export default function FormularioOrcamento() {
  const router = useRouter();
  const [campos, setCampos] = useState(CAMPOS_VAZIOS);
  const [situacao, setSituacao] = useState<Situacao>("parado");
  const [invalidos, setInvalidos] = useState<string[]>([]);
  const [recado, setRecado] = useState("");

  const aoAlterar = (
    evento: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setCampos({ ...campos, [evento.target.name]: evento.target.value });
  };

  const aoEnviar = async (evento: React.FormEvent) => {
    evento.preventDefault();

    const validacao = validarSolicitacao(campos);
    if (!validacao.valida) {
      setInvalidos(validacao.erros);
      setSituacao("erro");
      setRecado("Revise os campos destacados antes de enviar.");
      return;
    }

    setInvalidos([]);
    setSituacao("enviando");
    setRecado("");

    try {
      const resposta = await fetch("/api/orcamento", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(campos),
      });

      if (!resposta.ok) {
        const corpo = await resposta.json().catch(() => ({}));
        setSituacao("erro");
        setInvalidos(Array.isArray(corpo.erros) ? corpo.erros : []);
        setRecado(
          resposta.status === 429
            ? "Recebemos várias solicitações deste acesso. Aguarde alguns minutos e tente de novo."
            : "Não foi possível enviar agora. Tente novamente ou fale com a gente pelo WhatsApp."
        );
        return;
      }

      registrarEnvio(window.sessionStorage);
      router.push("/obrigado");
    } catch {
      setSituacao("erro");
      setRecado(
        "Não foi possível enviar agora. Verifique sua conexão ou fale com a gente pelo WhatsApp."
      );
    }
  };

  const enviando = situacao === "enviando";
  const problema = (campo: string) => invalidos.includes(campo);

  const marcarInvalido = (campo: string) =>
    problema(campo) ? "border-red-500/70" : "";

  return (
    <form onSubmit={aoEnviar} noValidate className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nome" className={estiloRotulo}>
            Nome *
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            autoComplete="name"
            placeholder="Seu nome completo"
            value={campos.nome}
            onChange={aoAlterar}
            aria-invalid={problema("nome")}
            className={`${estiloInput} ${marcarInvalido("nome")}`}
          />
        </div>
        <div>
          <label htmlFor="empresa" className={estiloRotulo}>
            Empresa
          </label>
          <input
            id="empresa"
            name="empresa"
            type="text"
            autoComplete="organization"
            placeholder="Opcional"
            value={campos.empresa}
            onChange={aoAlterar}
            className={estiloInput}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="telefone" className={estiloRotulo}>
            Telefone *
          </label>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            autoComplete="tel"
            placeholder="(11) 99999-9999"
            value={campos.telefone}
            onChange={aoAlterar}
            aria-invalid={problema("telefone")}
            className={`${estiloInput} ${marcarInvalido("telefone")}`}
          />
        </div>
        <div>
          <label htmlFor="email" className={estiloRotulo}>
            E-mail *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="voce@empresa.com.br"
            value={campos.email}
            onChange={aoAlterar}
            aria-invalid={problema("email")}
            className={`${estiloInput} ${marcarInvalido("email")}`}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cidadeObra" className={estiloRotulo}>
            Cidade da obra *
          </label>
          <input
            id="cidadeObra"
            name="cidadeObra"
            type="text"
            autoComplete="address-level2"
            placeholder="Cidade e estado"
            value={campos.cidadeObra}
            onChange={aoAlterar}
            aria-invalid={problema("cidadeObra")}
            className={`${estiloInput} ${marcarInvalido("cidadeObra")}`}
          />
        </div>
        <div>
          <label htmlFor="servico" className={estiloRotulo}>
            Serviço desejado *
          </label>
          <select
            id="servico"
            name="servico"
            value={campos.servico}
            onChange={aoAlterar}
            aria-invalid={problema("servico")}
            className={`${estiloInput} cursor-pointer ${marcarInvalido("servico")}`}
          >
            <option value="">Selecione...</option>
            {tiposEnsaio.map((tipo) => (
              <option key={tipo} value={tipo}>
                {tipo}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="descricao" className={estiloRotulo}>
          Descrição do que você precisa *
        </label>
        <textarea
          id="descricao"
          name="descricao"
          rows={6}
          placeholder="Tipo de estrutura, o que precisa ser ensaiado, prazo desejado e qualquer detalhe técnico relevante."
          value={campos.descricao}
          onChange={aoAlterar}
          aria-invalid={problema("descricao")}
          className={`${estiloInput} resize-none ${marcarInvalido("descricao")}`}
        />
      </div>

      {/* campo isca: invisível para pessoas, preenchido por robô */}
      <div aria-hidden="true" className="absolute w-px h-px overflow-hidden -left-[9999px]">
        <label htmlFor="site">Não preencha este campo</label>
        <input
          id="site"
          name="site"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={campos.site}
          onChange={aoAlterar}
        />
      </div>

      <div aria-live="polite" role="status">
        {recado && (
          <p className="text-sm text-red-400 border border-red-500/30 bg-red-500/10 px-4 py-3 rounded-sm">
            {recado}
            {invalidos.length > 0 && (
              <span className="block mt-1 text-(--texto-suave)">
                Campos a revisar: {invalidos.map((campo) => ROTULOS[campo] ?? campo).join(", ")}.
              </span>
            )}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={enviando}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-(--destaque-azul) hover:bg-(--destaque-azul-hover) disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-sm rounded-sm transition-colors duration-200 cursor-pointer"
      >
        {enviando ? "Enviando..." : "Enviar solicitação"}
        {!enviando && (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        )}
      </button>

      <p className="text-xs text-(--texto-fraco)">
        Os campos com * são obrigatórios. Seus dados são usados apenas para responder esta
        solicitação — veja a{" "}
        <Link
          href="/privacidade"
          className="text-(--destaque-azul) hover:text-(--destaque-azul-hover) underline underline-offset-2 transition-colors duration-200"
        >
          política de privacidade
        </Link>
        .
      </p>
    </form>
  );
}
