import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import NavbarDash from "../../components/Navbar/NavbarDashboard.jsx"


const DashboardMember = () => {
    
  return (
    <>
      <Navbar />
      <div className=" text-white bgdefault w-full h-[910px]">
        <div className=" pt-16 text-3xl font-bold font-Inter justify-left ml-24">
          Hello, <span className=" text-orange">Admins</span>
        </div>
        <NavbarDash/>
        <div>
            
        </div>
      </div>
    </>
  );
};

export default DashboardMember;