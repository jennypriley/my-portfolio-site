import React from "react"
import styled, { keyframes } from "styled-components"
import { white } from "../styles/colors"
import { Link } from "gatsby"

import Web from "../styles/svg/Web"
import Spider from "../styles/svg/Spider"
import Button from "../components/common/Button"

function NotFound() {
  return (
    <div>
      <div>
        <Row>
          <Web
            id="LeftWeb"
            style={{
              height: "18vw",
              display: "flex",
            }}
          />
          <Column>
            <Thread />
            <SpiderPositioning>
              <Spider
                style={{
                  height: "10vh",
                  display: "flex",
                }}
              />
            </SpiderPositioning>
          </Column>
          <RightWebPositioning>
            <Web
              id="RightWeb"
              style={{
                height: "18vw",
                display: "flex",
              }}
            />
          </RightWebPositioning>
        </Row>
      </div>
      <div>
        <NotFoundTextPositioning>
          <NotFoundHeader>404</NotFoundHeader>
          <NotFoundDescription>Not Found</NotFoundDescription>
        </NotFoundTextPositioning>
        <ButtonPositioning>
          <Link>
            <Button to="/">Return</Button>
          </Link>
        </ButtonPositioning>
      </div>
    </div>
  )
}

const RightWebPositioning = styled.div`
  -moz-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  transform: scaleX(-1);
  -ms-filter: fliph; /*IE*/
  filter: fliph;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
`

const spiderAnimationKeyframes = keyframes`
  0%,
  100% {
    transform: rotate(5deg);
  }
  50% {
    transform: rotate(-5deg);
  }
`

const threadAnimationKeyframes = keyframes`
  0%,
  100% {
    transform: rotate(.5deg);
  }
  50% {
    transform: rotate(-.5deg);
  }
`

const Thread = styled.div`
  display: inline-block;
  width: 0.15rem;
  height: 10rem;
  background: ${white};
  position: relative;
  align-self: center;
  margin-top: 0;
  transform-origin: 50% 0;
  animation: ${threadAnimationKeyframes} 2s ease-in-out infinite;
`

const SpiderPositioning = styled.div`
  margin-top: -1rem;
  transform-origin: 50% 0;
  animation: ${spiderAnimationKeyframes} 2s ease-in-out infinite;
`

const NotFoundTextPositioning = styled.div`
  position: absolute;
  text-align: center;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -moz-transform: translateX(-50%);
  transform: translateX(-50%);
`

const NotFoundHeader = styled.div`
  margin-top: -0.25em;
  font-family: Lato;
  font-weight: 500;
  font-size: 15em;
  @media only screen and (max-device-width: 1024px) {
    font-size: 10em;
  }
`

const NotFoundDescription = styled.div`
  margin-top: -1em;
  font-family: Lato;
  font-weight: 300;
  font-size: 5em;
  @media only screen and (max-device-width: 1024px) {
    font-size: 3em;
  }
`

const ButtonPositioning = styled.div`
  position: absolute;
  bottom: 0;
  margin-bottom: 5em;
  margin-left: -5em;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -moz-transform: translateX(-50%);
  transform: translateX(-50%);
  @media only screen and (max-device-width: 1024px) {
    margin-left: -0.75em;
  }
`

export default NotFound
