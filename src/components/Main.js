import NavBar from "./NavBar";
import Navbar from "./jstrisComponents/Navbar";
import Gc from "./jstrisComponents/Gc";
import SideBar from "./themeComponents/SideBar";

import styled from "styled-components";

import { useSelector } from "react-redux";

const Jstris = styled.div`
  background-color: ${props=>props.backgroundColor};
  background-image: url("${props=>props.backgroundImage}");
  background-attachment: local;
  background-size: ${props=>props.backgroundSize};
  overflow: scroll;
  overflow-x: hidden;
  border-top: 4px solid white;
  border-right: 4px solid white;
  scrollbar-width: thin;
  height: 90vh;
  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #333;
  }
  @media (max-width: 1260px) {
    overflow-x: scroll;
  }
  @media (min-width: 1300px) {
    flex: 5;
  }
`;

const Container = styled.div`
  display: flex;
`;

const Main = () => {
  const { backgroundColor, backgroundImage,backgroundSize } = useSelector(
    (state) => state.background
  );
  return (
    <>
      <NavBar />
      <Container>
        <Jstris id="app"
          backgroundColor={backgroundColor}
          backgroundImage={backgroundImage}
          backgroundSize={backgroundSize}
        >
          <Navbar />
          <Gc />
        </Jstris>
        <SideBar />
      </Container>
    </>
  );
};

export default Main;
