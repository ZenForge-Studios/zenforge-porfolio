//#region ------------------------ [ Biblioteca ] ------------------------;
import {styled} from "styled-components";
//#endregion
//#region ------------------------ [ Styled ] ------------------------;
export const ButtonStylesProvider = styled.a`//* ------ [ Styled - Contenedor principal ]: 
  // Disposicion:
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  gap: 0.5rem; 
  padding: 12px 24px;
  // Diseño:
  cursor: pointer;
  border-radius: .5rem; 
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.18); 
  background: ${({ standOut }) => standOut
    ? "linear-gradient(90deg, #68b8ee,  #3B82F6)"
    : 'linear-gradient(90deg, #4b5563, #374151)'
  };
  background-position: 100%; 
  background-size: 200%;
  // Texto:
  font-weight: 600; 
  text-decoration: none;
  // Animacion:
  transition: background .05s cubic-bezier(0.4,0,0.2,1), 
              transform .05s cubic-bezier(0.4,0,0.2,1), 
              box-shadow .08s cubic-bezier(0.4,0,0.2,1),
              filter .08s cubic-bezier(0.4,0,0.2,1);
  // Efecto cuando se hace click
  &:hover {
    transform: scale(1.03);
    box-shadow: ${({ standOut }) =>
      standOut
        ? "0px 6px 18px 2px rgba(59, 130, 246, 0.18), 0px 6px 18px rgba(0, 0, 0, 0.15)"
        : "0px 6px 18px 2px rgba(75, 85, 99, 0.18), 0px 6px 18px rgba(0, 0, 0, 0.15)"
    };
    filter: ${({ standOut }) =>
      standOut
        ? "drop-shadow(0 0 6px #3B82F6) brightness(1.05)"
        : "drop-shadow(0 0 6px #4b5563) brightness(1.05)"
    };
  }
`;
//#endregion