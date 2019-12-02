import React from "react"

const DownArrow = props => (
  <svg viewBox="0 0 40 40" {...props}>
    <defs>
      <path
        id="prefix_downarrow__a"
        d="M20 40L0 17.9h10V0h20v17.9h10S20.1 40 20 40"
      />
    </defs>
    <clipPath id="prefix_downarrow__b">
      <use xlinkHref="#prefix_downarrow__a" overflow="visible" />
    </clipPath>
    <g clipPath="url(#prefix_downarrow__b)">
      <path fill="#fefefe" d="M0 0h40v40H0z" />
    </g>
  </svg>
)

export default DownArrow
