import React from "react"
import styled from "styled-components"
import { orange } from "../styles/colors"

import TopNavBar from "../components/TopNavBar"
import SectionHeader from "../components/common/SectionHeader"
import Description from "../components/common/Description"
import Button from "../components/common/Button"
import Envelope from "../styles/svg/Envelope"
import SocialRow from "../components/common/Button/SocialRow"

const Contacts = ({ path }) => (
  <div>
    <TopNavBar pathName={path} />
    <EnvelopePositioning>
      <Envelope
        style={{
          height: "65vh",
          display: "flex",
          margin: "11.5em 0em 5em auto",
        }}
      />
    </EnvelopePositioning>
    <ContactHeader>Contact</ContactHeader>
    <ContactDescription>
      Have any questions or a job opportunity you would like to discuss?
    </ContactDescription>
    <MobileHide>
      <SocialSpacing>
        <SocialRow extraSvgId="contact" />
      </SocialSpacing>
    </MobileHide>
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
`

const SocialSpacing = styled.div`
  margin-left: 0em;
  display: flex;
  div:last-child {
    padding-right: 0;
    margin-right: 0;
  }
`

const MobileHide = styled.div`
  @media only screen and (min-device-width: 801px) {
    display: none;
  }
`

export default Contacts
