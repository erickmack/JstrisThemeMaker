import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
  overflow:hidden;
  }
  .flex{
    display: flex;
  }
  input[type=number]{
    width: 30%;
    background-color: #f2f2f2;
    display: block;
  }
    .sideMenu-enter {
    transform: translateX(110%);
  }
  .sideMenu-enter-active {
    transform: translateX(0%);
    transition: all 500ms ease;
  }

  .sideMenu-enter-done{
    overflow: scroll;
    overflow-x: hidden;
    scrollbar-width: thin;
    height: 90vh;
    &::-webkit-scrollbar {
    width: 12px;
    }
    &::-webkit-scrollbar-thumb{
      background-color:#333
    }
  }

  .sideMenu-exit {
  
  }
  .sideMenu-exit-active {
    transform: translateX(110%);
    transition: all 500ms ease;
  }
`;

export default GlobalStyle;
