import React from "react"
import styled from "styled-components"

function SocialButton({ children, onClick, ...props }) {
  return (
    <button onClick={onClick} {...props}>
      {children}
    </button>
  )
}

export default styled(SocialButton)`
  
  }
`
