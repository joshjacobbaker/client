import React from "react"

const CustomerSignup = () => {
  return (
    <div className="container">
      <form action="">
        <h3>Customer Signup</h3>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input id="email" type="text" placeholder="Email" />
          <input id="lastname" type="text" placeholder="Last Name" />
          <label htmlFor="password">password</label>
          <input id="password" type="text" placeholder="password" />
          <label htmlFor="confirmpassword">Confirm Password</label>
          <input id="confirmpassword" type="text" placeholder="confirmpassword" />
        </fieldset>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default CustomerSignup
