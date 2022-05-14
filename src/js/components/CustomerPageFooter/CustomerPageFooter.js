import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import SocialMediaIcons from "../socialMediaIcons/SocialMediaIcons"

import CustomerPageFooterStyled from "./CustomerPageFooterStyled"

const CustomerPageFooter = () => {
  return (
    <CustomerPageFooterStyled>
      <SocialMediaIcons />
    </CustomerPageFooterStyled>
  )
}

export default CustomerPageFooter
