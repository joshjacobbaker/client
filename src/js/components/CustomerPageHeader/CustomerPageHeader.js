import React from "react"
import { useState, useContext } from "react"
// import { useLocation } from "react-router-dom"
// Styled Components
import CustomerPageHeaderStyled from "./CustomerPageHeaderStyled"
// Components
import You from "../You/You"
import Menu from "../Menu/Menu"

// Context

const CustomerPageHeader = (props) => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <CustomerPageHeaderStyled>
      <div>
        <You />
      </div>
      {/* isActive={theme.id === "darkTheme"} onToggle={setTheme} */}
      <Menu />
    </CustomerPageHeaderStyled>
  )
}

export default CustomerPageHeader
