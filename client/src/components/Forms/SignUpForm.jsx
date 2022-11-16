import * as React from "react"
import BtnForm from "../Buttons/BtnForm"
import TxtInput from "../Inputs/TxtInput"

const signUpForm = () => {
  return (
    <div
      className="flex flex-col justify-center 
                shadow-2xl rounded-xl bg-white px-10 py-16 h-5/6 w-10/12 
                lg:w-9/12 lg:pl-24 md:w-1/2 md:px-10"
    >
      {/* start - div for Sign Up Title */}
      <div id="loginTitle" className="flex">
        <h1 className="text-4xl font-bold text-blue-dark">Sign up to B</h1>
        <h1 className="text-4xl font-bold text-orange">i</h1>
        <h1 className="text-4xl font-bold text-blue-dark">sa</h1>
      </div>
      {/* end - div for Sign Up Title */}

      {/* start - div for Login alternative */}
      <div className="flex gap-x-1 font-normal mt-2 text-blue-dark">
        <p className="">Already a member?</p>
        <button className="text-orange">Log In</button>
      </div>
      {/* end - div for Login alternative */}

      {/* start - div for inputs and buttons */}
      <form>
        <div>
          {/* start - div for inputs */}
          <div className="mt-8">
            <label className="text-lg font-medium text-blue-dark">
              Full Name
            </label>
            <TxtInput
              inputLabel="Full Name"
              placeholder="Jane Doe"
              className="p-1.5 mb-2"
            />
            <label className="text-lg font-medium text-blue-dark">Email</label>
            <TxtInput
              inputLabel="Email"
              placeholder="janedoe@xxx.com"
              className="p-1.5 mb-2"
            />
            <label className="text-lg font-medium text-blue-dark">
              Password
            </label>
            <TxtInput
              inputType="password"
              inputLabel="Password"
              placeholder="janedoe12813279"
              className="p-1.5 mb-2"
            />
            <label className="text-lg font-medium text-blue-dark">
              Phone Number
            </label>
            <TxtInput
              inputLabel="Phone Number"
              placeholder="081xxxxxxxxx"
              className="p-1.5 mb-2"
            />
          </div>
          {/* end - div for inputs */}

          {/* start - div for buttons */}
          <div className="mt-4 flex flex-col gap-y-2">
            <BtnForm
              buttonName="Create Account"
              className="text-white py-2 bg-gradient-to-r from-blue-medium to-blue-dark hover:from-blue-pale hover:via-blue-medium hover:to-blue-dark"
            />
          </div>
          {/* end - div for buttons */}
        </div>
      </form>
      {/* end - div for inputs and buttons */}
    </div>
  )
}

export default signUpForm
