//#region ------------------------ [ Biblioteca ] ------------------------;
import React from "react";
import styled from "styled-components";
//#endregion
//#region ------------------------ [ Styled ] ------------------------;
const Container = styled.div` //* ------ [ Styled - Contenedor principal para el input flotante y sus elementos relacionados ]:
  position: relative;
  // Cuando el input está enfocado, no está vacío o es válido, mueve y estiliza los caracteres de la etiqueta
  .input:focus ~ .label .label-char,
  .input:not(:placeholder-shown) ~ .label .label-char {
    transform: translateY(-20px);
    font-size: 14px;
    background: linear-gradient(90deg, #68b8ee,  #3B82F6);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  // Anima la barra inferior cuando el input está enfocado
  .input:focus ~ .bar::before,
  .input:focus ~ .bar::after {
    width: 50%;
  }
  // Si el input es inválido y no está vacío, cambia el color de la etiqueta y la barra a rojo
  .input:not(:placeholder-shown):invalid ~ .label .label-char {
    background: linear-gradient(90deg, #f87171, #ef4444);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .input:not(:placeholder-shown):invalid ~ .bar::before,
  .input:not(:placeholder-shown):invalid ~ .bar::after {
    background: linear-gradient(90deg, #f87171, #ef4444);
  }
`;
const Input = styled.input` //* ------ [ Styled - Input de texto ]:
  font-size: 16px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid #515151;
  background: transparent;

  &:focus {
    outline: none;
  }
`;
const Label = styled.label` //* ------ [ Styled - Etiqueta flotante ]:
  color: #999;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  display: flex;
`;
const LabelChar = styled.span` //* ------ [ Styled - Cada caracter de la etiqueta tiene una transición individual ]:
  transition: 0.2s ease all;
  transition-delay: ${({ index }) =>
    index ? `calc(${index} * 0.05s)` : "0s"};
`;
const Bar = styled.span` //* ------ [ Styled - Barra inferior animada ]:
  position: relative;
  display: block;
  width: 100%;
  &::before,
  &::after {
    content: '';
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: linear-gradient(180deg, #68b8ee,  #3B82F6);
    -webkit-text-fill-color: transparent;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }
  &::before {
    left: 50%;
  }
  &::after {
    right: 50%;
  }
`;
//#endregion 
export const FloatingLabelInput = ({ 
  label,
  type = "text", 
}) => (
  <Container>
    <Input
      className="input"
      type={type}
      required
      placeholder=" " // Necesario para :placeholder-shown
      autoComplete="off"
    />
    <Label className="label">
      {[...label].map((char, i) => (
        <LabelChar key={i} index={i} className="label-char">
          {char}
        </LabelChar>
      ))}
    </Label>
    <Bar className="bar" />
  </Container>
);
//#endregion