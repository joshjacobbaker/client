import React, { useState } from "react"

// Framer Motion
import { motion, AnimatePresence } from "framer-motion"

// Router
import { BrowserRouter, Routes, Route, Redirect, Outlet, useLocation, Switch } from "react-router-dom"

// Context
import { ToggleThemeProvider } from "../js/context/ToggleThemeContext"
import IconContextProvider from "../js/context/IconContext"
import ModalContextProvider from "../js/context/ModalContext"

// Components
import CustomerPageBodyStyled from "./components/CustomerPageBody/CustomerPageBodyStyled"
import CustomerPageHeader from "./components/CustomerPageHeader/CustomerPageHeader"
import CustomerPageMain from "./components/CustomerPageMain/CustomerPageMain"
import CustomerPageFooter from "./components/CustomerPageFooter/CustomerPageFooter"
// Routes
import ContactRoute from "./pages/ContactRoute/ContactRoute"
import LandingRoute from "./pages/LandingRoute/LandingRoute"
import SalonRoute from "./pages/SalonRoute/SalonRoute"
import StylistsRoute from "./pages/StylistsRoute/StylistsRoute"
import SigninRoute from "./pages/SigninRoute/SigninRoute"
import SignupRoute from "./pages/SignupRoute/SignupRoute"

const App = () => {
  // const location = useLocation()
  return (
    <ModalContextProvider>
      <IconContextProvider>
        <ToggleThemeProvider>
          <AnimatePresence initial={false} exitBeforeEnter>
            <BrowserRouter>
              <CustomerPageBodyStyled>
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
                <CustomerPageFooter />
              </CustomerPageBodyStyled>
            </BrowserRouter>
          </AnimatePresence>
        </ToggleThemeProvider>
      </IconContextProvider>
    </ModalContextProvider>
  )
}

export default App
