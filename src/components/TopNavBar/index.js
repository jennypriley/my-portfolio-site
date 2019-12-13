import React from "react"
import styled from "styled-components"
import TopNavLinks from "./TopNavLinks"
import siteColors from "../../styles/colors"
import SocialRow from "../common/Button/SocialRow"

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
        <MobileHide>
          <SocialRow extraSvgId="topnavbar" />
        </MobileHide>
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
  @media only screen and (max-device-width: 979px) {
    margin: 0em 2em 0em 2em;
  }
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

const MobileHide = styled.div`
  margin-left: auto;
  div:last-child {
    padding-right: 0;
    margin-right: 0;
  }
  @media only screen and (max-device-width: 979px) {
    display: none;
  }
`

export default TopNavBar
