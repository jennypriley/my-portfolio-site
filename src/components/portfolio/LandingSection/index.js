import React from "react"
import styled, { keyframes } from "styled-components"
import { white } from "../../../styles/colors"

import Description from "../../common/Description"
import WaveIcon from "../../../styles/svg/WaveIcon"
import PageSilhouette from "../../../styles/svg/PageSilhouette"

function LandingSection() {
  return (
    <div>
      <SilhouettePositioning>
        <PageSilhouette
          style={{
            height: "60vh",
            float: "right",
            position: "relative",
            top: "15em",
            right: "3em",
          }}
        />
      </SilhouettePositioning>
      <DownArrowPositioning>
        <ScrollText>
          Scroll down!
          <DownArrowAnimation>
            <DownArrow className="-long" />
          </DownArrowAnimation>
        </ScrollText>
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
  right: 0;
  margin-right: 10em;
  z-index: -100;
  @media only screen and (max-device-width: 1024px) {
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
  @media only screen and (max-device-width: 1024px) {
    margin: 3em 2em 0em 2em;
  }
`

const DownArrowPositioning = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
`

const DownArrow = styled.div`
  width: 12px;
  height: 10px;
  border: none;
  background: none;
  position: relative;
  display: inline-block;

  &::before {
    top: 2px;
    right: 6px;
    width: 8px;
    height: 8px;
    content: "";
    position: absolute;
    transform: rotate(45deg);
    box-shadow: 2px 2px 0 ${white}, 3px 2px 0 ${white}, 2px 3px 0 ${white},
      3px 3px 0 ${white};
    @media only screen and (max-device-width: 1024px) {
      margin-left: 2em;
    }
  }
  &::after {
    width: 0;
    height: 0;
    left: -1px;
    bottom: 50%;
    content: "⁃";
    color: $color;
    line-height: 0;
    font-size: 12px;
    position: absolute;
  }

  &.-long {
    width: 22.4px;
    &::after {
      left: 0;
      content: "⁃⁃⁃";
      transform: rotate(90deg);
      margin-left: 0px;
      padding-bottom: 25px;
    }
  }
`

const DownArrowAnimationKeyframes = keyframes`
0%, 20%, 50%, 80%, 100% {
  transform: translateY(0);
}
40% {
  transform: translateY(-12px);
}
60% {
  transform: translateY(-8px);
}
`

const DownArrowAnimation = styled.div`
  width: fit-content;
  margin-top: 0.5em;
  margin-left: 1.75em;
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
