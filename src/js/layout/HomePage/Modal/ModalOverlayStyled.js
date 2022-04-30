import styled from "styled-components"

const ModalStyled = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  height: 65vh;
  width: 70vw;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 2;
  color: white;

  > ul {
    height: 50vh;
    width: 50vw;
    display: grid;
    justify-content: center;

    grid-template-rows: 1fr 1fr 1fr 1fr;
    background-color: white;
  }
`

export default ModalStyled
