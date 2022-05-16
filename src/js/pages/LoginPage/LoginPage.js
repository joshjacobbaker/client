import React from "react"
import { HashRouter, Routes, Route, Redirect, Outlet } from "react-router-dom"
// import { motion } from "framer-motion"

// Layout
import LoginPageStyled, { LoginPageDivStyled } from "./LoginPageStyled"
// Components
import LoginForm from "../../components/LoginForm/LoginForm"
// Animations
import pageTransitionVariants from "../../animations/pageTransitionVariants"

const LoginPage = () => {
  return (
    <LoginPageStyled key="loginpage" transitions={{ duration: 1 }} variants={pageTransitionVariants} initial="initial" animate="animate" exit="exit">
      <LoginPageDivStyled>
        <LoginForm />
      </LoginPageDivStyled>
    </LoginPageStyled>
  )
}

export default LoginPage
