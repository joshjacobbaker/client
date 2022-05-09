import React from "react"
import { HashRouter, Routes, Route, Redirect, Outlet } from "react-router-dom"
import { motion } from "framer-motion"

// Layout
import CustomerPageStyled from "./CustomerPageStyled"
import CustomerPageHeader from "./CustomerPageHeader/CustomerPageHeader"
import CustomerPageMain from "./CustomerPageMain/CustomerPageMain"
import CustomPageFooter from "./CustomerPageFooter/CustomerPageFooter"

// Route Components
import LandingRoute from "../CustomerRoutes/LandingRoute/LandingRoute"
import ContactRoute from "../CustomerRoutes/ContactRoute/ContactRoute"
import SignupRoute from "../CustomerRoutes/SignupRoute/SignupRoute"

const CustomerPage = () => {
  return (
    <CustomerPageStyled>
      <CustomerPageHeader />
      <CustomerPageMain>
        <div>
          <h1>HI</h1>
          <p>text</p>
          <p>text</p>
          <p>text</p>
        </div>
        <Routes>
          <Route index path="/" element={<LandingRoute />} />
          <Route path="/signup" element={<SignupRoute />} />
          <Route path="/contact" element={<ContactRoute />} />
        </Routes>
        <Outlet />
      </CustomerPageMain>
      <CustomPageFooter />
    </CustomerPageStyled>
  )
}

export default CustomerPage
