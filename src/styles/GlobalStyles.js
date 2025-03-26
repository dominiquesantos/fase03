import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 10;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: "Space Grotesk Regular", sans-serif;
    background: #FFFBEF;
  }
`;

export default GlobalStyles;
