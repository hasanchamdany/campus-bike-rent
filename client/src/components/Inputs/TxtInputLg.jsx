import * as React from "react"

export default function TxtInputLg({ inputLabel, placeholderText }) {
  return (
    <div className="flex flex-col gap-y-1">
      <label className="text-lg font-medium text-blue-dark">{inputLabel}</label>
      <input
        className="w-full border-2 border-blue-dark rounded-lg p-3 mt-1 mb-3 lg:w-3/4"
        placeholder={placeholderText}
      />
    </div>
  )
}

TxtInputLg.defaultProps = {
  inputLabel: "Input Label",
  placeholderText: "Placeholder Text",
}
