import styled, { keyframes, css } from "styled-components"

const animate = keyframes`
    from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(360deg);
  }
`

const SocialMediaIconsStyled = styled.div`
  #apple,
  #twitter,
  #facebook,
  #github {
    font-size: 3rem;
    background-color: black;
    color: #fff;
    box-shadow: 2px 2px 2px #00000080, 10px 1px 12px #00000080, 2px 2px 10px #00000080, 2px 2px 3px #00000080, inset 2px 2px 10px #00000080, inset 2px 2px 10px #00000080, inset 2px 2px 10px #00000080, inset 2px 2px 10px #00000080;
    border-radius: 29px;
    padding: 5.5px 9.5px;
    margin: -10px 10px;
    animation: ${animate} 3s linear infinite;
    text-shadow: 0 0 50px #0072ff, 0 0 100px #0072ff, 0 0 150px #0072ff, 0 0 200px #0072ff;
  }
  #twitter {
    animation-delay: 0.3s;
  }
  #facebook {
    animation-delay: 0.7s;
  }
  #github {
    animation-delay: 0.1s;
  }
`

export default SocialMediaIconsStyled
