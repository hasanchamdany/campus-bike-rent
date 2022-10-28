import * as React from "react"
import helloBike from "../../assets/Images/hello-bike.webp"

export default function SideCard() {
  return (
    <div
      className="flex flex-col justify-center items-center
      shadow-2xl px-6 py-6 rounded-br-xl h-full w-full
    bg-gradient-to-r from-blue-medium to-blue-dark hover:from-blue-pale hover:via-blue-medium hover:to-blue-dark 
    transition-colors duration-1000 delay-150"
    >
      <div className="m-auto">
        <img src={helloBike} alt="bike hello" 
            className="rounded-xl w-9/12 h-9/12 m-auto"></img>
      </div>
    </div>
  )
}
