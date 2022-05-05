import React, { useState } from "react"

// Framer Motion
import { motion, AnimatePresence } from "framer-motion"

// Router
import { BrowserRouter, Routes, Route, Redirect, Outlet, useLocation, Switch } from "react-router-dom"

// Global Styles
import { ToggleThemeProvider } from "../js/context/ToggleThemeContext"

// Pages Components
import CustomerChapter from "./layout/CustomerChapter/CustomerChapter"
import EmployeeChapter from "./layout/EmployeeChapter/EmployeeChapter"
// initial={false} exitBeforeEnter
const App = () => {
  // const location = useLocation()
  return (
    <ToggleThemeProvider>
      <AnimatePresence initial={false} exitBeforeEnter>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<CustomerChapter />} />
            <Route exact path="/admin" element={<EmployeeChapter />} />
          </Routes>
        </BrowserRouter>
      </AnimatePresence>
    </ToggleThemeProvider>
  )
}

export default App
