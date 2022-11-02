import styled from "styled-components";
import { colors } from "./theme";

export const Container = styled.div`
  background-image: url(https://ushmultimedia.blob.core.windows.net/ushnewsletter/Conociendo%20al%20USH%20TeamNOV2022.png);
  height: calc(531px - 65px);
  width: calc(580px - 80px);
  display: flex;
  flex-direction: column;
  margin: 0 auto 50px;
  color: ${colors.gris};
  padding: 65px 40px 0;
`;

export const Titulo = styled.h2`
  font-size: 20px;
  font-weight: 800;
  line-height: 18px;
  letter-spacing: -0.015em;
`;

export const Descripcion = styled.p`
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: -0.015em;
`;

export const Item = styled.p`
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: -0.015em;

  & .it {
    font-size: 12px;
    font-style: italic;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: -0.015em;
  }

  &.mb {
    margin-bottom: 230px;
  }
`;
