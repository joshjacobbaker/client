import React from "react"
import { HashRouter, Routes, Route, Redirect, Outlet } from "react-router-dom"
// import { motion } from "framer-motion"
// import { FaBuilding, FaEnvelope, FaPhoneSquareAlt, FaFacebook, FaInstagramSquare } from "react-icons/fa"

// Layout
import StylistsPageStyled from "./StylistsPageStyled"
// Page Components
import Carousel from "../../components/CarouselStylists/CarouselStylists"
// Animations
import pageTransitionVariants from "../../animations/pageTransitionVariants"

const StylistsPage = () => {
  return (
    <StylistsPageStyled key="stylistspage" variants={pageTransitionVariants} initial="initial" animate="animate" exit="exit">
      <Carousel></Carousel>
    </StylistsPageStyled>
  )
}

export default StylistsPage
