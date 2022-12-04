import helloBike from "../../assets/Images/hello-bike.webp";
import { useState, useEffect } from "react";
import axios from "axios";

const RentInfoCard = () => {
  const userId = localStorage.getItem("userID");
  const token = localStorage.getItem("accessToken");
  const [loading, setLoading] = useState(false);
  const [rentData, setRentData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8800/api/booking/" + userId, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(function (response) {
        //   const userData = response.data;
        setRentData(response.data);
        console.log(response);
        // console.log(rentData);
        // setAlert({ open: true, vertical: "bottom", horizontal: "right" });
      })
      .catch(function (error) {
        setLoading(true);
        console.log(error);
      });
  }, []);
  return (
    <>
      {/* {console.log(rentData)} */}

      <div className="w-[986px] bg-white rounded-md p-4 flex flex-col">
        <div
          id="Hello"
          className="text-5xl font-extrabold text-blue-700 text-left mb-4"
        >
          Your <span className="text-yellow-500">Rent Info</span>{" "}
        </div>
        <div>
          <img
            src={helloBike}
            alt="bike hello"
            className="rounded-xl w-1/4 h-1/4 m-auto"
          ></img>
        </div>
        <div id="Name" className="text-2xl font-bold text-center">
          Bike #XXXXXX
        </div>

        <div className="grid grid-cols-3">
          <div className="px-4 py-2 font-semibold">Lokasi Pengambilan</div>
          <div className="px-4 py-2">: GSP</div>
        </div>

        <div className="grid grid-cols-3">
          <div className="px-4 py-2 font-semibold">Tanggal Pengambilan</div>
          <div className="px-4 py-2">: 15 November 2022</div>
        </div>

        <div className="grid grid-cols-3">
          <div className="px-4 py-2 font-semibold">Jam Pengambilan</div>
          <div className="px-4 py-2">: 23:00</div>
        </div>

        <div className="grid grid-cols-3">
          <div className="px-4 py-2 font-semibold">Status Pengembalian</div>
          <div className="px-4 py-2">: Belum Dikembalikan</div>
        </div>

        <div class="ml-auto">
          <button class="mx-auto h-10 px-10 m-2 text-white text-2xl transition-colors duration-150 bg-blue-700 rounded-lg focus:shadow-outline hover:bg-blue-800">
            Return Bike!
          </button>
        </div>
      </div>
    </>
  );
};

export default RentInfoCard;
