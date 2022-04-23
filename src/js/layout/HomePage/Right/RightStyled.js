import styled from "styled-components"
import screenSize from "../../../globals/screenSize"

const RightStyled = styled.div`
  border: 1px solid $color-white;
  background-color: $color-black;
  grid-area: right;
  overflow: hidden;

  @media ${screenSize.desktop} {
  }
  @media ${screenSize.laptop} {
  }
  @media ${screenSize.mobileL} {
  }
`

export default RightStyled
