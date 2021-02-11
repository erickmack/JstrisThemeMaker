import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";

import App from "./app";
import "./main.css";
import Themes from "./Themes/Themes";
import store from './Redux/configureStore'

const root = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={Themes}>
      <App />
    </ThemeProvider>
  </Provider>,
  root
);
