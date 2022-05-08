import React from "react"
import SocialMediaIconsStyled from "./SocialMediaIconsStyled"
import { FaEnvelope, FaPhoneSquareAlt, FaFacebook, FaInstagramSquare } from "react-icons/fa"

const SocialMediaIcons = () => {
  return (
    <SocialMediaIconsStyled>
      {/* <i className="fa fa-apple" id="apple"></i>
      <i className="fa fa-twitter" id="twitter"></i>
      <i className="fa fa-github-square github" id="github"></i>
      <i className="fa fa-facebook-square" id="facebook"></i> */}
      <FaEnvelope />
      <FaPhoneSquareAlt />
      <FaFacebook />
      <FaInstagramSquare />
    </SocialMediaIconsStyled>
  )
}

export default SocialMediaIcons
