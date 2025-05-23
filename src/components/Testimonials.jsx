//#region ------------------------ [ Biblioteca ] ------------------------;
import React, { useState } from "react";
import {styled} from "styled-components";
import { ActionButton } from "./Button/ActionButton";
// import { MdArrowLeft, MdArrowRight } from "react-icons/md";
//#endregion
//#region ------------------------ [ Styled ] ------------------------;
const Container = styled.section`//* ------ [ Styled - Contenedor Principal ]:
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CarouselWrapper = styled.div`//* ------ [ Styled -  Carrusel ]:
  // Disposition: 
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  // Diseño: 
  max-width: 64rem;
  overflow: hidden;
  padding-bottom: 2rem;
`;
const CarouselInner = styled.div`//* ------ [ Styled - Anima Carrusel ]:
  display: flex;
  transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${({ reviewIndex }) => `translateX(-${reviewIndex * 100}%)`};
`;
const ReviewsGroup = styled.div` //* ------ [ Styled - Grupo de Reseñas ]:
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  width: 100%;
  flex-shrink: 0;
  margin: 0 auto;
  padding: 1.5rem;
  background: #1f2937;
  border-radius: .75rem;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -4px rgba(0,0,0,.1);
  text-align: center;
  @media (min-width: 920px) {
    grid-template-columns: 1fr 1fr;
  }
`;
const ReviewCard = styled.div` //* ------ [ Styled - Reseña ]:
  display: flex;
  align-items: center;
  padding: 1rem;
  background: #111827;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,.1);
`;
const Avatar = styled.img` //* ------ [ Styled - Avatar ]:
  width: 4rem;
  height: 4rem;
  border-radius: 9999px;
  margin-right: 1rem;
`;
const ReviewContent = styled.div` //* ------ [ Styled - Contenido de Reseña ]:
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
`;
const ReviewService = styled.h4` //* ------ [ Styled - Servicio ]:
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  background:  linear-gradient(90deg, #4b5563, #374151);
  background-clip: text;
`;
const ReviewRating = styled.span` //* ------ [ Styled - Review Rating ]:
  margin-top: 1rem;
  font-size: 2rem;
  color: #fbbf24;
  font-weight: bold;
  display: block;
`;
const Control = styled.div` //* ------ [ Styled - Controles ]:
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  gap: 1rem;
  div.button{
    border-radius: 4rem;
  }
`;
//#endregion
//#region ------------------------ [ Componentes ] ------------------------;
export const Testimonials = ({Items}) => {
  // Estado para llevar el índice del grupo de reseñas mostrado actualmente
  const [reviewIndex, setReviewIndex] = useState(0);

  // Función para ir al grupo anterior de reseñas
  const prev = () =>
    setReviewIndex(reviewIndex === 0 ? Items.length - 1 : reviewIndex - 1);

  // Función para ir al siguiente grupo de reseñas
  const next = () =>
    setReviewIndex(reviewIndex === Items.length - 1 ? 0 : reviewIndex + 1);

  return (
    <Container>
      <CarouselWrapper>
        {/* Contenedor del carrusel, recibe el índice actual */}
        <CarouselInner reviewIndex={reviewIndex}>
          {/* Mapea cada grupo de reseñas (pares) */}
          {Items.map((reviewsGroup, idx) => (
            <ReviewsGroup key={idx}>
              {/* Mapea cada reseña dentro del grupo */}
              {reviewsGroup.map((review, subIdx) => (
                <ReviewCard key={subIdx}>
                  {/* Imagen del usuario */}
                  <Avatar src={review.img} alt={review.name} />
                  <ReviewContent>
                    {/* Nombre del usuario */}
                    <h4>{review.name}</h4>
                    {/* Servicio que recibió */}
                    <ReviewService>Servicio: {review.servicio}</ReviewService>
                    {/* Texto de la reseña */}
                    <p>{review.text}</p>
                    {/* Calificación */}
                    <ReviewRating>{review.rating}</ReviewRating>
                  </ReviewContent>
                </ReviewCard>
              ))}
            </ReviewsGroup>
          ))}
        </CarouselInner>
        {/* Botones de navegación del carrusel */}
        <Control>
          <ActionButton standOut={true} onClick={prev} className="button">
            {/* <MdArrowLeft size={24} />*/} Anterior
          </ActionButton>
          <ActionButton standOut={true} onClick={next} className="button">
            Siguiente{/*<MdArrowRight size={24} /> */}
          </ActionButton>
        </Control>
      </CarouselWrapper>
    </Container>
  );
};
//#endregion