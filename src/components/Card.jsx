//#region ------------------------ [ Biblioteca ] ------------------------;
import React from "react";
import {styled} from "styled-components";
import { Button } from "./Button";
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
  padding: 24px;
  // Diseño:
  width: auto;
  min-width: 50px;
  aspect-ratio: 0.9 / 1; 
  background-color: #1A202C;
  border-radius: .5rem;

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
        <Button standOut={true} href={href} onClick={onClick}>
          {button}
        </Button>
      }
    </Container>
  );
}
//#endregion