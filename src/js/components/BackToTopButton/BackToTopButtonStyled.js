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
  background: ${(props) => props.theme.backToTopButtonBackgroundColor};
  color: ${(props) => props.theme.backToTopButtonFontColor};
  border-radius: 50%;
  cursor: pointer;
  scroll-behavior: smooth;
  z-index: 1;
  text-align: center;
`

export default BackToTopButtonStyled
