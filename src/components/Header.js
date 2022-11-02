import React from "react";
import styled from "styled-components";
import { colors } from "../ui/theme";

const StyledBackground = styled.div`
  background-image: url(https://i.postimg.cc/59TC1tRY/Header.png);
  width: 100%;
  height: calc(280px - 75px);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 75px;
  font-size: 18px;
  font-weight: 800;
  line-height: 20px;
  letter-spacing: 0.575em;
  color: ${colors.crema};
`;

const Header = () => {
  return (
    <StyledBackground>
      <span>newsletter</span>
    </StyledBackground>
  );
};

export default Header;
