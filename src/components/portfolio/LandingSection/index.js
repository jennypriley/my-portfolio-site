import React from "react"
import styled, { keyframes } from "styled-components"
import { white } from "../../../styles/colors"

import Description from "../../common/Description"
import WaveIcon from "../../../styles/svg/WaveIcon"
import PageSilhouette from "../../../styles/svg/PageSilhouette"
import DownArrow from "../../../styles/svg/DownArrow"

function LandingSection() {
  return (
    <div>
      <SilhouettePositioning>
        <PageSilhouette
          style={{
            height: "75vh",
            display: "flex",
            margin: "8.5em 10em 5em auto",
          }}
        />
      </SilhouettePositioning>
      <DownArrowPositioning>
        <ScrollText>Scroll down!</ScrollText>
        <DownArrowAnimation>
          <DownArrow
            style={{
              height: "5vh",
              display: "flex",
              margin: "auto auto 1em 11.25em",
            }}
          />
        </DownArrowAnimation>
      </DownArrowPositioning>
      <Description>
        <WaveLine>
          Hey there.
          <WaveAnimation>
            <WaveIcon />
          </WaveAnimation>
        </WaveLine>
        <BlurbPart>
          I’m Jenny, a web and graphic designer located in Arizona. I envision
          web applications and marketing material that bring clients’ business
          identities to life. And, yes, I <i>do</i> code!
        </BlurbPart>
      </Description>
    </div>
  )
}

const BlurbPart = styled.div`
  display: block;
  margin-block-start: 1em;
`

const SilhouettePositioning = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -100;
  @media only screen and (max-device-width: 979px) {
    display: none;
  }
`

const ScrollText = styled.div`
  cursor: default;
  font-family: Lato;
  font-weight: 300;
  margin-left: 10em;
  padding-bottom: 1em;
  color: ${white};
  @media only screen and (max-device-width: 979px) {
    margin: 3em 2em 2em 2em;
  }
`

const DownArrowPositioning = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
  @media only screen and (max-device-width: 979px) {
    display: none;
  }
`

const DownArrowAnimationKeyframes = keyframes`
0%, 20%, 50%, 80%, 100% {
  transform: translateY(0);
}
40% {
  transform: translateY(-20px);
}
60% {
  transform: translateY(-15px);
}
`

const DownArrowAnimation = styled.div`
  &:hover {
    animation-name: ${DownArrowAnimationKeyframes};
    animation-duration: 2s;
    transition-delay: 0s;
    animation-iteration-count: infinite;
    transform-origin: bottom center;
  }
`

const WaveLine = styled.div`
  display: inline-flex;
`

const WaveAnimationKeyframes = keyframes`
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(-10deg);
  }
  20% {
    transform: rotate(12deg);
  }
  30% {
    transform: rotate(-10deg);
  }
  40% {
    transform: rotate(9deg);
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
`

const WaveAnimation = styled.div`
  cursor: default;
  padding-left: 0.5em;
  padding-right: 0;
  margin-bottom: -0.25em;
  &:hover {
    animation-name: ${WaveAnimationKeyframes};
    animation-duration: 2s;
    transition-delay: 0s;
    animation-iteration-count: infinite;
    transform-origin: bottom left;
  }
`

export default LandingSection
