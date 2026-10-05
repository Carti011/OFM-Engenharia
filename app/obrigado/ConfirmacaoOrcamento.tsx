"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { consumirConfirmacao } from "@/lib/orcamento/confirmacao";
import { registrarConversaoOrcamento } from "@/lib/conversao";

export default function ConfirmacaoOrcamento() {
  const router = useRouter();
  const [confirmado, setConfirmado] = useState(false);
  const jaVerificou = useRef(false);

  useEffect(() => {
    // o modo estrito do React roda o efeito duas vezes em desenvolvimento;
    // sem esta trava a confirmação seria consumida antes de ser exibida
    if (jaVerificou.current) return;
    jaVerificou.current = true;

    if (!consumirConfirmacao(window.sessionStorage)) {
      router.replace("/orcamento");
      return;
    }

    // a confirmação vive no sessionStorage, que só existe no navegador:
    // ler antes da montagem quebraria a hidratação
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setConfirmado(true);
    registrarConversaoOrcamento();
  }, [router]);

  if (!confirmado) return null;

  return (
    <div className="text-center">
      <div className="w-16 h-16 mx-auto mb-8 border border-(--destaque-azul)/40 bg-(--destaque-azul)/10 rounded-sm flex items-center justify-center">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--destaque-azul)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>

      <h1
        className="text-3xl md:text-4xl font-black text-(--texto-principal) leading-tight mb-4"
        style={{ fontFamily: "var(--font-outfit)" }}
      >
        Recebemos sua solicitação!
      </h1>

      <p className="text-(--texto-suave) text-sm md:text-base mb-10 max-w-lg mx-auto">
        A equipe da OFM entrará em contato pelos dados informados.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-(--destaque-azul) hover:bg-(--destaque-azul-hover) text-white font-bold text-sm rounded-sm transition-colors duration-200 cursor-pointer"
        >
          Voltar ao início
        </Link>
        <Link
          href="/servicos"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-(--bg-cartao) border border-(--borda-principal) hover:border-(--destaque-azul)/40 text-(--texto-principal) font-bold text-sm rounded-sm transition-colors duration-200 cursor-pointer"
        >
          Ver serviços
        </Link>
      </div>
    </div>
  );
}
