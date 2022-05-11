import React from "react"
import { HashRouter, Routes, Route, Redirect, Outlet } from "react-router-dom"
// import { motion } from "framer-motion"
// import { FaBuilding, FaEnvelope, FaPhoneSquareAlt, FaFacebook, FaInstagramSquare } from "react-icons/fa"
import { FaEnvelopeStyled, FaBuildingStyled, FaPhoneSquareAltStyled, FaFacebookStyled, FaInstagramSquareStyled } from "../../components/socialMediaIcons/SocialMediaIconsStyled"

// Layout
import ContactRouteStyled, { ContactRouteDivStyled } from "./ContactRouteStyled"
// Route Components

const LandingRoute = () => {
  return (
    <ContactRouteStyled>
      <ContactRouteDivStyled>
        <h1>We Love You!</h1>
        <ul>
          <li>
            <FaPhoneSquareAltStyled /> (360)-123-4567
          </li>
          <li>
            <FaEnvelopeStyled /> You@gmail.com
          </li>
          <li>
            <FaInstagramSquareStyled />
            @You.Handle.Instagram
          </li>
          <li>
            <FaFacebookStyled /> @You.Handle.Facebook
          </li>
          <li>
            <FaBuildingStyled />
            Address: 123 Fake St. Mount Vernon, Wa 98273
          </li>
        </ul>
      </ContactRouteDivStyled>
    </ContactRouteStyled>
  )
}

export default LandingRoute
