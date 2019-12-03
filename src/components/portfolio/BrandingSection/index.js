import React from "react"
import styled from "styled-components"
import SectionHeader from "../../common/SectionHeader"
import SubsectionHeader from "../../common/SubsectionHeader"
import Description from "../../common/Description"
import ImageContainer from "../../common/ImageContainer"
import Row from "../../common/Row"

function BrandingSection() {
  return (
    <SectionHeight>
      <SectionHeader>Illustrations / Branding</SectionHeader>
      <SubsectionHeader>Professional Work</SubsectionHeader>
      <BrandingDescription>
        These are illustrations and logos created for clients by request.
      </BrandingDescription>
      <Row>
        <ImageContainer />
      </Row>
      <SubsectionHeader>Miscellaneous</SubsectionHeader>
      <BrandingDescription>
        These were created for practice or on personal mockup projects.
      </BrandingDescription>
      <Row>
        <ImageContainer />
      </Row>
    </SectionHeight>
  )
}

const SectionHeight = styled.div`
  height: 100vh;
  margin-top: 3em;
`

const BrandingDescription = styled(Description)`
  margin-top: 0em;
`

export default BrandingSection
