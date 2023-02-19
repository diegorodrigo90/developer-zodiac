import { createGlobalStyle, GlobalStyleComponent } from "styled-components";

const GlobalStyles = createGlobalStyle`
 a {
     text-decoration: none;
     color: #007bff;
     transition: color 0.2s ease-in-out;

     &:hover {
       color: #0056b3;
     }
   }
  `;

export default GlobalStyles;
