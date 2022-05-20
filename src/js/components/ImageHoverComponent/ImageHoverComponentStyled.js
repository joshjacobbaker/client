import styled, { css } from "styled-components"

const ImageHoverComponentStyled = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  > img {
    height: 100%;
    width: 100%;
  }
`

export default ImageHoverComponentStyled

export const ImageHoverComponentCaptionStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: grid;
  grid-auto-flow: rows;
  justify-content: center;
  align-content: center;
  opacity: 0;
  transition: all 0.5s;

  ${ImageHoverComponentStyled}:hover & {
    opacity: 0.75;
  }

  ${(p) => css`
    background-color: ${p.theme.goldBeveling};
  `};

  > h1 {
    text-transform: uppercase;
    margin: 0;
    color: white;
    opacity: 1;
  }

  > p {
    font-size: 2rem;
    text-transform: capitalize;
    opacity: 1;
  }
`

// goldBeveling: "#DFB722"
// https://styled-components.com/docs/advanced
