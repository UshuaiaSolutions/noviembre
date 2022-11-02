import styled from "styled-components";
import { colors } from "./theme";

export const Container = styled.div`
  color: ${colors.gris};
  display: flex;
  flex-direction: column;
  padding: 50px 0;
  align-items: center;
`;

export const Logo = styled.img`
  height: 80px;
  width: 80px;
`;

export const Saludo = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 156.5%;
  text-align: center;
  letter-spacing: -0.015em;
  margin-bottom: 40px;
`;

export const Agradecimiento = styled.span`
  font-size: 14px;
  font-weight: 800;
  line-height: 17px;
  letter-spacing: -0.015em;
  margin-bottom: 20px;
`;
