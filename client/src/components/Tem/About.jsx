import * as React from "react"
import anya from "../../assets/Images/anya.jpeg"
import loid from "../../assets/Images/loid.jpg"
import yor from "../../assets/Images/yor.jpg"

import nodejs from "../../assets/Images/nodejs-logo.svg"
import mongodb from "../../assets/Images/mongodb-logo.svg"
import reactjs from "../../assets/Images/reactjs-logo.svg"
import html5 from "../../assets/Images/html5-logo.svg"
import css3 from "../../assets/Images/css3-logo.svg"

import twitter from "../../assets/Images/twitter-logo.svg"
import facebook from "../../assets/Images/fb-logo.svg"
import instagram from "../../assets/Images/insta-logo.svg"

export default function About() {
  return (
    // --------- about page div start --------- //
    <div
      className="flex flex-col items-center justify-center
                  text-white bgdefault w-full"
    >
      {/* --------- logo div start --------- */}
      <div className="flex flex-col justify-center items-center font-semi-bold w-8/12">
        <div id="loginTitle" className="flex">
          <h1 className="text-7xl font-bold text-white">B</h1>
          <h1 className="text-7xl font-bold text-yellow-dark">i</h1>
          <h1 className="text-7xl font-bold text-white">SA</h1>
        </div>
        <div>
          <h4 className="text-md font-semi-bold">Bike Sharing App</h4>
        </div>
      </div>
      {/* --------- logo div end ---------  */}

      {/* --------- desc div start --------- */}
      <div
        className="flex flex-col justify-center items-center font-semi-bold w-8/12
                      mt-8"
      >
        <p className="text-center text-xl">
          BISA merupakan aplikasi berbasis web yang memberikan layanan sewa
          sepeda kampus untuk memenuhi transportasi mahasiswa atau tenaga
          pendidik di dalam kampus yang lebih ramah lingkungan.
        </p>
      </div>
      {/* --------- desc end --------- */}

      {/* --------- contributor div start --------- */}
      <div className="flex flex-col justify-center items-center w-8/12 mt-8 font-bold ">
        <h4 className="text-xl">Contributors:</h4>
        {/* --------- contributor card div start --------- */}
        <div className="flex flex-row gap-6">
          <div className="flex flex-col justify-center items-center w-8/12 mt-8 font-bold">
            <img
              src={anya}
              alt="anya forger"
              className="w-28 rounded-full"
            ></img>
            <p className="mt-1">Anya Forger</p>
          </div>
          <div className="flex flex-col justify-center items-center w-8/12 mt-8 font-bold">
            <img
              src={loid}
              alt="loid forger"
              className="w-28 rounded-full"
            ></img>
            <p className="mt-1">Loid Forger</p>
          </div>
          <div className="flex flex-col justify-center items-center w-8/12 mt-8 font-bold">
            <img
              src={yor}
              alt="loid forger"
              className="w-28 rounded-full"
            ></img>
            <p className="mt-1">Yor Forger</p>
          </div>
        </div>
        {/* --------- contributor card div end --------- */}
      </div>
      {/* --------- contributor div end --------- */}

      {/* --------- tech div start --------- */}
      <div className="flex flex-col justify-center items-center w-8/12 mt-8 font-bold ">
        <h4 className="text-xl mb-8">Tech Stacks:</h4>
        <div className="flex flex-row gap-6">
          <img src={nodejs} alt="Node JS" className="h-24"></img>
          <img src={mongodb} alt="MongoDB" className="h-24"></img>
          <img src={reactjs} alt="React JS" className="h-24"></img>
          <img src={html5} alt="HTML5" className="h-24"></img>
          <img src={css3} alt="CSS3" className="h-24"></img>
        </div>
      </div>
      {/* --------- tech div end --------- */}

      {/* --------- follow us div start --------- */}
      <div className="flex flex-col justify-center items-center w-8/12 mt-8 font-bold">
        <h4 className="text-xl">Follow us on</h4>
        <div className="flex flex-row gap-4 m-4">
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <div className="p-2 rounded-full box-border border-2 border-white ">
              <img src={twitter} alt="twitter" className="h-6"></img>
            </div>
          </a>

          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <div className="p-2 rounded-full box-border border-2 border-white">
              <img src={instagram} alt="Instagram" className="h-6"></img>
            </div>
          </a>

          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <div className="p-2 rounded-full box-border border-2 border-white">
              <img src={facebook} alt="Facebook" className="h-6"></img>
            </div>
          </a>
        </div>
      </div>
      {/* --------- follow us div end --------- */}
    </div>
    // --------- about div end --------- //
  )
}
