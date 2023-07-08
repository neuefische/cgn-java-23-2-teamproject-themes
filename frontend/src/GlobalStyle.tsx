import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Sansation';
    src: url('../public/fonts/Sansation_Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Sansation Light';
    src: url('../public/fonts/Sansation_Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }
  

  :root {
    --font1: 'Sansation Regular', sans-serif;
    --font2: 'Sansation Light', sans-serif;
    
    --winterMain: #81C0FA;
    --winterAccent: #FE8499;
    --springMain: #C5FFC0;
    --springAccent: #79AEB6;
    --summerMain: #FFF59D;
    --summerAccent: #ADA0FF;
    --autumnMain: #CCA69D;
    --autumnAccent: #D78E77;
  }
  
  body {
    margin: 0;
    padding: 0;
  }
  
`;

export default GlobalStyle;
