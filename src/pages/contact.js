import React from "react"
import styled from "styled-components"
import TopNavBar from "../components/TopNavBar"
import SectionHeader from "../components/common/SectionHeader"
import Description from "../components/common/Description"
import Button from "../components/common/Button"
import { orange } from "../styles/colors"

const Contacts = ({ path }) => (
  <div>
    <TopNavBar pathName={path} />
    <ContactHeader>Contact</ContactHeader>
    <ContactDescription>
      Have any questions or a job opportunity you would like to discuss?
    </ContactDescription>
    <br />
    <Button
      onClick={() => window.location.assign("mailto:jenny.p.riley@gmail.com")}
    >
      Email Me!
    </Button>
  </div>
)

const ContactHeader = styled(SectionHeader)`
  margin-top: 3em;
  border-color: ${orange};
`

const ContactDescription = styled(Description)`
  margin-top: 0em;
`

export default Contacts
