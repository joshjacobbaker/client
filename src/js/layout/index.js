import React, { useState } from "react"

import Header from "../components/Header"
import Footer from "../components/Footer"

const Layout = (props) => {
  const [state, setState] = useState(0)
  return (
    <div>
      <Header number={state} />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
