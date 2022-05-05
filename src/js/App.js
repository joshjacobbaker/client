import React, { useState } from "react"

// Router
import { HashRouter, Routes, Route, Redirect, Outlet } from "react-router-dom"

// Global Styles
import { ToggleThemeProvider } from "../js/context/ToggleThemeContext"

// Pages Components
import CustomerChapter from "./layout/CustomerChapter/CustomerChapter"
import EmployeeChapter from "./layout/EmployeeChapter/EmployeeChapter"

const App = () => {
  return (
    <ToggleThemeProvider>
      <HashRouter>
        <Routes>
          <Route path="/*" element={<CustomerChapter />} />
          <Route exact path="/admin" element={<EmployeeChapter />} />
        </Routes>
      </HashRouter>
    </ToggleThemeProvider>
  )
}

export default App
