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
    <ButtonStylesProvider  standOut={standOut} className={className} > 
      <a href={href}>
        {children}
      </a>
    </ButtonStylesProvider>
  );
}
//#endregion