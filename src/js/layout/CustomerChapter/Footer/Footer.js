import React from "react"
import { NavLink } from "react-router-dom"

import FooterStyled from "./FooterStyled"
import Typing from "../../../components/typing/Typing"
import SocialMediaIcons from "../../../components/socialMediaIcons/SocialMediaIcons"

const Footer = () => {
  return (
    <FooterStyled color="secondary">
      {/* <Typing /> */}
      <SocialMediaIcons />
      {/* <div>Hi</div>
      <div>hi</div>
      <div>Hi</div>
      <div>hi</div>
      <div>Hi</div>
      <div>hi</div>
      <div>Hi</div>
      <div>hi</div> */}
    </FooterStyled>
  )
}

export default Footer
