import * as React from "react"
import helloBike from "../../assets/Images/hello-bike.webp"

export default function SideCard() {
  return (
    <div
      className="shadow-2xl px-20 py-16 rounded-tr-xl rounded-br-xl h-5/6 w-11/12
    bg-gradient-to-r from-mediumBlue to-darkBlue hover:from-paleBlue hover:via-mediumBlue hover:to-darkBlue 
    transition-colors duration-1000 delay-150"
    >
      <img src={helloBike} alt="bike hello"></img>
    </div>
  )
}
