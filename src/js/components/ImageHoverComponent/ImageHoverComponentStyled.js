import styled, { css } from "styled-components"

const ImageHoverComponentStyled = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  transition: all 3s;
  overflow: hidden;

  &:hover {
    > img {
      transition: all 3s;
      transform: rotate(10deg) scale(1.3);
    }
  }

  > img {
    transition: all 3s;
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
  transition: all 3s;
  background: rgba(0, 0, 0, 0);
  ${ImageHoverComponentStyled}:hover & {
    opacity: 0.75;
    transition: all 3s;
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
