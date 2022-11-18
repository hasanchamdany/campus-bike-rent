import * as React from "react"
import PropTypes from "prop-types"

export default function BtnFormBlue(props) {
  return (
    <div>
      <button
        className={
          "text-white w-full text-lg font-bold py-2 rounded-xl shadow-xl active:scale-[.99] active:duration-75 transition-all hover:scale-[1.02] ease-in-out lg:w-3/4 hover:duration-700 " +
          props.className
        }
      >
        {props.buttonName}
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
