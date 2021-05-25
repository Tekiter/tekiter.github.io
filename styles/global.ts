import { createGlobalStyle, css } from "styled-components";
import { resetCSS } from "./utils/reset";

const color = Object.freeze({
  mainBrand: "#7d8bb5",
  lightAccent: "#5f7996",
  darkAccent: "#8e5666",
  lightShade: "#e6e7e3",
  darkShade: "#23295c",

  primary: "#7d8bb5",
  info: "#23295c",
  success: "#63b377",
  warning: "#e0a33f",
  danger: "#f44336",
});

const textSizing = css`
  p {
    font-size: 1em;
  }

  h1 {
    font-size: 2em;
  }
  h2 {
    font-size: 1.5em;
  }
  h3 {
    font-size: 1.17em;
  }
  h4 {
    font-size: 1.12em;
  }
  h5 {
    font-size: 0.83em;
  }
  h6 {
    font-size: 0.75em;
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${resetCSS}

  html {
    font-family: "Archivo", "Nanum Gothic", -apple-system, BlinkMacSystemFont,
    Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
    Helvetica Neue, sans-serif;

    background-color: ${color.lightShade};
    font-size: 100%;
  }

  ${textSizing}
`;
