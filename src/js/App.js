import React, { useState } from "react"

// Framer Motion
import { motion, AnimatePresence } from "framer-motion"

// Router
import { BrowserRouter, Routes, Route, Redirect, Outlet, useLocation, Switch } from "react-router-dom"

// Global Styles
import { ToggleThemeProvider } from "../js/context/ToggleThemeContext"
import IconContextProvider from "../js/context/IconContext"

// Pages Components
import CustomerPages from "./pages/CustomerPages/CustomerPage/CustomerPage"
import EmployeePages from "./pages/EmployeePages/EmployeePage/EmployeePage"
// initial={false} exitBeforeEnter
const App = () => {
  // const location = useLocation()
  return (
    <IconContextProvider>
      <ToggleThemeProvider>
        <AnimatePresence initial={false} exitBeforeEnter>
          <BrowserRouter>
            <Routes>
              <Route index path="/*" element={<CustomerPages />} />
              <Route path="/employee" element={<EmployeePages />} />
            </Routes>
            <Outlet></Outlet>
          </BrowserRouter>
        </AnimatePresence>
      </ToggleThemeProvider>
    </IconContextProvider>
  )
}

export default App
