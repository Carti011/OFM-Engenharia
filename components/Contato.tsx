"use client";

import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const tiposEnsaio = [
  "Prova de Carga Estática",
  "Prova de Carga Dinâmica",
  "Prova de Carga em Porta Palete",
  "Análise de Vibração Residencial",
  "Análise de Vibração Predial",
  "Análise de Vibração em Vias Públicas",
  "Ensaio de Trafegabilidade",
  "Monitoramento Estrutural",
  "Validação de Modelo Numérico",
  "Fabricação de Célula de Carga",
  "Ensaio Industrial Especial",
  "Ensaio de Arrancamento / Solda",
  "Outro",
];

export default function Contact() {
  const [form, setForm] = useState({
    nome: "",
    empresa: "",
    telefone: "",
    tipo: "",
    descricao: "",
  });

  const header = useScrollReveal({ threshold: 0.15 });
  const campo0 = useScrollReveal({ threshold: 0.1 });
  const campo1 = useScrollReveal({ threshold: 0.1 });
  const campo2 = useScrollReveal({ threshold: 0.1 });
  const botao  = useScrollReveal({ threshold: 0.1 });
  const infoCard = useScrollReveal({ threshold: 0.1 });
  const infoItem0 = useScrollReveal({ threshold: 0.1 });
  const infoItem1 = useScrollReveal({ threshold: 0.1 });
  const infoItem2 = useScrollReveal({ threshold: 0.1 });
  const whatsappDireto = useScrollReveal({ threshold: 0.1 });

  const aoAlterar = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const aoEnviar = (e: React.FormEvent) => {
    e.preventDefault();
    const mensagem = encodeURIComponent(
      `*Solicitação de Proposta – OFM Instrumentações*\n\n` +
        `*Nome:* ${form.nome}\n` +
        `*Empresa:* ${form.empresa || "Não informado"}\n` +
        `*Telefone:* ${form.telefone}\n` +
        `*Tipo de Ensaio:* ${form.tipo || "Não especificado"}\n` +
        `*Descrição:* ${form.descricao || "Sem descrição adicional"}`
    );
    window.open(`https://wa.me/5511964866459?text=${mensagem}`, "_blank");
  };

  const aoEnviarEmail = () => {
    const assunto = encodeURIComponent(`Solicitação de Proposta – ${form.tipo || "Ensaio Estrutural"}`);
    const corpo = encodeURIComponent(
      `Solicitação de Proposta – OFM Instrumentações\n\n` +
        `Nome: ${form.nome}\n` +
        `Empresa: ${form.empresa || "Não informado"}\n` +
        `Telefone: ${form.telefone}\n` +
        `Tipo de Ensaio: ${form.tipo || "Não especificado"}\n` +
        `Descrição: ${form.descricao || "Sem descrição adicional"}`
    );
    window.open(`mailto:ofmengenharia@ofmengenharia.com.br?subject=${assunto}&body=${corpo}`, "_blank");
  };

  const estiloInput =
    "w-full bg-(--bg-cartao) border border-(--borda-input) focus:border-(--destaque-azul) outline-none text-(--texto-principal) text-sm px-4 py-3 rounded-sm placeholder:text-(--texto-fraco) transition-colors duration-200";

  return (
    <section id="contato" className="py-24 md:py-32 bg-(--bg-principal)">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          ref={header.ref}
          className={`mb-16 ${header.montado ? "reveal-fade-right" : ""} ${header.visivel ? "is-visible" : ""}`}
        >
          <p className="text-xs tracking-[0.35em] text-(--destaque-laranja) uppercase font-medium mb-4">
            Entre em Contato
          </p>
          <h2
            className="text-4xl md:text-5xl font-black text-(--texto-principal) leading-tight"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Solicitar
            <br />
            <span className="text-(--destaque-laranja)">Proposta</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form — 3 cols */}
          <div className="lg:col-span-3">
            <form onSubmit={aoEnviar} className="space-y-4">
              <div
                ref={campo0.ref}
                className={`grid sm:grid-cols-2 gap-4 ${campo0.montado ? "reveal-fade-up" : ""} ${campo0.visivel ? "is-visible" : ""}`}
                style={{ transitionDelay: "100ms" }}
              >
                <div>
                  <label
                    htmlFor="nome"
                    className="block text-xs text-(--texto-suave) mb-1.5 uppercase tracking-wide"
                  >
                    Nome *
                  </label>
                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    required
                    placeholder="Seu nome completo"
                    value={form.nome}
                    onChange={aoAlterar}
                    className={estiloInput}
                  />
                </div>
                <div>
                  <label
                    htmlFor="empresa"
                    className="block text-xs text-(--texto-suave) mb-1.5 uppercase tracking-wide"
                  >
                    Empresa
                  </label>
                  <input
                    id="empresa"
                    name="empresa"
                    type="text"
                    placeholder="Nome da empresa"
                    value={form.empresa}
                    onChange={aoAlterar}
                    className={estiloInput}
                  />
                </div>
              </div>

              <div
                ref={campo1.ref}
                className={`grid sm:grid-cols-2 gap-4 ${campo1.montado ? "reveal-fade-up" : ""} ${campo1.visivel ? "is-visible" : ""}`}
                style={{ transitionDelay: "200ms" }}
              >
                <div>
                  <label
                    htmlFor="telefone"
                    className="block text-xs text-(--texto-suave) mb-1.5 uppercase tracking-wide"
                  >
                    Telefone *
                  </label>
                  <input
                    id="telefone"
                    name="telefone"
                    type="tel"
                    required
                    placeholder="(11) 99999-9999"
                    value={form.telefone}
                    onChange={aoAlterar}
                    className={estiloInput}
                  />
                </div>
                <div>
                  <label
                    htmlFor="tipo"
                    className="block text-xs text-(--texto-suave) mb-1.5 uppercase tracking-wide"
                  >
                    Tipo de Ensaio
                  </label>
                  <select
                    id="tipo"
                    name="tipo"
                    value={form.tipo}
                    onChange={aoAlterar}
                    className={`${estiloInput} cursor-pointer`}
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

              <div
                ref={campo2.ref}
                className={`${campo2.montado ? "reveal-fade-up" : ""} ${campo2.visivel ? "is-visible" : ""}`}
                style={{ transitionDelay: "300ms" }}
              >
                <label
                  htmlFor="descricao"
                  className="block text-xs text-(--texto-suave) mb-1.5 uppercase tracking-wide"
                >
                  Descrição do Projeto
                </label>
                <textarea
                  id="descricao"
                  name="descricao"
                  rows={5}
                  placeholder="Descreva brevemente o projeto, estrutura ou necessidade técnica..."
                  value={form.descricao}
                  onChange={aoAlterar}
                  className={`${estiloInput} resize-none`}
                />
              </div>

              <div
                ref={botao.ref}
                className={`${botao.montado ? "reveal-fade-up" : ""} ${botao.visivel ? "is-visible" : ""}`}
                style={{ transitionDelay: "400ms" }}
              >
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 px-4 py-4 bg-[#25d366] hover:bg-[#20c05c] text-white font-bold text-sm rounded-sm transition-colors duration-200 cursor-pointer"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    WhatsApp
                  </button>
                  <button
                    type="button"
                    onClick={aoEnviarEmail}
                    className="flex items-center justify-center gap-2 px-4 py-4 bg-(--bg-cartao) border border-(--destaque-azul) hover:bg-(--destaque-azul)/10 text-(--destaque-azul) font-bold text-sm rounded-sm transition-colors duration-200 cursor-pointer"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    E-mail
                  </button>
                </div>
                <p className="text-xs text-(--texto-fraco) text-center mt-3">
                  Os dados do formulário serão enviados pelo canal escolhido.
                </p>
              </div>
            </form>
          </div>

          {/* Contact info — 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div
              ref={infoCard.ref}
              className={`p-6 bg-(--bg-cartao) border border-(--borda-principal) rounded-sm ${infoCard.montado ? "reveal-fade-left" : ""} ${infoCard.visivel ? "is-visible" : ""}`}
            >
              <h3
                className="text-(--texto-principal) font-bold text-base mb-6"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Informações de Contato
              </h3>
              <div className="space-y-5">
                {/* Phone */}
                <a
                  ref={infoItem0.ref}
                  href="tel:+5511964866459"
                  className={`flex items-start gap-4 group cursor-pointer ${infoItem0.montado ? "reveal-fade-left" : ""} ${infoItem0.visivel ? "is-visible" : ""}`}
                  style={{ transitionDelay: "100ms" }}
                >
                  <div className="w-9 h-9 bg-(--bg-elemento) border border-(--borda-etiqueta) rounded-sm flex items-center justify-center shrink-0 group-hover:border-(--destaque-azul)/40 transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--destaque-azul)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 12a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1.16h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-(--texto-suave) uppercase tracking-wide mb-0.5">
                      Telefone / WhatsApp
                    </p>
                    <p className="text-(--texto-principal) text-sm font-medium group-hover:text-(--destaque-azul-hover) transition-colors">
                      (11) 96486-6459
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  ref={infoItem1.ref}
                  href="mailto:fernando.franco@ofmengenharia.com.br"
                  className={`flex items-start gap-4 group cursor-pointer ${infoItem1.montado ? "reveal-fade-left" : ""} ${infoItem1.visivel ? "is-visible" : ""}`}
                  style={{ transitionDelay: "200ms" }}
                >
                  <div className="w-9 h-9 bg-(--bg-elemento) border border-(--borda-etiqueta) rounded-sm flex items-center justify-center shrink-0 group-hover:border-(--destaque-azul)/40 transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--destaque-azul)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-(--texto-suave) uppercase tracking-wide mb-0.5">
                      E-mail
                    </p>
                    <p className="text-(--texto-principal) text-sm font-medium group-hover:text-(--destaque-azul-hover) transition-colors break-all">
                      fernando.franco@ofmengenharia.com.br
                    </p>
                    <p className="text-(--texto-suave) text-xs mt-0.5 break-all">
                      ofmengenharia@ofmengenharia.com.br
                    </p>
                  </div>
                </a>

                {/* Address */}
                <div
                  ref={infoItem2.ref}
                  className={`flex items-start gap-4 ${infoItem2.montado ? "reveal-fade-left" : ""} ${infoItem2.visivel ? "is-visible" : ""}`}
                  style={{ transitionDelay: "300ms" }}
                >
                  <div className="w-9 h-9 bg-(--bg-elemento) border border-(--borda-etiqueta) rounded-sm flex items-center justify-center shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--destaque-azul)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Rua+Pangar%C3%A9,+40,+Vila+Butan%C3%A3,+S%C3%A3o+Paulo,+SP,+05360-130"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity duration-200 cursor-pointer"
                  >
                    <p className="text-xs text-(--texto-suave) uppercase tracking-wide mb-0.5">
                      Endereço
                    </p>
                    <p className="text-(--texto-principal) text-sm font-medium">
                      Rua Pangaré, 40 — Vila Butantã
                    </p>
                    <p className="text-(--texto-principal) text-sm font-medium">
                      São Paulo — SP, 05360-130
                    </p>
                  </a>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp */}
            <a
              ref={whatsappDireto.ref}
              href="https://wa.me/5511964866459"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-3 p-5 bg-[#25d366]/10 border border-[#25d366]/20 hover:border-[#25d366]/50 hover:bg-[#25d366]/15 rounded-sm transition-all duration-200 cursor-pointer group ${whatsappDireto.montado ? "reveal-fade-left" : ""} ${whatsappDireto.visivel ? "is-visible" : ""}`}
              style={{ transitionDelay: "150ms" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#25d366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span
                className="text-[#25d366] font-semibold text-sm group-hover:text-(--texto-principal) transition-colors"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Falar diretamente no WhatsApp
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
