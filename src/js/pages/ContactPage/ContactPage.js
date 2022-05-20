import React from "react"
import { HashRouter, Routes, Route, Redirect, Outlet } from "react-router-dom"
// import { motion } from "framer-motion"
// import { FaBuilding, FaEnvelope, FaPhoneSquareAlt, FaFacebook, FaInstagramSquare } from "react-icons/fa"

// Layout
import ContactPageStyled, { ContactPageDivStyled } from "./ContactPageStyled"
// Components
import { FaEnvelopeStyled, FaBuildingStyled, FaPhoneSquareAltStyled, FaFacebookStyled, FaInstagramSquareStyled } from "../../components/socialMediaIcons/SocialMediaIconsStyled"
// Animations
import pageTransitionVariants from "../../animations/pageTransitionVariants"
const ContactPage = () => {
  return (
    <ContactPageStyled key="contactpage" transitions={{ duration: 1 }} variants={pageTransitionVariants} initial="initial" animate="animate" exit="exit">
      <ContactPageDivStyled>
        <h1>We Love You!</h1>
        <ul>
          <li>
            <a href="#">
              <FaPhoneSquareAltStyled />
            </a>
            <p>(360)-123-4567</p>
          </li>
          <li>
            <a href="#">
              <FaEnvelopeStyled />
            </a>
            <p>You@gmail.com</p>
          </li>
          <li>
            <a href="https://instagram.com">
              <FaInstagramSquareStyled />
            </a>
            <p>@You.Handle.Instagram</p>
          </li>
          <li>
            <a href="https://facebook.com">
              <FaFacebookStyled />
            </a>
            <p>@You.Handle.Facebook</p>
          </li>
          <li>
            <a href="#">
              <FaBuildingStyled />
            </a>
            <p>Address: 123 Fake St. Mount Vernon, Wa 98273</p>
          </li>
        </ul>
      </ContactPageDivStyled>
    </ContactPageStyled>
  )
}

export default ContactPage
