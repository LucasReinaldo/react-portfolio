import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    /* UI Colors */
    --primary-color: #000000;
    --secondary-color: #9BA5C1;
    --tertiary-color: #3D60b1;
    --quaternary-color: #F0921A;

    /* ... */
    --background-color: #030303;
    --gradient: linear-gradient(90deg, rgba(215,93,5,1) 50%, rgba(216,52,1,1) 100%);

    /* ... */
    --border-color: #ebebeb;

    /* Box Shadows */
    --shadow: 0px 2px 4px rgba(37, 37, 37, 0.1);
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    background-color: #070707;
    color: #FFF;
    font-family: 'Roboto Mono', sans-serif;
    font-size: 1.6rem;
    margin: auto;
    min-height: 100vh;
    overflow: initial;
    text-rendering: optimizelegibility;
    max-width: 100vw;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 1.6rem 'Roboto Mono', serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
    font-family: 'Roboto Mono', serif;
  }

  button, a {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: #FFF;
  }

  // Responsivo
  html {
    @media (max-width: 1080px) {
      font-size: 60%;
    }

    @media (max-width: 980px) {
      font-size: 48%;
    }

    @media (max-width: 720px) {
      font-size: 45%;
    }

    @media (max-width: 425px) {
      font-size: 40%;
    }
  }
`;
