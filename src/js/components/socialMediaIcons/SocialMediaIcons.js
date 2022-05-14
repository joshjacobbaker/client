import React from "react"
import SocialMediaIconsContainerFooterStyled, { FaEnvelopeStyled, FaBuildingStyled, FaPhoneSquareAltStyled, FaFacebookStyled, FaInstagramSquareStyled } from "./SocialMediaIconsStyled"
import { motion, AnimatePresence } from "framer-motion"

const SocialMediaIcons = () => {
  return (
    <SocialMediaIconsContainerFooterStyled>
      <FaBuildingStyled />
      <FaEnvelopeStyled />
      <FaPhoneSquareAltStyled />
      <FaFacebookStyled />
      <FaInstagramSquareStyled />
    </SocialMediaIconsContainerFooterStyled>
  )
}

export default SocialMediaIcons
