//#region ------------------------ [ Biblioteca ] ------------------------;
import React from "react";
import {styled} from "styled-components";
//!import {Icon}  from "astro-icon/components";
//#endregion
//#region ------------------------ [ Styled ] ------------------------;
// Estilos para el contenedor principal del nav
const Nav = styled.nav` //* ------ [ Styled - Navegador ]:
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Promotion = styled.div` //* ------ [ Styled - Promocion ]:
  //Disposicion
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 1rem; 
  //Diseño
  color: white;
  //Texto
  text-align: center;
  font-size: 0.875rem; 
  font-weight: 600; 
`;
const Container = styled.div`//* ------ [ Styled - Contenedor ]:
  //Disposicion
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  flex-wrap: wrap;
  gap: 0.5rem;
  //Diseño:
  border: 1px solid  #1f2937;
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
const Title = styled.a` //* ------ [ Styled - Titulo ]:
  //Texto
  font-size: 1.875rem; //
  font-weight: bold; 
  text-decoration: none;
  //Diseño:
  cursor: pointer;
  background: linear-gradient(90deg, #6ec1fa,  #3a7bb8);
  background-position: 100%; 
  background-size: 200%;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  //Animacion:
  transition: color 0.3s ease-in-out;
  &:focus,&:hover {
    background: linear-gradient(90deg, #2b86c5, #1e3c72);
    background-clip: text;
  }
`;
export const NavButtons = styled.button`//* ------ [ Styled - Lista de Botones ]:
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 1rem;

    @media (max-width: 825px) {
      flex-grow: 1;
      a{flex-grow: 1;}
  }
`;
export const ButtonLink = styled.a`//* ------ [ Styled - Link de botones ]: 
  //Disposicion:
  display: flex;
  align-items: center;
  gap: 0.5rem; 
  padding: 0.5rem 1.25rem;
  //Diseño:
  cursor: pointer;
  color: white;
  border-radius: 0.375rem; 
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); 
  background: ${({ standOut }) => standOut
    ? 'linear-gradient(90deg, #6ec1fa,  #3a7bb8)'
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
      ? 'linear-gradient(90deg, #2b86c5, #1e3c72)'
      : 'linear-gradient(90deg, #6b7280, #4b5563)'
    };
  }
`;
export const MenuToggle = styled.button`//* ------ [ Styled - Boton de Menu ]:
  //Disposicion:
  display: flex;
  justify-content: start;
  align-items: center;
  //Texto
  color: white;
  //Diseño:
  cursor: pointer;
  outline: none;
  background: none;
  border: none;
  &:focus {outline: none; }
  @media (min-width: 1245px) {
    display: none; 
  }
  
`;
export const MobileMenu = styled.div`//* ------ [ Styled - Menu de Dispositivo Movil ]:
  //Disposicion:
  display: flex;
  justify-content: start;
  align-items: stretch;
  flex-direction: column;
  position: absolute;
  gap: 1rem;
  //Diseño:
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

  div.top{
    display: flex;
    flex-direction: column;
    gap: 5rem;
    padding: 0.5rem 1rem; 
  }

  span{
    background-color: white;
    width: 96%;
    height: .5px;
    margin: 0 auto; 
  }
`;
//#endregion 
//#region ------------------------ [ Componentes ] ------------------------;
export const Navbar = () => {
  //* ------ [ Lista de Items ] ------:
  const navItems = [
    { href: '/', label: 'Inicio' },
    { href: '/portfolio', label: 'Portafolio' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/galeria', label: 'Galería'},
    { href: '/contactanos', label: 'Contacto'},
  ];
  //* ------ [ Lista de Botones ] ------:
  const buttonData = [
    {href: '/cotizar',      /*icon: <Icon icon="mdi:fire" className="w-5 h-5" />,*/                 label: 'Cotiza Ahora', standOut: true },
    {href: '/en/portfolio', /*icon: <Icon icon="ph:globe-hemisphere-west" className="w-5 h-5" />,*/ label: 'Portfolio EN', standOut: false },
    {href: '#',             /*icon: <Icon icon="mdi:key" className="w-5 h-5" />,*/                  label: 'Acceder', standOut: false},
  ];
  //* ------ [ Control del estado del Menu] ------:
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  //* ------ [ HTML ] ------:
  return(
  <Nav>
    {/*------ Promoción destacada con ancho completo y separación ------*/}
    <Promotion>
      {/* <Icon name="mdi:rocket-launch" class="inline-block w-4 h-4 align-middle mr-1" /> */}
      ¡Descuento Exclusivo! ZFS10 en TECT HOST – Aprovéchalo ahora
      {/* <Icon name="mdi:fire" class="inline-block w-4 h-4 align-middle ml-1" /> */}
    </Promotion>
    {/*------ Navegador ------*/}
    <Container>
      <div className="left">
        {/*------ Boton de MeNU ------*/}
        <MenuToggle id="menu-toggle" onClick={toggleMenu}>
          {/* <Icon icon="mdi:menu" className="w-6 h-6" /> */}
          Menu
        </MenuToggle>
        {/*------ Titulo ------*/}
        <Title href="/">ZenForge Studios</Title>
        </div>
      {/*------ Menú de navegación ------*/}
      <NavList>
        {navItems.map((item, index, ) => (
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
          <ButtonLink
            key={index}
            href={href}
            standOut={standOut}
            // icon={icon}
          >
            {label}
          </ButtonLink>
        ))}
      </NavButtons>
    </Container>
    {/*------ Menú de Despegable ------*/}
    {/* {isMenuOpen && ( */}
      
      <MobileMenu id="mobile-menu" isOp={isMenuOpen}>

        <div className="top">
          <Promotion style={{justifyContent: 'flex-start'}}>
            {/* <Icon name="mdi:rocket-launch" class="inline-block w-4 h-4 align-middle mr-1" /> */}
            ¡Descuento Exclusivo! ZFS10 en TECT HOST – Aprovéchalo ahora
            {/* <Icon name="mdi:fire" class="inline-block w-4 h-4 align-middle ml-1" /> */}
          </Promotion>
          <Title href="/">ZenForge Studios</Title>
          <MenuToggle id="menu-toggle" onClick={toggleMenu}>
            {/* <Icon icon="mdi:menu" className="w-6 h-6" /> */}
            Menu
            
          </MenuToggle>
          
        </div>
        <span />
        <ul>
          {navItems.map((item, index, ) => (
          <li key={index}>
            <a href={item.href}>
              {item.label}
            </a>
          </li>
          ))}
        </ul>
      </MobileMenu>
    {/* )} */}
  </Nav>
  );
  }
//#endregion