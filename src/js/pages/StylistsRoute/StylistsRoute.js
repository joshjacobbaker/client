import React from "react"
import { HashRouter, Routes, Route, Redirect, Outlet } from "react-router-dom"
// import { motion } from "framer-motion"
// import { FaBuilding, FaEnvelope, FaPhoneSquareAlt, FaFacebook, FaInstagramSquare } from "react-icons/fa"

// Layout
import StylistsRouteStyled from "./StylistsStyled"
// Route Components
import Carousel from "../../components/CarouselStylists/CarouselStylists"
const StylistsRoute = () => {
  return (
    <StylistsRouteStyled>
      <Carousel></Carousel>
    </StylistsRouteStyled>
  )
}

export default StylistsRoute
