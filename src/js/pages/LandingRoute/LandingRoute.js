import React, { useRef } from "react"
import { HashRouter, Routes, Route, Redirect, Outlet } from "react-router-dom"
// import { motion } from "framer-motion"
import useElementOnScreen from "../../hooks/useElementOnScreen"

// Layout
import LandingRouteStyled, { LandingRouteDivStyled } from "./LandingRouteStyled"
// Components

const LandingRoute = () => {
  const targetRef = useRef(null)
  const isVisible = useElementOnScreen(
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    },
    targetRef
  )

  return (
    <LandingRouteStyled>
      <LandingRouteDivStyled>
        {!isVisible ? <p>not in viewport</p> : <p>in viewport</p>}
        <p>adsjfkjkdajfljdsfjdskalj</p>
      </LandingRouteDivStyled>
      <LandingRouteDivStyled>
        <p>adsjfkjkdajfljdsfjdskalj</p>
        <p ref={targetRef}>adsjfkjkdajfljdsfjdskalj</p>
      </LandingRouteDivStyled>
      <LandingRouteDivStyled>
        <p>Landing Route</p>
      </LandingRouteDivStyled>
      <LandingRouteDivStyled>
        <p>adsjfkjkdajfljdsfjdskalj</p>
        <p>adsjfkjkdajfljdsfjdskalj</p>
      </LandingRouteDivStyled>
      <LandingRouteDivStyled>
        <p>adsjfkjkdajfljdsfjdskalj</p>
        <p>adsjfkjkdajfljdsfjdskalj</p>
      </LandingRouteDivStyled>
    </LandingRouteStyled>
  )
}

export default LandingRoute
