import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import NavbarDash from "../../components/Navbar/NavbarDashboard.jsx";
import RentTable from "../../components/Tables/RentTable.jsx";
import AdminMemberForm from "../../components/CRUDForm/AdminMemberForm.jsx";
import useFetch from "../../hooks/useFetch";

const DashboardRent = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:8800/api/booking"
  );
  console.log(data);
  
  return (
    <>
      <Navbar />
      <div className=" text-white bgdefault w-full h-[910px]">
        <div className=" pt-16 text-3xl font-bold font-Inter justify-left ml-24">
          Hello, <span className=" text-orange">Admins</span>
        </div>
        <NavbarDash />
        {/* <div className="max-w-[1240px] h-[100px]  mx-auto rounded-xl ">
          <AdminMemberForm />
        </div> */}
        <div className="max-w-[1256px] mx-auto px-4 pt-16 rounded-[30px]">
          <RentTable />
          {/* <Membertable/> */}
        </div>
      </div>
    </>
  );
};

export default DashboardRent;
