import react from "react"
import { MenuContainer, MobileMenuIcon } from "./MenuStyled"
import ThemeToggle from "../../components/toggleTheme/ToggleTheme"

const Menu = ({ onClick }) => {
  return (
    <MenuContainer>
      <ThemeToggle />
      <MobileMenuIcon id="mobileMenuIcon" onClick={onClick}>
        <div></div>
        <div></div>
        <div></div>
      </MobileMenuIcon>
    </MenuContainer>
  )
}

export default Menu
