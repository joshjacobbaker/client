import styled from "styled-components"

const ModalStyled = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(15, 47, 59, 0.5);
  z-index: 1;
  color: white;
`

export default ModalStyled