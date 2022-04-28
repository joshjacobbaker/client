import styled from "styled-components"

const Button = styled.button`
  width: 120px;
  height: 40px;
  text-align: center;
  color: black;
  background-color: pink;

  @media ${(props) => props.theme.screenSize.desktop} {
    background-color: blue;
  }

  @media ${(props) => props.theme.screenSize.laptop} {
    background-color: black;
  }

  @media ${(props) => props.theme.screenSize.mobileL} {
    background-color: red;
  }
`

export default Button
