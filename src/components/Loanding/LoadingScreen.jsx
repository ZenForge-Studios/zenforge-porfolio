import React from "react";
import styled from "styled-components";

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: red;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  font-size: 2rem;
  color: #333;
`;

export const LoadingScreen = () => (
  <LoadingContainer>
    <span>Cargando...</span>
  </LoadingContainer>
);