import React from "react"
import { HashRouter, Routes, Route, Redirect, Outlet } from "react-router-dom"
// import { motion } from "framer-motion"
// import { FaBuilding, FaEnvelope, FaPhoneSquareAlt, FaFacebook, FaInstagramSquare } from "react-icons/fa"

// Layout
import StylistsPageStyled from "./StylistsPageStyled"
// Page Components
import StylistsCarousel from "../../components/CarouselStylists/CarouselStylists"
// Animations
import pageTransitionVariants from "../../animations/pageTransitionVariants"

const StylistsPage = () => {
  return (
    <StylistsPageStyled key="stylistspage" transitions={{ duration: 1 }} variants={pageTransitionVariants} initial="initial" animate="animate" exit="exit">
      <StylistsCarousel />
    </StylistsPageStyled>
  )
}

export default StylistsPage
