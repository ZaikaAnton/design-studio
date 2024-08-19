import React from "react";
import styled from "styled-components";

interface BackgroundProps {
  children: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
  return <BackgroundContainer>{children}</BackgroundContainer>;
};

export default Background;

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: url("/background/background.jpeg") no-repeat center center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1; /* Чтобы фон был за другими элементами */
`;
