import styled, { css } from "styled-components"

export const MenuContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  justify-self: right;
  justify-items: center;
  align-items: center;
  height: 100%;
  max-height: 100%;
  width: 100%;
  right: 0;
`

export const MobileMenuIcon = styled.div`
  margin: auto 0 auto auto;
  width: 25px;
  min-width: 25px;
  padding: 10px;
  height: 5rem;
  width: 100%;

  > div {
    height: 5px;
    background: ${(props) => props.theme.color};
    margin: 10px 0;
    width: 100%;
  }
`
