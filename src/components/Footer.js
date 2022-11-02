import React from "react";
import { Corte } from "../ui/Cortes";
import { Agradecimiento, Container, Logo, Saludo } from "../ui/Footer";

const Footer = () => {
  return (
    <Container>
      <Agradecimiento>¡Gracias por leer el newsletter!</Agradecimiento>
      <Saludo>
        Pueden mandarnos comentarios, propuestas, observaciones,
        <Corte /> quejas o lo que quieran para seguir mejorando :)
      </Saludo>
      <Logo src="https://i.postimg.cc/kG3hQd2m/Group.png" alt="Ushuaia" />
    </Container>
  );
};

export default Footer;
