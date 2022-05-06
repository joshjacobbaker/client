import styled from "styled-components"

const RightStyled = styled.div`
  /* width: 100vw; */
  grid-area: right;
  overflow: hidden;

  @media ${(props) => props.theme.screenSize.desktop} {
  }
  @media ${(props) => props.theme.screenSize.laptop} {
  }
  @media ${(props) => props.theme.screenSize.mobileL} {
  }
`

export default RightStyled
