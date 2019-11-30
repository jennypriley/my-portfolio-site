import React from "react"
import SectionHeader from "../../common/SectionHeader"
import SubsectionHeader from "../../common/SubsectionHeader"
import Description from "../../common/Description"
import ImageContainer from "../../common/ImageContainer"

function BrandingSection() {
  return (
    <div>
      <SectionHeader>Illustrations / Branding</SectionHeader>
      <SubsectionHeader>Professional Work</SubsectionHeader>
      <Description>
        These are illustrations and logos created for clients by request.
      </Description>
      <ImageContainer />
      <SectionHeader>Miscellaneous</SectionHeader>
      <Description>
        These were created for practice or on personal mockup projects.
      </Description>
      <ImageContainer />
    </div>
  )
}

export default BrandingSection
