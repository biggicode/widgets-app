import React, { useState } from "react"
import { DropDown } from "../drop-down"

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
]

export const Translate = () => {
  return (
    <div>
      <DropDown />
    </div>
  )
}
