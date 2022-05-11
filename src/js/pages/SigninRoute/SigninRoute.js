import React from "react"
import { HashRouter, Routes, Route, Redirect, Outlet } from "react-router-dom"
// import { motion } from "framer-motion"

// Layout
import SigninRouteStyled, { SigninRouteDivStyled } from "./SigninRouteStyled"
// Components
import SigninForm from "../../components/SigninForm/SigninForm"

const SigninRoute = () => {
  return (
    <SigninRouteStyled>
      <SigninRouteDivStyled>
        <SigninForm />
      </SigninRouteDivStyled>
    </SigninRouteStyled>
  )
}

export default SigninRoute
