import React from "react"
import { HashRouter, Routes, Route, Redirect, Outlet } from "react-router-dom"
import { motion } from "framer-motion"

// Layout
import CustomerPageLayoutStyled from "./CustomerPageLayoutStyled"
import CustomerPageHeader from "./CustomerPageHeader/CustomerPageHeader"
import CustomerPageMain from "../CustomerPageMain/CustomerPageMain"
import CustomPageFooter from "../CustomerPageFooter/CustomerPageFooter"

// Route Components
import LandingRoute from "./CustomerRoutes/LandingRoute/LandingRoute"
import ContactRoute from "./CustomerRoutes/ContactRoute/ContactRoute"
import SignupRoute from "./CustomerRoutes/SignupRoute/SignupRoute"
import SigninRoute from "./CustomerRoutes/SigninRoute/SigninRoute"
import StylistsRoute from "./CustomerRoutes/StylistsRoute/StylistsRoute"
import SalonRoute from "./CustomerRoutes/SalonRoute/SalonRoute"

const CustomerPage = () => {
  return (
    <CustomerPageLayoutStyled>
      <CustomerPageHeader />
      <CustomerPageMain>
        <Routes>
          <Route index element={<LandingRoute />} />
          <Route path="landing" element={<LandingRoute />} />
          <Route path="signup" element={<SignupRoute />} />
          <Route path="contact" element={<ContactRoute />} />
          <Route path="signin" element={<SigninRoute />} />
          <Route path="stylists" element={<StylistsRoute />} />
          <Route path="salon" element={<SalonRoute />} />
        </Routes>
        <Outlet />
      </CustomerPageMain>
      <CustomPageFooter />
    </CustomerPageLayoutStyled>
  )
}

export default CustomerPage
