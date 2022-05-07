import React from "react"
import { HashRouter, Routes, Route, Redirect, Outlet } from "react-router-dom"
import { motion } from "framer-motion"

// Layout
import CustomerPageStyled from "./CustomerPageStyled"
import CustomerPageHeader from "./CustomerPageHeader/CustomerPageHeader"
import CustomerPageMain from "./CustomerPageMain/CustomerPageMain"
import Footer from "./CustomerPageFooter/CustomerPageFooter"

// Route Components
import LandingRoute from "../CustomerRoutes/LandingRoute/LandingRoute"

const CustomerPage = () => {
  return (
    <CustomerPageStyled>
      <CustomerPageHeader></CustomerPageHeader>
      <CustomerPageMain>
        <Routes>
          <Route path="/" element={<LandingRoute />} />
          <Route path="/yo" element={<p>yo</p>} />
          <Route path="/signup" element={<p>signup</p>} />
          <Route path="/contact" element={<p>contact</p>} />
        </Routes>
      </CustomerPageMain>
    </CustomerPageStyled>
  )
}

export default CustomerPage
