import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import { Helmet } from "react-helmet"

import siteColors from "../styles/colors"
import ParticleBackground from "../components/ParticleBackground"

const GlobalStyle = createGlobalStyle`

body {
    margin: 0;
    background-color: ${siteColors.black};
    color: ${siteColors.white};
    line-height: 1.4;
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
    ::-webkit-scrollbar {
      display: none;
    }
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
const SetBg = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -10;
  top: 0;
  left: 0;
`

export default ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <SetBg>
        <ParticleBackground />
      </SetBg>
      <Helmet>
        <title>Jenny's Design Portfolio</title>
      </Helmet>
      {children}
    </React.Fragment>
  )
}
