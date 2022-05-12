import React from "react"
import { HashRouter, Routes, Route, Redirect, Outlet } from "react-router-dom"
// import { motion } from "framer-motion"

// Layout
import SignupPageStyled, { SignupPageDivStyled } from "./SignupPageStyled"
// Components
import SignupForm from "../../components/SignupForm/SignupForm"

const SignupPage = () => {
  return (
    <SignupPageStyled>
      <SignupPageDivStyled>
        <SignupForm />
      </SignupPageDivStyled>
    </SignupPageStyled>
  )
}

export default SignupPage
