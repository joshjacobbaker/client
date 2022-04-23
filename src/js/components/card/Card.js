import styled from "styled-components"
import device from "../../globals/device"
const Button = styled.button`
  width: 120px;
  height: 40px;
  text-align: center;
  color: black;
  background-color: pink;

  @media ${device.desktop} {
    background-color: blue;
  }

  @media ${device.laptop} {
    background-color: black;
  }

  @media ${device.mobileL} {
    background-color: red;
  }
`

export default Button
