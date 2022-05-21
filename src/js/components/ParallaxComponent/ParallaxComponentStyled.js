import styled from "styled-components"

const ParallaxComponentStyled = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  perspective: 10px;
  background-color: #105b72c2;
  color: white;
`

export default ParallaxComponentStyled

export const ParallaxComponent3DStyled = styled.div`
  position: relative;
  display: grid;
  justify-content: center;
  align-items: center;
  height: 100%;
  transform-style: preserve-3d;
  z-index: -1;
`

export const ForegroundStyled = styled.img`
  transform: translateZ(-10px) scale(2);
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: -1;
`

export const BackgroundStyled = styled.img`
  top: 100%;
  transform: translateZ(-10px) scale(2) translateY(50%);
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: -1;
`
