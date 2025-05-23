//#region ------------------------ [ Biblioteca ] ------------------------;
import React from "react";
import { ButtonStylesProvider } from "./ButtonStylesProvider";
//#endregion
//#region ------------------------ [ Componentes ] ------------------------;
export const LinkButton = ({
  children, 
  standOut = false, 
  href = "#", 
  className = ""
}) => {
  //* ------ [ HTML ] ------:
  return(
    <ButtonStylesProvider href={href} standOut={standOut} className={className} > 
      {children}
    </ButtonStylesProvider>
  );
  }
//#endregion