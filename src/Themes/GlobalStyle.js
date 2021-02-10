import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    .sideMenu-enter {
    transform: translateX(110%);
  }
  .sideMenu-enter-active {
    transform: translateX(0%);
    transition: all 500ms ease;
  }
  .sideMenu-exit {
  
  }
  .sideMenu-exit-active {
    transform: translateX(110%);
    transition: all 500ms ease;
  }
`;

export default GlobalStyle