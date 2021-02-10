import styled, { css } from "styled-components";

let title = false;
const NavBar = styled.nav`
  ${() =>
    title &&
    css`
      background-color: turquoise;
    `}

  @media (max-width: 1220px) {
    min-width: max-content;
  }
  @media(min-width: 1220px){
    width: auto;
  }
`;

const Navbar = () => {
  return (
    <NavBar className="navbar navbar-default navbar-static-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#app-navbar-collapse"
          >
            <span className="sr-only">Toggle Navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="https://jstris.jezevec10.com/">
            Jstris
          </a>
        </div>
        <div className="collapse navbar-collapse" id="app-navbar-collapse">
          <ul className="nav navbar-nav" id="mnav">
            <li
              id="playDD"
              onClick={() =>
                document.getElementById("playDD").classList.toggle("open")
              }
              className="dropdown"
            >
              <a
                href="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-expanded="false"
              >
                Play <span className="caret"></span>
              </a>
              <ul className="dropdown-menu" role="menu">
                <li>
                  <a href="https://jstris.jezevec10.com/">Live</a>
                </li>
                <li className="dropdown-submenu">
                  <a
                    tabIndex="-1"
                    href="https://jstris.jezevec10.com/play/sprint"
                  >
                    Sprint
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">20L</a>
                    </li>
                    <li>
                      <a href="#">40L</a>
                    </li>
                    <li>
                      <a href="#">100L</a>
                    </li>
                    <li>
                      <a href="#">1000L</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <a tabIndex="-1" href="cheeseRace">
                    Cheese race
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">10L</a>
                    </li>
                    <li>
                      <a href="#">18L</a>
                    </li>
                    <li>
                      <a href="#">100L</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Map downstack</a>
                </li>
                <li>
                  <a href="#">Survival</a>
                </li>
                <li>
                  <a href="#">Ultra</a>
                </li>
                <li>
                  <a href="#">20TSD</a>
                </li>
                <li>
                  <a href="#">PC Mode</a>
                </li>
                <li>
                  <a href="#">Practice</a>
                </li>
                <li className="dropdown-submenu">
                  <a tabIndex="-1" href="#">
                    Rulesets
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">Big mode</a>
                    </li>
                    <li>
                      <a href="#">Pentomino</a>
                    </li>
                    <li>
                      <a href="#">MPH</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="dropdown ">
              <a
                href="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-expanded="false"
              >
                Leaderboard <span className="caret"></span>
              </a>
              <ul className="dropdown-menu" role="menu">
                <li className="">
                  <a href="#">Sprint</a>
                </li>
                <li className="">
                  <a href="#">Cheese race</a>
                </li>
                <li className="">
                  <a href="#">Survival</a>
                </li>
                <li className="">
                  <a href="#">Ultra</a>
                </li>
                <li className="">
                  <a href="#">20TSD</a>
                </li>
                <li className="">
                  <a href="#">PC Mode</a>
                </li>
              </ul>
            </li>
            <li className="dropdown ">
              <a
                href="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-expanded="false"
              >
                Maps <span className="caret"></span>
              </a>
              <ul className="dropdown-menu" role="menu">
                <li className="">
                  <a href="#">Browse</a>
                </li>
                <li>
                  <a href="#">Random map</a>
                </li>
                <li className="">
                  <a href="#">My maps</a>
                </li>
                <li className="">
                  <a href="#">Map Designer</a>
                </li>
                <li className="">
                  <a href="#">Latest games</a>
                </li>
                <li className="">
                  <a href="#">Leaderboard</a>
                </li>
              </ul>
            </li>
            <li className="dropdown ">
              <a
                href="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-expanded="false"
              >
                Usermodes <span className="caret"></span>
              </a>
              <ul className="dropdown-menu" role="menu">
                <li className="">
                  <a href="#">Browse</a>
                </li>
                <li className="">
                  <a href="#">My modes</a>
                </li>
                <li className="">
                  <a href="#">Create</a>
                </li>
              </ul>
            </li>
            <li className="">
              <a href="#">About</a>
            </li>
            <li className="">
              <a href="#">Donate</a>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li className="dropdown">
              <a
                href="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-expanded="false"
              >
                Username
                <span className="notification-count">69</span>
                <span className="caret"></span>
              </a>
              <ul className="dropdown-menu" role="menu">
                <li>
                  <a href="#">My profile</a>
                </li>
                <li>
                  <a href="#">My improvement</a>
                </li>
                <li>
                  <a href="#">
                    Friends <span className="notification-count">2</span>
                  </a>
                </li>
                <li>
                  <a href="#">Favorite replays</a>
                </li>
                <li>
                  <a href="#">Settings</a>
                </li>
                <li>
                  <a href="#">Logout </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </NavBar>
  );
};

export default Navbar;
