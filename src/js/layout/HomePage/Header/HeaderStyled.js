import styled from "styled-components"
import screenSize from "../../../globals/screenSize"

const HeaderStyled = styled.header`
  width: 100vw;
  height: 100%;
  display: grid;
  grid-template-columns: 2fr 8fr;
  justify-items: center;
  align-items: center;
  background: linear-gradient(to right, green, yellow);

  @media ${screenSize.laptop} {
    background: linear-gradient(to right, blue, yellow);
  }

  @media ${screenSize.mobileL} {
    background: linear-gradient(to right, purple, yellow);
  }
  }

`

export default HeaderStyled
