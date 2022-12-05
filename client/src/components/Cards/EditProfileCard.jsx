//import TxtInputLg from "../Inputs/TxtInputLg"
import TxtInputMd from "../Inputs/TxtInputMd"
import React, { useState, useEffect } from "react"
import axios from "axios"
import Snackbar from "@mui/material/Snackbar"
import MuiAlert from "@mui/material/Alert"

const EditProfileCard = () => {
  const userId = localStorage.getItem("userID")
  const token = localStorage.getItem("accessToken")
  const [state, setState] = useState({ open: false })
  const [userData, setUserData] = useState([])
  const [loading, setLoading] = useState(false)
  const handleClose = () => {
    setState({ ...alert, open: false })
  }
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
  })
  const [inputs, setInputs] = useState({
    email: userData.email,
    name: userData.name,
    phoneNumber: userData.phoneNumber,
  })
  const [alert, setAlert] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  })
  const { vertical, horizontal, open } = alert
  useEffect(() => {
    axios
      .get("http://localhost:8800/api/member/" + userId, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(function (response) {
        //   const userData = response.data;
        setUserData(response.data)
        console.log(response)
        console.log(userData)
        // setAlert({ open: true, vertical: "bottom", horizontal: "right" });
      })
      .catch(function (error) {
        setLoading(true)
        console.log(error)
      })
  }, [])

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setInputs((values) => ({ ...values, [name]: value }))
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(inputs)
    console.log(userData._id)
    axios
      .put("http://localhost:8800/api/member/" + userId, inputs, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(function (response) {
        console.log(response)
        setAlert({ open: true, vertical: "bottom", horizontal: "right" })
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  const src =
    "data:image/jpeg;base64,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"
  return (
    <>
      <div className="mx-8 mt-2 mb-12 md:w-5/6 lg:w-[986px] bg-white rounded-md p-4 flex flex-col">
        <div
          id="Hello"
          className="text-center text-2xl lg:text-4xl font-extrabold text-blue-700 text-left mb-4"
        >
          Editing your profile,{" "}
          <span className="text-yellow-500">{userData.name} ?</span>{" "}
        </div>
        <div>
          <img
            src={src}
            alt="avatar"
            className="h-32 justify-center mx-auto rounded-full"
          />
        </div>

        <div id="memberStatus" className="mt-2 text-md text-center">
          {userData.isAdmin && <p>Admin</p>}
          {!userData.isAdmin && <p>Member</p>}
        </div>

        <form onSubmit={handleSubmit} className="px-2 lg:mr-56">
          <div className="grid lg:grid-cols-2 mt-4">
            <div className="px-4 py-2 font-semibold lg:text-end">Nama</div>
            <div className="gap-y-0.5 px-4">
              <label className="text-lg font-medium text-blue-dark"></label>
              <input
                type="text"
                name="name"
                value={inputs.name || ""}
                className="w-full border-2 border-blue-dark rounded-lg p-1.5 mb-2 lg:w-3/4"
                placeholder="Insert Your Name Here"
                onChange={handleChange}
              />
            </div>
            {/* <TxtInputMd inputLabel="" placeholderText="Insert Your Name Here" /> */}
          </div>
          <div className="grid lg:grid-cols-2">
            <div className="px-4 py-2 font-semibold lg:text-end">Email</div>
            <div className="gap-y-0.5 px-4">
              <label className="text-lg font-medium text-blue-dark"></label>
              <input
                type="text"
                name="email"
                value={inputs.email || ""}
                className="w-full border-2 border-blue-dark rounded-lg p-1.5 mb-2 lg:w-3/4"
                placeholder="contoh: janedoe@xxxxx.com"
                onChange={handleChange}
              />
            </div>
            {/* <TxtInputMd inputLabel="" placeholderText="contoh: janedoe@xxxxx.com" /> */}
          </div>

          <div className="lg:grid lg:grid-cols-2">
            <div className="px-4 py-2 font-semibold lg:text-end">
              No Handphone
            </div>
            <div className="gap-y-0.5 px-4">
              <label className="text-lg font-medium text-blue-dark"></label>
              <input
                type="text"
                name="phoneNumber"
                value={inputs.phoneNumber || ""}
                className="w-full border-2 border-blue-dark rounded-lg p-1.5 mb-2 lg:w-3/4"
                placeholder="contoh: 08123456789"
                onChange={handleChange}
              />
            </div>
            {/* <TxtInputMd inputLabel="" placeholderText="contoh: 08123456789" /> */}
          </div>

          <div class="ml-auto lg:ml-52 flex justify-end">
            <button
              type="submit"
              onClick={handleSubmit}
              class="mx-auto h-10 px-10 mt-6 mb-6 m-2 text-white text-xl transition-colors duration-150 bg-blue-700 rounded-lg focus:shadow-outline hover:bg-blue-800"
            >
              Edit Profile
            </button>
          </div>
        </form>
      </div>
      {state && (
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleClose}
          // message="Data has been Updated"
          key={vertical + horizontal}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Data has been Updated!
          </Alert>
        </Snackbar>
      )}
    </>
  )
}

export default EditProfileCard
