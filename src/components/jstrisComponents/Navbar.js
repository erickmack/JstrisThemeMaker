import { useSelector } from "react-redux";

import styled from "styled-components";

const NavBar = styled.nav`
  font-size: ${(props) => props.fontSize}px;
  background-color: ${(props) => props.backgroundColor};
  background-image: url("${(props) => props.image}");
  background-size: ${(props) => props.size};
  @media (max-width: 1220px) {
    min-width: max-content;
  }
  @media (min-width: 1220px) {
    width: auto;
  }
`;

const Link = styled.a`
  color: ${(props) => props.color} !important;
`;

const ListITem = styled.li`
  &.open {
    background-color: ${(props) => props.selBg};
  }
`;

const Childa = styled.a`
  :hover {
    text-decoration: none;
    background-color: ${(props) => props.backgroundColor};
  }
`;

const Ul = styled.ul`
  background-color: ${(props) => props.backgroundColor};
  font-size: ${(props) => props.fontSize}px;
  ${Childa} {
    color: ${(props) => props.color};
  }
`;

const Span = styled.span`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize}px;
  height: 15px;
  border-radius: 30%;
  text-align: center;
  display: inline-block;
  padding: 1px 6px 15px 5px;
  line-height: 12px;
  vertical-align: 5px;
  margin-left: 2px;
`;

const Navbar = () => {
  const {
    fontSize,
    backgroundColor,
    backgroundImage,
    backgroundSize,
    fontColor,
    notification,
    dropdown,
  } = useSelector((state) => state.navigation);
  return (
    <NavBar
      className="navbar navbar-default navbar-static-top"
      fontSize={fontSize}
      backgroundColor={backgroundColor}
      image={backgroundImage}
      size={backgroundSize}
    >
      <div className="container">
        <div className="navbar-header">
          <a style={{color: 'white'}} className="navbar-brand" href="#">
            Jstris
          </a>
        </div>
        <div className="collapse navbar-collapse" id="app-navbar-collapse">
          <ul className="nav navbar-nav" id="mnav">
            <ListITem
              selBg={dropdown.ddSel}
              id="playDD"
              onClick={() =>
                document.getElementById("playDD").classList.toggle("open")
              }
              className="dropdown"
            >
              <Link
                href="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-expanded="false"
                color={fontColor}
              >
                Play <span className="caret"></span>
              </Link>
              <Ul
                fontSize={dropdown.fontSize}
                backgroundColor={dropdown.ddBg}
                color={dropdown.ddColor}
                className="dropdown-menu"
                role="menu"
              >
                <li>
                  <Childa backgroundColor={dropdown.ddHover} href="#">
                    Live
                  </Childa>
                </li>
                <li className="dropdown-submenu">
                  <Childa
                    backgroundColor={dropdown.ddHover}
                    tabIndex="-1"
                    href="#"
                  >
                    Sprint
                  </Childa>
                </li>
                <li className="dropdown-submenu">
                  <Childa
                    backgroundColor={dropdown.ddHover}
                    tabIndex="-1"
                    href="cheeseRace"
                  >
                    Cheese race
                  </Childa>
                </li>
                <li>
                  <Childa backgroundColor={dropdown.ddHover} href="#">
                    Map downstack
                  </Childa>
                </li>
                <li>
                  <Childa backgroundColor={dropdown.ddHover} href="#">
                    Survival
                  </Childa>
                </li>
                <li>
                  <Childa backgroundColor={dropdown.ddHover} href="#">
                    Ultra
                  </Childa>
                </li>
                <li>
                  <Childa backgroundColor={dropdown.ddHover} href="#">
                    20TSD
                  </Childa>
                </li>
                <li>
                  <Childa backgroundColor={dropdown.ddHover} href="#">
                    PC Mode
                  </Childa>
                </li>
                <li>
                  <Childa backgroundColor={dropdown.ddHover} href="#">
                    Practice
                  </Childa>
                </li>
                <li className="dropdown-submenu">
                  <Childa
                    backgroundColor={dropdown.ddHover}
                    tabIndex="-1"
                    href="#"
                  >
                    Rulesets
                  </Childa>
                </li>
              </Ul>
            </ListITem>
            <li className="dropdown ">
              <Link
                href="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-expanded="false"
                color={fontColor}
              >
                Leaderboard <span className="caret"></span>
              </Link>
            </li>
            <li className="dropdown ">
              <Link
                href="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-expanded="false"
                color={fontColor}
              >
                Maps <span className="caret"></span>
              </Link>
            </li>
            <li className="dropdown ">
              <Link
                href="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-expanded="false"
                color={fontColor}
              >
                Usermodes <span className="caret"></span>
              </Link>
            </li>
            <li className="">
              <Link color={fontColor} href="#">
                About
              </Link>
            </li>
            <li className="">
              <Link color={fontColor} href="#">
                Donate
              </Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li className="dropdown">
              <Link
                href="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-expanded="false"
                color={fontColor}
              >
                Username
                <Span
                  fontSize={notification.fontSize}
                  backgroundColor={notification.notifBg}
                  color={notification.notifColor}
                  className="notification-count"
                >
                  69
                </Span>
                <span className="caret"></span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </NavBar>
  );
};

export default Navbar;
