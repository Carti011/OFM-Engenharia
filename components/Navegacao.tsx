"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import BotaoTema from "@/components/BotaoTema";

const itensNav = [
  { rotulo: "Sobre", ancora: "#sobre" },
  { rotulo: "Serviços", ancora: "#servicos" },
  { rotulo: "Obras", ancora: "#obras" },
  { rotulo: "Acervo", ancora: "#acervo" },
  { rotulo: "Contato", ancora: "#contato" },
];

export default function Navbar() {
  const [comScroll, setComScroll] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    const aoRolar = () => setComScroll(window.scrollY > 60);
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 pointer-events-none">
      <div className="w-full max-w-5xl pointer-events-auto">
        {/* Ilha flutuante */}
        <header
          className={`rounded-2xl border transition-all duration-500 ${
            comScroll
              ? "bg-(--bg-cartao)/90 backdrop-blur-md border-(--borda-principal) shadow-lg shadow-black/20"
              : "bg-(--bg-principal)/70 backdrop-blur-sm border-(--borda-principal)/60"
          }`}
        >
          <nav className="px-5 py-2.5 flex items-center justify-between gap-6">
            {/* Logo */}
            <a href="#" className="cursor-pointer shrink-0">
              <Image
                src="/images/Logos/logo_navbar_2x Removido.png"
                alt="OFM Engenharia"
                width={100}
                height={40}
                className="h-10 w-auto object-contain"
                priority
                unoptimized
              />
            </a>

            {/* Nav desktop */}
            <ul className="hidden md:flex items-center gap-6">
              {itensNav.map((item) => (
                <li key={item.ancora}>
                  <a
                    href={item.ancora}
                    className="text-sm text-(--texto-secundario) hover:text-(--texto-principal) transition-colors duration-200 tracking-wide cursor-pointer"
                  >
                    {item.rotulo}
                  </a>
                </li>
              ))}
            </ul>

            {/* Ações desktop */}
            <div className="hidden md:flex items-center gap-2 shrink-0">
              <BotaoTema />
              <a
                href="#contato"
                className="inline-flex items-center gap-2 px-4 py-2 bg-(--destaque-laranja) hover:bg-(--destaque-laranja-hover) text-white text-sm font-semibold rounded-xl transition-colors duration-200 cursor-pointer"
              >
                Solicitar Proposta
              </a>
            </div>

            {/* Ações mobile */}
            <div className="md:hidden flex items-center gap-1 shrink-0">
              <BotaoTema />
              <button
                onClick={() => setMenuAberto(!menuAberto)}
                className="p-2 text-(--texto-secundario) hover:text-(--texto-principal) transition-colors cursor-pointer"
                aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
              >
                {menuAberto ? (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                ) : (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="3" y1="7" x2="21" y2="7" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="17" x2="21" y2="17" />
                  </svg>
                )}
              </button>
            </div>
          </nav>

          {/* Menu mobile — dentro da ilha */}
          {menuAberto && (
            <div className="md:hidden border-t border-(--borda-principal)/60 px-5 py-4">
              <ul className="flex flex-col gap-3">
                {itensNav.map((item) => (
                  <li key={item.ancora}>
                    <a
                      href={item.ancora}
                      onClick={() => setMenuAberto(false)}
                      className="block text-(--texto-secundario) hover:text-(--texto-principal) py-1 text-sm transition-colors cursor-pointer"
                    >
                      {item.rotulo}
                    </a>
                  </li>
                ))}
                <li className="pt-1">
                  <a
                    href="#contato"
                    onClick={() => setMenuAberto(false)}
                    className="inline-flex items-center px-4 py-2 bg-(--destaque-laranja) text-white text-sm font-semibold rounded-xl cursor-pointer"
                  >
                    Solicitar Proposta
                  </a>
                </li>
              </ul>
            </div>
          )}
        </header>
      </div>
    </div>
  );
}
