import styled, { css } from "styled-components"

const MainStyled = styled.main`
  width: 100vw;
  /* background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c); */
  grid-area: main;
  overflow: scroll;
  display: grid;
  @media ${(props) => props.theme.screenSize.mobileL} {
    background: linear-gradient(0.25turn, green, #ebf8e1, #f69d3c);
    /* grid-auto-flow: column; */
    grid-template-rows: 80vh;
    grid-auto-rows: 80vh;
  }
  justify-items: center;
  align-items: center;
  ${(props) => css`
    background: linear-gradient(to right, ${props.theme.colors.teal}, ${props.theme.colors.yellow});
  `}
`

export default MainStyled
/* @media ${screenSize.desktop} {
  }

  @media ${screenSize.laptop} {
  }

*/
