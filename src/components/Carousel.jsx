//#region ------------------------ [ Biblioteca ] ------------------------;
import { useState } from "react";
import styled from "styled-components";
import { Card } from "./Card";
import { ActionButton } from "./Button/ActionButton";
//#endregion
//#region ------------------------ [ Styled ] ------------------------;
const Container = styled.div` //* ------ [ Styled - Contendor Principal ] ------:
  // Disposicion:
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 64rem;
  padding-bottom:  2rem;
  // Diseño:
  overflow: hidden;
`;
const CarouselInner = styled.div` //* ------ [ Styled - Contendor Interno ] ------:
  // Disposicion:
  display: flex;
  width: 100%;
  // Animacion de Transicion:
  transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${({ reviewIndex }) => `translateX(-${reviewIndex * 100}%)`};
`;
const ItemsWrapper = styled.div` //* ------ [ Styled - Contendor de Items ] ------:
  // Disposicion:
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 1rem;
  width: 100%;
  flex-shrink: 0;
  padding: 2rem;
  // Elementos hijos:
  article {
    width: 50%;
    min-width: 0;
    @media (max-width: 920px) {
      width: 100%;
    }
  }
`;
const Controls = styled.div` //* ------ [ Styled - Contendor de Controles ] ------:
  // Disposicion:
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  // Elementos hijos:
  div.button {
    border-radius: 4rem;
  }
`;
//#endregion
//#region ------------------------ [ Componentes ] ------------------------;
export const Carousel = ({ slides }) => {
  //* ------ [ Estado para el indice activo ] ------:
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(window.innerWidth <= 920 ? 1 : 2);

  useState(() => {
    const handleResize = () => {
      setCardsPerSlide(window.innerWidth <= 920 ? 1 : 2);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //* ------ [ Agrupacion de Slides ] ------:
  const flatSlides = slides.flat();
  const groupedSlides = [];
  for (let i = 0; i < flatSlides.length; i += cardsPerSlide) {
    groupedSlides.push(flatSlides.slice(i, i + cardsPerSlide));
  }

  //* ------ [ Control de Navegacion ] ------:
  const totalGroups = groupedSlides.length;

  const prev = () =>
    setActiveIndex((prev) => (prev === 0 ? totalGroups - 1 : prev - 1));
  const next = () =>
    setActiveIndex((prev) => (prev === totalGroups - 1 ? 0 : prev + 1));

  //* ------ [ HTML ] ------:
  return (
    <Container>
      {/* --- [ Contenedor de Items ] --- */}
      <CarouselInner reviewIndex={activeIndex}>
        {groupedSlides.map((group, idx) => (
          <ItemsWrapper key={idx}>
            {group.map((item, subIdx) => (
              <Card
                key={item.title || subIdx}
                src={item.img}
                title={item.title}
                desc={item.desc}
                href={item.link}
                button="</> Inpercionar"
              />
            ))}
          </ItemsWrapper>
        ))}
      </CarouselInner>
      {/* --- [ Controles ] --- */}
      <Controls>
        <ActionButton standOut={true} onClick={prev} className="button"> Anterior </ActionButton>
        <ActionButton standOut={true} onClick={next} className="button"> Siguiente </ActionButton>
      </Controls>
    </Container>
  );
};