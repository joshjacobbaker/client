import React from "react"
import { useState, useContext } from "react"
// import { useLocation } from "react-router-dom"
// Styled Components
import CustomerPageHeaderStyled, { MenuContainer, MobileMenuIcon } from "./CustomerPageHeaderStyled"
// Components
import You from "../../../../components/You/You"
import Menu from "../../../../components/Menu/Menu"

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
