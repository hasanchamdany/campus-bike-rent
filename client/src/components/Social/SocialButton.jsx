import * as React from "react"

export default function SocialButton({ socialLink, socialImg, socialAlt }) {
  return (
    <a href={socialLink} target="_blank" rel="noreferrer">
      <div className="p-2 rounded-full box-border border-2 border-white ">
        <img src={socialImg} alt={socialAlt} className="h-6"></img>
      </div>
    </a>
  )
}
