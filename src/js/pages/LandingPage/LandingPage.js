import React, { useRef } from "react"
import { HashRouter, Routes, Route, Redirect, Outlet } from "react-router-dom"
// import { motion } from "framer-motion"
import useElementOnScreen from "../../hooks/useElementOnScreen"

// Layout
import LandingPageStyled, { LandingPageDivStyled } from "./LandingPageStyled"
// Components
import SmoothScroll from "../../components/smoothScroll/SmoothScroll"

const LandingPage = () => {
  const targetRef = useRef(null)
  const isVisible = useElementOnScreen(
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    },
    targetRef
  )

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <LandingPageStyled>
      <LandingPageDivStyled id="top">
        <p>ajfkadslfjadskfklsadfjda</p>
        <p>adsjfkjkdajfljdsfjdskalj</p>
      </LandingPageDivStyled>
      <LandingPageDivStyled>
        <p>adsjfkjkdajfljdsfjdskalj</p>
        <p>adsjfkjkdajfljdsfjdskalj</p>
      </LandingPageDivStyled>
      <LandingPageDivStyled>
        <p>Landing Page</p>
      </LandingPageDivStyled>
      <LandingPageDivStyled>
        <p>jfdaskfjakdsjads</p>
        <p>fadsjfasdkjflasdj</p>
      </LandingPageDivStyled>
      <LandingPageDivStyled>
        <p>adsjfkjkdajfljdsfjdskalj</p>
        <p ref={targetRef}>adsjfkjkdajfljdsfjdskalj</p>
      </LandingPageDivStyled>
      {!isVisible ? null : <SmoothScroll />}
    </LandingPageStyled>
  )
}

export default LandingPage
