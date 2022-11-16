import * as React from "react"
import BtnForm from "../Buttons/BtnForm"
import TxtInput from "../Inputs/TxtInput"

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
        <h1 className="text-4xl font-bold text-orange">Again!</h1>
      </div>
      {/* end - div for loginTitle */}

      <p className="font-normal mt-2 text-blue-dark">Log in to BiSA</p>

      {/* start - div for inputs, buttons, descriptions */}
      <div>
        <form>
          {/* start - div for inputs */}
          <div className="mt-8">
            {/* email */}
            <label className="text-lg font-medium text-blue-dark">Email</label>
            <TxtInput
              name="email"
              placeholder="janedoe@xxxxx.com"
              className="p-3 mt-1 mb-3"
            />
            {/* password */}
            <label className="text-lg font-medium text-blue-dark">
              Password
            </label>
            <TxtInput
              type="password"
              name="password"
              placeholder="janedoe198461376817"
              className="p-3 mt-1 mb-3"
            />
          </div>
          {/* end - div for inputs */}

          {/* start - div for buttons */}
          <div className="mt-8 flex flex-col gap-y-2">
            <BtnForm
              buttonName="Log In"
              className="text-white py-2 bg-gradient-to-r from-blue-medium to-blue-dark hover:from-blue-pale hover:via-blue-medium hover:to-blue-dark"
            />
            <BtnForm
              buttonName="SignUp"
              className="text-blue-dark bg-white border-2 border-blue-dark py-2 bg-gradient-to-r hover:from-white hover:via-grey-lighter hover:to-grey-lighter "
            />
          </div>
          {/* end - div for buttons */}

          {/* start - div for description - log in as admin */}
          <div className="flex justify-center items-center mt-4 lg:w-3/4">
            <button className="text-xs text-blue-dark lg:w-3/4">
              Log In as Admin
            </button>
          </div>
          {/* end - div for description - log in as admin */}
        </form>
      </div>
      {/* end - div for inputs, buttons, descriptions */}
    </div>
  )
}
