//#region ------------------------ [ Biblioteca ] ------------------------;
import React from "react";
import styled from "styled-components";
import { FloatingLabelInput } from "./FloatingLabelInput"; 
import { ButtonHandle } from "../ButtonHandle";  
//#endregion
//#region ------------------------ [ Styled ] ------------------------;
// Formulario
const Container = styled.form` //* ------ [ Styled - Contenedor principal ]:
  // Disposicion:
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  flex-direction: column;
  padding: 2rem;
  gap: 1.25rem;
  min-width: 50vw;
  min-height:35vh;
  max-width: 90vw;
  // Diseño:
  background: #1f2937; 
  border-radius: 1rem;
  box-shadow: 0 8px 32px 0 rgba(31, 41, 55, 0.37);

  h2{
    margin-top: 2rem;
  }

  span.line{
    display: flex;
    justify-content: center;
    align-items: stretch;
    min-width: 100%;
    height: 2px;
    background-color: #515151;
  }
`;

const Section = styled.section` //* ------ [ Styled - Lista de entradas ]:
  // Disposicion:
  display: flex;
  justify-content: center;
  align-items: stretch;
  align-self: center;
  flex-direction: column;
  flex-grow: 5;
  gap: 1.25rem;
  min-width: 100%;
`;

//#endregion 
//#region ------------------------ [ Componentes ] ------------------------;
export const AccessForm = () => (
  <Container
    onSubmit={(e) => {
      e.preventDefault();
      // Aquí pueden manejar el envío del formulario (fetch, emailjs, etc.)
      alert("¡Mensaje enviado!");
    }}
    // action="https://formsubmit.co/zenforgestudios@outlook.com"
    // method="POST"
  >
    <Section>
      <h2>Acceso a la Plataforma</h2>
      <span className="line" />
    </Section>

    <Section>
      <FloatingLabelInput
        label="Correo:"
        id="email"
        name="email"
        type="email"
        required
      />
      <FloatingLabelInput
        label="Contraseña:"
        id="password"
        name="password"
        type="password"
        required
      />
    </Section>
    <ButtonHandle standOut={true} type="submit">Enviar</ButtonHandle>
    <p>¿No tienes cuenta? <a href="#" className="only">Haz clic aquí</a></p>
  </Container>
);
//#endregion