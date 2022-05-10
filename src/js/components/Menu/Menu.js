import react, { useContext } from "react"
import { AnimatePresence } from "framer-motion"
// Context
import { ModalContext } from "../../context/ModalContext"
// Menu Styled Components
import { MenuContainer, MobileMenuIcon } from "./MenuStyled"
// Modal Components
import CustomerPageModalBackdrop from "../Modal/CustomerPageModalMenu/ModalBackdrop"
import CustomerPageModalOverlay from "../Modal/CustomerPageModalMenu/ModalOverlay"
import ThemeToggle from "../../components/toggleTheme/ToggleTheme"

const Menu = () => {
  const ctxModal = useContext(ModalContext)
  return (
    <MenuContainer>
      <AnimatePresence>
        {ctxModal.showModal && (
          <>
            <CustomerPageModalOverlay key="modaloverlay"></CustomerPageModalOverlay>
            <CustomerPageModalBackdrop
              key="modalbackdrop"
              setShowMenu={() => {
                setShowMenu((d) => !d)
              }}></CustomerPageModalBackdrop>
          </>
        )}
      </AnimatePresence>
      <ThemeToggle />
      <MobileMenuIcon id="mobileMenuIcon" onClick={ctxModal.onClickShowModal}>
        <div></div>
        <div></div>
        <div></div>
      </MobileMenuIcon>
    </MenuContainer>
  )
}

export default Menu
