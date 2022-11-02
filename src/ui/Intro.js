import styled from "styled-components";
import { colors } from "./theme";

export const Container = styled.div`
  color: ${colors.gris};
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ContainerTexto = styled.div`
  padding: 0 80px 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Titulo = styled.h1`
  font-size: 32px;
  font-weight: 800;
  line-height: 36px;
  letter-spacing: 0em;
  margin: 0 auto 40px;
`;

export const Texto = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 23px;
  letter-spacing: -0.015em;
`;

export const Imagen = styled.img`
  height: 162px;
  width: 215px;
`;
