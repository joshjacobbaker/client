import React from "react"
import { NavLink } from "react-router-dom"

import Typing from "../../../components/typing/Typing"
import SocialMediaIcons from "../../../components/socialMediaIcons/SocialMediaIcons"

const Footer = () => {
  return (
    <footer className="footer">
      <Typing />
      <SocialMediaIcons />
    </footer>
  )
}

export default Footer
