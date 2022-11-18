import * as React from "react"

import ContribPerson from "../Contributors/ContribPerson"

import anya from "../../assets/Images/Contributors/anya.webp"
import loid from "../../assets/Images/Contributors/loid.webp"
import yor from "../../assets/Images/Contributors/yor.webp"
import sylvia from "../../assets/Images/Contributors/sylvia.webp"
import damian from "../../assets/Images/Contributors/damian.webp"

export default function ContribBox() {
  return (
    <>
      <h4 className="text-xl">Contributors:</h4>
      {/* --------- contributor card div start --------- */}
      <div className="flex flex-wrap justify-center items-center gap-4 lg:flex-nowrap md:flex-nowrap">
        <ContribPerson
          personImg={sylvia}
          personAlt="Laili"
          personName="Laili"
        />
        <ContribPerson
          personImg={damian}
          personAlt="Reinhart"
          personName="Reinhart"
        />
        <ContribPerson personImg={loid} personAlt="Hasan" personName="Hasan" />
        <ContribPerson personImg={yor} personAlt="Raisa" personName="Raisa" />
        <ContribPerson personImg={anya} personAlt="Sasa" personName="Sasa" />
      </div>
      {/* --------- contributor card div end --------- */}
    </>
  )
}

