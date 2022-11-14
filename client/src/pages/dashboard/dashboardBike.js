import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import NavbarDash from "../../components/Navbar/NavbarDashboard.jsx";
import AdminBikeForm from "../../components/CRUDForm/AdminBikeForm.jsx";
import BikeTable from "../../components/Tables/BikeTable.jsx";

const DashboardBike = () => {
  return (
    <>
      <Navbar />
      <div className=" text-white bgdefault w-full h-[910px]">
        <div className=" pt-16 text-3xl font-bold font-Inter justify-left ml-24">
          Hello, <span className=" text-orange">Admins</span>
        </div>
        <NavbarDash />
        <div className="max-w-[1240px] h-[100px]  mx-auto rounded-xl ">
          <AdminBikeForm />
        </div>
        <div className="max-w-[1256px] mx-auto px-4 pt-8 rounded-[30px]">
          <BikeTable />
          {/* <Membertable/> */}
        </div>
      </div>
    </>
  );
};

export default DashboardBike;
