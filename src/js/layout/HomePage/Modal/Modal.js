import * as ReactDOMClient from "react-dom/client"

import ModalStyled from "./ModalStyled"

const ModalOverlayStyled = () => {
  return ReactDOMClient.createPortal(<ModalStyled />, document.getElementById("modal"))
}

export default ModalOverlayStyled
