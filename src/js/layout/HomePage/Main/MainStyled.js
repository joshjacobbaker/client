import styled from "styled-components"

const MainStyled = styled.main`
  height: 100%;
  width: 100vw;
  /* border: 1px solid white; */
  background-color: linear-gradient(to-bottom, black, white)
  grid-area: main;
  overflow: scroll;
  display: grid;
  justify-items: center;
  align-items: center;
`

export default MainStyled
/* @media ${screenSize.desktop} {
  }

  @media ${screenSize.laptop} {
  }

  @media ${screenSize.mobileL} {
  } */
