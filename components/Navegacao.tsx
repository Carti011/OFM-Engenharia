"use client";

import { useState, useEffect } from "react";

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
    const aoRolar = () => setComScroll(window.scrollY > 40);
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        comScroll
          ? "bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-[#1e1e1e]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none group cursor-pointer">
          <span
            className="text-2xl font-black tracking-tight text-white"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            OFM
          </span>
          <span className="text-[10px] tracking-[0.25em] text-[#f97316] uppercase font-medium">
            Instrumentações
          </span>
        </a>

        {/* Nav desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {itensNav.map((item) => (
            <li key={item.ancora}>
              <a
                href={item.ancora}
                className="text-sm text-[#9ca3af] hover:text-white transition-colors duration-200 tracking-wide cursor-pointer"
              >
                {item.rotulo}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contato"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-[#f97316] hover:bg-[#ea6c0a] text-white text-sm font-semibold rounded-sm transition-colors duration-200 cursor-pointer"
        >
          Solicitar Proposta
        </a>

        {/* Botão hamburger mobile */}
        <button
          onClick={() => setMenuAberto(!menuAberto)}
          className="md:hidden p-2 text-[#9ca3af] hover:text-white transition-colors cursor-pointer"
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
        >
          {menuAberto ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </svg>
          )}
        </button>
      </nav>

      {/* Menu mobile */}
      {menuAberto && (
        <div className="md:hidden bg-[#0f0f0f] border-t border-[#1e1e1e] px-6 py-4">
          <ul className="flex flex-col gap-4">
            {itensNav.map((item) => (
              <li key={item.ancora}>
                <a
                  href={item.ancora}
                  onClick={() => setMenuAberto(false)}
                  className="block text-[#9ca3af] hover:text-white py-1 text-sm transition-colors cursor-pointer"
                >
                  {item.rotulo}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contato"
                onClick={() => setMenuAberto(false)}
                className="inline-flex items-center px-5 py-2.5 bg-[#f97316] text-white text-sm font-semibold rounded-sm cursor-pointer"
              >
                Solicitar Proposta
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
