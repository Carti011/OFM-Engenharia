import Navegacao from "@/components/Navegacao";
import Capa from "@/components/Capa";
import Sobre from "@/components/Sobre";
import Servicos from "@/components/Servicos";
import ObrasDestaque from "@/components/ObrasDestaque";
import AcervoTecnico from "@/components/AcervoTecnico";
import Contato from "@/components/Contato";
import Rodape from "@/components/Rodape";
import BotaoWhatsApp from "@/components/BotaoWhatsApp";

export default function Pagina() {
  return (
    <>
      <Navegacao />
      <main>
        <Capa />
        <Sobre />
        <Servicos />
        <ObrasDestaque />
        <AcervoTecnico />
        <Contato />
      </main>
      <Rodape />
      <BotaoWhatsApp />
    </>
  );
}
