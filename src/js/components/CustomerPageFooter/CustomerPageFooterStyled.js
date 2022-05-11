import styled, { css } from "styled-components"
// import Typing from "../../../../../components/typing/Typing"
// import SocialMediaIcons from "../../../../../components/socialMediaIcons/SocialMediaIcons"
// import screenSize from "../../../../../globals/screenSize"

const FooterStyled = styled.footer`
  width: 100vw;
  /* border: 1px solid white; */
  ${({ theme }) =>
    css`
      background: ${theme.backgroundColor};
    `}
  /* height: 100%;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center; */

  @media ${(props) => props.theme.screenSize.desktop} {
  }

  @media ${(props) => props.theme.screenSize.laptop} {
    /* border: 1px solid white; */
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
  }

  @media ${(props) => props.theme.screenSize.mobileL} {
    position: fixed;
    ${({ show }) => css`
      height: ${show ? "10vh" : "3vh"}};
    `}
    bottom: 0;
    left: 0;
    right: 0;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;
    margin: 0 0;
    padding: 0 0;
  }
`

export default FooterStyled
