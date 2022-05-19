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
    threshold: 0.3,
  })
  const { ref: targetRef2, inView: isVisible2 } = useInView({
    threshold: 0.3,
  })
  const { ref: targetRef3, inView: isVisible3 } = useInView({
    threshold: 0.3,
  })
  const { ref: targetRef4, inView: isVisible4 } = useInView({
    threshold: 0.3,
  })
  const { ref: targetRef5, inView: isVisible5 } = useInView({
    threshold: 0.3,
  })

  const animation1 = useAnimation()
  const animation2 = useAnimation()
  const animation3 = useAnimation()
  const animation4 = useAnimation()
  const animation5 = useAnimation()
  useEffect(() => {
    if (isVisible1) {
      console.log(`isVisible1? ${isVisible1}`)
      animation1.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      })
    }

    if (!isVisible1) {
      console.log(`isVisible1? ${isVisible1}`)
      animation1.start({
        x: -150,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      })
    }
  }, [isVisible1])

  useEffect(() => {
    if (isVisible2) {
      console.log(`isVisible2? ${isVisible2}`)
      animation2.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.3,
        },
      })
    }

    if (!isVisible2) {
      console.log(`isVisible2? ${isVisible2}`)
      animation2.start({
        x: -150,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      })
    }
  }, [isVisible2])

  useEffect(() => {
    if (isVisible3) {
      console.log(`isVisible3? ${isVisible3}`)
      animation3.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.3,
        },
      })
    }

    if (!isVisible3) {
      console.log(`isVisible3? ${isVisible3}`)
      animation3.start({
        x: -150,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      })
    }
  }, [isVisible3])

  useEffect(() => {
    if (isVisible4) {
      console.log(`isVisible4? ${isVisible4}`)
      animation4.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.3,
        },
      })
    }

    if (!isVisible4) {
      console.log(`isVisible4? ${isVisible4}`)
      animation4.start({
        x: -150,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      })
    }
  }, [isVisible4])

  useEffect(() => {
    if (isVisible5) {
      console.log(`isVisible5? ${isVisible5}`)
      animation5.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.3,
        },
      })
    }

    if (!isVisible5) {
      console.log(`isVisible5? ${isVisible5}`)
      animation5.start({
        x: -150,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      })
    }
  }, [isVisible5])

  return (
    <LandingPageStyled id="top" key="landingpage" transitions={{ duration: 1 }} variants={pageTransitionVariants} initial="initial" animate="animate" exit="exit">
      <LandingPageCardLargeStyled animate={animation1} ref={targetRef1} alternate isVisible={isVisible1}>
        <p>ajfkadslfjadskfklsadfjda</p>
        <p>{isVisible1 ? "is visible" : "Not Visible"}</p>
      </LandingPageCardLargeStyled>
      <LandingPageCardSmallStyled animate={animation2} ref={targetRef2} isVisible={isVisible2}>
        <p>adsjfkjkdajfljdsfjdskalj</p>
        <p>{isVisible2 ? "is visible" : "Not Visible"}</p>
        <p>adsjfkjkdajfljdsfjdskalj</p>
      </LandingPageCardSmallStyled>
      <LandingPageCardMediumStyled animate={animation3} ref={targetRef3} alternate isVisible={isVisible3}>
        <p>{isVisible3 ? "is visible" : "Not Visible"}</p>
      </LandingPageCardMediumStyled>
      <LandingPageCardMediumStyled animate={animation4} ref={targetRef4} isVisible={isVisible4}>
        <p>jfdaskfjakdsjads</p>
        <p>{isVisible4 ? "is visible" : "Not Visible"}</p>
      </LandingPageCardMediumStyled>
      <LandingPageCardSmallStyled animate={animation5} ref={targetRef5} isVisible={isVisible1}>
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
