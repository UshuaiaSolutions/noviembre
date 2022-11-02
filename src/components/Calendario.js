import React from "react";
import {
  Container,
  ContainerFecha,
  ContainerPrimero,
  Descripcion,
  Texto,
  Titulo,
} from "../ui/Calendario";
import { Corte } from "../ui/Cortes";

function Calendario() {
  return (
    <Container>
      <Titulo>USH CUMPLEAÑOS</Titulo>
      <Descripcion>
        En noviembre tenemos muchos cumpleaños,
        <Corte /> así que vayan pensando los regalos para:
      </Descripcion>
      <ContainerPrimero>
        <ContainerFecha>
          <Texto>Juliana Biasin</Texto>
          <Texto>3/11</Texto>
        </ContainerFecha>
        <ContainerFecha>
          <Texto>Rocío Flores</Texto>
          <Texto>3/11</Texto>
        </ContainerFecha>
        <ContainerFecha>
          <Texto>Julieta Cortopassi</Texto>
          <Texto>11/11</Texto>
        </ContainerFecha>
      </ContainerPrimero>
      <ContainerPrimero>
        <ContainerFecha>
          <Texto>Ana Lentini</Texto>
          <Texto>14/11</Texto>
        </ContainerFecha>
        <ContainerFecha>
          <Texto>Martín Saavedra</Texto>
          <Texto>15/11</Texto>
        </ContainerFecha>
        <ContainerFecha>
          <Texto>Sebastián Hadjidimitris</Texto>
          <Texto>22/11</Texto>
        </ContainerFecha>
      </ContainerPrimero>
    </Container>
  );
}

export default Calendario;
