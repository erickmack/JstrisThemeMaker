import Main from "./components/Main";
import GlobalStyle from "./Themes/GlobalStyle";

import styled from "styled-components";
const AppDiv = styled.div`
  background-color: black;
`;

const App = () => {
  return (
    <AppDiv id="app">
      <GlobalStyle />
      <Main />
    </AppDiv>
  );
};

export default App;
