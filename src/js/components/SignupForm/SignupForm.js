import React from "react"
import SignupFormStyled from "./SignupFormStyled"

const onFormSubmitHandler = (e) => {
  e.preventDefault()
  console.log("On click")
}

const SignupForm = () => {
  return (
    <SignupFormStyled onSubmit={onFormSubmitHandler} action="submit">
      <h1>Signup with YOU</h1>
      <fieldset>
        {/* <label htmlFor="email">Email</label> */}
        <input id="email" type="text" placeholder="Email" />
        {/* <label htmlFor="password">password</label> */}
        <input id="password" type="text" placeholder="password" />
        {/* <label htmlFor="confirmpassword">Confirm Password</label> */}
        <input id="confirmpassword" type="text" placeholder="confirmpassword" />
      </fieldset>
      <button type="submit">Submit</button>
    </SignupFormStyled>
  )
}

export default SignupForm
