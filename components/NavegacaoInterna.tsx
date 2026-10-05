import Link from "next/link";
import Image from "next/image";
import BotaoTema from "@/components/BotaoTema";

export default function NavegacaoInterna({ secao }: { secao: string }) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 pointer-events-none">
      <div className="w-full max-w-5xl pointer-events-auto">
        <header className="rounded-2xl border bg-(--bg-cartao)/90 backdrop-blur-md border-(--borda-principal) shadow-lg shadow-black/20">
          <nav className="px-5 py-2.5 flex items-center justify-between gap-4">
            <Link href="/" className="cursor-pointer shrink-0" aria-label="Voltar para a página inicial">
              <Image
                src="/images/Logos/logo_navbar_2x Removido.png"
                alt="OFM Engenharia"
                width={100}
                height={40}
                className="h-10 w-auto object-contain"
                priority
                unoptimized
              />
            </Link>

            <div className="hidden sm:flex items-center gap-1.5 text-xs text-(--texto-suave)">
              <Link
                href="/"
                className="hover:text-(--texto-principal) transition-colors duration-200 cursor-pointer"
              >
                Início
              </Link>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <polyline points="9 18 15 12 9 6" />
              </svg>
              <span className="text-(--texto-principal)">{secao}</span>
            </div>

            <BotaoTema />
          </nav>
        </header>
      </div>
    </div>
  );
}
