import styled, { keyframes, css } from "styled-components"
import { FaBuilding, FaEnvelope, FaPhoneSquareAlt, FaFacebook, FaInstagramSquare } from "react-icons/fa"

const animate = keyframes`
    from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(360deg);
  }
`

const SocialMediaIconsStyled = styled.div`
  height: 10vh;
  width: 100%;
  margin: 0 0;
  padding: 0 0;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-auto-flow: column;
  /* grid-column-gap: 5px; */
  /* background: white; */
`

export default SocialMediaIconsStyled

// const FaEnvelopeFunction = ({ children, ...props }) => {
//   return <FaEnvelope {...props}>{children}</FaEnvelope>
// }

export const FaEnvelopeStyled = styled(FaEnvelope)`
  fill: yellow;
  size: 4rem;
  &:hover {
    fill: pink;
    cursor: pointer;
  }
  &:active {
    scale: 2;
  }
`
// FaEnvelope
// FaPhoneSquareAlt
// FaFacebook
// FaInstagramSquare
// FaBuilding
