"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";

const itensNav = [
  { rotulo: "Sobre", ancora: "/#sobre" },
  { rotulo: "Serviços", ancora: "/#servicos" },
  { rotulo: "Obras", ancora: "/#obras" },
  { rotulo: "Acervo Técnico", ancora: "/#acervo" },
  { rotulo: "Contato", ancora: "/#contato" },
];

export default function Footer() {
  const brand = useScrollReveal({ threshold: 0.15 });
  const nav = useScrollReveal({ threshold: 0.15 });
  const contato = useScrollReveal({ threshold: 0.15 });

  return (
    <footer className="bg-(--bg-secao) border-t border-(--bg-elemento)">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div
            ref={brand.ref}
            className={`${brand.montado ? "reveal-fade-up" : ""} ${brand.visivel ? "is-visible" : ""}`}
          >
            <a
              href="#"
              className="flex flex-col leading-none mb-4 cursor-pointer"
            >
              <span
                className="text-3xl font-black text-(--texto-principal) tracking-tight"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                OFM
              </span>
              <span className="text-[10px] tracking-[0.3em] text-(--destaque-azul) uppercase font-medium">
                Engenharia, Instrumentações, Inspeções e Análises Estruturais
              </span>
            </a>
            <p className="text-(--texto-suave) text-sm leading-relaxed max-w-xs">
              Transformando medições em conhecimento estrutural — segurança,
              desempenho e inovação em obras de pequeno, médio e grande porte
              desde 2002.
            </p>
          </div>

          {/* Nav */}
          <div
            ref={nav.ref}
            className={`${nav.montado ? "reveal-fade-up" : ""} ${nav.visivel ? "is-visible" : ""}`}
            style={{ transitionDelay: "100ms" }}
          >
            <h4
              className="text-(--texto-principal) text-sm font-bold mb-5 tracking-wide"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Navegação
            </h4>
            <ul className="space-y-3">
              {itensNav.map((item) => (
                <li key={item.ancora}>
                  <a
                    href={item.ancora}
                    className="text-(--texto-suave) hover:text-(--texto-principal) text-sm transition-colors duration-200 cursor-pointer"
                  >
                    {item.rotulo}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div
            ref={contato.ref}
            className={`${contato.montado ? "reveal-fade-up" : ""} ${contato.visivel ? "is-visible" : ""}`}
            style={{ transitionDelay: "200ms" }}
          >
            <h4
              className="text-(--texto-principal) text-sm font-bold mb-5 tracking-wide"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Contato
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+5511964866459"
                  className="text-(--texto-suave) hover:text-(--texto-principal) text-sm transition-colors cursor-pointer"
                >
                  (11) 96486-6459
                </a>
              </li>
              <li>
                <a
                  href="mailto:ofmengenharia@ofmengenharia.com.br"
                  className="text-(--texto-suave) hover:text-(--texto-principal) text-sm transition-colors cursor-pointer"
                >
                  ofmengenharia@ofmengenharia.com.br
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Rua+Pangar%C3%A9,+40,+Vila+Butan%C3%A3,+S%C3%A3o+Paulo,+SP,+05360-130"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-(--texto-suave) hover:text-(--texto-principal) text-sm transition-colors cursor-pointer"
                >
                  Rua Pangaré, 40 — Vila Butantã, São Paulo - SP, 05360-130
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-(--borda-fina) flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-(--texto-fraco) text-xs">
              © {new Date().getFullYear()} OFM Engenharia e Inspeções Ltda. —
              CNPJ 65.669.828/0001-82
            </p>
            <p className="text-(--texto-fraco) text-xs">
              Responsável Técnico: Fernando Franco de Oliveira — CREA-SP
              5063897008
            </p>
          </div>
          <a
            href="https://maps.google.com/?q=Rua+Pangar%C3%A9,+40,+Vila+Butan%C3%A3,+S%C3%A3o+Paulo,+SP,+05360-130"
            target="_blank"
            rel="noopener noreferrer"
            className="text-(--texto-fraco) text-xs text-right hover:text-(--texto-suave) transition-colors duration-200 cursor-pointer"
          >
            Rua Pangaré, 40 — Vila Butantã — São Paulo, SP, 05360-130
          </a>
        </div>
      </div>
    </footer>
  );
}
