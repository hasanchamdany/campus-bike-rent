import * as React from "react"
import PropTypes from "prop-types"

export default function BtnFormBlue({ buttonName }) {
  return (
    <div>
      <button
        className="w-full text-lg font-bold text-white py-2 rounded-xl shadow-xl
          active:scale-[.99] active:duration-75 transition-all hover:scale-[1.02] ease-in-out
          lg:w-3/4
          bg-gradient-to-r from-blue-medium to-blue-dark hover:from-blue-pale hover:via-blue-medium hover:to-blue-dark 
          hover:duration-700"
      >
        {buttonName}
      </button>
    </div>
  )
}

BtnFormBlue.defaultProps = {
  buttonName: "Button",
}

//untuk membatasi type title nya jadi string saja
BtnFormBlue.propTypes = {
  buttonName: PropTypes.string.isRequired,
}
