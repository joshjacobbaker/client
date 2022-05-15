import React from "react"
import { HashRouter, Routes, Route, Redirect, Outlet } from "react-router-dom"
// import { motion } from "framer-motion"

// Layout
import LoginPageStyled, { LoginPageDivStyled } from "./LoginPageStyled"
// Components
import LoginForm from "../../components/LoginForm/LoginForm"

const LoginPage = () => {
  return (
    <LoginPageStyled>
      <LoginPageDivStyled>
        <LoginForm />
      </LoginPageDivStyled>
    </LoginPageStyled>
  )
}

export default LoginPage
