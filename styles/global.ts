import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";

export const color = Object.freeze({
  // This color should be eye-catching but not harsh. It can be liberally applied to your layout as its main identity.
  mainBrand: "#7d8bb5",

  // Accent colors can be used to bring attention to design elements by contrasting with the rest of the palette.
  lightAccent: "#5f7996",

  // Another accent color to consider. Not all colors have to be used - sometimes a simple color scheme works best.
  darkAccent: "#8e5666",

  // Use this color as the background for your dark-on-light designs, or the text color of an inverted design.
  lightShade: "#e6e7e3",

  // Use as the text color for dark-on-light designs, or as the background for inverted designs.
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
    line-height: 1.3em;
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
  ${reset}

  * {
    box-sizing: border-box;
  }

  html {
    font-family: "Archivo", "Nanum Gothic", -apple-system, BlinkMacSystemFont,
    Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
    Helvetica Neue, sans-serif;

    background-color: ${color.lightShade};
    color: ${color.darkShade};
    font-size: 100%;
  }

  ${textSizing}
`;
