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

  .selected{
    background-color: #4e5e;
  }
  #gstats.leftAligned{
    position: absolute;
    left: -216px;
    width: max-content;
    bottom: 329px;
  }

  #gstats.verticalAligned {
    margin-left: 106px;
  }

  #gstats.leftAligned.verticalAligned {
    left: -120px !important;
    bottom: 149px !important;
  }

  #gstats.verticalAligned > .statL span {
    text-align: left;
    display: block;
    height: 50px;
  }

  #gstats.verticalAligned > .statL span {
    display: block;
    height: 50px;
  }

  #gstats.verticalAligned > #glstats {
    margin-top: 26px;
  }

  .verticalAligned > div#statLabels {
    margin-left: 10px;
    position: absolute;
  }

  #gstats.verticalAligned > #glstats > span {
    height: 50px;
  }

  .menu-primary-enter {
    transform: translateX(-110%);
  }
  .menu-primary-enter-done {
    transform: translateX(0%);
    transition: all 500ms ease-in;
  }
  .menu-primary-exit-active {
    transform: translateX(-110%);
    transition: all 5000ms ease-out;
  }

  .menu-secondary-enter {
    transform: translateX(110%);
  }
  .menu-secondary-enter-done {
    transform: translateX(0%);
    transition: all 500ms ease;
    overflow: scroll;
    height: 90vh;
    overflow-x: hidden;
    scrollbar-width: thin;
    &::-webkit-scrollbar {
      width: 12px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #333;
  }
  }
  .menu-secondary-exit-active {
    transform: translateX(110%);
    transition: all 500ms ease;
  }

`;

export default GlobalStyle;
