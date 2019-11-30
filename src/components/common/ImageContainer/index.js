import React from "react"
import styled from "styled-components"
import { white } from "../../../styles/colors"

function ImageContainer({ children }) {
  return <ImageWrapper>{children}</ImageWrapper>
}

const ImageWrapper = styled.div`
  height: 12em;
  width: 18em;
  border: solid 0.1em ${white};
  border-radius: 0.25em;
  margin: 0em 0em 3em 2em;
`

export default ImageContainer
