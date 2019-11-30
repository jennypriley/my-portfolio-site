import React from "react"
import { createGlobalStyle } from "styled-components"
import siteColors from "../styles/colors"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${siteColors.black};
    color: ${siteColors.white};
    line-height: 1.4;
  }
  a {
    text-decoration: none;
    -o-transition: 0.2s;
    -ms-transition: 0.2s;
    -moz-transition: 0.2s;
    -webkit-transition: 0.2s;
    cursor: pointer;
    transition: 0.2s;
  }
  a:-webkit-any-link {
    color: ${siteColors.white}
  }
`
export default ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      {children}
    </React.Fragment>
  )
}
