import React from "react"
import styled from "styled-components"
import { orange } from "../styles/colors"

import TopNavBar from "../components/TopNavBar"
import SectionHeader from "../components/common/SectionHeader"
import Description from "../components/common/Description"
import SocialRow from "../components/common/SocialRow"
import Button from "../components/common/Button"
import Envelope from "../styles/svg/Envelope"

const Contacts = ({ path }) => (
  <div>
    <TopNavBar pathName={path} />
    <MobileHide>
      <EnvelopePositioning>
        <Envelope
          style={{
            height: "50vh",
            display: "flex",
            margin: "11.5em 0em 5em auto",
          }}
        />
      </EnvelopePositioning>
    </MobileHide>
    <ContactHeader>Contact</ContactHeader>
    <ContactDescription>
      Have any questions or a job opportunity you would like to discuss?
    </ContactDescription>
    <br />
    <ContactDescription>
      Find me on GitHub, LinkedIn, or Dribbble!
    </ContactDescription>

    <br />
    <ContactDescription>
      <SocialRow />
    </ContactDescription>
    <br />
    <ContactDescription>
      Alternatively, you may reach me via email.
    </ContactDescription>
    <br />
    <Button
      onClick={() => window.location.assign("mailto:jenny.p.riley@gmail.com")}
    >
      Email Me!
    </Button>
  </div>
)

const EnvelopePositioning = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -100;
`

const ContactHeader = styled(SectionHeader)`
  border-color: ${orange};
`

const ContactDescription = styled(Description)`
  margin-top: 0em;
  @media only screen and (max-device-width: 1024px) {
    margin-top: 0em;
  }
`

const MobileHide = styled.div`
  @media only screen and (max-device-width: 1024px) {
    display: none;
  }
`

export default Contacts
