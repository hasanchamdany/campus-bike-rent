import React from 'react'
import Navbar from "./../components/Navbar/Navbar.jsx";
import SidePageHome from "../components/SidePage/SidePageHome.jsx"

const Home = () => {
  return (
    <>
    <Navbar />
    <div className="text-center text-white bgdefault w-full h-[910px]">
    <SidePageHome/>  
    </div>
  </>
  )
}
  
export default Home