import React, { useRef, useEffect } from "react"
import { HashRouter, Routes, Route, Redirect, Outlet } from "react-router-dom"
import { useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import useElementOnScreen from "../../hooks/useElementOnScreen"

// Layout
import LandingPageStyled, { LandingPageCardLargeStyled, LandingPageCardMediumStyled, LandingPageCardSmallStyled } from "./LandingPageStyled"
// Components
// Animations
import pageTransitionVariants from "../../animations/pageTransitionVariants"

const LandingPage = () => {
  const { ref: targetRef1, inView: isVisible1 } = useInView({
    threshold: 0.5,
  })
  const { ref: targetRef2, inView: isVisible2 } = useInView()
  const { ref: targetRef3, inView: isVisible3 } = useInView()
  const { ref: targetRef4, inView: isVisible4 } = useInView()
  const { ref: targetRef5, inView: isVisible5 } = useInView()

  const animation1 = useAnimation()
  const animation2 = useAnimation()
  const animation3 = useAnimation()
  const animation4 = useAnimation()
  const animation5 = useAnimation()
  useEffect(() => {
    if (isVisible1) {
      animation1.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      })

      if (!isVisible1) {
        animation1.start({
          x: "-100vw",
          transition: {
            type: "spring",
            duration: 1,
            bounce: 0.3,
          },
        })
      }
    }
  }, [isVisible1])

  return (
    <LandingPageStyled id="top" key="landingpage" transitions={{ duration: 1 }} variants={pageTransitionVariants} initial="initial" animate="animate" exit="exit">
      <LandingPageCardLargeStyled animate={animation1} ref={targetRef1} alternate isVisible={isVisible1}>
        <p>ajfkadslfjadskfklsadfjda</p>
        <p>{isVisible1 ? "is visible" : "Not Visible"}</p>
      </LandingPageCardLargeStyled>
      <LandingPageCardSmallStyled ref={targetRef2} isVisible={isVisible2}>
        <p>adsjfkjkdajfljdsfjdskalj</p>
        <p>{isVisible2 ? "is visible" : "Not Visible"}</p>
        <p>adsjfkjkdajfljdsfjdskalj</p>
      </LandingPageCardSmallStyled>
      <LandingPageCardMediumStyled ref={targetRef3} alternate isVisible={isVisible3}>
        <p>{isVisible3 ? "is visible" : "Not Visible"}</p>
      </LandingPageCardMediumStyled>
      <LandingPageCardMediumStyled ref={targetRef4} isVisible={isVisible4}>
        <p>jfdaskfjakdsjads</p>
        <p>{isVisible4 ? "is visible" : "Not Visible"}</p>
      </LandingPageCardMediumStyled>
      <LandingPageCardSmallStyled ref={targetRef5} isVisible={isVisible1}>
        <p>adsjfkjkdajfljdsfjdskalj</p>
        <p>{isVisible5 ? "is visible" : "Not Visible"}</p>
      </LandingPageCardSmallStyled>
    </LandingPageStyled>
  )
}

export default LandingPage

// const targetRef1 = useRef(null)
// const isVisible1 = useElementOnScreen(
//   {
//     root: null,
//     rootMargin: "0px",
//     threshold: 0.7,
//   },
//   targetRef1
// )

// const targetRef2 = useRef(null)
// const isVisible2 = useElementOnScreen(
//   {
//     root: null,
//     rootMargin: "0px",
//     threshold: 0.7,
//   },
//   targetRef2
// )

// const targetRef3 = useRef(null)
// const isVisible3 = useElementOnScreen(
//   {
//     root: null,
//     rootMargin: "0px",
//     threshold: 0.7,
//   },
//   targetRef3
// )

// const targetRef4 = useRef(null)
// const isVisible4 = useElementOnScreen(
//   {
//     root: null,
//     rootMargin: "0px",
//     threshold: 0.7,
//   },
//   targetRef4
// )

// const targetRef5 = useRef(null)
// const isVisible5 = useElementOnScreen(
//   {
//     root: null,
//     rootMargin: "0px",
//     threshold: 0.7,
//   },
//   targetRef5
// )
