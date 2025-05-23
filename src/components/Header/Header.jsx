//#region ------------------------ [ Biblioteca ] ------------------------;
import React from "react";
import {styled} from "styled-components";
import {Promotion} from "./Promotion";
import { DropdownMenu } from "./DropdownMenu";
import { Navbar } from "./Navbar";
/*import {Icon}  from "astro-icon/components";*/ //! ⚠️ Importación Fallida ⚠️
//#endregion
//#region ------------------------ [ Styled ] ------------------------;
const Container = styled.header` //* ------ [ Styled - Navegador ]:
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: ${({ scrolled }) => (scrolled ? "#111827" : "transparent")};
  transition: background 0.1s;
`;
//#endregion 
//#region ------------------------ [ Componentes ] ------------------------;
export const Header = () => {
  //* ------ [ Lista de Items ] ------:
  const navItems = [
    { href: '/', label: 'Inicio' },
    { href: '/portfolio', label: 'Portafolio' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/galeria', label: 'Galería'},
    { href: '/contactanos', label: 'Contacto'},
  ];
  //* ------ [ Lista de Botones ] ------:
  const NavButtons = [
    {href: '/cotizar',      /*icon: <Icon icon="mdi:fire" className="w-5 h-5" />,*/                 label: 'Cotiza Ahora', standOut: true },  
    {href: '/en/portfolio', /*icon: <Icon icon="ph:globe-hemisphere-west" className="w-5 h-5" />,*/ label: 'Portfolio EN', standOut: false }, 
  ]; //! ⚠️ Importación Fallida ⚠️
  //* ------ [ Control del estado del Menu] ------:
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  //* ------ [ Estado para scrolled ] ------:
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  //* ------ [ HTML ] ------:
  return(
    <Container scrolled={scrolled}>
      <Promotion />
      <Navbar Items={navItems} buttonData={NavButtons} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
      <DropdownMenu Items={navItems} isOp={isMenuOpen} toggleMenu={toggleMenu}/>
    </Container>
  );
}
//#endregion