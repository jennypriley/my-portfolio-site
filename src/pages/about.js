import React from "react"
import styled from "styled-components"
import { green, white } from "../styles/colors"

import TopNavBar from "../components/TopNavBar"
import Row from "../components/common/Row"
import SectionHeader from "../components/common/SectionHeader"
import Description from "../components/common/Description"
import PaintBrush from "../styles/svg/PaintBrush"

const About = ({ path }) => (
  <div>
    <TopNavBar pathName={path} />
    <MobileHide>
      <PaintBrushPositioning>
        <PaintBrush
          style={{
            height: "80vh",
            display: "flex",
            margin: "11.5em 10em 0em auto",
          }}
        />
      </PaintBrushPositioning>
    </MobileHide>
    <AboutHeader>About</AboutHeader>
    <Row>
      <MobileHide>
        <PhotoContainer>
          <img
            src="https://myportfoliositeimages.s3-us-west-1.amazonaws.com/headshot.png"
            style={{
              height: "18.1em",
              width: "12.1em",
              verticalAlign: "bottom",
            }}
            alt=" "
          />
        </PhotoContainer>
      </MobileHide>
      <Column>
        <AboutDescription>
          <BlurbPart>
            I am a humor-loving gamer with a background in the arts. In my spare
            time, I love to play video games, draw, paint miniatures, or dabble
            in creative hobbies. I'm also an animal lover and like to spend time
            snuggling and playing with my two cats.
          </BlurbPart>
          <BlurbPart>
            When I'm not at home, I'm usually hanging out with my boyfriend and
            friends or out enjoying nature while hiking or at a whildlife
            preserve.
          </BlurbPart>
        </AboutDescription>
      </Column>
    </Row>
  </div>
)

const PaintBrushPositioning = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -100;
`

const AboutHeader = styled(SectionHeader)`
  border-color: ${green};
`

const PhotoContainer = styled.div`
  min-width: auto;
  min-height: auto;
  display: inline-block;
  border: solid 0.1em ${white};
  border-radius: 0.25em;
  margin: 0em 0em 3em 2em;
`

const BlurbPart = styled.div`
  display: block;
  margin-bottom: 1em;
`

const Column = styled(Row)`
  flex-direction: column;
  margin-left: 2em;
`

const AboutDescription = styled(Description)`
  margin-top: -0.5em;
  margin-left: 0em;
  @media only screen and (max-device-width: 1024px) {
    margin-top: 0em;
    margin-left: 1.65em;
  }
`

const MobileHide = styled.div`
  @media only screen and (max-device-width: 1024px) {
    display: none;
  }
`

export default About
