//#region ------------------------ [ Biblioteca ] ------------------------;
import React, { Children } from "react";
import {styled} from "styled-components";
//#endregion
//#region ------------------------ [ Styled ] ------------------------;
const Container = styled.a`//* ------ [ Styled - Link de botones ]: 
  // Disposicion:
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem; 
  margin-bottom: 1rem;
  margin:1rem;
  
  div{ 
    display: flex;
    flex-direction: row;
    gap: 1rem;
    max-height: 500px;

    article{
      max-width: 500px;
    }
  }
`;
//#endregion
//#region ------------------------ [ Componentes ] ------------------------;
export const SectionServices = ({children, title, className = ""}) => {
  //* ------ [ HTML ] ------:
  return(
    <Container className={className} > 
      <h3 className="sub">{title}</h3>
      <div>
        {children}
      </div>
    </Container>
  );
  }
//#endregion