import nodemailer from "nodemailer";
import type { TransporteEmail } from "./transporteEmail";

function variavelObrigatoria(nome: string) {
  const valor = process.env[nome];
  if (!valor) throw new Error(`variável de ambiente ausente: ${nome}`);
  return valor;
}

// o Google exibe a senha de app em quatro blocos separados por espaço,
// mas os espaços são apenas visuais e o servidor recusa o login com eles
function senhaDeApp() {
  return variavelObrigatoria("SMTP_SENHA").replace(/\s/g, "");
}

export function criarTransporteSmtp(): TransporteEmail {
  return {
    async enviar(mensagem) {
      const remetente = variavelObrigatoria("SMTP_USUARIO");

      const transportador = nodemailer.createTransport({
        host: process.env.SMTP_HOST ?? "smtp.gmail.com",
        port: Number(process.env.SMTP_PORTA ?? 587),
        secure: false,
        auth: {
          user: remetente,
          pass: senhaDeApp(),
        },
      });

      await transportador.sendMail({
        from: `OFM Engenharia <${remetente}>`,
        to: mensagem.para,
        subject: mensagem.assunto,
        text: mensagem.corpo,
        replyTo: mensagem.responderPara,
      });
    },
  };
}
