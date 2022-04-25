import React, { useState } from "react"
//
import { ThemeProvider } from "styled-components"
// Router
import { HashRouter, Routes, Route, Redirect, Outlet } from "react-router-dom"

// Global Styles
import GlobalStyled from "./globals/globalStyled"
import themeStyled from "./globals/themeStyled"
// Pages Components
import HomePage from "./layout/HomePage/HomePage"
import AdminPage from "./layout/AdminPage/AdminPage"

const App = () => {
  const [switchTheme, setSwitchTheme] = useState(false)
  return (
    <>
      <ThemeProvider theme={switchTheme ? themeStyled.baseTheme : themeStyled.darkTheme}>
        <HashRouter>
          <GlobalStyled />
          <Routes>
            <Route path="/*" element={<HomePage switchTheme={switchTheme} setSwitchTheme={setSwitchTheme} />} />
            <Route exact path="/admin" element={<AdminPage />} />
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </>
  )
}

export default App
