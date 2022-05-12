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
import CustomerPageLayoutStyled from "./components/CustomerPageLayout/CustomerPageLayoutStyled"
import CustomerPageHeader from "./components/CustomerPageHeader/CustomerPageHeader"
import CustomerPageMain from "./components/CustomerPageMain/CustomerPageMain"
import CustomerPageFooter from "./components/CustomerPageFooter/CustomerPageFooter"
import HelmetHead from "./components/HelmetHead/HelmetHead"
// Routes
import ContactPage from "./pages/ContactPage/ContactPage"
import LandingPage from "./pages/LandingPage/LandingPage"
import SalonPage from "./pages/SalonPage/SalonPage"
import StylistsPage from "./pages/StylistsPage/StylistsPage"
import SigninPage from "./pages/SigninPage/SigninPage"
import SignupPage from "./pages/SignupPage/SignupPage"

const App = () => {
  // const location = useLocation()
  return (
    <ModalContextProvider>
      <IconContextProvider>
        <ToggleThemeProvider>
          <AnimatePresence initial={false} exitBeforeEnter>
            <BrowserRouter>
              <HelmetHead />
              <CustomerPageLayoutStyled>
                <CustomerPageHeader />
                <CustomerPageMain>
                  <Routes>
                    <Route index element={<LandingPage />} />
                    <Route path="landing" element={<LandingPage />} />
                    <Route path="signup" element={<SignupPage />} />
                    <Route path="contact" element={<ContactPage />} />
                    <Route path="signin" element={<SigninPage />} />
                    <Route path="stylists" element={<StylistsPage />} />
                    <Route path="salon" element={<SalonPage />} />
                  </Routes>
                  <Outlet />
                </CustomerPageMain>
                <CustomerPageFooter />
              </CustomerPageLayoutStyled>
            </BrowserRouter>
          </AnimatePresence>
        </ToggleThemeProvider>
      </IconContextProvider>
    </ModalContextProvider>
  )
}

export default App
