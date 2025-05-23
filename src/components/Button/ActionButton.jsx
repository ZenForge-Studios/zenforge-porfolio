//#region ------------------------ [ Biblioteca ] ------------------------;
import React  from "react";
import { ButtonStylesProvider } from "./ButtonStylesProvider";
//#endregion
//#region ------------------------ [ Componentes ] ------------------------;
export const ActionButton = ({
  children, 
  standOut = false, 
  onClick = () => {console.log("Click")}, 
  className = "", 
  type = "button"
}) => {
  //* ------ [ HTML ] ------:
  return(
    <ButtonStylesProvider standOut={standOut} className={className} > 
      <button type={type} onClick={onClick}>
        {children}
      </button>
    </ButtonStylesProvider>
  );
  }
//#endregion