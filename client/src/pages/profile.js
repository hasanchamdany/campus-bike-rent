import React from 'react'
import Navbar from "./../components/Navbar/Navbar.jsx"
import ProfileCard from "../components/Cards/ProfileCard.jsx"
//import ProfileContentCard from "../components/Cards/ProfileContentCard.jsx"
//import EditProfileCard from '../components/Cards/EditProfileCard.jsx';

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