import * as React from "react"
import BtnFormBlue from "../Buttons/BtnFormBlue"
import TxtInputMd from "../Inputs/TxtInputMd"

const signUpForm = () => {
  return (
    <div
      className="shadow-2xl rounded-xl bg-white px-16 py-16 h-5/6 w-10/12 
      lg:rounded-tr-none lg:rounded-br-none lg:w-11/12 lg:pl-40
      md:w-1/2"
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
        {/* start - div for inputs */}
        <div className="mt-8">
          <TxtInputMd inputLabel="Full Name" placeholderText="Jane Doe" />
          <TxtInputMd inputLabel="Email" placeholderText="janedoe@xxx.com" />
          <TxtInputMd
            inputLabel="Password"
            placeholderText="janedoe12813279"
          />
          <TxtInputMd
            inputLabel="Phone Number"
            placeholderText="081xxxxxxxxx"
          />
        </div>
        {/* end - div for inputs */}

        {/* start - div for buttons */}
        <div className="mt-4 flex flex-col gap-y-2">
          <BtnFormBlue buttonName={"Create Account"} />
        </div>
        {/* end - div for buttons */}
      </div>
      {/* end - div for inputs and buttons */}
    </div>
  )
}

export default signUpForm
