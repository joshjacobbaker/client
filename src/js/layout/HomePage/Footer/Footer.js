import React from "react"
import { NavLink } from "react-router-dom"

import FooterStyled from "./FooterStyled"
import Typing from "../../../components/typing/Typing"
import SocialMediaIcons from "../../../components/socialMediaIcons/SocialMediaIcons"

const Footer = () => {
  return (
    <FooterStyled color="secondary">
      <Typing />
      <SocialMediaIcons />
    </FooterStyled>
  )
}

export default Footer
