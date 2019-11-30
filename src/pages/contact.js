import React from "react"
import styled from "styled-components"
import TopNavBar from "../components/TopNavBar"

const Contacts = props => (
  <div>
    <TopNavBar pathName={props.path} />
    <LandingText>
      <p>Hey there.</p>
      <p>
        I’m Jenny, a web/app and graphic designer located in Arizona. I envision
        web applications and marketing material that bring clients’ business
        identities to life. And, yes, I <i>do</i> code!
      </p>
    </LandingText>
  </div>
)

const LandingText = styled.div`
  font-family: Lato;
  font-weight: 300;
  display: inline-block;
  margin: 3em 0em 0em 10em;
  width: 32em;
`

export default Contacts
