import styled from "styled-components"
import { white, violet } from "../../../styles/colors"

export default styled.div`
  text-transform: uppercase;
  font-family: Lato;
  font-weight: 500;
  display: inline-block;
  width: -webkit-fill-available;
  margin: 3em 10em 2em 10em;
  color: ${white};
  border-bottom: solid 0.1em ${violet};
  @media only screen and (max-device-width: 800px) {
    margin: 0em 2em 2em 2em;
  }
`
