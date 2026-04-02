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

const URL_BASE = "https://ofmengenharia.com.br";
const TITULO = "OFM | Engenharia, Instrumentações, Inspeções e Análises Estruturais";
const DESCRICAO =
  "Empresa especializada em instrumentação de alta precisão, provas de carga, ensaios dinâmicos e análises estruturais. Veja nosso portfólio.";

export const metadata: Metadata = {
  title: TITULO,
  description: DESCRICAO,
  keywords:
    "instrumentação estrutural, análises estruturais, provas de carga, strain gages, ensaios dinâmicos, engenharia experimental, inspeção estrutural",
  metadataBase: new URL(URL_BASE),
  openGraph: {
    type: "website",
    url: URL_BASE,
    title: TITULO,
    description: DESCRICAO,
    siteName: "OFM Engenharia",
    images: [
      {
        url: "/images/Logos/logo-full/ofm_logo_full.png",
        alt: "OFM Engenharia — Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITULO,
    description: DESCRICAO,
    images: ["/images/Logos/logo-full/ofm_logo_full.png"],
  },
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
