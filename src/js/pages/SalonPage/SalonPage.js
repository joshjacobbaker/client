import React from "react"
import { HashRouter, Routes, Route, Redirect, Outlet } from "react-router-dom"
// import { motion } from "framer-motion"
// import { FaBuilding, FaEnvelope, FaPhoneSquareAlt, FaFacebook, FaInstagramSquare } from "react-icons/fa"

// Layout
import SalonPageStyled from "./SalonPageStyled"
// Page Components
import Carousel from "../../components/CarouselSalon/CarouselSalon"
// Animation
import pageTransitionVariants from "../../animations/pageTransitionVariants"

const SalonPage = () => {
  return (
    <SalonPageStyled key="loginpage" transitions={{ duration: 1 }} variants={pageTransitionVariants} initial="initial" animate="animate" exit="exit">
      <Carousel></Carousel>
    </SalonPageStyled>
  )
}

export default SalonPage
