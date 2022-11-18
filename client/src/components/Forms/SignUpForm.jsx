import * as React from "react";
import { useState } from "react";
import BtnForm from "../Buttons/BtnForm"
import TxtInput from "../Inputs/TxtInput"
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const [alert, setAlert] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = alert;

  const handleClose = () => {
    setAlert({ ...alert, open: false });
  };

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);

    try {
      const res = axios
        .post("http://localhost:8800/api/auth/register", inputs)
        .then(function (response) {
          console.log(response);
          // console.log(response.data.token); //get token
          // localStorage.setItem("accessToken", response.data.token);
          navigate("/auth/login");
          // setAlert({ open: true, vertical: "bottom", horizontal: "right" });
        })
        .catch(function (error) {
          console.log(error);
          // console.log(error.message)
          if (error.message === "Request failed with status code 400") {
            // setErrAlert(true)

            setAlert({ open: true, vertical: "bottom", horizontal: "right" });
          }
        });
    } catch (error) {
      console.log("error axios");
    }
    // console.log("data = " + res)
  };
  return (
    <>
      <div
        className="flex flex-col justify-center 
                shadow-2xl rounded-xl bg-white px-10 py-16 h-5/6 w-10/12 
                lg:w-9/12 lg:pl-24 md:w-1/2 md:px-10"
      >
        {/* start - div for Sign Up Title */}
        <div id="loginTitle" className="flex">
          <h1 className="text-4xl font-bold text-blue-dark">Sign up to B</h1>
          <h1 className="text-4xl font-bold text-yellow-dark">i</h1>
          <h1 className="text-4xl font-bold text-blue-dark">sa</h1>
        </div>
        {/* end - div for Sign Up Title */}

        {/* start - div for Login alternative */} 
        <div className="flex gap-x-1 font-normal mt-2 text-blue-dark">
          <p className="">Already a member?</p>
          <button className="text-yellow-dark">Log In</button>
        </div>
        {/* end - div for Login alternative */}

        {/* start - div for inputs and buttons */}
        <div>
          <form onSubmit={handleSubmit}>
            {/* start - div for inputs */}
            <div className="mt-8">
              <div className="flex flex-col gap-y-0.5">
                <label className="text-lg font-medium text-blue-dark">
                  Full Name
                </label>
                <input
                  name="name"
                  onChange={handleChange}
                  value={inputs.name || ""}
                  type="text"
                  className="w-full border-2 border-blue-dark rounded-lg p-1.5 mb-2 lg:w-3/4"
                  placeholder="Jane Doe"
                />
              </div>
              {/* <TxtInputMd inputLabel="Full Name" placeholderText="Jane Doe" /> */}
              <div className="flex flex-col gap-y-0.5">
                <label className="text-lg font-medium text-blue-dark">
                  Email
                </label>
                <input
                  name="email"
                  onChange={handleChange}
                  value={inputs.email || ""}
                  type="text"
                  className="w-full border-2 border-blue-dark rounded-lg p-1.5 mb-2 lg:w-3/4"
                  placeholder="janedoe@xxx.com"
                />
              </div>
              {/* <TxtInputMd inputLabel="Email" placeholderText="janedoe@xxx.com" /> */}
              <div className="flex flex-col gap-y-0.5">
                <label className="text-lg font-medium text-blue-dark">
                  Password
                </label>
                <input
                  name="password"
                  onChange={handleChange}
                  value={inputs.password || ""}
                  type="password"
                  className="w-full border-2 border-blue-dark rounded-lg p-1.5 mb-2 lg:w-3/4"
                  placeholder="janedoe12813279"
                />
              </div>
              {/* <TxtInputMd
            inputType="password"
            inputLabel="Password"
            placeholderText="janedoe12813279"
          /> */}
              <div className="flex flex-col gap-y-0.5">
                <label className="text-lg font-medium text-blue-dark">
                  Phone Number
                </label>
                <input
                  name="phoneNumber"
                  onChange={handleChange}
                  value={inputs.phoneNumber || ""}
                  type="text"
                  className="w-full border-2 border-blue-dark rounded-lg p-1.5 mb-2 lg:w-3/4"
                  placeholder="081xxxxxxxxx"
                />
              </div>
              {/* <TxtInputMd
            inputLabel="Phone Number"
            placeholderText="081xxxxxxxxx"
          /> */}
            </div>
            {/* end - div for inputs */}

            {/* start - div for buttons */}
            <div className="mt-4 flex flex-col gap-y-2">
              <div>
                <button
                  onClick={handleSubmit}
                  className="w-full text-lg font-bold text-white py-2 rounded-xl shadow-xl
          active:scale-[.99] active:duration-75 transition-all hover:scale-[1.02] ease-in-out
          lg:w-3/4
          bg-gradient-to-r from-blue-medium to-blue-dark hover:from-blue-pale hover:via-blue-medium hover:to-blue-dark 
          hover:duration-700"
                >
                  Create Account
                </button>
              </div>
              {/* <BtnFormBlue buttonName={"Create Account"} /> */}
            </div>
            {/* end - div for buttons */}
          </form>
        </div>
        {/* end - div for inputs and buttons */}
      </div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        // message="Data has been Updated"
        key={vertical + horizontal}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Account Has been Created!
        </Alert>
      </Snackbar>
    </>
  );
};

export default SignUpForm;
