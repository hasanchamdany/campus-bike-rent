import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import NavbarDash from "../../components/Navbar/NavbarDashboard.jsx";
import RentTable from "../../components/Tables/RentTable.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DashboardRent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        navigate("/");
      } else {
        const res = axios
          .get(
            "http://localhost:8800/api/member/" + localStorage.getItem("userID")
          )
          .then(function (response) {
            if (response.data.isAdmin === false) {
              navigate("/");
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className=" text-white bgdefault w-full h-[910px]">
        <div className="flex justify-center items-center pt-16 text-3xl font-bold font-Inter justify-left">
          Hello, <span className=" text-orange">Admins</span>
        </div>
        <NavbarDash />

        <div className="max-w-[1256px] mx-auto px-4 pt-16 rounded-[30px]">
          <RentTable />
        </div>
      </div>
    </>
  );
};

export default DashboardRent;
