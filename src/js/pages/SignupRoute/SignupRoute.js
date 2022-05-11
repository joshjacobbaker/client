import React from "react"
import { HashRouter, Routes, Route, Redirect, Outlet } from "react-router-dom"
// import { motion } from "framer-motion"

// Layout
import SignupRouteStyled, { SignupRouteDivStyled } from "./SignupRouteStyled"
// Components
import SignupForm from "../../components/SignupForm/SignupForm"

const SignupRoute = () => {
  return (
    <SignupRouteStyled>
      <SignupRouteDivStyled>
        <SignupForm />
      </SignupRouteDivStyled>
    </SignupRouteStyled>
  )
}

export default SignupRoute
