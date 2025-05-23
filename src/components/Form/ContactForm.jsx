//#region ------------------------ [ Biblioteca ] ------------------------;
import React from "react";
import styled from "styled-components";
import { FloatingLabelInput } from "./FloatingLabelInput"; 
import { ActionButton } from "../Button/ActionButton";  
//#endregion
//#region ------------------------ [ Styled ] ------------------------;
// Formulario
const Container = styled.form` //* ------ [ Styled - Contenedor principal ]:
  max-width: 400px;
  margin: 0 auto;
  background: #1f2937; /* bg-gray-800 */
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 8px 32px 0 rgba(31, 41, 55, 0.37);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  min-width: 50%;
  max-width: 90%;
`;

const TextArea = styled.textarea` //* ------ [ Styled - TextArea ]:
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: none;
  background: #374151;
  color: #fff;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  &:focus {
    outline: 2px solid #60a5fa;
    background: #1e293b;
  }
`;

//#endregion 
//#region ------------------------ [ Componentes ] ------------------------;
export const ContactForm = () => (
  <Container
    onSubmit={(e) => {
      e.preventDefault();
      // Aquí pueden manejar el envío del formulario (fetch, emailjs, etc.)
      alert("¡Mensaje enviado!");
    }}
    action="https://formsubmit.co/zenforgestudios@outlook.com"
    method="POST"
  >
    <FloatingLabelInput
      label="Nombre:"
      id="name"
      name="name"
      type="text"
      required
    />
    <FloatingLabelInput
      label="Correo:"
      id="email"
      name="email"
      type="email"
      required
    />
    <FloatingLabelInput
      label="Discord Nick:"
      id="discord-id"
      name="discord-id"
      type="text"
      required
    />
    <TextArea name="message" placeholder="Tu mensaje" required />
    <ActionButton standOut={true} type="submit">Enviar</ActionButton>
  </Container>
);
//#endregion