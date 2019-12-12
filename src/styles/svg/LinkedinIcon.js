import React from "react"
import IconWrapper from "../../components/Icons/IconWrapper"

const LinkedinIcon = ({ extraSvgId, ...props }) => (
  <IconWrapper>
    <svg viewBox="0 0 40 40" {...props}>
      <defs>
        <path
          id={`prefix_linked_in__a_${extraSvgId}`}
          d="M10.4 29.3v-6.7V16c0-.2.1-.3.3-.3h4c.2 0 .3 0 .3.3v13.4c0 .2-.1.2-.3.2h-4.1c-.2 0-.2-.1-.2-.3zm11.7-11.9c1.8-2.9 5.7-2.4 7.3-.9.9.8 1.4 1.9 1.7 3.1.1.6.2 1.3.2 2v7.8c0 .2-.1.3-.3.3h-4c-.2 0-.3-.1-.3-.3v-7.1c0-.4 0-.9-.1-1.3-.2-.9-.7-1.6-1.6-1.8-1-.2-1.8.1-2.5.9-.4.5-.5 1.1-.5 1.8v7.4c0 .4 0 .3-.3.3H17.8c-.2 0-.3 0-.3-.3 0-4.4.1-8.7 0-13.1 0-.5 0-.5.5-.5h3.7c.2 0 .3 0 .3.3v1.6h.1v-.2zm-10.2-3.7c-1.1-.3-1.8-1.2-1.8-2.3 0-1.3.9-2.3 2.2-2.4.4 0 .8 0 1.3.1 1 .3 1.7 1.3 1.6 2.3-.1 1.1-.8 2-1.8 2.2-.2.1-.5.1-.7.1-.3.1-.6.1-.8 0zm8-13.7C9 .1.3 9.1.3 20.1.4 31 9.2 40 20 40c10.8 0 19.6-8.8 19.6-19.9C39.7 8.9 31 0 20 0h-.1z"
        />
      </defs>
      <clipPath id={`prefix_linked_in__b_${extraSvgId}`}>
        <use xlinkHref="#prefix_linked_in__a" overflow="visible" />
      </clipPath>
      <g clipPath="url(#prefix_linked_in__b)">
        <defs>
          <path
            id={`prefix_linked_in__c_${extraSvgId}`}
            d="M-118.7-17h1440v1080h-1440z"
          />
        </defs>
        <clipPath id={`prefix_linked_in__d_${extraSvgId}`}>
          <use xlinkHref="#prefix_linked_in__c" overflow="visible" />
        </clipPath>
        <g clipPath="url(#prefix_linked_in__d)">
          <defs>
            <path
              id={`prefix_linked_in__e_${extraSvgId}`}
              d="M-4.7-5h50v50h-50z"
            />
          </defs>
          <clipPath id={`prefix_linked_in__f_${extraSvgId}`}>
            <use xlinkHref="#prefix_linked_in__e" overflow="visible" />
          </clipPath>
          <g clipPath="url(#prefix_linked_in__f)">
            <defs>
              <path
                id={`prefix_linked_in__g_${extraSvgId}`}
                d="M-4.7-5h49.4v50H-4.7z"
              />
            </defs>
            <clipPath id={`prefix_linked_in__h_${extraSvgId}`}>
              <use xlinkHref="#prefix_linked_in__g" overflow="visible" />
            </clipPath>
            <g clipPath="url(#prefix_linked_in__h)">
              <defs>
                <path
                  id={`prefix_linked_in__i_${extraSvgId}`}
                  d="M.3 0h40v40H.3z"
                />
              </defs>
              <clipPath id={`prefix_linked_in__j_${extraSvgId}`}>
                <use xlinkHref="#prefix_linked_in__i" overflow="visible" />
              </clipPath>
              <path
                clipPath="url(#prefix_linked_in__j)"
                fill="#0077b5"
                d="M-9.7-10h59.4v60H-9.7z"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  </IconWrapper>
)

export default LinkedinIcon
