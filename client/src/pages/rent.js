import React from "react";
import Navbar from "./../components/Navbar/Navbar.jsx";
import AvblBikeTable from "./../components/Tables/AvblBikeTable.jsx";

const rent = () => {
  return (
    <>
    //code sementara
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
        <label for="location" class="block mb-2 text-sm font-medium pt-16 text-center text-gray-900 dark:text-white">Select your Location</label>
        <div className="max-w-[1256px] mx-auto px-4 rounded-[30px]">
        <select id="location" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option>KPTU (Gedung Pusat)</option>
            <option>Perpustakaan UGM</option>
            <option>Gelanggang Mahasiswa</option>
            <option>Jl. Tevesia</option>
            <option>Lembah UGM</option>
            <option>Agro Fauna</option>
            <option>UC Hotel</option>
            <option>PAU</option>
            <option>Biologi</option>
            <option>Jl. Kesehatan</option>
            <option>Vokasi</option>
            <option>Jl. Agro</option>
            <option>Fakultas Teknik (KPTU)</option>
            <option>Jl. Bhineka Tunggal Ika</option>
        </select>
        </div>
        {/* --------- dropdown location end ---------  */}

        <div className="max-w-[1256px] mx-auto px-4 pt-16 rounded-[30px]">
          <AvblBikeTable />
        </div>
      </div>
    </>
  );
};

export default rent;
