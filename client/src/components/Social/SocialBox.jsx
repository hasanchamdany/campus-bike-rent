import * as React from "react"

import SocialButton from "../Social/SocialButton"

import twitter from "../../assets/icon/twitter-logo.svg"
import facebook from "../../assets/icon/fb-logo.svg"
import instagram from "../../assets/icon/insta-logo.svg"

export default function SocialBox() {
  return (
    <>
      <h4 className="text-xl">Follow us on</h4>
      <div className="flex flex-row gap-4 m-4 mb-16">
        <SocialButton
          socialLink="https://www.twitter.com"
          socialImg={twitter}
          socialAlt="twitter"
        />

        <SocialButton
          socialLink="https://www.instagram.com"
          socialImg={instagram}
          socialAlt="instagram"
        />

        <SocialButton
          socialLink="https://www.facebook.com"
          socialImg={facebook}
          socialAlt="facebook"
        />
      </div>
    </>
  )
}
