import React from "react"
import styled from "styled-components"

function Button({ children, onClick, ...props }) {
  return (
    <button onClick={onClick} {...props}>
      {children}
    </button>
  )
}

export default styled(Button)`
  height: 50px;
  width: 200px;
`
