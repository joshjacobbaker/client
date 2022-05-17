import styled from "styled-components"
import LazyLoadedImage from "./LazyLoadedImage"

const LazyLoadedImageStyled = styled(LazyLoadedImage)`
  display: block;
  margin: 0;
  padding: 0;

  img {
    display: block;
    margin: 0;
    padding: 0;
  }
`

export default LazyLoadedImageStyled
