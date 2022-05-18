import React, { useState, Suspense } from "react"

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
import RouteNotFound from "./components/RouteNotFound/RouteNotFound"

// Routes
// import ContactPage from "./pages/ContactPage/ContactPage"
// import LandingPage from "./pages/LandingPage/LandingPage"
// import SalonPage from "./pages/SalonPage/SalonPage"
// import StylistsPage from "./pages/StylistsPage/StylistsPage"
// import SigninPage from "./pages/LoginPage/LoginPage"
// import SignupPage from "./pages/SignupPage/SignupPage"
const ContactPageLazy = React.lazy(() => {
  return import("./pages/ContactPage/ContactPage")
})
const LandingPageLazy = React.lazy(() => {
  return import("./pages/LandingPage/LandingPage")
})
const SalonPageLazy = React.lazy(() => {
  return import("./pages/SalonPage/SalonPage")
})
const StylistsPageLazy = React.lazy(() => {
  return import("./pages/StylistsPage/StylistsPage")
})
const LoginPageLazy = React.lazy(() => {
  return import("./pages/LoginPage/LoginPage")
})
const SignupPageLazy = React.lazy(() => {
  return import("./pages/SignupPage/SignupPage")
})

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
              <Suspense fallback={<div>...Loading</div>}>
                <Routes location={location} key={location.pathname}>
                  <Route path="/" exact element={<LandingPageLazy />} />
                  <Route path="landing" element={<LandingPageLazy />} />
                  <Route path="signup" element={<SignupPageLazy />} />
                  <Route path="contact" element={<ContactPageLazy />} />
                  <Route path="login" element={<LoginPageLazy />} />
                  <Route path="stylists" element={<StylistsPageLazy />} />
                  <Route path="salon" element={<SalonPageLazy />} />
                  <Route path="*" element={<RouteNotFound />} />
                </Routes>
              </Suspense>
            </AnimatePresence>
          </CustomerPageMain>
          <CustomerPageFooter />
        </CustomerPageLayoutStyled>
      </ToggleThemeProvider>
    </ModalContextProvider>
  )
}

export default App
