import styled from "styled-components"
import screenSize from "../../../globals/screenSize"

const MainStyled = styled.main`
  /* height: 100%; */
  width: 100vw;
  /* border: 1px solid white; */
  background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c);
  grid-area: main;
  overflow: scroll;
  display: grid;
  @media ${screenSize.mobileL} {
    background: linear-gradient(0.25turn, green, #ebf8e1, #f69d3c);
  }
  justify-items: center;
  align-items: center;
`

export default MainStyled
/* @media ${screenSize.desktop} {
  }

  @media ${screenSize.laptop} {
  }

*/
