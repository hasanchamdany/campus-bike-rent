import React, { useState, useEffect } from "react";
import PlusIcon from "../../assets/icon/plus-icon.png";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const AddBikeModal = (props) => {
  const [inputs, setInputs] = useState({});
  const { state, setState } = props;
  const token = localStorage.getItem("accessToken");

  // console.log(state)

  const [alert, setAlert] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = alert;

  const handleClose = () => {
    setState({ ...alert, open: false });
  };

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8800/api/bike", inputs, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(function (response) {
        setAlert({ open: true, vertical: "bottom", horizontal: "right" });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      {state && (
        <div>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#FAFAFA] outline-none focus:outline-none">
                {/*header*/}
                <div className="w-[400px] flex">
                  <div className="mt-4 mb-6 align-center mx-auto">
                    <h1 className="text-center font-bold text-xl">ADD BIKE</h1>
                    <form onSubmit={handleSubmit} className="block ">
                      <input
                        name="availability"
                        required
                        placeholder="Availability"
                        type="text"
                        value={inputs.availability || ""}
                        onChange={handleChange}
                        className=" block outline outline-2 outline-blue-dark mx-1 mt-4 px-2 py-1 w-[232px] rounded-[10px] text-black"
                      />
                      <input
                        name="borrowPeriod"
                        required
                        placeholder="Borrow Period"
                        type="text"
                        value={inputs.borrowPeriod || ""}
                        onChange={handleChange}
                        className=" block outline outline-2 outline-blue-dark mx-1 mt-4 px-2 py-1 w-[232px] rounded-[10px] text-black"
                      />
                      <input
                        name="condition"
                        required
                        placeholder="Condition"
                        type="text"
                        value={inputs.condition || ""}
                        onChange={handleChange}
                        className=" block outline outline-2 outline-blue-dark mx-1 mt-4 px-2 py-1 w-[232px] rounded-[10px] text-black"
                      />
                      <input
                        name="location"
                        required
                        placeholder="Location"
                        type="text"
                        value={inputs.location || ""}
                        onChange={handleChange}
                        className=" block outline outline-2 outline-blue-dark mx-1 mt-4 px-2 py-1 w-[232px] rounded-[10px] text-black"
                      />

                      <div className="flex justify-between">
                        <button
                          type="submit"
                          className="flex  outline outline-2 outline-red-700 mx-1 mt-6 px-4 py-1 w-fit bg-red-700 text-white rounded-[10px]"
                          onClick={() => setState(false)}
                        >
                          Close
                        </button>
                        <button
                          type="submit"
                          className="flex  outline outline-2 outline-blue-dark mx-1 mt-6 px-2 py-1 w-fit bg-blue-dark text-white rounded-[10px]"
                          onClick={handleSubmit}
                        >
                          <img src={PlusIcon} className=" w-[25px] mr-1" />
                          <p className="mr-1"> Add Data</p>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-100 bg-black"></div>
        </div>
      )}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        key={vertical + horizontal}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Data has been Added!
        </Alert>
      </Snackbar>
    </>
  );
};

export default AddBikeModal;
