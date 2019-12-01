import React from "react"
import styled from "styled-components"
import { orange, white } from "../../../styles/colors"

function Button({ children, onClick, ...props }) {
  return (
    <button onClick={onClick} {...props}>
      {children}
    </button>
  )
}

export default styled(Button)`
  padding: 0.5em 5em;
  background-color: ${orange};
  border-radius: 0.25em;
  border: 0em solid transparent;
  color: ${white};
  font-family: Lato;
  font-weight: 500;
  font-size: 1.5em;
  margin: 1rem 10rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  outline: none;
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
