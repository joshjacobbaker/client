import React from "react"
import { HashRouter, Routes, Route, Redirect, Outlet } from "react-router-dom"
// import { motion } from "framer-motion"
// import { FaBuilding, FaEnvelope, FaPhoneSquareAlt, FaFacebook, FaInstagramSquare } from "react-icons/fa"

// Layout
import SalonRouteStyled from "./SalonStyled"
// Route Components
import Carousel from "../../components/CarouselSalon/CarouselSalon"
const SalonRoute = () => {
  return (
    <SalonRouteStyled>
      <Carousel></Carousel>
    </SalonRouteStyled>
  )
}

export default SalonRoute
