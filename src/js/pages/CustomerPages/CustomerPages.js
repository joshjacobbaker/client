import React, { useState, useEffect } from "react"
import { HashRouter, Routes, Route, Redirect, Outlet } from "react-router-dom"

// Sections of Layout w/ Components
import CustomerChapterStyled from "./routes/LandingRoute/LandingRouteStyled"

// Foundational Components

// Pages
import LandingRoute from "./routes/LandingRoute/LandingRoute"

// Theme
// import theme from "../../hooks/UseTheme"

const CustomerChapter = (props) => {
  return (
    <CustomerChapterStyled>
      <Routes>
        <Route path="/" element={<LandingRoute />} />
        <Route path="/yo" element={<p>Yo</p>} />
      </Routes>
    </CustomerChapterStyled>
  )
}

export default CustomerChapter
