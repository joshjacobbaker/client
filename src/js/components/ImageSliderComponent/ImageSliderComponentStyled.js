import styled, { css } from "styled-components"

const ImageSliderComponentStyled = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  transition: all 2s;
  overflow: hidden;

  &:hover {
    > img {
      transition: all 2s;
      transform: translate(100%);
    }
  }

  > img {
    transition: all 2s;
    height: 100%;
    width: 100%;
  }
`

export default ImageSliderComponentStyled

export const ImageSliderComponentCaptionStyled = styled.div`
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
  transition: all 2s;
  background: rgba(0, 0, 0, 0);
  transform: translateX(-100%);
  ${ImageSliderComponentStyled}:hover & {
    transform: translateX(0%);
    opacity: 0.75;
    transition: all 2s;
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
