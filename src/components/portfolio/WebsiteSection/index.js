import React from "react"
import styled from "styled-components"

import SectionHeader from "../../common/SectionHeader"
import SubsectionHeader from "../../common/SubsectionHeader"
import Description from "../../common/Description"
import ImageContainer from "../../common/ImageContainer"
import Row from "../../common/Row"

function WebsiteSection(props) {
  return (
    <div>
      <SectionHeader>Websites</SectionHeader>
      <SubsectionHeader>TikiCyborg Technical, LLC.</SubsectionHeader>
      <WebsiteDescription>
        TikiCyborg Technical, LLC. is a small, Seattle-based company dedicated
        to helping other businesses with their IT needs.
      </WebsiteDescription>
      <Row>
        <ImageContainer>
          <a
            href="https://jennysmocks.invisionapp.com/public/share/HJWUCBD9Q"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://myportfoliositeimages.s3-us-west-1.amazonaws.com/tctech_site_1.png"
              alt=" "
              style={{
                maxHeight: "5.1em",
                maxWidth: "9.1em",
                verticalAlign: "bottom",
              }}
            />
          </a>
        </ImageContainer>
      </Row>
      <SubsectionHeader>Battlerounds</SubsectionHeader>
      <WebsiteDescription>
        Battlerounds is a Warhammer 40K tournament tracking site. It allows
        players to keep track of events, statistics, and tournament matches.
      </WebsiteDescription>
      <Row>
        <ImageContainer>
          <a
            href="https://jennysmocks.invisionapp.com/public/share/87WUCAMWF#/screens/475072047"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://myportfoliositeimages.s3-us-west-1.amazonaws.com/battlerounds_site_1.png"
              alt=" "
              style={{
                maxHeight: "5.1em",
                maxWidth: "9.1em",
                verticalAlign: "bottom",
              }}
            />
          </a>
        </ImageContainer>
      </Row>
    </div>
  )
}

const WebsiteDescription = styled(Description)`
  margin-top: 0em;
  @media only screen and (max-device-width: 1024px) {
    margin: 0em 2em 2em 2em;
  }
`

export default WebsiteSection
