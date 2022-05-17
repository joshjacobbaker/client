import styled from "styled-components"

const BackToTopButtonStyled = styled.button`
  display: grid;
  justify-items: center;
  align-items: center;
  position: fixed;
  bottom: 100px;
  right: 100px;
  height: 100px;
  width: 100px;
  background: ${(props) => props.theme.color};
  border-radius: 50%;
  cursor: pointer;
  scroll-behavior: smooth;
  z-index: 1;
  color: black;
  text-align: center;
`

export default BackToTopButtonStyled
