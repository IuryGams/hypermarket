"use client";
import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
:root{
  --primary-color: #D10024;
  --secondary-color: #E4E7ED;
  --button-color: #ef233c;
  --background-color: #15161D;
  --text-primary-color: #2B2D42;
  --subtext-color: #8D99AE;
  --green-text: #1F9050;
  --light-green-text: rgb(31, 144, 80);
}

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
}

body{
  min-height: 100dvh;
  background-color: #FAFAFB;
}
`

export default GlobalStyled;