import React from "react"
import TopNavBar from "../components/TopNavBar"
import LandingSection from "../components/portfolio/LandingSection"
import BrandingSection from "../components/portfolio/BrandingSection"
import WebsiteSection from "../components/portfolio/WebsiteSection"

const Landing = ({ path }) => (
  <div>
    <TopNavBar pathName={path} />
    <LandingSection />
    <WebsiteSection />
    <BrandingSection />
  </div>
)

export default Landing
