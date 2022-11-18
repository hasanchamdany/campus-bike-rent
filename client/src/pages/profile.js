import React from 'react'
import Navbar from "./../components/Navbar/Navbar.jsx"
import ProfileCard from "../components/Cards/ProfileCard.jsx"
import useFetch from '../hooks/useFetch.js';
const profile = () => {
  
  return (
    <>
    <Navbar />
    
    <div>
      
      <ProfileCard />
      
    </div>
  </>
  )
}

export default profile