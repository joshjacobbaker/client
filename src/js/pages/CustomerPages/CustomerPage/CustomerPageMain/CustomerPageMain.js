import React, { useEffect } from "react"
import CustomerPageMainStyled from "./CustomerPageMainStyled"

const CustomerPageMain = (props) => {
  return <CustomerPageMainStyled>{props.children}</CustomerPageMainStyled>
}

export default CustomerPageMain
