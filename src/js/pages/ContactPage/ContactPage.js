import React from "react"
import { HashRouter, Routes, Route, Redirect, Outlet } from "react-router-dom"
// import { motion } from "framer-motion"
// import { FaBuilding, FaEnvelope, FaPhoneSquareAlt, FaFacebook, FaInstagramSquare } from "react-icons/fa"
import { FaEnvelopeStyled, FaBuildingStyled, FaPhoneSquareAltStyled, FaFacebookStyled, FaInstagramSquareStyled } from "../../components/socialMediaIcons/SocialMediaIconsStyled"

// Layout
import ContactPageStyled, { ContactPageDivStyled } from "./ContactPageStyled"
// Route Components

const ContactPage = () => {
  return (
    <ContactPageStyled>
      <ContactPageDivStyled>
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
      </ContactPageDivStyled>
    </ContactPageStyled>
  )
}

export default ContactPage
