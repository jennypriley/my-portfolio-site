import React from "react"
import TopNavBar from "../components/TopNavBar"
import SectionHeader from "../components/common/SectionHeader"
import Description from "../components/common/Description"
import Button from "../components/common/Button"

const Contacts = ({ path }) => (
  <div>
    <TopNavBar pathName={path} />
    <SectionHeader>Contact</SectionHeader>
    <Description>
      Have any questions or a job opportunity you would like to discuss?
    </Description>
    <Button
      onClick={() => window.location.assign("mailto:jenny.p.riley@gmail.com")}
    >
      Email Me!
    </Button>
  </div>
)

export default Contacts
