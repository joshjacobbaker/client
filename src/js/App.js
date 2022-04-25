import React from "react"
//
import { ThemeProvider } from "styled-components"
// Router
import { HashRouter, Routes, Route, Redirect, Outlet } from "react-router-dom"

// Global Styles
import GlobalStyled from "./globals/globalStyled"
// Pages Components
import HomePage from "./layout/HomePage/HomePage"
import AdminPage from "./layout/AdminPage/AdminPage"

// Define our `fg` and `bg` on the theme
const theme = {
  fg: "palevioletred",
  bg: "white",
}

// This theme swaps `fg` and `bg`
const invertTheme = ({ fg, bg }) => ({
  fg: bg,
  bg: fg,
})

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <GlobalStyled />
          <Routes>
            <Route path="/*" element={<HomePage />} />
            <Route exact path="/admin" element={<AdminPage />} />
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </>
  )
}

export default App
