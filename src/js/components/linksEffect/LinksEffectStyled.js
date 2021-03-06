import styled from "styled-components"
import { NavLink } from "react-router-dom"

const LinksEffectStyled = styled(NavLink)`
  background-color: purple;
  font-weight: bold;
`

export default LinksEffectStyled

// https://bennettfeely.com/clippy/
// .linkcontainer {
//   position: relative;
//   width: 100%;

//   h1.link {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     margin: 0;
//     padding: 0;
//     width: 100%;
//     text-align: center;
//     font-size: 1rem;
//     text-transform: uppercase;
//     background-color: $color-black;
//   }

//   h1.link:nth-child(2) {
//     color: $color-white;
//     transition: 0.5s;
//     clip-path: polygon(0 0, 0% 100%, 100% 0);
//     background-color: $color-black;
//   }

//   h1.link:nth-child(2):hover {
//     clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
//   }

//   h1.link:nth-child(1):hover ~ h1 {
//     clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
//   }
// }
