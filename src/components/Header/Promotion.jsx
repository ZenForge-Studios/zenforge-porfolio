//#region ------------------------ [ Biblioteca ] ------------------------;
import React from "react";
import {styled} from "styled-components";
/*import {Icon}  from "astro-icon/components";*/ //! ⚠️ Importación Fallida ⚠️
//#endregion
//#region ------------------------ [ Styled ] ------------------------;
const StdPromotion = styled.div` //* ------ [ Styled - Promocion ]:
  //Disposicion
  display: flex;
  justify-content:  ${({ justifyContent }) => justifyContent != ""
    ? justifyContent
    : 'center'
  };
  align-items: center;
  width: 100%;
  padding-top: 1rem; 
  //Texto
  text-align: center;
  font-size: 0.875rem; 
`;
//#endregion 
//#region ------------------------ [ Componentes ] ------------------------;
export const Promotion = ({justifyContent = "center"}) => {
  //* ------ [ HTML ] ------:
  return(
    <StdPromotion justifyContent={justifyContent}>
      {/* <Icon name="mdi:rocket-launch" class="inline-block w-4 h-4 align-middle mr-1" /> //! ⚠️ Importación Fallida ⚠️ */}
      ¡Descuento Exclusivo! ZFS10 en TECT HOST – Aprovéchalo ahora
      {/* <Icon name="mdi:fire" class="inline-block w-4 h-4 align-middle ml-1" /> //! ⚠️ Importación Fallida ⚠️ */}
    </StdPromotion>
  );
  }
//#endregion