import React from "react"
import styled from "styled-components"
import { white } from "../../../styles/colors"

function ImageContainer({ children }) {
  return <ImageWrapper>{children}</ImageWrapper>
}

const ImageWrapper = styled.div`
  height: 100px;
  width: 100px;
  border-style: solid;
  border-width: 2px;
  border-color: ${white};
`

export default ImageContainer
