import React, { useState } from "react"

// Framer Motion
import { motion, AnimatePresence } from "framer-motion"

// Router
import { Routes, Route, Redirect, Outlet, useLocation, Switch } from "react-router-dom"

// Context
import { ToggleThemeProvider } from "../js/context/ToggleThemeContext"
import IconContextProvider from "../js/context/IconContext"
import ModalContextProvider from "../js/context/ModalContext"

// Components
import CustomerPageLayoutStyled from "./components/CustomerPageLayout/CustomerPageLayoutStyled"
import CustomerPageHeader from "./components/CustomerPageHeader/CustomerPageHeader"
import CustomerPageMain from "./components/CustomerPageMain/CustomerPageMain"
import CustomerPageFooter from "./components/CustomerPageFooter/CustomerPageFooter"
import HelmetHead from "./components/HelmetHead/HelmetHead"
import BackToTopButton from "./components/BackToTopButton/BackToTopButton"

// Routes
import ContactPage from "./pages/ContactPage/ContactPage"
import LandingPage from "./pages/LandingPage/LandingPage"
import SalonPage from "./pages/SalonPage/SalonPage"
import StylistsPage from "./pages/StylistsPage/StylistsPage"
import SigninPage from "./pages/LoginPage/LoginPage"
import SignupPage from "./pages/SignupPage/SignupPage"

const App = () => {
  const location = useLocation()
  console.log(location)
  return (
    <ModalContextProvider>
      <ToggleThemeProvider>
        <HelmetHead />
        <CustomerPageLayoutStyled>
          <CustomerPageHeader />
          <CustomerPageMain>
            <AnimatePresence initial={false} exitBeforeEnter>
              <Routes location={location} key={location.pathname}>
                <Route path="/" exact element={<LandingPage />} />
                <Route path="landing" element={<LandingPage />} />
                <Route path="signup" element={<SignupPage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="login" element={<SigninPage />} />
                <Route path="stylists" element={<StylistsPage />} />
                <Route path="salon" element={<SalonPage />} />
              </Routes>
            </AnimatePresence>
          </CustomerPageMain>
          <CustomerPageFooter />
        </CustomerPageLayoutStyled>
      </ToggleThemeProvider>
    </ModalContextProvider>
  )
}

export default App
