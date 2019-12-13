import React from "react"
import styled from "styled-components"

import GithubIcon from "../../../styles/svg/GithubIcon"
import LinkedinIcon from "../../../styles/svg/LinkedinIcon"
import DribbbleIcon from "../../../styles/svg/DribbbleIcon"

function SocialRow({ extraSvgId }) {
  return (
    <div>
      <SocialButton>
        <a
          href="https://github.com/jennypriley"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon extraSvgId={extraSvgId} />
        </a>
      </SocialButton>
      <SocialButton>
        <a
          href="https://linkedin.com/in/jril/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon extraSvgId={extraSvgId} />
        </a>
      </SocialButton>
      <SocialButton>
        <a
          href="https://dribbble.com/jennril"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DribbbleIcon extraSvgId={extraSvgId} />
        </a>
      </SocialButton>
    </div>
  )
}

const SocialButton = styled.div`
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
