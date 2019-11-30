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
        <ImageContainer />
        <ImageContainer />
      </Row>
      <SubsectionHeader>Battlerounds</SubsectionHeader>
      <WebsiteDescription>
        Battlerounds is a Warhammer 40K tournament tracking site. It allows
        players to keep track of events, statistics, and tournament matches.
      </WebsiteDescription>
      <Row>
        <ImageContainer />
      </Row>
    </div>
  )
}

const WebsiteDescription = styled(Description)`
  margin-top: 0em;
`

export default WebsiteSection
