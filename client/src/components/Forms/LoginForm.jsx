import * as React from "react"
import BtnFormBlue from "../Buttons/BtnFormBlue"
import BtnFormWhite from "../Buttons/BtnFormWhite"
import TxtInputLg from "../Inputs/TxtInputLg"

export default function Form() {
  return (
    <div
      className="flex flex-col justify-center 
                shadow-2xl rounded-xl bg-white px-10 py-16 h-5/6 w-10/12 
                lg:w-9/12 lg:pl-24 md:w-1/2 md:px-10"
    >
      {/* start - div for loginTitle */}
      <div id="loginTitle" className="flex gap-x-2">
        <h1 className="text-4xl font-bold text-blue-dark">Hello</h1>
        <h1 className="text-4xl font-bold text-yellow-dark">Again!</h1>
      </div>
      {/* end - div for loginTitle */}

      <p className="font-normal mt-2 text-blue-dark">Log in to BiSA</p>

      {/* start - div for inputs, buttons, descriptions */}
      <div>
        {/* start - div for inputs */}
        <div className="mt-8">
          <TxtInputLg
            inputLabel="Email"
            placeholderText="janedoe@xxxxx.com"
          />
          <TxtInputLg
            inputType="password"
            inputLabel="Password"
            placeholderText="janedoe198461376817"
          />
        </div>
        {/* end - div for inputs */}

        {/* start - div for buttons */}
        <div className="mt-8 flex flex-col gap-y-2">
          <BtnFormBlue buttonName={"Log In"} />
          <BtnFormWhite buttonName={"SignUp"} />
        </div>
        {/* end - div for buttons */}

        {/* start - div for description - log in as admin */}
        <div className="flex justify-center items-center mt-4 lg:w-3/4">
          <button className="text-xs text-blue-dark lg:w-3/4">
            Log In as Admin
          </button>
        </div>
        {/* end - div for description - log in as admin */}
      </div>
      {/* end - div for inputs, buttons, descriptions */}
    </div>
  )
}
