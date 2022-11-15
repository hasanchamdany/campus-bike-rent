import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import NavbarDash from "../../components/Navbar/NavbarDashboard.jsx";
import AdminBikeForm from "../../components/CRUDForm/AdminBikeForm.jsx";
import BikeTable from "../../components/Tables/BikeTable.jsx";
import PlusIcon from "../../assets/icon/plus-icon.png";
import AddBikeModal from "../../components/Modal/AddBikeModal.jsx";

const DashboardBike = () => {
  const [showModal, setShowModal] = useState(false);
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
