import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import App from "./app";
import "./main.css";
import Themes from './Themes/Themes'

const root = document.getElementById("root");

ReactDOM.render(
  <ThemeProvider theme={Themes}>
    <App />
  </ThemeProvider>,
  root
);
