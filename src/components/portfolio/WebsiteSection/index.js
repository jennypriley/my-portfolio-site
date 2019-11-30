import React from "react"
import SectionHeader from "../../common/SectionHeader"
import SubsectionHeader from "../../common/SubsectionHeader"
import Description from "../../common/Description"
import ImageContainer from "../../common/ImageContainer"

function WebsiteSection(props) {
  return (
    <div>
      <SectionHeader>Websites</SectionHeader>
      <SubsectionHeader>TikiCyborg Technical, LLC.</SubsectionHeader>
      <Description>
        TikiCyborg Technical, LLC. is a small, Seattle-based company dedicated
        to helping other businesses with their IT needs.
      </Description>
      <ImageContainer />
      <ImageContainer />
      <SubsectionHeader>Battlerounds</SubsectionHeader>
      <Description>
        Battlerounds is a Warhammer 40k tournament tracking site. It allows
        players to keep track of events, statistics, and tournament matches.
      </Description>
      <ImageContainer />
    </div>
  )
}

export default WebsiteSection
