import styled from "styled-components"

const ImagePopUpComponentStyled = styled.div`
  height: 100%;
  width: 100%;
  background-color: teal;
  transition: all 2s;
  &:hover {
    transition: all 2s;
    > img {
      transform: translateY(-30%);
      transition: all 2s;
    }
  }
  overflow: hidden;

  > img {
    height: 100%;
    width: 100%;
    transition: all 2s;
  }
`

export default ImagePopUpComponentStyled

export const ImagePopUpCaptionComponentStyled = styled.div`
  height: 30%;
  width: 100%;
  display: grid;
  align-content: center;
  justify-content: center;
  background-color: teal;
  transform: translateY(100%);
  transition: all 2s;
  ${ImagePopUpComponentStyled}:hover & {
    transform: translateY(-100%);
    transition: all 2s;
  }
`
