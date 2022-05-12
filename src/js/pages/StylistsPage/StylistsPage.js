import React from "react"
import { HashRouter, Routes, Route, Redirect, Outlet } from "react-router-dom"
// import { motion } from "framer-motion"
// import { FaBuilding, FaEnvelope, FaPhoneSquareAlt, FaFacebook, FaInstagramSquare } from "react-icons/fa"

// Layout
import StylistsPageStyled from "./StylistsPageStyled"
// Page Components
import Carousel from "../../components/CarouselStylists/CarouselStylists"
const StylistsPage = () => {
  return (
    <StylistsPageStyled>
      <Carousel></Carousel>
    </StylistsPageStyled>
  )
}

export default StylistsPage
