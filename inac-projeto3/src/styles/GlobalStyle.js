import { createGlobalStyle } from "styled-components";

// Estilos globais que serão aplicados a toda a aplicação
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: Arial, sans-serif;
    background-color: #fff;
    scroll-behavior: smooth;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
