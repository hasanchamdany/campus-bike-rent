import * as React from "react"

export default function TxtInputMd({ inputLabel, placeholderText, inputType }) {
  return (
    <div className="flex flex-col gap-y-0.5">
      <label className="text-lg font-medium text-blue-dark">{inputLabel}</label>
      <input
        type={inputType}
        className="w-full border-2 border-blue-dark rounded-lg p-1.5 mb-2 lg:w-3/4"
        placeholder={placeholderText}
      />
    </div>
  )
}

TxtInputMd.defaultProps = {
  inputLabel: "Input Label",
  placeholderText: "Placeholder Text",
}
