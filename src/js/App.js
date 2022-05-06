import React, { useState } from "react"

// Framer Motion
import { motion, AnimatePresence } from "framer-motion"

// Router
import { BrowserRouter, Routes, Route, Redirect, Outlet, useLocation, Switch } from "react-router-dom"

// Global Styles
import { ToggleThemeProvider } from "../js/context/ToggleThemeContext"

// Pages Components
import CustomerPages from "./pages/CustomerPages/CustomerPage/CustomerPage"
import EmployeePages from "./pages/EmployeePages/EmployeePages"
// initial={false} exitBeforeEnter
const App = () => {
  // const location = useLocation()
  return (
    <ToggleThemeProvider>
      <AnimatePresence initial={false} exitBeforeEnter>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<CustomerPages />} />
            <Route exact path="/admin" element={<EmployeePages />} />
          </Routes>
          <Outlet></Outlet>
        </BrowserRouter>
      </AnimatePresence>
    </ToggleThemeProvider>
  )
}

export default App
