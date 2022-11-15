import * as React from "react"

import AppLogo from "../About/AppLogo"
import AppDesc from "../About/AppDesc"

import ContribBox from "../Contributors/ContribBox"
import TechBox from "../TechStack/TechBox"
import SocialBox from "../Social/SocialBox"

export default function About() {
  return (
    // --------- about page div start --------- //
    <div
      className="flex flex-col items-center justify-center
                  text-white bgdefault w-full"
    >
      {/* --------- logo div start --------- */}
      <div className="flex flex-col justify-center items-center font-semi-bold w-8/12 mt-6">
        <AppLogo />
      </div>
      {/* --------- logo div end ---------  */}

      {/* --------- desc div start --------- */}
      <div
        className="flex flex-col justify-center items-center font-semi-bold w-8/12
                      mt-8"
      >
        <AppDesc />
      </div>
      {/* --------- desc end --------- */}

      {/* --------- contributor div start --------- */}
      <div className="flex flex-col justify-center items-center w-8/12 mt-16 font-bold ">
        <ContribBox />
      </div>
      {/* --------- contributor div end --------- */}

      {/* --------- tech div start --------- */}
      <div className="flex flex-col justify-center items-center w-8/12 mt-16 font-bold ">
        <TechBox />
      </div>
      {/* --------- tech div end --------- */}

      {/* --------- follow us (SocialBox) div start --------- */}
      <div className="flex flex-col justify-center items-center w-8/12 mt-16 mb-8 font-bold">
        <SocialBox />
      </div>
      {/* --------- follow us div end --------- */}
    </div>
    // --------- about div end --------- //
  )
}
