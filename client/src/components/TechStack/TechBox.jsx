import * as React from "react"

import nodejs from "../../assets/Images/Tech/nodejs-logo.svg"
import mongodb from "../../assets/Images/Tech/mongodb-logo.svg"
import reactjs from "../../assets/Images/Tech/reactjs-logo.svg"
import html5 from "../../assets/Images/Tech/html5-logo.svg"
import css3 from "../../assets/Images/Tech/css3-logo.svg"

export default function TechBox() {
  return (
    <>
      <h4 className="text-xl mb-8">Tech Stacks:</h4>
      <div className="flex flex-row gap-6">
        <img src={nodejs} alt="Node JS" className="h-24"></img>
        <img src={mongodb} alt="MongoDB" className="h-24"></img>
        <img src={reactjs} alt="React JS" className="h-24"></img>
        <img src={html5} alt="HTML5" className="h-24"></img>
        <img src={css3} alt="CSS3" className="h-24"></img>
      </div>
    </>
  )
}
