import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    /* UI Colors */
    --primary-color: #000000;
    --color--primary: hsl(var(--primary-hue), 100%, 44%);
    --color--primary--hover: hsl(var(--primary-hue), 100%, 39%);
    --color--primary--active: hsl(var(--primary-hue), 84%, 30%);

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

body {
  background-color: #070707;
  max-height: 100vh;
  color: #FFF;
  -webkit-font-smoothing: antialiased;
}

body, input, button{
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
  font-size: 62.5%;

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
}`;
