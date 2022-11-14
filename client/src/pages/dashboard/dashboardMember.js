import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import NavbarDash from "../../components/Navbar/NavbarDashboard.jsx";
import MemberTableTest from "../../components/Tables/MemberTable.jsx";
import useFetch from "../../hooks/useFetch";
import Membertable from "../../components/Tables/MemberTable.jsx";
import AdminMemberForm from "../../components/CRUDForm/AdminMemberForm.jsx";
import axios from "axios";

const DashboardMember = () => {
  const { data, loading, error } = useFetch("http://localhost:8800/api/bike");
  console.log(data);
  // const axios = require("axios");
  // axios.get('http://localhost:8800/api/bike')
  // .then(function (response) {
  //   // handle success
  //   // const data = response.map()
  //   console.log(response);
  //   // console.log(data)
  // })
  // .catch(function (error) {
  //   // handle error
  //   console.log(error);
  // })
  // .then(function () {
  //   // always executed
  // });

  return (
    <>
      <Navbar />
      <div className=" text-white bgdefault w-full h-[910px]">
        <div className=" pt-16 text-3xl font-bold font-Inter justify-left ml-24">
          Hello, <span className=" text-orange">Admins</span>
        </div>
        <NavbarDash />
        <div className="max-w-[1240px] h-[100px]  mx-auto rounded-xl ">
          <AdminMemberForm />
        </div>
        <div className="max-w-[1256px] mx-auto px-4 pt-16 rounded-[30px]">
          <MemberTableTest />
          {/* <Membertable/> */}
        </div>
      </div>
    </>
  );
};

export default DashboardMember;
