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
  const [language, setLanguage] = useState(options[0])

  return (
    <div>
      <DropDown
        label="Select a language"
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
    </div>
  )
}
