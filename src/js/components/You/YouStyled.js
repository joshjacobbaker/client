import styled, { keyframes, css } from "styled-components"

import Strobe from "../Strobe/Strobe"

const youAnimate = keyframes`
    from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(360deg);
  }
`

const YouStyled = styled(Strobe)`
  /* display: grid;
  align-items: center;
  justify-items: center;
  height: 3.5rem;
  width: 9rem;
  margin: 0 auto;
  font-size: 2rem;
  background-color: black;
  color: #fff;
  box-shadow: 2px 2px 2px #00000080, 10px 1px 12px #00000080, 2px 2px 10px #00000080, 2px 2px 3px #00000080, inset 2px 2px 10px #00000080, inset 2px 2px 10px #00000080, inset 2px 2px 10px #00000080, inset 2px 2px 10px #00000080;
  border-radius: 29px;
  padding: 11px 19px;
  animation: ${youAnimate} 3s linear infinite;
  text-shadow: 0 0 50px #0072ff, 0 0 100px #0072ff, 0 0 150px #0072ff, 0 0 200px #0072ff;
  overflow-x: hidden; */
`

export default YouStyled

// @media (max-width: $screen-medium) {
// }

// @media (max-width: $screen-small) {
//   .you {
//     height: 5rem;
//     width: 20rem;
//     font-size: 2rem;
//   }
// }
