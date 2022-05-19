import React, { useRef } from "react"
import { HashRouter, Routes, Route, Redirect, Outlet } from "react-router-dom"
// import { motion } from "framer-motion"
import useElementOnScreen from "../../hooks/useElementOnScreen"

// Layout
import LandingPageStyled, { LandingPageCardLargeStyled, LandingPageCardMediumStyled, LandingPageCardSmallStyled } from "./LandingPageStyled"
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
      <LandingPageCardLargeStyled>
        <p>ajfkadslfjadskfklsadfjda</p>
        <p>adsjfkjkdajfljdsfjdskalj</p>
      </LandingPageCardLargeStyled>
      <LandingPageCardSmallStyled>
        <p>adsjfkjkdajfljdsfjdskalj</p>
        <p>adsjfkjkdajfljdsfjdskalj</p>
      </LandingPageCardSmallStyled>
      <LandingPageCardMediumStyled>
        <p>Landing Page</p>
      </LandingPageCardMediumStyled>
      <LandingPageCardMediumStyled>
        <p>jfdaskfjakdsjads</p>
        <p>fadsjfasdkjflasdj</p>
      </LandingPageCardMediumStyled>
      <LandingPageCardSmallStyled>
        <p>adsjfkjkdajfljdsfjdskalj</p>
        <p ref={targetRef}>{isVisible ? "is visible" : "Not Visible"}</p>
      </LandingPageCardSmallStyled>
    </LandingPageStyled>
  )
}

export default LandingPage
