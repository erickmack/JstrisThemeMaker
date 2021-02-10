import NavBar from "./NavBar";
import Navbar from "./jstrisComponents/Navbar";
import Gc from "./jstrisComponents/Gc";
import SideBar from './themeComponents/SideBar'

import styled from "styled-components";

const Jstris = styled.div`
  background-color: black;
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
  @media (max-width:1260px){
      overflow-x: scroll
  }
  @media(min-width: 1300px){
    flex: 5;
}
`;

const Container = styled.div`
    display: flex;
`

const Main = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Jstris>
          <Navbar />
          <Gc />
        </Jstris>
        <SideBar/>
      </Container>
    </>
  );
};

export default Main;
