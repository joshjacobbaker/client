import React from "react"
import { NavLink } from "react-router-dom"

import FooterStyled from "./FooterStyled"
import SocialMediaIcons from "../../../../../components/socialMediaIcons/SocialMediaIcons"

const Footer = () => {
  return (
    <FooterStyled color="secondary">
      <SocialMediaIcons />
    </FooterStyled>
  )
}

export default Footer
