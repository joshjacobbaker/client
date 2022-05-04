import React, { useState } from "react"
// Context
import { ToggleThemeProvider } from "../js/context/ToggleThemeContext"
// import { ThemeProvider } from "styled-components"
// Router
import { HashRouter, Routes, Route, Redirect, Outlet } from "react-router-dom"

// Global Styles
import GlobalStyled from "./globals/GlobalStyled"
// import themeStyled from "./globals/themeContextStyled"
// import theme from "./hooks/UseTheme"

// Pages Components
import HomePage from "./layout/HomePage/HomePage"
import AdminPage from "./layout/AdminPage/AdminPage"

const App = () => {
  return (
    <ToggleThemeProvider>
      <GlobalStyled />
      <HashRouter>
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route exact path="/admin" element={<AdminPage />} />
        </Routes>
      </HashRouter>
    </ToggleThemeProvider>
  )
}

export default App
