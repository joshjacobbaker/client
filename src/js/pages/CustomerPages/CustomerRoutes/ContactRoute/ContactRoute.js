import React from "react"
import { HashRouter, Routes, Route, Redirect, Outlet } from "react-router-dom"
// import { motion } from "framer-motion"
import { FaBuilding, FaEnvelope, FaPhoneSquareAlt, FaFacebook, FaInstagramSquare } from "react-icons/fa"

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
            <FaPhoneSquareAlt /> (360)-123-4567
          </li>
          <li>
            <FaEnvelope /> You@gmail.com
          </li>
          <li>
            <FaInstagramSquare />
            @You.Handle.Instagram
          </li>
          <li>
            <FaFacebook /> @You.Handle.Facebook
          </li>
          <li>
            <FaBuilding />
            Address: 123 Fake St. Mount Vernon, Wa 98273
          </li>
        </ul>
      </ContactRouteDivStyled>
    </ContactRouteStyled>
  )
}

export default LandingRoute
