import styled, { keyframes, css } from "styled-components"
import { FaBuilding, FaEnvelope, FaPhoneSquareAlt, FaFacebook, FaInstagramSquare } from "react-icons/fa"

const animate = keyframes`
  from {
    scale: 1;
    filter: hue-rotate(0deg);
  }
  to {
    scale: 1.2;
    filter: hue-rotate(360deg);
  }
`

const SocialMediaIconsFooterStyled = styled.div`
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

export default SocialMediaIconsFooterStyled

// const FaEnvelopeFunction = ({ children, ...props }) => {
//   return <FaEnvelope {...props}>{children}</FaEnvelope>
// }

export const FaEnvelopeStyled = styled(FaEnvelope)`
  cursor: pointer;
  fill: ${(props) => props.theme.color};
  size: 4rem;
  transition: all 0.1s;
  animation: none;
  &:hover {
    cursor: pointer;
    animation: ${animate} 3s linear 0.1s infinite both alternate;
  }
  &:active {
    animation: none;
    scale: 1.2;
  }
`

export const FaPhoneSquareAltStyled = styled(FaPhoneSquareAlt)`
  cursor: pointer;
  fill: ${(props) => props.theme.color};
  size: 4rem;
  transition: all 0.1s;
  animation: none;
  &:hover {
    cursor: pointer;
    animation: ${animate} 3s linear 0.1s infinite both alternate;
  }
  &:active {
    scale: 2;
  }
`

export const FaFacebookStyled = styled(FaFacebook)`
  cursor: pointer;
  fill: ${(props) => props.theme.color};
  size: 4rem;
  transition: all 0.1s;
  animation: none;
  &:hover {
    cursor: pointer;
    animation: ${animate} 3s linear 0.1s infinite both alternate;
  }
  &:active {
    scale: 2;
  }
`

export const FaInstagramSquareStyled = styled(FaInstagramSquare)`
  cursor: pointer;
  fill: ${(props) => props.theme.color};
  size: 4rem;
  transition: all 0.1s;
  animation: none;
  &:hover {
    cursor: pointer;
    animation: ${animate} 3s linear 0.1s infinite both alternate;
  }
  &:active {
    scale: 2;
  }
`

export const FaBuildingStyled = styled(FaBuilding)`
  cursor: pointer;
  fill: ${(props) => props.theme.color};
  size: 4rem;
  transition: all 0.1s;
  animation: none;
  &:hover {
    cursor: pointer;
    animation: ${animate} 3s linear 0.1s infinite both alternate;
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
