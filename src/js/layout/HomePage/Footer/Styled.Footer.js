import styled from "styled-components"

import Typing from "../../../components/typing/Typing"
import SocialMediaIcons from "../../../components/socialMediaIcons/SocialMediaIcons"
import deviceSize from "../../../globals/device"

const Footer = styled.footer`
  border: 1px solid white;
  background: black;
  grid-area: footer;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;

  @media ${deviceSize.desktop} {
  }

  @media ${deviceSize.laptop} {
    border: 1px solid white;
    grid-area: footer;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
    background: black;
    align-items: center;
    justify-items: center;
  }

  @media ${deviceSize.mobileL} {
  }
`
const FooterOutput = () => {
  return (
    <Footer>
      <Typing />
      <SocialMediaIcons />
    </Footer>
  )
}

export default FooterOutput
