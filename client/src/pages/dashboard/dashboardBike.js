import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import NavbarDash from "../../components/Navbar/NavbarDashboard.jsx";
import AdminBikeForm from "../../components/CRUDForm/AdminBikeForm.jsx";
import BikeTable from "../../components/Tables/BikeTable.jsx";
import PlusIcon from "../../assets/icon/plus-icon.png";
import AddBikeModal from "../../components/Modal/AddBikeModal.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DashboardBike = () => {
  const [showModal, setShowModal] = useState(false);
  const token = localStorage.getItem("accessToken");
  const navigate = useNavigate();
  useEffect(() => setShowModal(false), []);
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === "Escape") {
        // e.onCloseModal()
        setShowModal(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
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
            // console.log("isi response ");
            // console.log(response.data);

            if (response.data.isAdmin === false) {
              navigate("/");
            }
            // console.log("isi data user " + response.data.user._id);
            // navigate("/");
            // setAlert({ open: true, vertical: "bottom", horizontal: "right" });
          })
          .catch(function (error) {
            console.log(error);
            // console.log(error.message)
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
        <div className=" pt-16 text-3xl font-bold font-Inter justify-left ml-24">
          Hello, <span className=" text-orange">Admins</span>
        </div>
        <NavbarDash />
        <div className="max-w-[1240px] h-[75px]  mx-auto rounded-xl flex justify-end">
          {/* <AdminBikeForm /> */}
          <button
            className=" outline outline-2 outline-blue-dark mx-1 mt-8 px-2 py-1 w-[150px] h-[40px] bg-blue-dark text-white rounded-[10px]"
            onClick={() => setShowModal(true)}
          >
            <img src={PlusIcon} className="inline w-[25px] mr-2" />
            <p className="inline"> Add Data</p>
          </button>
        </div>
        <div className="max-w-[1256px] mx-auto px-4 pt-8 rounded-[30px]">
          <BikeTable />
          {/* <Membertable/> */}
        </div>
      </div>
      {showModal ? (
        <AddBikeModal state={showModal} setState={setShowModal} />
      ) : null}
    </>
  );
};

export default DashboardBike;
