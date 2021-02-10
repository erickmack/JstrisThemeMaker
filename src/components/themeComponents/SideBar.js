import ChangeOption from "./ChangeOption";
import Navigation from './Navigation'

import { useState } from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";

let theme = "dark";

let Side = styled.div`
  flex: 1;
  overflow: hidden;
  background-color: ${(props) => props.theme[theme].bg};
`;

const SideMenu = styled.div`
  background-color: ${(props) => props.theme[theme].bg};
  display: grid;
  height: 100%;
  &.menu-primary-enter {
    transform: translateX(-110%);
  }
  &.menu-primary-enter-active {
    transform: translateX(0%);
    transition: all 500ms ease;
  }
  &.menu-primary-exit {
  }
  &.menu-primary-exit-active {
    transform: translateX(-110%);
    transition: all 500ms ease;
  }
`;

const componentsToChange = [
  "Navigation",
  "Background",
  "Board",
  "Buttons",
  "Stats",
  "Enemy Board",
  "Chat",
];

const SideBar = () => {
  const [activeMenu, setActiveMenu] = useState("main");
  function handleClick(menu) {
    setActiveMenu(menu);
  }
  return (
    <Side className="sideBar">
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
      >
        <SideMenu>
          {componentsToChange.map((name) => (
            <ChangeOption name={name} key={name} handleClick={handleClick} />
          ))}
        </SideMenu>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === "Navigation"}
        timeout={500}
        classNames="sideMenu"
        unmountOnExit
      >
       <Navigation name={'main'} handleClick={handleClick}/>
      </CSSTransition>
    </Side>
  );
};

export default SideBar;
