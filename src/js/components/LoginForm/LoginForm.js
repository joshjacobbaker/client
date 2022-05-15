import React from "react"
import LoginFormStyled from "./LoginFormStyled"

const onFormSubmitHandler = (e) => {
  e.preventDefault()
  console.log("On click")
}

const LoginForm = () => {
  return (
    <LoginFormStyled onSubmit={onFormSubmitHandler} action="submit">
      <h1>Login with YOU</h1>
      <fieldset>
        {/* <label htmlFor="email">Email</label> */}
        <input id="email" type="text" placeholder="Email" />
        {/* <label htmlFor="password">password</label> */}
        <input id="password" type="text" placeholder="password" />
        {/* <label htmlFor="confirmpassword">Confirm Password</label> */}
        <input id="confirmpassword" type="text" placeholder="confirmpassword" />
      </fieldset>
      <button type="submit">Submit</button>
    </LoginFormStyled>
  )
}

export default LoginForm
