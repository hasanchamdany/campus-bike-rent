import helloBike from "../../assets/Images/hello-bike.webp";
import { useState, useEffect } from "react";
import axios from "axios";
import ReturnModal from "../../components/Modal/ReturnModal";

const RentInfoCard = () => {
  const userId = localStorage.getItem("userID");
  const token = localStorage.getItem("accessToken");
  const [rentState, setRentState] = useState(false);

  const [button, setButton] = useState(false);

  let [returnModal, setReturnModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rentData, setRentData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8800/api/booking/" + userId, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(function (response) {
        //   const userData = response.data;
        if (response.data !== null) {
          setRentData(response.data);
          if (response.data.returnedStatus) {
            setRentState(true);
          } else {
            setRentState(false);
          }
        } else if (response.data !== undefined) {
          setButton(true);
        }
      })
      .catch(function (error) {
        setLoading(true);
        console.log(error);
        return;
      });
  }, []);

  const onClickReturn = (data) => {
    setReturnModal(true);
  };

  return (
    <>
      {/* {console.log(rentData)} */}
      <div className="mx-8 mt-2 lg:mt-36 mb-52 w-9/12 md:w-5/6 lg:w-[986px] bg-white rounded-md py-6 px-14 flex flex-col">
        <div
          id="Hello"
          className="text-center text-3xl lg:text-5xl font-extrabold text-blue-700 text-left mb-4"
        >
          Your <span className="text-yellow-500">Rent Info</span>{" "}
        </div>
        <div className="hidden lg:flex">
          <img
            src={helloBike}
            alt="bike hello"
            className="rounded-xl w-1/4 h-1/4 m-auto"
          ></img>
        </div>
        <div id="Name" className="text-md font-bold text-center mb-2">
          Bike #{rentData._id}
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-3 mt-6">
          <div className="px-4 py-2 font-semibold">Lokasi Pengambilan :</div>
          <div className="px-4 py-2">{rentData.location || ""}</div>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-3">
          <div className="px-4 py-2 font-semibold">Tanggal Pengambilan :</div>
          <div className="px-4 py-2">{rentData.DateTake || ""}</div>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-3">
          <div className="px-4 py-2 font-semibold">Durasi (Jam) :</div>
          <div className="px-4 py-2">{rentData.jam || ""}</div>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-3">
          <div className="px-4 py-2 font-semibold">Status Pengembalian :</div>
          <div className="px-4 py-2">
            {rentData.returnedStatus
              ? "Sudah dikembalikan"
              : "Belum dikembalikan"}
          </div>
        </div>

        <div className="flex justify-center items-center mt-4">
          {rentState ? (
            <>
              <button
                onClick={() => onClickReturn(rentData)}
                disabled={button}
                className="mx-auto h-10 px-10 m-2 text-white text-xl transition-colors duration-150 bg-blue-700 rounded-lg focus:shadow-outline hover:bg-blue-800"
              >
                Rent Now!
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => onClickReturn(rentData)}
                disabled={button}
                className="mx-auto h-10 px-10 m-2 text-white text-xl transition-colors duration-150 bg-blue-700 rounded-lg focus:shadow-outline hover:bg-blue-800"
              >
                Return Bike!
              </button>
            </>
          )}

          {returnModal ? (
            <>
              <ReturnModal
                state={returnModal}
                setState={setReturnModal}
                data={rentData}
              />
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default RentInfoCard;
