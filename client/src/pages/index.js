import React from "react"
import Navbar from "./../components/Navbar/Navbar.jsx"
import About from "./../components/Tem/About.jsx"

const Home = () => {
  return (
    <>
      <Navbar />
      {/* <About className="flex flex-col items-center justify-center w-full" /> */}
      <div className="text-center text-white bgdefault w-full h-[910px]">
        Home
      </div>
    </>
  )
}

export default Home
