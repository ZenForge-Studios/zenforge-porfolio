import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.5);
  backdrop-filter: blur(3px);
  display: flex ;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  // Disposcion:
  position: relative;
  display: flex;
  justify-content: center;
  align-items: stretch;
  min-width: 300px;
  max-width: 90vw;
  padding: 2rem;
   // Diseño:
  background: #374151;
  border-radius: 8px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.2);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: red;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const Modal = ({ children }) => {
  const handleClose = () => {
    // Aquí puedes definir la lógica de cierre, por ejemplo:
    console.log('Modal cerrado');
  };

  return (
    <Overlay>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <CloseButton onClick={handleClose}>&times;</CloseButton>
        {children}
      </ModalContainer>
    </Overlay>
  );
};