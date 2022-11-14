import React, { useState } from "react";
import PlusIcon from "../../assets/icon/plus-icon.png";

const AdminMemberForm = () => {
  // const availability = []
  // const borrowPeriod = []
  // const condition = []
  // const location
  // const [availability, setAvailability] = useState()

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <>
      <div className="mt-4 align-center flex flex-col ">
        <form onSubmit={handleSubmit} className="flex flex-row justify-center">
          <div className="flex flex-col">
            <input
              name="bookingStatus"
              required
              placeholder="Booking Status"
              type="text"
              value={inputs.bookingStatus || ""}
              onChange={handleChange}
              className=" basis-1/2 outline outline-2 outline-white mx-1 mt-8 px-2 py-1 w-[232px] rounded-[10px] text-black"
            />
            <input
              name="email"
              required
              placeholder="Email"
              type="text"
              value={inputs.email || ""}
              onChange={handleChange}
              className=" basis-1/2 outline outline-2 outline-white mx-1 mt-8 px-2 py-1 w-[232px] rounded-[10px] text-black"
            />
          </div>
          <div className="flex flex-col">
            <input
              name="isAdmin"
              required
              placeholder="isAdmin"
              type="text"
              value={inputs.isAdmin || ""}
              onChange={handleChange}
              className=" basis-1/2 outline outline-2 outline-white mx-1 mt-8 px-2 py-1 w-[232px] rounded-[10px] text-black"
            />

            <input
              name="name"
              required
              placeholder="Name"
              type="text"
              value={inputs.name || ""}
              onChange={handleChange}
              className=" basis-1/2 outline outline-2 outline-white mx-1 mt-8 px-2 py-1 w-[232px] rounded-[10px] text-black"
            />
          </div>
          <div className="flex flex-col">
            <input
              name="pass"
              required
              placeholder="Password"
              type="text"
              value={inputs.pass || ""}
              onChange={handleChange}
              className=" basis-1/2 outline outline-2 outline-white mx-1 mt-8 px-2 py-1 w-[232px] rounded-[10px] text-black"
            />
            <input
              name="phoneNumber"
              required
              placeholder="Phone Number"
              type="text"
              value={inputs.phoneNumber || ""}
              onChange={handleChange}
              className=" flex-1 outline outline-2 outline-white mx-1 mt-8 px-2 py-1 w-[232px] rounded-[10px] text-black"
            />
          </div>
          <button
            type="submit"
            className=" outline outline-2 outline-blue-dark mx-3 mt-7 px-2 py-1 w-[40px] h-[40px] bg-blue-dark text-white rounded-[10px]"
            onClick={handleSubmit}
          >
            <img src={PlusIcon} />
          </button>
          {/* <input
            type="submit"
            placeholder="Add / Update"
            className=" flex-1 outline outline-2 outline-white mx-1 mt-8 px-2 py-1 w-[232px] rounded-[10px] text-white"
          ></input> */}
        </form>
      </div>
    </>
  );
};

export default AdminMemberForm;
