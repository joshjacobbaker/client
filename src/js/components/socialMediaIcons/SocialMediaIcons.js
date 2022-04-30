import React from "react"
import SocialMediaIconsStyled from "./SocialMediaIconsStyled"

// Classnames are from the icon library

const SocialMediaIcons = () => {
  return (
    <SocialMediaIconsStyled>
      <i className="fa fa-apple" id="apple"></i>
      <i className="fa fa-twitter" id="twitter"></i>
      <i className="fa fa-github-square github" id="github"></i>
      <i className="fa fa-facebook-square" id="facebook"></i>
    </SocialMediaIconsStyled>
  )
}

export default SocialMediaIcons
