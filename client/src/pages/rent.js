import React, { useState, useEffect } from "react";
import Navbar from "./../components/Navbar/Navbar.jsx";
import AvblBikeTable from "./../components/Tables/AvblBikeTable.jsx";
import { useNavigate } from "react-router-dom";
//import Footer from './../components/Footer.jsx'
// import RentBikeModal from "./../components/Modal/RentBikeModal.jsx";

const Rent = () => {
  const [optionFilter, setOptionFilter] = useState({ value: "" });
  const navigate = useNavigate();

  const handleOptions = (props) => {
    setOptionFilter({ value: props.target.value });
  };

  useEffect(() => {
    try {
      const token = localStorage.getItem("accessToken")
      console.log( "ini token dari local storage: " + token );
      if(!token){
        navigate("/")
      }
    } catch (err) {
      console.log(err)
    }
  });

  return (
    <>
      {/* //code sementara */}

      <Navbar />
      <div className="place-items-center text-white bgdefault w-full h-[910px]">
        {/* --------- logo div start --------- */}
        <div className="pt-20 flex flex-col justify-center items-center font-semi-bold">
          <div id="RentTitle" className="flex">
            <h1 className="text-7xl font-bold text-white">B</h1>
            <h1 className="text-7xl font-bold text-yellow-400">i</h1>
            <h1 className="text-7xl font-bold text-white">SA</h1>
          </div>
          <div>
            <h4 className="text-md font-semi-bold">Bike Sharing App</h4>
          </div>
        </div>
        {/* --------- logo div end ---------  */}

        {/* --------- dropdown location start ---------  */}
        <label
          for="location"
          className="block mb-2 text-sm font-medium pt-16 text-center text-gray-900 dark:text-white"
        >
          Select your Location
        </label>
        <div className="max-w-[1256px] mx-auto px-4 rounded-[30px]">
          <select
            id="location"
            value={optionFilter.value}
            onChange={handleOptions}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option name="KPTU (Gedung Pusat)" value="KPTU (Gedung Pusat)">
              KPTU (Gedung Pusat)
            </option>
            <option name="Perpustakaan UGM" value="Perpustakaan UGM">
              Perpustakaan UGM
            </option>
            <option name="Gelanggang Mahasiswa" value="Gelanggang Mahasiswa">
              Gelanggang Mahasiswa
            </option>
            <option name="Jl. Tevesia" value="Jl. Tevesia">
              Jl. Tevesia
            </option>
            <option name="Lembah UGM" value="Lembah UGM">
              Lembah UGM
            </option>
            <option name="Agro Fauna" value="Agro Fauna">
              Agro Fauna
            </option>
            <option name="UC Hotel" value="UC Hotel">
              UC Hotel
            </option>
            <option name="Pau" value="Pau">
              PAU
            </option>
            <option name="Biologi" value="Biologi">
              Biologi
            </option>
            <option name="Jl. Kesehatan" value="Jl. Kesehatan">
              Jl. Kesehatan
            </option>
            <option name="Vokasi" value="Vokasi">
              Vokasi
            </option>
            <option name="Jl. Agro" value="Jl. Agro">
              Jl. Agro
            </option>
            <option
              name="Fakultas Teknik (KPTU)"
              value="Fakultas Teknik (KPTU)"
            >
              Fakultas Teknik (KPTU)
            </option>
            <option
              name="Jl. Bhineka Tunggal Ika"
              value="Jl. Bhineka Tunggal Ika"
            >
              Jl. Bhineka Tunggal Ika
            </option>
          </select>
        </div>
        {/* --------- dropdown location end ---------  */}

        <div className="max-w-[1256px] mx-auto px-4 pt-16 rounded-[30px]">
          <AvblBikeTable filter={optionFilter} />
        </div>
      </div>
    </>
  );
};

export default Rent;
