import react from "react"
import ReactDOM from "react-dom"

import ModalStyled from "./ModalStyled"

const ModalOverlayStyled = (props) => {
  // return ReactDOM.createPortal(<ModalStyled />, document.getElementById("modal"))
  return ReactDOM.createPortal(
    <ModalStyled onClick={props.setShowMenu}>
      <p>Modal</p>
    </ModalStyled>,
    document.getElementById("modal")
  )
}

export default ModalOverlayStyled
