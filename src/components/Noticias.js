import React from "react";
import { Corte } from "../ui/Cortes";
import {
  Container,
  Subtitulo,
  Texto,
  Titulo,
  SeccionTres,
  Seccion,
} from "../ui/Noticias";

function Noticias() {
  return (
    <Container>
      <Titulo>USH NOTICIAS</Titulo>
      <Seccion className="uno">
        <Subtitulo>Pasamos la auditoría anual de ISO 17100</Subtitulo>
        <Texto>
          Con mucho orgullo les contamos que nos fue bien en la auditoría de
          seguimiento
          <Corte /> de la norma ISO 17100. Enorme trabajo de Agus DP, Pame, Juli
          Cortopassi,
          <Corte /> Vale Molinari, Agus Omacini y todo el team 👏
        </Texto>
      </Seccion>
      <Seccion className="dos">
        <Subtitulo>
          😁 Festejo atrasado del Día de la Traducción en Europa
        </Subtitulo>
        <Texto>
          Ester, Clara y Susi festejaron el #DíaDeLaTraducción hace unas
          semanas.
          <Corte /> Hicieron una ruta por el barrio gótico de Barcelona, donde
          les contaron
          <Corte /> anécdotas curiosas de la ciudad. Culminaron la ruta tomando
          unos tragos
          <Corte /> en la terraza de un hotel cerca de Les Rambles 🍻
        </Texto>
      </Seccion>
      <SeccionTres>
        <Subtitulo>Agus es nuestra nueva CEO</Subtitulo>
        <Texto>
          Con más de 20 años de experiencia en el equipo, Agus Di Pratula
          <Corte /> se convirtió en la CEO de USH 👏 Un merecido reconocimiento
          <Corte /> al compromiso, cariño y esfuerzo de estos años 🥰 Congrats!
        </Texto>
      </SeccionTres>
      <Seccion className="cuatro">
        <Subtitulo>Buscamos nuevos talentos en Europa</Subtitulo>
        <Texto>
          El USHTeam europeo está buscando candidatos/as entre los y las
          estudiantes
          <Corte /> del Máster de Tradumática para hacer prácticas en Ushuaia y
          aprovechar el training
          <Corte /> que se va a hacer de SAP para formarlos para la cuenta. Por
          ahora estamos revisando
          <Corte /> curriculums y haciendo algunos tests de traducción.
        </Texto>
      </Seccion>
      <Seccion className="cinco">
        <Subtitulo>✨ Se vienen cositas ✨</Subtitulo>
        <Texto>
          Tenemos algunas novedades para noviembre. El primer jueves del mes es
          el
          <Corte /> Día del Project Management, así que vayan preparando sus
          saluditos para <Corte /> los y las #TeamLeaders. Además, si todo sale
          bien, en noviembre salimos <Corte /> con la nueva web de USH.
        </Texto>
        <Texto>
          Por otro lado, puede ser que incorporemos nuevos clientes/cuentas
          europeas <Corte /> pero, como nos dijo Ester que se dice por allá, "no
          diguis blat fins que no el <Corte /> tinguis al sac i ben lligat" 🤭
        </Texto>
      </Seccion>
    </Container>
  );
}

export default Noticias;
