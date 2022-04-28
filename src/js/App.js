import React, { useState } from "react"
//
import { ThemeProvider } from "styled-components"
// Router
import { HashRouter, Routes, Route, Redirect, Outlet } from "react-router-dom"

// Global Styles
import GlobalStyled from "./globals/GlobalStyled"
import themeStyled from "./globals/themeStyled"
import theme from "./hooks/UseTheme"
// Pages Components
import HomePage from "./layout/HomePage/HomePage"
import AdminPage from "./layout/AdminPage/AdminPage"

const currentTheme = theme === "light" ? themeStyled.baseTheme : themeStyled.darkTheme

const App = () => {
  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyled />
      <HashRouter>
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route exact path="/admin" element={<AdminPage />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  )
}

export default App
