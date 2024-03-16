'use client'
import React from 'react'
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from 'react-share'

export function SocialShare(props: { shareUrl: string; title: string }) {
  const shareUrl = 'http://github.com'
  const title = 'GitHub'

  return (
    <div className="flex gap-2 justify-end items-center my-2">
      <div className="Demo__some-network">
        <FacebookShareButton url={props.shareUrl} className="cursor-pointer">
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      </div>

      <div className="Demo__some-network">
        <TwitterShareButton
          url={props.shareUrl}
          title={props.title}
          className="cursor-pointer"
        >
          <XIcon size={32} round />
        </TwitterShareButton>
      </div>

      <div className="Demo__some-network">
        <WhatsappShareButton
          url={props.shareUrl}
          title={props.title}
          separator=":: "
          className="cursor-pointer"
        >
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </div>

      {/* <div className="Demo__some-network">
        <LinkedinShareButton url={shareUrl} className="cursor-pointer">
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      </div> */}
    </div>
  )
}

export default SocialShare
