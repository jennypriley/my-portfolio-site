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
        <ImageContainer>
          <a
            href="https://dribbble.com/shots/8755367-Affinity-Homes-Logo/attachments/986107?mode=media"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://myportfoliositeimages.s3-us-west-1.amazonaws.com/affinityhomes.png"
              style={{
                maxHeight: "5.1em",
                maxWidth: "9.1em",
                verticalAlign: "bottom",
              }}
            />
          </a>
        </ImageContainer>
        <ImageContainer>
          <a
            href="https://dribbble.com/shots/8755467-Pompacorg-Logo/attachments/986113?mode=media"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://myportfoliositeimages.s3-us-west-1.amazonaws.com/pompacorglogo.png"
              style={{
                maxHeight: "5.1em",
                maxWidth: "9.1em",
                verticalAlign: "bottom",
              }}
            />
          </a>
        </ImageContainer>
      </Row>
      <SubsectionHeader>Miscellaneous</SubsectionHeader>
      <BrandingDescription>
        These were created for practice or on personal mockup projects.
      </BrandingDescription>
      <Row>
        <ImageContainer>
          <a
            href="https://myportfoliositeimages.s3-us-west-1.amazonaws.com/Recipe_App_Login1_Phone_Animation.mov"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://myportfoliositeimages.s3-us-west-1.amazonaws.com/recipeapplogin.png"
              style={{
                maxHeight: "5.1em",
                maxWidth: "9.1em",
                verticalAlign: "bottom",
              }}
            />
          </a>
        </ImageContainer>
        <ImageContainer>
          <a
            href="https://dribbble.com/shots/8755314-Night-Sky-404-Error-Illustration/attachments/986103?mode=media"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://myportfoliositeimages.s3-us-west-1.amazonaws.com/nightsky404.png"
              style={{
                maxHeight: "5.1em",
                maxWidth: "9.1em",
                verticalAlign: "bottom",
              }}
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

const BrandingDescription = styled(Description)`
  margin-top: 0em;
`

export default BrandingSection
