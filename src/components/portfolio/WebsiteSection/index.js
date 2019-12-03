import React from "react"
import styled from "styled-components"

import SectionHeader from "../../common/SectionHeader"
import SubsectionHeader from "../../common/SubsectionHeader"
import Description from "../../common/Description"
import ImageContainer from "../../common/ImageContainer"
import Row from "../../common/Row"

function WebsiteSection(props) {
  return (
    <SectionHeight>
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
              style={{ maxHeight: "5em", maxWidth: "9em" }}
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
              style={{ maxHeight: "5em", maxWidth: "9em" }}
            />
          </a>
        </ImageContainer>
      </Row>
    </SectionHeight>
  )
}

const SectionHeight = styled.div`
  height: 100vh;
  margin-top: 3em;
`

const WebsiteDescription = styled(Description)`
  margin-top: 0em;
`

export default WebsiteSection
