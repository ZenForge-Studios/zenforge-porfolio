//#region ------------------------ [ Biblioteca ] ------------------------;
import React from "react";
import {styled} from "styled-components";
import {Promotion} from "./Promotion";
import {MenuToggle} from "./Navbar";
/*import {Icon}  from "astro-icon/components";*/ //! ⚠️ Importación Fallida ⚠️
//#endregion
//#region ------------------------ [ Styled ] ------------------------;
export const Container = styled.aside`//* ------ [ Styled - Menu de Dispositivo Movil ]:
  // Disposicion:
  display: flex;
  justify-content: start;
  align-items: stretch;
  flex-direction: column;
  position: absolute;
  gap: 1rem;
  // Diseño:
  width: 80%;
  height: 100vh;
  background-color: #1a202c; 
  z-index: 9999;

  // Animación de deslizamiento:
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOp }) => isOp
    ? 'translateX(0)'
    : 'translateX(-100%)'
  };
  
  @media (mIN-width: 1245px) {
    display: none; 
  }

  //#region //* ------ [ Estilos de hijos ] ------;
  ul{//* ------ [ Styled - Lista del Menu ]:
    //Disposicion:
    display: flex;
    flex-direction: column;
    gap: 1rem; 
    //Texto:
    font-size: 1.125rem; 
    font-weight: 500; 
    li{a{ //* ------ [ Styled - Items del Menu]:
      //Disposicion:
      display: block;
      padding: 0.5rem 1rem; 
      //Texto:
      text-decoration: none;
      color: inherit;
      //Animacion:
      &:hover {
        background-color: #2d3748; 
      }
    }}
  }

  div.top{//* ------ [ Styled - Divicion Superior ]:
    display: flex;
    flex-direction: column;
    gap: 5rem;
    padding: 0.5rem 1rem; 
  }

  span{ //* ------ [ Styled - Linea de Separacion]:
    background-color: white;
    width: 96%;
    height: .5px;
    margin: 0 auto; 
  }
  //#endregion
`;
//#endregion 
//#region ------------------------ [ Componentes ] ------------------------;
export const DropdownMenu = ({Items, isOp, toggleMenu}) => {  
  //* ------ [ HTML ] ------:
  return(
    <Container id="mobile-menu" isOp={isOp}>
      {/* ------ [Parte Superior] ------ */}
      <div className="top">
        <Promotion justifyContent={'flex-start'} />
        <h3><a href="/">ZenForge Studios</a></h3>
        <MenuToggle id="menu-toggle" onClick={toggleMenu}>
          {/* <Icon icon="mdi:menu" className="w-6 h-6" />  //! ⚠️ Importación Fallida ⚠️ */}
          Menu
        </MenuToggle>
      </div>
      <span />
      {/* ------ [Lista] ------ */}
      <ul>
        {Items.map((item, index, ) => (
        <li key={index}>
          <a href={item.href}>
            {item.label}
          </a>
        </li>
        ))}
      </ul>
    </Container>
  );
  }
//#endregion