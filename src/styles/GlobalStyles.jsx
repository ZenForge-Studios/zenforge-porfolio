//#region ------------------------ [ Biblioteca ] ------------------------;
import { createGlobalStyle } from "styled-components";
//#endregion
//#region ------------------------ [ Styled ] ------------------------;
export const GlobalStyles = createGlobalStyle`
  * { //* ------ [ Styled - Reset ]:
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root { //* ------ [ Styled - Root ]:
    --blue: #484a4e; 
  }
  body { //* ------ [ Styled - Body ]:
    // Disposicion:
    overflow-x: hidden;
    min-height: 100vh;
    // Textos:
    font-family: 'Poppins', sans-serif;
    color: whitesmoke;
    // Diseno:
    background-color: #111827;
  }
  main{ //* ------ [ Styled - Main ]:
    // Disposicion:
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    flex-grow: 1;
    min-height: 100vh;
  }
  .Hero{ //* ------ [ Styled - Hero ]:
    // Disposicion:
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-grow: 1;
    gap: 1rem;
    padding: 4rem 2rem 1rem 2rem;
    // Texto:
    text-align: center;
  }

  h1{ //* ------ [ Styled - H1 ]:
    font-size: 5rem; /* aproximadamente 80px */
    @media (max-width: 920px) {
      font-size: 4.5rem; /* Aproximadamente  */
    }
  }
  h2 { //* ------ [ Styled - H2 ]:
    font-size: 4rem; /* aproximadamente 64px */
    @media (max-width: 920px) {
      font-size: 3rem; /* Aproximadamente 48px */
    }
  }
  h3 { //* ------ [ Styled - H3 ]:
    font-size: 2rem; /* aproximadamente 32px */
  }
  h4{ //* ------ [ Styled - H4 ]:
    font-size: 1.5rem; /* aproximadamente 24px*/
  }
  p{ //* ------ [ Styled - P ]:
    font-size: 1rem; /* aproximadamente 16px */;
  }


  h1, h2, h3, h4{ //* ------ [ Styled - Titulos]:
    // Texto:
    font-weight: bold; 
    line-height: 1.25;
    // Diseño:
    background: linear-gradient(90deg, #68b8ee,  #3B82F6);
    background-clip: text;
    -webkit-text-fill-color: transparent;

    &.sub{
      background: linear-gradient(90deg, #ffffff, #f0f0f0);
      background-clip: text;
    }

    a{
      // Diseño:
      cursor: pointer;
      text-decoration: none;
      color: inherit;
      //Animacion:
      transition: color 0.3s ease-in-out;
      &:focus,&:hover {
        background: linear-gradient(90deg, #3B82F6, #214b98);
        background-clip: text;
      }
    }
  }
`;
//#endregion