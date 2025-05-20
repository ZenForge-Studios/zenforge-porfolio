// Tengo que crear un formulario de contacto que se vea bien en dispositivos móviles y de escritorio.
// El formulario lo usare o reusare en diferentes partes de la web.
// Todavia este codigo no esta trabajado.



import React from "react";
import styled from "styled-components";

// Contenedor principal para el Hero
const HeroSection = styled.section`
  padding: 48px 0;
  background: transparent;
`;

// Título central
const Title = styled.h1`
  font-size: 2rem;
  @media (min-width: 640px) {
    font-size: 2.5rem;
  }
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
  color: #60a5fa; /* text-blue-400 */
`;

// Párrafo central
const Subtitle = styled.p`
  font-size: 1rem;
  @media (min-width: 640px) {
    font-size: 1.125rem;
  }
  text-align: center;
  color: #d1d5db; /* text-gray-300 */
  margin-bottom: 1.5rem;
`;

// Formulario
const Form = styled.form`
  max-width: 400px;
  margin: 0 auto;
  background: #1f2937; /* bg-gray-800 */
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 8px 32px 0 rgba(31, 41, 55, 0.37);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

// Input y textarea
const Input = styled.input`
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: none;
  background: #374151; /* bg-gray-700 */
  color: #fff;
  font-size: 1rem;
  &:focus {
    outline: 2px solid #60a5fa;
    background: #1e293b;
  }
`;

const TextArea = styled.textarea`
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

const Button = styled.button`
  background: #60a5fa; /* bg-blue-400 */
  color: #fff;
  font-weight: bold;
  padding: 0.75rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: #3b82f6; /* bg-blue-500 */
  }
`;

export const ContactForm = () => (
  <HeroSection>
    <Title>Contacto</Title>
    <Subtitle>
      ¿Tienes alguna consulta, propuesta o quieres trabajar con nosotros?<br />
      Escríbenos y te responderemos a la brevedad.
    </Subtitle>
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        // Aquí puedes manejar el envío del formulario (fetch, emailjs, etc.)
        alert("¡Mensaje enviado!");
      }}
    >
      <Input type="text" name="name" placeholder="Tu nombre" required />
      <Input type="email" name="email" placeholder="Tu correo" required />
      <TextArea name="message" placeholder="Tu mensaje" required />
      <Button type="submit">Enviar</Button>
    </Form>
  </HeroSection>
);