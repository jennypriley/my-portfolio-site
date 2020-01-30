import React from "react"
import IconWrapper from "../../components/Icons/IconWrapper"

const GithubIcon = ({ ...props }) => (
  <IconWrapper>
    <svg viewBox="0 0 40 40" {...props}>
      <defs>
        <path id={`prefix_github_icon__a`} d="M.1.4h39.7V40H.1z" />
      </defs>
      <clipPath id={`prefix_github_icon__b`}>
        <use xlinkHref="#prefix_github_icon__a" overflow="visible" />
      </clipPath>
      <g clipPath="url(#prefix_github_icon__b)">
        <defs>
          <path
            id={`prefix_github_icon__c`}
            d="M-262.9-16.6h1440v1080h-1440z"
          />
        </defs>
        <clipPath id={`prefix_github_icon__d`}>
          <use xlinkHref="#prefix_github_icon__c" overflow="visible" />
        </clipPath>
        <g clipPath="url(#prefix_github_icon__d)">
          <defs>
            <path id={`prefix_github_icon__e`} d="M-.9.4h41v40h-41z" />
          </defs>
          <clipPath id={`prefix_github_icon__f`}>
            <use xlinkHref="#prefix_github_icon__e" overflow="visible" />
          </clipPath>
          <g clipPath="url(#prefix_github_icon__f)">
            <defs>
              <path
                id={`prefix_github_icon__g`}
                d="M39.9 22c-.2 1-.2 2.1-.5 3.1-1.8 7.2-6 12.1-12.7 14.7-.1 0-.3.1-.4.1-.8.2-1.3-.2-1.3-1.1v-5.4c0-.9-.1-1.8-.5-2.6-.2-.4-.5-.8-.8-1.2.8-.2 1.6-.3 2.4-.5 2-.5 3.8-1.5 5-3.3 1-1.4 1.4-3.1 1.5-4.8.2-1.7.1-3.4-.7-4.9-.3-.6-.7-1.2-1.1-1.7-.1-.2-.2-.4-.1-.6.6-1.6.3-3.2-.2-4.8 0-.1-.2-.3-.3-.3-.5 0-1.1 0-1.5.3-1.1.5-2.2 1.1-3.3 1.6-.2.1-.5.2-.7.1-2.3-.6-4.6-.7-7-.4-.7.1-1.5.3-2.2.4-.3.1-.5 0-.8-.1-1.2-.8-2.5-1.5-4-1.8h-.1c-.9-.2-1.1-.1-1.3.8-.4 1.5-.5 2.9 0 4.4v.4c-2.5 3-2.3 6.4-1.2 9.8.9 2.9 3.1 4.3 5.9 5 .8.2 1.6.3 2.4.5-.7.7-1.1 1.6-1.2 2.5 0 .1-.2.2-.3.2-2.3.8-4.1.5-5.4-1.7-.7-1.2-1.6-2-3-2.2-.3 0-.7.1-1 .2.2.3.3.7.6.8 1.1.7 1.9 1.7 2.3 3 .6 1.7 1.9 2.5 3.5 2.6 1.1.1 2.2 0 3.3 0V39c0 .6-.6 1-1.1.8-.8-.2-1.6-.5-2.4-.9-6.4-3-10.3-8.1-11.3-15.2C-.7 16 1.9 9.6 7.8 4.7 11 2.1 14.8.6 18.9.5c.1 0 .3 0 .4-.1h1.4c.7.1 1.4.1 2.1.2C27 1.2 30.6 3 33.7 6c3.1 3 5.1 6.7 5.8 11l.3 2.4V22z"
              />
            </defs>
            <clipPath id={`prefix_github_icon__h`}>
              <use xlinkHref="#prefix_github_icon__g" overflow="visible" />
            </clipPath>
            <g clipPath="url(#prefix_github_icon__h)">
              <defs>
                <path id={`prefix_github_icon__i`} d="M.1.4h40v40H.1z" />
              </defs>
              <clipPath id={`prefix_github_icon__j`}>
                <use xlinkHref="#prefix_github_icon__i" overflow="visible" />
              </clipPath>
              <path
                clipPath="url(#prefix_github_icon__j)"
                fill="#fafafa"
                d="M-4.9-4.6h49.7V45H-4.9z"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  </IconWrapper>
)

export default GithubIcon
