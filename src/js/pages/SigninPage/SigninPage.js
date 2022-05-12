import React from "react"
import { HashRouter, Routes, Route, Redirect, Outlet } from "react-router-dom"
// import { motion } from "framer-motion"

// Layout
import SigninPageStyled, { SigninPageDivStyled } from "./SigninPageStyled"
// Components
import SigninForm from "../../components/SigninForm/SigninForm"

const SigninPage = () => {
  return (
    <SigninPageStyled>
      <SigninPageDivStyled>
        <SigninForm />
      </SigninPageDivStyled>
    </SigninPageStyled>
  )
}

export default SigninPage
