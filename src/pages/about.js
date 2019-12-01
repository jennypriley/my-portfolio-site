import React from "react"
import styled from "styled-components"
import TopNavBar from "../components/TopNavBar"
import Row from "../components/common/Row"
import SectionHeader from "../components/common/SectionHeader"
import Description from "../components/common/Description"
import ImageContainer from "../components/common/ImageContainer"
import { green } from "../styles/colors"

const About = ({ path }) => (
  <div>
    <TopNavBar pathName={path} />
    <AboutHeader>About</AboutHeader>
    <Row>
      <PhotoContainer />
      <Column>
        <AboutDescription>
          <p>
            I am a humor-loving gamer with a background in the arts. In my spare
            time, I love to play video games, draw, paint miniatures, or dabble
            in creative hobbies. I'm also an animal lover and like to spend time
            snuggling and playing with my two cats.
          </p>
          <p>
            When I'm not at home, I'm usually hanging out with my boyfriend and
            friends or out enjoying nature while hiking or at a whildlife
            preserve.
          </p>
        </AboutDescription>
      </Column>
    </Row>
  </div>
)

const AboutHeader = styled(SectionHeader)`
  margin-top: 3em;
  border-color: ${green};
`

const PhotoContainer = styled(ImageContainer)`
  width: 12em;
  height: 18em;
`

const Column = styled(Row)`
  flex-direction: column;
  margin-left: 2em;
`

const AboutDescription = styled(Description)`
  margin-top: -1em;
  margin-left: 0em;
`

export default About
