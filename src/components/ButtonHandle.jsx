//#region ------------------------ [ Biblioteca ] ------------------------;
import React, { Children } from "react";
import {styled} from "styled-components";
//#endregion
//#region ------------------------ [ Styled ] ------------------------;
const Container = styled.button`//* ------ [ Styled - Link de botones ]: 
  // Disposicion:
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .5rem; 
  flex-grow: 1;
  padding: 12px 24px;
  // Diseño:
  cursor: pointer;
  color: white;
  border-radius: .5rem; 
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); 
  background: ${({ standOut }) => standOut
    ? "linear-gradient(90deg, #68b8ee,  #3B82F6)"
    : 'linear-gradient(90deg, #4b5563, #374151)'
  };
  background-position: 100%; 
  background-size: 200%;
  //Texto
  font-weight: 600; /* Equivalente a font-semibold */
  text-decoration: none;
  //Animacion
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background: ${({ standOut }) => standOut
      ? "linear-gradient(90deg, #3B82F6, #214b98)"
      : 'linear-gradient(90deg, #6b7280, #4b5563)'
    };
  }
`;
//#endregion
//#region ------------------------ [ Componentes ] ------------------------;
export const ButtonHandle = ({children, standOut, onClick, className = ""}) => {
  //* ------ [ HTML ] ------:
  return(
    <Container onClick={onClick} standOut={standOut} className={className} > 
      {children}
    </Container>
  );
  }
//#endregion