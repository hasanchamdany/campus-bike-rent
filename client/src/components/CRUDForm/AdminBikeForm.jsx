import React, {useState} from "react";
import PlusIcon from "../../assets/icon/plus-icon.png"

const AdminBikeForm = () => {

  // const availability = []
  // const borrowPeriod = []
  // const condition = []
  // const location
  // const [availability, setAvailability] = useState()

  const [inputs, setInputs] = useState({})

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }


  return (
    <>
      <div className="mt-4 align-center">
        <form onSubmit={handleSubmit} className="flex ">
          <input
            name="availability"
            required
            placeholder="Availability"
            type="text"
            value={inputs.availability || ""}
            onChange={handleChange}
            className=" flex-1 outline outline-2 outline-white mx-1 mt-8 px-2 py-1 w-[232px] rounded-[10px] text-black"
          />
          <input
            name="borrowPeriod"
            required
            placeholder="Borrow Period"
            type="text"
            value={inputs.borrowPeriod || ""}
            onChange={handleChange}
            className=" flex-1 outline outline-2 outline-white mx-1 mt-8 px-2 py-1 w-[232px] rounded-[10px] text-black"
          />
          <input
            name="condition"
            required
            placeholder="Condition"
            type="text"
            value={inputs.condition || ""}
            onChange={handleChange}
            className=" flex-1 outline outline-2 outline-white mx-1 mt-8 px-2 py-1 w-[232px] rounded-[10px] text-black"
          />
          <input
            name="location"
            required
            placeholder="Location"
            type="text"
            value={inputs.location || ""}
            onChange={handleChange}
            className=" flex-1 outline outline-2 outline-white mx-1 mt-8 px-2 py-1 w-[232px] rounded-[10px] text-black"
          />
          <button
          type="submit"
          className=" outline outline-2 outline-blue-dark mx-1 mt-8 px-2 py-1 w-[40px] bg-blue-dark text-white rounded-[10px]"
          onClick={handleSubmit}
        >
          <img src={PlusIcon}/>
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

export default AdminBikeForm;
