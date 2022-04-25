import styled, { css } from "styled-components"

import Typing from "../../../components/typing/Typing"
import SocialMediaIcons from "../../../components/socialMediaIcons/SocialMediaIcons"
import screenSize from "../../../globals/screenSize"

const FooterStyled = styled.footer`
  border: 1px solid white;
  /* background: ${(props) => props.theme.primary} */
  ${(props) =>
    css`
      background: linear-gradient(red, ${props.theme.color});
    `}
  grid-area: footer;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;

  @media ${screenSize.desktop} {
  }

  @media ${screenSize.laptop} {
    border: 1px solid white;
    grid-area: footer;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
    /* background: black; */
    align-items: center;
    justify-items: center;
    ${(props) =>
      props.color &&
      css`
        background-color: ${(props) => props.theme[props.color]};
      `}
  }

  @media ${screenSize.mobileL} {
    ${(props) =>
      props.color &&
      css`
        background-color: ${(props) => props.theme[props.color]};
      `}
  }
`

export default FooterStyled
