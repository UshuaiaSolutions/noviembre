import styled from "styled-components";
import { colors } from "./theme";

export const Container = styled.div`
  background-image: url(https://ushmultimedia.blob.core.windows.net/ushnewsletter/USH%20cumplea%C3%B1osNOV2022.png);
  color: ${colors.gris};
  height: calc(369px - 60px);
  width: 580px;
  margin: 0 auto;
  padding-top: 60px;
`;

export const Texto = styled.span`
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.015em;
  text-align: center;
`;

export const Titulo = styled.h2`
  font-size: 26px;
  font-weight: 800;
  line-height: 24px;
  letter-spacing: -0.015em;
  text-align: center;
  margin: 0 0 10px;
`;

export const Descripcion = styled.p`
  font-size: 15px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.015em;
  text-align: center;
`;

export const ContainerPrimero = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 70px auto 60px;
`;

export const ContainerFecha = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.33333333%;
`;
