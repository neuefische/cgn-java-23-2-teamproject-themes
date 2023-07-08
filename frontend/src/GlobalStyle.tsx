import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Sansation Regular';
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

    --colorWhite: #EDEDED;
    --colorBlack: #0F0F0F;
    --colorGrey: #353535;

    --winterMain: #81C0FA;
    --winterAccent: #FE8499;
    --springMain: #C5FFC0;
    --springAccent: #79AEB6;
    --summerMain: #FFF59D;
    --summerAccent: #ADA0FF;
    --autumnMain: #CCA69D;
    --autumnAccent: #D78E77;

    --shadow1: 0 2px 3px 0 rgba(0, 0, 0, 0.50);
    --shadow2: 0 1px 2px 0 rgba(0, 0, 0, 0.50);
    /*
    box-shadow: var(--shadow1);
    box-shadow: var(--shadow2);
    */

  }

  body {
    margin: 0;
    padding: 0;

  }

`;

export default GlobalStyle;
