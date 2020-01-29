import React from "react"
import styled from "styled-components"

import GithubIcon from "../../../styles/svg/GithubIcon"
import LinkedinIcon from "../../../styles/svg/LinkedinIcon"
import DribbbleIcon from "../../../styles/svg/DribbbleIcon"

function SocialRow() {
  return (
    <div>
      <SocialButton
        href="https://github.com/jennypriley"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubIcon />
      </SocialButton>
      <SocialButton
        href="https://linkedin.com/in/jril/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedinIcon />
      </SocialButton>
      <SocialButton
        href="https://dribbble.com/jennril"
        target="_blank"
        rel="noopener noreferrer"
      >
        <DribbbleIcon />
      </SocialButton>
    </div>
  )
}

const SocialButton = styled.a`
  display: inline-flex;
  margin-right: 2em;
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

export default SocialRow
