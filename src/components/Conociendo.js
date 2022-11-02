import React from "react";
import { Container, Descripcion, Titulo, Item } from "../ui/Conociendo";
import { Corte } from "../ui/Cortes";

function Conociendo() {
  return (
    <Container>
      <Titulo>Conociendo al USHTeam</Titulo>
      <Descripcion>
        Hoy les presentamos a Clara Hidalgo Batlló, Team Leader
        <Corte /> Associate en Europa
      </Descripcion>
      <Item>
        - Una canción para cantar en la ducha:{" "}
        <span className="it">
          Rolling in the deep de Adele (a pleno pulmón, si no no es lo mismo)
        </span>
      </Item>
      <Item>
        - Un plato de comida:{" "}
        <span className="it">pasta (o pizza), siempre</span>
      </Item>
      <Item>
        - Una película: <span className="it">Eat, pray, love</span>
      </Item>
      <Item>- Un emoji: 😎</Item>
      <Item className="mb">- Un meme que te represente: </Item>
      <Item>
        - ¿Cuál era tu juego favorito de niña?:{" "}
        <span className="it">Jugar a ser profesora</span>
      </Item>
    </Container>
  );
}

export default Conociendo;
