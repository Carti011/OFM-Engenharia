const itensNav = [
  { rotulo: "Sobre", ancora: "#sobre" },
  { rotulo: "Serviços", ancora: "#servicos" },
  { rotulo: "Obras", ancora: "#obras" },
  { rotulo: "Acervo Técnico", ancora: "#acervo" },
  { rotulo: "Contato", ancora: "#contato" },
];

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="flex flex-col leading-none mb-4 cursor-pointer">
              <span
                className="text-3xl font-black text-white tracking-tight"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                OFM
              </span>
              <span className="text-[10px] tracking-[0.3em] text-[#f97316] uppercase font-medium">
                Instrumentações e Análises Estruturais
              </span>
            </a>
            <p className="text-[#6b7280] text-sm leading-relaxed max-w-xs">
              Transformando medições em conhecimento estrutural — segurança,
              desempenho e inovação em obras de grande porte desde 2002.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4
              className="text-white text-sm font-bold mb-5 tracking-wide"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Navegação
            </h4>
            <ul className="space-y-3">
              {itensNav.map((item) => (
                <li key={item.ancora}>
                  <a
                    href={item.ancora}
                    className="text-[#6b7280] hover:text-white text-sm transition-colors duration-200 cursor-pointer"
                  >
                    {item.rotulo}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-white text-sm font-bold mb-5 tracking-wide"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Contato
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+5511964866459"
                  className="text-[#6b7280] hover:text-white text-sm transition-colors cursor-pointer"
                >
                  (11) 96486-6459
                </a>
              </li>
              <li>
                <a
                  href="mailto:oliveiraff2@gmail.com"
                  className="text-[#6b7280] hover:text-white text-sm transition-colors cursor-pointer"
                >
                  oliveiraff2@gmail.com
                </a>
              </li>
              <li>
                <span className="text-[#6b7280] text-sm">
                  Av. dos Autonomistas, 503
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#151515] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#4b5563] text-xs">
            © {new Date().getFullYear()} OFM Instrumentações e Análises Estruturais. Todos os direitos reservados.
          </p>
          <p className="text-[#4b5563] text-xs">
            Eng. Fernando Franco de Oliveira — CREA/SP
          </p>
        </div>
      </div>
    </footer>
  );
}
