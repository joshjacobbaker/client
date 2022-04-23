import React from "react"

// Router
import { HashRouter, Routes, Route, Redirect, Outlet } from "react-router-dom"

// Global Styles
import GlobalStyled from "./globals/globalStyled"
// Pages Components
import HomePage from "./layout/HomePage/HomePage"
import AdminPage from "./layout/AdminPage/AdminPage"
const App = () => {
  return (
    <>
      <HashRouter>
        <GlobalStyled />
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route exact path="/admin" element={<AdminPage />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
