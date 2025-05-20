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
  margin: 1rem;

  div{ 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 2rem;
    flex-wrap: wrap;

    article{
      max-height: 450px;
      
    }

    @media (max-width: 920px) {
      flex-direction: column;
      article{
        max-width: 350px;
      }
    }
  }
`;



//#endregion
//#region ------------------------ [ Componentes ] ------------------------;
export const SectionCard = ({children, title = "", className = ""}) => {
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