import React, { useState, useEffect } from "react"
import Scroll from "react-scroll"

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
  const sitePage = window !== undefined ? window : Element
  useEventListender(
    "wheel",
    event => {
      if (event.wheelDeltaY > 0 && debouncedSection > 0) {
        setSection(debouncedSection - 1)
      } else if (event.wheelDeltaY < 0 && debouncedSection < 2) {
        setSection(debouncedSection + 1)
      }
    },
    sitePage
  )
  useEventListender(
    "keydown",
    event => {
      event.preventDefault()
      if (event.keyCode === 38 && debouncedSection > 0) {
        setSection(debouncedSection - 1)
      } else if (
        (event.keyCode === 40 || event.keyCode === 32) &&
        debouncedSection < 2
      ) {
        setSection(debouncedSection + 1)
      }
    },
    sitePage
  )

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
    <div>
      <TopNavBar pathName={path} />
      <Element name="Landing" />
      <LandingSection />
      <Element name="Website" />
      <WebsiteSection />
      <Element name="Branding" />
      <BrandingSection />
    </div>
  )
}

export default Landing
