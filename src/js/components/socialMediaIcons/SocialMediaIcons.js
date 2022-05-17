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
      <a href="#">
        <FaPhoneSquareAltStyled />
      </a>
      <a href="#">
        <FaFacebookStyled />
      </a>
      <a href="#">
        <FaInstagramSquareStyled />
      </a>
    </SocialMediaIconsContainerFooterStyled>
  )
}

export default SocialMediaIcons
