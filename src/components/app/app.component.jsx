import React from "react"
import { Accordion } from "../accordion"
import { Search } from "../search"

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

export const App = () => {
  return (
    <div>
      <Search />
    </div>
  )
}
