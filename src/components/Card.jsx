//#region ------------------------ [ Biblioteca ] ------------------------;
import React from "react";
import {styled} from "styled-components";
import { LinkButton } from "./Button/LinkButton";
//#endregion
//#region ------------------------ [ Styled ] ------------------------;
const Container = styled.article`
  // Disposicion:
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
  gap: 1rem;
  padding: 1.5rem;
  // Diseño:
  width: auto;
  min-width: 50px;
  aspect-ratio: 0.9 / 1; 
  background-color: #1A202C;
  border-radius: .5rem;
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);

  // ELementos Hijos
  p{
    display: flex;
    flex-grow: 100;
  }

  img{
    display: flex;
    height: 55%;
    object-fit: fill;
    border-radius: .75rem;
  }

  // Animacion
  transition: transform 0.2s cubic-bezier(0.4,0,0.2,1);
  &:hover {
    transform: scale(1.03);
  }

`

//#endregion
//#region ------------------------ [ Componentes ] ------------------------;
export const Card = ({
  src = "",
  alt = "",
  title = "Titulo",
  desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aliquid laborum ducimus exercitationem quidem qui est quo ipsum veritatis, magnam itaque quia excepturi nesciunt architecto, atque reprehenderit nihil mollitia cumque?",
  button = "Click",
  href = "#",
  OnlyButton = true,
  onClick = () => {console.log("Click en el boton");},
}) => {

  //* ------ [ HTML ] ------:
  return(
    <Container > 
      <img src={src} alt={alt} />
      <h4>{title}</h4>
      <p>{desc}</p>
      {OnlyButton &&      
        <LinkButton standOut={true} href={href} onClick={onClick}>
          {button}
        </LinkButton>
      }
    </Container>
  );
}
//#endregion