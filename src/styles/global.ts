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
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  body {
    background-color: #FFFFFF;
    max-width: 980px !important;
    margin: auto !important;
    float: none !important;
    color: var(--primary-color);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto Mono', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
