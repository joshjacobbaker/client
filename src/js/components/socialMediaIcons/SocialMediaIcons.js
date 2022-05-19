import React from "react"
import SocialMediaIconsContainerFooterStyled, { FaEnvelopeStyled, FaBuildingStyled, FaPhoneSquareAltStyled, FaFacebookStyled, FaInstagramSquareStyled } from "./SocialMediaIconsStyled"
import { motion, AnimatePresence } from "framer-motion"

const SocialMediaIcons = () => {
  return (
    <SocialMediaIconsContainerFooterStyled>
      <a href="#">
        <FaBuildingStyled />
      </a>
      <a href="#">
        <FaEnvelopeStyled />
      </a>
      <a href="https://instagram.com">
        <FaPhoneSquareAltStyled />
      </a>
      <a href="https://facebook.com">
        <FaFacebookStyled />
      </a>
      <a href="https://instagram.com">
        <FaInstagramSquareStyled />
      </a>
    </SocialMediaIconsContainerFooterStyled>
  )
}

export default SocialMediaIcons
