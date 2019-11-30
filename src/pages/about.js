import React from "react"
import TopNavBar from "../components/TopNavBar"
import SectionHeader from "../components/common/SectionHeader"
import Description from "../components/common/Description"
import ImageContainer from "../components/common/ImageContainer"

const About = ({ path }) => (
  <div>
    <TopNavBar pathName={path} />
    <SectionHeader>About</SectionHeader>
    <ImageContainer />
    <Description>
      I am a humor-loving gamer with a background in the arts. In my spare time,
      I love to play video games, draw, paint miniatures, or dabble in creative
      hobbies. I'm also an animal lover and like to spend time snuggling and
      playing with my two cats.
    </Description>
    <Description>
      When I'm not at home, I'm usually hanging out with my boyfriend and
      friends or out enjoying nature while hiking or at a whildlife preserve.
    </Description>
  </div>
)

export default About
