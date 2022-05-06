import styled, { css } from "styled-components"
import Typing from "../../../../../components/typing/Typing"
import SocialMediaIcons from "../../../../../components/socialMediaIcons/SocialMediaIcons"
import screenSize from "../../../../../globals/screenSize"

const FooterStyled = styled.footer`
  width: 100vw;
  /* border: 1px solid white; */
  ${({ theme }) =>
    css`
      background: ${theme.backgroundColor};
    `}
  grid-area: footer;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;

  @media ${(props) => props.theme.screenSize.desktop} {
  }

  @media ${(props) => props.theme.screenSize.laptop} {
    /* border: 1px solid white; */
    grid-area: footer;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
    /* background: black; */
    align-items: center;
    justify-items: center;
  }

  @media ${(props) => props.theme.screenSize.mobileL} {
    grid-area: footer;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;
  }
`

export default FooterStyled
