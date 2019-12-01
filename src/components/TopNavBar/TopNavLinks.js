import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const TopNavLinks = ({ path, name, interactionColor, currentPath }) => {
  return (
    <TopNavLinkStyles
      to={path}
      activeStyle={{
        borderBottom: "0.5rem solid",
        borderColor: interactionColor,
      }}
      interactioncolor={interactionColor}
      isactive={path.concat("/") === currentPath ? "true" : undefined}
      disabled={path.concat("/") === currentPath}
    >
      {name}
    </TopNavLinkStyles>
  )
}

const TopNavLinkStyles = styled(Link)`
  margin-right: 2em;
  text-transform: uppercase;
  font-family: Lato;
  font-weight: 500;
  font-size: 1.5em;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding-bottom: 1em;
  margin-bottom: -0.35em;
  cursor: pointer;
  &:hover {
    color: ${({ interactioncolor, isactive }) =>
      isactive ? null : interactioncolor};
    cursor: ${({ isactive }) => (isactive ? "default" : null)};
  }
`

export default TopNavLinks
