import React from "react"
import CustomerSignupStyled from "./CustomerSignupStyled"

const onFormSubmitHandler = (e) => {
  e.preventDefault()
  console.log("On click")
}

const CustomerSignup = () => {
  return (
    <CustomerSignupStyled>
      <form onSubmit={onFormSubmitHandler} action="submit">
        <h3>Customer Signup</h3>
        <fieldset>
          {/* <label htmlFor="email">Email</label> */}
          <input id="email" type="text" placeholder="Email" />
          <input id="lastname" type="text" placeholder="Last Name" />
          {/* <label htmlFor="password">password</label> */}
          <input id="password" type="text" placeholder="password" />
          {/* <label htmlFor="confirmpassword">Confirm Password</label> */}
          <input id="confirmpassword" type="text" placeholder="confirmpassword" />
        </fieldset>
        <button>Submit</button>
      </form>
    </CustomerSignupStyled>
  )
}

export default CustomerSignup
