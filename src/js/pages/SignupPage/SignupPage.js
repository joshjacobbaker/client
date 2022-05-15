import React from "react"
import { HashRouter, Routes, Route, Redirect, Outlet } from "react-router-dom"
// import { motion } from "framer-motion"

// Layout
import SignupPageStyled, { SignupPageDivStyled } from "./SignupPageStyled"
// Components
import SignupForm from "../../components/SignupForm/SignupForm"
// Animations
import pageTransitionVariants from "../../animations/pageTransitionVariants"

const SignupPage = () => {
  return (
    <SignupPageStyled key="signuppage" variants={pageTransitionVariants} initial="initial" animate="animate" exit="exit">
      <SignupPageDivStyled>
        <SignupForm />
      </SignupPageDivStyled>
    </SignupPageStyled>
  )
}

export default SignupPage
