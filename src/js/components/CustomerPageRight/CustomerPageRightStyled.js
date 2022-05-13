import styled from "styled-components"

const CustomerPageRightStyled = styled.div`
  /* width: 100vw; */
  grid-area: right;
  overflow: hidden;
  ${({ theme }) => css`
    background: ${theme.rightBackgroundColor};
    color: ${theme.rightFontColor};
  `}

  @media ${(props) => props.theme.screenSize.desktop} {
  }
  @media ${(props) => props.theme.screenSize.laptop} {
  }
  @media ${(props) => props.theme.screenSize.mobileL} {
  }
`

export default CustomerPageRightStyled
