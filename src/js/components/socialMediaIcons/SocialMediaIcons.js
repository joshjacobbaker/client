import React from "react"
import SocialMediaIconsStyled, { FaEnvelopeStyled } from "./SocialMediaIconsStyled"
import { FaBuilding, FaEnvelope, FaPhoneSquareAlt, FaFacebook, FaInstagramSquare } from "react-icons/fa"

const SocialMediaIcons = () => {
  return (
    <SocialMediaIconsStyled>
      <FaEnvelopeStyled />
      <FaPhoneSquareAlt />
      <FaFacebook />
      <FaInstagramSquare />
      <FaBuilding />
    </SocialMediaIconsStyled>
  )
}

export default SocialMediaIcons
