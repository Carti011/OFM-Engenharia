import type { Metadata } from "next";
import { Outfit, Work_Sans } from "next/font/google";
import "./globals.css";
import ProvedorTema from "@/components/ProvedorTema";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "OFM | Engenharia, Instrumentações e Análises Estruturais",
  description:
    "OFM Engenharia e Inspeções — empresa especializada em instrumentação de alta precisão, ensaios estáticos e dinâmicos, fabricação de células de carga e validação experimental de modelos numéricos.",
  keywords:
    "instrumentação estrutural, análises estruturais, provas de carga, strain gages, ensaios dinâmicos, engenharia experimental, inspeção estrutural",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${outfit.variable} ${workSans.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full antialiased">
        <ProvedorTema>{children}</ProvedorTema>
      </body>
    </html>
  );
}
