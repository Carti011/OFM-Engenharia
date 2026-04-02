import { servicosDetalhados } from "@/data/servicos-detalhados";
import PaginaServico from "./PaginaServico";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return servicosDetalhados.map((s) => ({ slug: s.slug }));
}

export default async function Pagina({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const servico = servicosDetalhados.find((s) => s.slug === slug);
  if (!servico) notFound();
  return <PaginaServico servico={servico} />;
}
