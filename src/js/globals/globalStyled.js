import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/*Percentage is better for Browser/User Accessibility */
html {
  //This defines what 1 rem is
  font-size: 62.5%;
}

// Reset List Styles
li {
  list-style: none;

  & > * {
    text-decoration: none;
    color: inherit;
  }
}
  
body {
  font-family: sans-serif;
  font-weight: 400;
  line-height: 1.7;
  color: grey;
  background-color: charcoal;
  padding: 1rem;
}

${
  "" /* main {
  font-family: sans-serif;
  font-weight: 400;
  line-height: 1.7;
  color: grey;
  background-color: charcoal;
  padding: 1rem;
} */
}

`

export const Container = styled.div``

export default GlobalStyle
