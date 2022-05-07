import React from "react"
import { HashRouter, Routes, Route, Redirect, Outlet } from "react-router-dom"
import { motion } from "framer-motion"

// Layout
import CustomerPageStyled from "./EmployeePageStyled"
// Route Components
import Header from "./Header/Header"
import Main from "./Main/Main"
import Footer from "./Footer/Footer"

const LandingRoute = () => {
  return (
    <CustomerPageStyled>
      <Header></Header>
      <Main>
        <Routes>
          <Route path="/" element={<p>Hiiii</p>} />
          <Route path="/yo" element={<p>yo</p>} />
        </Routes>
      </Main>
      <Footer></Footer>
    </CustomerPageStyled>
  )
}

export default LandingRoute
