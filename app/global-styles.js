import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url(‘https://fonts.googleapis.com/css?family=Montserrat|Roboto');

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: Roboto, sans-serif;
  }

  h1 {
    font-family: Montserrat;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }
`;

export default GlobalStyle;
