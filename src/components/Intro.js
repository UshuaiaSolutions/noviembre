import React from "react";
import { Corte } from "../ui/Cortes";
import { Container, ContainerTexto, Imagen, Texto, Titulo } from "../ui/Intro";

function Intro() {
  return (
    <Container>
      <Titulo>¡Hola, Noviembre!</Titulo>
      <ContainerTexto>
        <Texto>
          Casi navidad, casi fin de año…
          <Corte /> Llegó un nuevo Newsletter del #USHTeam
          <Corte /> con muchísimas novedades y anuncios.
        </Texto>
        <Imagen
          src="https://ushmultimedia.blob.core.windows.net/ushnewsletter/Meme%20Navidad%201.png"
          alt="meme"
        />
      </ContainerTexto>
    </Container>
  );
}

export default Intro;
