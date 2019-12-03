import styled from "styled-components"
import { white } from "../../../styles/colors"

export default styled.div`
  display: inline-block;
  max-height: auto;
  min-width: auto;
  border: solid 0.1em ${white};
  border-radius: 0.25em;
  margin: 0em 0em 3em 2em;
  &:hover {
    cursor: pointer;
    opacity: 0.75;
    -o-transition: 0.2s;
    -ms-transition: 0.2s;
    -moz-transition: 0.2s;
    -webkit-transition: 0.2s;
    transition: 0.2s;
  }
`
