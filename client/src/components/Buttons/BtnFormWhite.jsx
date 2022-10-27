import * as React from "react"
import PropTypes from "prop-types"

export default function BtnFormWhite({ buttonName }) {
  return (
    <div>
      <button
        className="w-full text-lg font-bold  text-blue-dark bg-white border-2 border-blue-dark py-2 rounded-xl shadow-xl
          active:scale-[.99] active:duration-75 transition-all hover:scale-[1.02] ease-in-out]
          lg:w-3/4
          bg-gradient-to-r hover:from-white hover:via-grey-lighter hover:to-grey-lighter 
          hover:duration-700"
      >
        {buttonName}
      </button>
    </div>
  )
}

BtnFormWhite.defaultProps = {
  buttonName: "Button",
}

//untuk membatasi type title nya jadi string saja
BtnFormWhite.propTypes = {
  buttonName: PropTypes.string.isRequired,
}
