import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Scroll from "react-scroll"
import { Swipeable } from "react-swipeable"

import useEventListender from "../util/useEventListener"
import useDebounce from "../util/useDebounce"
import TopNavBar from "../components/TopNavBar"
import LandingSection from "../components/portfolio/LandingSection"
import BrandingSection from "../components/portfolio/BrandingSection"
import WebsiteSection from "../components/portfolio/WebsiteSection"

const Element = Scroll.Element

const scroller = Scroll.scroller

function Landing({ path }) {
  const [section, setSection] = useState(0)
  const debouncedSection = useDebounce(section, 300)

  useEventListender("wheel", event => {
    if (event.wheelDeltaY > 0 && debouncedSection > 0) {
      setSection(debouncedSection - 1)
    } else if (event.wheelDeltaY < 0 && debouncedSection < 2) {
      setSection(debouncedSection + 1)
    }
  })
  useEventListender("keydown", event => {
    event.preventDefault()
    if (event.keyCode === 38 && debouncedSection > 0) {
      setSection(debouncedSection - 1)
    } else if (
      (event.keyCode === 40 || event.keyCode === 32) &&
      debouncedSection < 2
    ) {
      setSection(debouncedSection + 1)
    }
  })

  useEffect(() => {
    switch (debouncedSection) {
      case 0:
        scroller.scrollTo("Landing", {
          smooth: true,
          delay: 0,
          duration: 400,
          offset: -88,
        })
        break

      case 1:
        scroller.scrollTo("Website", {
          smooth: true,
          delay: 0,
          duration: 400,
          offset: -88,
        })
        break

      case 2:
        scroller.scrollTo("Branding", {
          smooth: true,
          delay: 0,
          duration: 400,
          offset: -88,
        })
        break

      default:
        break
    }
  }, [debouncedSection])
  return (
    <Swipeable
      onSwipedDown={e => {
        if (debouncedSection > 0) {
          setSection(debouncedSection - 1)
        }
      }}
      onSwipedUp={e => {
        if (debouncedSection < 2) {
          setSection(debouncedSection + 1)
        }
      }}
    >
      <TopNavBar pathName={path} />
      <SectionHeight>
        <Element name="Landing" />
        <LandingSection />
      </SectionHeight>
      <SectionHeight>
        <Element name="Website" />
        <WebsiteSection />
      </SectionHeight>
      <SectionHeight>
        <Element name="Branding" />
        <BrandingSection />
      </SectionHeight>
    </Swipeable>
  )
}

const SectionHeight = styled.div`
  height: 100vh;
`

export default Landing
