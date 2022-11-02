import styled from "styled-components";
import { colors } from "./theme";

export const Container = styled.div`
  background-image: url(https://ushmultimedia.blob.core.windows.net/ushnewsletter/USHnoticiasbkgNOV2022.png);
  height: calc(1478.5px - 40px);
  width: 700px;
  color: ${colors.gris};
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const Titulo = styled.h2`
  font-size: 30px;
  font-weight: 900;
  line-height: 35px;
  letter-spacing: 0.045em;
  color: rgba(120, 57, 196, 1);
  margin: 0;
  text-align: center;
`;

export const Subtitulo = styled.h3`
  font-size: 18px;
  font-weight: 800;
  line-height: 27px;
  letter-spacing: 0em;
`;

export const Texto = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.015em;
`;

export const Seccion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &.uno {
    margin: 40px 0 30px;
  }

  &.dos {
    margin: 40px 0 280px;
  }

  &.cuatro {
    margin: 40px 0;
  }

  &.cinco {
    margin: 40px 0 0;
  }
`;

export const SeccionTres = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0 60px;
  padding-left: 40px;
`;
