import React from "react"
import styled from "styled-components"
import TopNavLinks from "./TopNavLinks"
import siteColors from "../../styles/colors"
import GithubIcon from "../../styles/svg/GithubIcon"
import LinkedinIcon from "../../styles/svg/LinkedinIcon"
import DribbbleIcon from "../../styles/svg/DribbbleIcon"

function TopNavBar(props) {
  return (
    <StickyNav>
      <TopNavBoundaries>
        <TopNavLinkHoverColors>
          <TopNavLinks
            name="Portfolio"
            path="/"
            currentPath={props.pathName}
            interactionColor={siteColors.violet}
          />
          <TopNavLinks
            name="Contact"
            path="/contact"
            currentPath={props.pathName}
            interactionColor={siteColors.orange}
          />
          <TopNavLinks
            name="About"
            path="/about"
            currentPath={props.pathName}
            interactionColor={siteColors.green}
          />
        </TopNavLinkHoverColors>
        <SocialIcons>
          <SocialButton>
            <a
              href="https://github.com/jennypriley"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
            </a>
          </SocialButton>
          <SocialButton>
            <a
              href="https://linkedin.com/in/jril/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon />
            </a>
          </SocialButton>
          <SocialButton>
            <a
              href="https://dribbble.com/jennril"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DribbbleIcon />
            </a>
          </SocialButton>
        </SocialIcons>
      </TopNavBoundaries>
      <TopNavBottomBorder />
    </StickyNav>
  )
}

const StickyNav = styled.div`
  display: block;
  position: sticky;
  background-color: ${siteColors.black};
  top: 0;
  z-index: 100;
`

const TopNavBoundaries = styled.div`
  display: flex;
  margin: 0em 10em 0em 10em;
  width: -webkit-fill-available;
  padding: 0.5em 0 0.5em;
  align-items: center;
`

const TopNavBottomBorder = styled.div`
  border-bottom: solid 0.5em ${siteColors.white};
  margin-top: -0.5em;
`

const TopNavLinkHoverColors = styled.div`
  display: inline-flex;
  padding-top: 1em;
  div:nth-child(1) {
    color: ${siteColors.violet};
  }
  div:nth-child(2) {
    color: ${siteColors.orange};
  }
  div:nth-child(3) {
    color: ${siteColors.green};
  }
`

const SocialIcons = styled.div`
  margin-left: auto;
  display: flex;
  div:last-child {
    padding-right: 0;
    margin-right: 0;
  }
`
const SocialButton = styled.div`
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

export default TopNavBar
