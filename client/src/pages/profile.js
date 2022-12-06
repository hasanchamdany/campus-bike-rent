import React, { useState, useEffect } from "react";
import Navbar from "./../components/Navbar/Navbar.jsx";
import ProfileCard from "../components/Cards/ProfileCard.jsx";

import { useNavigate } from "react-router-dom";
const Profile = () => {
  const navigate = useNavigate();
  useEffect(() => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  });
  return (
    <>
      <Navbar />

      <div>
        <ProfileCard />
      </div>
    </>
  );
};

export default Profile;
