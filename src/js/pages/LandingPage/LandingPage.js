import React, { useRef } from "react"
import { HashRouter, Routes, Route, Redirect, Outlet } from "react-router-dom"
// import { motion } from "framer-motion"
import useElementOnScreen from "../../hooks/useElementOnScreen"

// Layout
import LandingPageStyled, { LandingPageDivStyled } from "./LandingPageStyled"
// Components
// Animations
import pageTransitionVariants from "../../animations/pageTransitionVariants"

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

  return (
    <LandingPageStyled id="top" key="landingpage" transitions={{ duration: 1 }} variants={pageTransitionVariants} initial="initial" animate="animate" exit="exit">
      <LandingPageDivStyled>
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
        <p ref={targetRef}>{isVisible ? "is visible" : "Not Visible"}</p>
      </LandingPageDivStyled>
    </LandingPageStyled>
  )
}

export default LandingPage
