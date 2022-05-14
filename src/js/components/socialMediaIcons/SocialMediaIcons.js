import React from "react"
import SocialMediaIconsContainerFooterStyled, { FaEnvelopeStyled, FaBuildingStyled, FaPhoneSquareAltStyled, FaFacebookStyled, FaInstagramSquareStyled } from "./SocialMediaIconsStyled"
import { motion, AnimatePresence } from "framer-motion"
import { FaBuilding, FaEnvelope, FaPhoneSquareAlt, FaFacebook, FaInstagramSquare } from "react-icons/fa"

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
