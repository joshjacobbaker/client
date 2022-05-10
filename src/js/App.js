import React, { useState } from "react"

// Framer Motion
import { motion, AnimatePresence } from "framer-motion"

// Router
import { BrowserRouter, Routes, Route, Redirect, Outlet, useLocation, Switch } from "react-router-dom"

// Context
import { ToggleThemeProvider } from "../js/context/ToggleThemeContext"
import IconContextProvider from "../js/context/IconContext"
import ModalContextProvider from "../js/context/ModalContext"

// Pages Components
import CustomerPages from "./pages/CustomerPages/CustomerPage/CustomerPage"
import EmployeePages from "./pages/EmployeePages/EmployeePage/EmployeePage"
// initial={false} exitBeforeEnter
const App = () => {
  // const location = useLocation()
  return (
    <ModalContextProvider>
      <IconContextProvider>
        <ToggleThemeProvider>
          <AnimatePresence initial={false} exitBeforeEnter>
            <BrowserRouter>
              <Routes>
                <Route index element={<CustomerPages />} />
                <Route path="/*" element={<CustomerPages />} />
                <Route exact path="/employee" element={<EmployeePages />} />
              </Routes>
              <Outlet></Outlet>
            </BrowserRouter>
          </AnimatePresence>
        </ToggleThemeProvider>
      </IconContextProvider>
    </ModalContextProvider>
  )
}

export default App
