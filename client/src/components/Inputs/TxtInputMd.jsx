import * as React from "react"

export default function TxtInputMd({ inputLabel, placeholderText }) {
  return (
    <div className="flex flex-col gap-y-0.5">
      <label className="text-lg font-medium text-darkBlue">{inputLabel}</label>
      <input
        className="w-full border-2 border-darkBlue rounded-lg p-1.5 mb-2 lg:w-3/4"
        placeholder={placeholderText}
      />
    </div>
  )
}

TxtInputSmall.defaultProps = {
  inputLabel: "Input Label",
  placeholderText: "Placeholder Text",
}
