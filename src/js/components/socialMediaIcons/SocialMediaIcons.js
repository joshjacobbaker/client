import React from "react"
import SocialMediaIconsContainerFooterStyled, { FaEnvelopeStyled, FaBuildingStyled, FaPhoneSquareAltStyled, FaFacebookStyled, FaInstagramSquareStyled } from "./SocialMediaIconsStyled"
import { motion, AnimatePresence } from "framer-motion"

const SocialMediaIcons = () => {
  return (
    <AnimatePresence>
      <SocialMediaIconsContainerFooterStyled>
        <FaEnvelopeStyled />
        <FaPhoneSquareAltStyled />
        <FaFacebookStyled />
        <FaInstagramSquareStyled />
        <FaBuildingStyled />
      </SocialMediaIconsContainerFooterStyled>
    </AnimatePresence>
  )
}

export default SocialMediaIcons
