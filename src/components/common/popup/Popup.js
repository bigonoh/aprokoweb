/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useRef, useState } from 'react'
import popStyles from './styles.module.css'
import { ButtonPrimary } from '../../buttons/ButtonReuse'
import { isMobile } from '../../../utils/DetectMobile'

function Popup(props) {
  const [show, setShow] = useState(false)

  const closeHandler = () => {
    setShow(false)
    props.onClose(false)
  }

  const [isCopied, setIsCopied] = useState('Tap to Copy')
  const copyLink = () => {
    navigator.clipboard.writeText(props.link)
    setIsCopied('Copied')
  }
  useEffect(() => {
    setShow(props.show)
  }, [props.show])

  const buy_airtime = (
    <svg
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="13.5" cy="13.5" r="13.5" fill="#F7F8F7" />
      <g clipPath="url(#clip0_7363_42037)">
        <path
          d="M17.6322 7.41579C17.6301 6.94254 17.3627 6.60583 16.8986 6.48405H16.8976C16.8516 6.47206 16.7746 6.46191 16.7267 6.46191H10.7108C10.4873 6.46191 10.2659 6.53018 10.0916 6.66763C9.81336 6.88903 9.73531 7.21745 9.73716 7.58737C9.75682 11.3789 9.76147 15.1713 9.77081 18.9637C9.77235 19.5864 10.1573 19.9619 10.7938 19.9619H16.6304C17.2848 19.9619 17.6631 19.591 17.6616 18.9499L17.6392 9.86781C17.6372 9.05047 17.6352 8.23313 17.6322 7.41579ZM14.3529 7.80601C14.1295 7.80785 13.9061 7.80601 13.6817 7.80601C13.4629 7.80601 13.2433 7.80693 13.0245 7.80601C12.8658 7.80508 12.7736 7.7239 12.7752 7.59291C12.7768 7.46745 12.8667 7.38627 13.0169 7.38627C13.4638 7.38442 13.9116 7.38442 14.3585 7.38627C14.5087 7.38627 14.6 7.46837 14.6012 7.59383C14.6034 7.7239 14.5107 7.80508 14.3529 7.80601Z"
          fill="#676767"
        />
        <path
          d="M15.3797 7.76251C15.3841 8.0042 15.2117 8.15457 14.9188 8.15734C14.5048 8.16011 14.0908 8.15826 13.6767 8.15826C13.2712 8.15826 12.8656 8.16011 12.46 8.15734C12.1662 8.15549 11.9949 8.00513 11.9981 7.76251C12.0013 7.53004 12.168 7.37967 12.4459 7.37874C13.2739 7.37505 14.102 7.37505 14.9291 7.37874C15.207 7.37874 15.3754 7.53004 15.3797 7.76251Z"
          fill="white"
        />
        <path
          d="M14.8921 18.21C14.901 18.7755 14.4327 19.2432 13.8563 19.246C13.2761 19.2488 12.8037 18.7912 12.8004 18.2248C12.7971 17.6611 13.2738 17.1925 13.8456 17.1943C14.4117 17.1962 14.8841 17.6537 14.8921 18.21Z"
          fill="#CCCCCC"
        />
      </g>
      <defs>
        <clipPath id="clip0_7363_42037">
          <rect
            width="7.89642"
            height="13.5"
            fill="white"
            transform="matrix(1 0 0.00246342 0.999997 9.73438 6.46191)"
          />
        </clipPath>
      </defs>
    </svg>
  )

  const buy_data = (
    <svg
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="13.5" cy="13.5" r="13.5" fill="#F7F8F7" />
      <g clipPath="url(#clip0_7363_42052)">
        <path
          d="M9.22511 13.7744H8.27623C7.57271 13.7744 7.00195 14.3452 7.00195 15.0487V16.4974C7.00195 17.2009 7.57271 17.7717 8.27623 17.7717H9.22576C9.92928 17.7717 10.5 17.2009 10.5 16.4974V15.0487C10.4994 14.3452 9.92928 13.7744 9.22511 13.7744Z"
          fill="#676767"
        />
        <path
          d="M13.3511 10.3555H12.4022C11.6987 10.3555 11.1279 10.9262 11.1279 11.6297V16.4971C11.1279 17.2006 11.6987 17.7714 12.4022 17.7714H13.3517C14.0553 17.7714 14.626 17.2006 14.626 16.4971V11.6297C14.6254 10.9256 14.0546 10.3555 13.3511 10.3555Z"
          fill="#CCCCCC"
        />
        <path
          d="M17.4767 8H16.5272C15.8237 8 15.2529 8.57076 15.2529 9.27428V16.4976C15.2529 17.2011 15.8237 17.7719 16.5272 17.7719H17.4767C18.1803 17.7719 18.751 17.2011 18.751 16.4976V9.27428C18.751 8.57076 18.1803 8 17.4767 8Z"
          fill="#CCCCCC"
        />
      </g>
      <defs>
        <clipPath id="clip0_7363_42052">
          <rect
            width="11.7497"
            height="9.77186"
            fill="white"
            transform="translate(7 8)"
          />
        </clipPath>
      </defs>
    </svg>
  )

  const request_money = (
    <svg
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="13.5" cy="13.5" r="13.5" fill="#F7F8F7" />
      <path
        d="M9.33301 10.0833H15.7497M15.7497 10.0833L13.4163 12.4167M15.7497 10.0833L13.4163 7.75M9.33301 15.9167H18.6663M18.6663 15.9167L16.333 18.25M18.6663 15.9167L16.333 13.5833"
        stroke="#676767"
        strokeWidth="1.55556"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )

  return (
    <div
      style={{
        visibility: show ? 'visible' : 'hidden',
        opacity: show ? '1' : '0',
      }}
      className={popStyles.overlay}
    >
      <div className={popStyles.popup}></div>
    </div>
  )
}

export default Popup
