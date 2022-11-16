import * as React from "react"

export default function TxtInputLg(props) {
  return (
    <div className="flex flex-col gap-y-1">
      <input
        type={props.type}
        name={props.name}
        className={
          "lg:w-3/4 rounded-lg w-full border-2 border-blue-dark " +
          props.className
        }
        placeholder={props.placeholder}
      />
    </div>
  )
}

TxtInputLg.defaultProps = {
  placeholderText: "Placeholder Text",
}
