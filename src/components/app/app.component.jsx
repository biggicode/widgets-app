import React, { useState } from "react"
import { Accordion } from "../accordion"
import { Search } from "../search"
import { DropDown } from "../drop-down"
import { Translate } from "../translate"

const items = [
  {
    title: "What is React?",
    content: "React is a front end js framework",
  },
  {
    title: "Why use React?",
    content: "React is a  favorite js library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use react by creating components",
  },
]

const options = [
  {
    label: "Color Red",
    value: "red",
  },
  {
    label: "Color green",
    value: "green",
  },
  {
    label: "Color blue",
    value: "blue",
  },
]

export const App = () => {
  return (
    <div>
      <Translate />
    </div>
  )
}
