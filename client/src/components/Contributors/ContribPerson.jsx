import * as React from "react"

export default function ContribPerson({ personImg, personAlt, personName }) {
  return (
    <div className="flex flex-col justify-center items-center w-3/12 lg:w-8/12 mt-8 font-bold">
      <img src={personImg} alt={personAlt} className="w-28 rounded-full"></img>
      <p className="mt-1">{personName}</p>
    </div>
  )
}
