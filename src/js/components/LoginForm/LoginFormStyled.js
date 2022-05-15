import styled from "styled-components"

const LoginStyled = styled.form`
  display: grid;
  justify-items: center;
  align-items: center;
  height: 50%;
  width: 100%;

  h1 {
    font-size: 1.8rem;
    text-shadow: white 0.5px 0.75px;
  }
  fieldset {
    display: grid;
    border: 0;
    height: 100%;
    width: 100%;
  }

  input {
    width: 90%;
    margin: auto auto;
  }

  button {
    background-color: ${(props) => props.theme.fg};
    color: white;
    width: 80%;
    margin: 0 auto;
  }
`

export default LoginStyled
