import ChangeOption from "./ChangeOption";
import Navigation from "./Navigation/index";
import Background from "./Background";
import Board from "./Board";
import Buttons from "./Buttons";
import Stats from "./Stats";
import Chat from "./Chat";

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
  max-height: 90vh;
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
  "Chat",
  "Generate",
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
            <ChangeOption
              id={`${name}Btn`}
              name={name}
              key={name}
              handleClick={handleClick}
            />
          ))}
        </SideMenu>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === "Navigation"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
      >
        <Navigation handleClick={handleClick} />
      </CSSTransition>
      <CSSTransition
        in={activeMenu === "Background"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
      >
        <Background handleClick={handleClick} />
      </CSSTransition>
      <CSSTransition
        in={activeMenu === "Board"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
      >
        <Board handleClick={handleClick} />
      </CSSTransition>
      <CSSTransition
        in={activeMenu === "Buttons"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
      >
        <Buttons handleClick={handleClick} />
      </CSSTransition>
      <CSSTransition
        in={activeMenu === "Stats"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
      >
        <Stats handleClick={handleClick} />
      </CSSTransition>
      <CSSTransition
        in={activeMenu === "Chat"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
      >
        <Chat handleClick={handleClick} />
      </CSSTransition>
    </Side>
  );
};

export default SideBar;
