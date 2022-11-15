import React from "react"

import Navbar from "./../components/Navbar/Navbar.jsx"
import SidePageHome from "./../components/SidePage/SidePageHome.jsx"
import About from "./../components/About/About"

const Home = () => {
  return (
    <>
      <Navbar />
      {/* <About className="flex flex-col items-center justify-center w-full" /> */}
      <div className="text-center text-white bgdefault w-full h-[910px]">
        <SidePageHome />
        <About />
      </div>
    </>
  )
}

export default Home
