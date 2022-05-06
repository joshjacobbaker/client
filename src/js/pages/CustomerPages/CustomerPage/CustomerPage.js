import React from "react"
import { HashRouter, Routes, Route, Redirect, Outlet } from "react-router-dom"
import { motion } from "framer-motion"

// Layout
import CustomerPageStyled from "./CustomerPageStyled"
// Route Components
import Header from "./Header/Header"
import Main from "./Main/Main"
import Footer from "./Footer/Footer"

const LandingRoute = () => {
  return (
    <CustomerPageStyled>
      <Header></Header>
      <Main>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
      </Main>
      <Footer></Footer>
    </CustomerPageStyled>
  )
}

export default LandingRoute
