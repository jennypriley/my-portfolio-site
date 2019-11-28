import React from "react"
import styled from "styled-components"
import TopNavLinks from "./TopNavLinks"
import siteColors from "../../styles/colors"
// import LinkedinLogo from "./LinkedinLogo"
// import DribbbleLogo from "./DribbbleLogo"
// import GithubLogo from "./GithubLogo"
import { Link } from "gatsby"

function TopNavBar(props) {
  return (
    <TopNavWrapperStyles>
      <TopNavBarStyles>
        <SiteLogoWrapperStyles>
          <Link to="https://www.linkedin.com/in/jril/">
            <SiteLogoStyles>{/* <LinkedinLogo /> */}</SiteLogoStyles>
          </Link>
          <Link to="https://dribbble.com/jennril">
            <SiteLogoStyles>{/* <DribbbleLogo /> */}</SiteLogoStyles>
          </Link>
          <Link to="https://github.com/jennypriley">
            <SiteLogoStyles>{/* <GithubLogo /> */}</SiteLogoStyles>
          </Link>
        </SiteLogoWrapperStyles>
        <TopNavLinkWrapperStyles>
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
        </TopNavLinkWrapperStyles>
      </TopNavBarStyles>
    </TopNavWrapperStyles>
  )
}

const TopNavBarStyles = styled.div`
  display: inline-block;
  margin: 2em 0em 0em 10em;
  max-width: 100%;
`

const TopNavWrapperStyles = styled.div`
  border-bottom: solid 0.5em ${siteColors.white};
`

const SiteLogoWrapperStyles = styled.div`
  display: block;
  margin-right: 15em;
`

const SiteLogoStyles = styled.div`
  padding-right: 3em;
`

const TopNavLinkWrapperStyles = styled.div`
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
