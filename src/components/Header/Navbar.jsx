//#region ------------------------ [ Biblioteca ] ------------------------;
import React from "react";
import {styled} from "styled-components";
import {Button} from "../Button";
/*import {Icon}  from "astro-icon/components";*/ //! ⚠️ Importación Fallida ⚠️
//#endregion
//#region ------------------------ [ Styled ] ------------------------;
const Container = styled.nav`//* ------ [ Styled - Contenedor ]:
  //Disposicion
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  flex-wrap: wrap;
  gap: 0.5rem;
  //Diseño:
  border: .0175rem solid  #1f2937;
  border-left: none;
  border-right: none;

  div.left{ //* ------ [ Styled - Contenedor Izquierdo ]:
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: .5rem;
    @media (max-width: 825px) {
      flex-grow: 1;
    }
  }

`;
const NavList = styled.ul` //* ------ [ Styled - Lista ]:
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 1rem;

  @media (max-width: 1245px) {
    display: none; 
  }

  li{a{ //* ------ [ Styled - Items ]:
    //Disposicion
    display: flex;
    padding: 0.5rem 1rem;
    position: relative;
    //Texto
    font-size: 1.125rem;
    font-weight: 500; 
    //Diseño:
    cursor: pointer;
    border: none;
    filter: brightness(1.2);
    background: linear-gradient(90deg, #ffffff, #dddddd, #bbbbbb);
    background-position: 100%; 
    background-size: 200%;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    //Animacion:
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: color;
    //#region //* ------ [ Animacion al Pasar el mause por encima ]:
    &:focus,&:hover {
      background: linear-gradient(90deg, #6ec1fa, #4aa0e0, #3a7bb8); 
      background-clip: text;
      color: #fff;
    }

    &:focus::after, &:hover::after {
      width: 100%;
      left: 0%;
    }

    &::after {
      content: '';
      pointer-events: none;
      bottom: -2px;
      left: 50%;
      position: absolute;
      width: 0%;
      height: 2px;
      background-color: #fff;
      transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
      transition-duration: 400ms;
      transition-property: width, left;
    }
    //#endregion
  }}

`;
const NavButtons = styled.button`//* ------ [ Styled - Lista de Botones ]:
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 1rem;

  @media (max-width: 1370px) {
    flex-grow: 1;
  }
  @media (max-width: 1245px) {
    flex-grow: 0;
  }
  @media (max-width: 825px) {
    flex-grow: 1;
  }
`;
export const MenuToggle = styled.button`//* ------ [ Styled - Boton de Menu ]:
  // Disposicion:
  display: flex;
  justify-content: start;
  align-items: center;
  //Texto
  color: white;
  // Diseño:
  cursor: pointer;
  outline: none;
  background: none;
  border: none;
  &:focus {outline: none; }
  @media (min-width: 1245px) {
    display: none; 
  }
`;
//#endregion 
//#region ------------------------ [ Componentes ] ------------------------;
export const Navbar = ({
  Items, 
  buttonData, 
  isMenuOpen,
  toggleMenu = () => {console.log("No se ha definido la funcion toggleMenu")} 
}) => {
  //* ------ [ HTML ] ------:
  return(
    <Container>
      <div className="left">
        {/*------ Boton de MeNU ------*/}
        <MenuToggle id="menu-toggle" onClick={toggleMenu}>
          {/* <Icon icon="mdi:menu" className="w-6 h-6" /> //! ⚠️ Importación Fallida ⚠️ */} 
          Menu
        </MenuToggle>
        {/*------ Titulo ------*/}
        <h3><a href="/">ZenForge Studios</a></h3>
        </div>
      {/*------ Menú de navegación ------*/}
      <NavList>
        {Items.map((item, index, ) => (
          <li key={index}>
            <a href={item.href}>
              {item.label}
            </a>
          </li>
        ))}
      </NavList>
      {/*------ Botones ------*/}
      <NavButtons>
        {buttonData.map(({ href, /*icon,*/ label, standOut }, index) => (
          <Button
            key={index}
            href={href}
            standOut={standOut}
          >
            {/* {icon} //! ⚠️ Importación Fallida ⚠️ */ }
            {label}
          </Button>
        ))}
      </NavButtons>
    </Container>
  );
  }
//#endregion