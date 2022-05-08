import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import SocialMediaIcons from "../../../../components/socialMediaIcons/SocialMediaIcons"

import CustomerPageFooterStyled from "./CustomerPageFooterStyled"

const CustomerPageFooter = () => {
  const [show, setShow] = useState(false)
  const onClickShowHandler = () => {
    setShow((p) => !p)
    console.log(show)
  }

  return (
    <CustomerPageFooterStyled onClick={onClickShowHandler} show={show}>
      <SocialMediaIcons />
    </CustomerPageFooterStyled>
  )
}

export default CustomerPageFooter
