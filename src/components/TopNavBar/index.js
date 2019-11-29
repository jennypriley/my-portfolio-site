import React from "react"
import styled from "styled-components"
import TopNavLinks from "./TopNavLinks"
import siteColors from "../../styles/colors"

function TopNavBar(props) {
  return (
    <TopNavBottomBorder>
      <TopNavBoundaries>
        <TopNavLinkHoverColors>
          <TopNavLinks
            name="Portfolio"
            path=""
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
      </TopNavBoundaries>
    </TopNavBottomBorder>
  )
}

const TopNavBoundaries = styled.div`
  display: inline-block;
  margin: 2em 0em 0em 10em;
  max-width: 100%;
`

const TopNavBottomBorder = styled.div`
  border-bottom: solid 0.5em ${siteColors.white};
`

const TopNavLinkHoverColors = styled.div`
  display: inline-flex;
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

export default TopNavBar
