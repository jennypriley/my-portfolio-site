import styled from "styled-components"
import { white } from "../../../styles/colors"

export default styled.div`
  font-family: Lato;
  font-weight: 500;
  display: inline-block;
  margin: 0em 10em 1em 10em;
  width: -webkit-fill-available;
  color: ${white};
  @media only screen and (max-device-width: 979px) {
    margin: 0em 2em 2em 2em;
  }
`
