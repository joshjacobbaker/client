import React from "react"
import { HashRouter, Routes, Route, Redirect, Outlet } from "react-router-dom"
// import { motion } from "framer-motion"

// Layout
import ContactRouteStyled, { ContactRouteDivStyled } from "./ContactRouteStyled"
// Route Components

const LandingRoute = () => {
  return (
    <ContactRouteStyled>
      <ContactRouteDivStyled>
        <p>Contact Route</p>
        <p>adsjfkjkdajfljdsfjdskalj</p>
      </ContactRouteDivStyled>
    </ContactRouteStyled>
  )
}

export default LandingRoute
