import React, { useState } from "react"
import { Accordion } from "../accordion"
import { Search } from "../search"
import { DropDown } from "../drop-down"
import { Translate } from "../translate"
import { Route } from "../route"

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

const showAccordion = () => {
  if (window.location.pathname === "/") {
    return <Accordion items={items} />
  }
}
const showDropdown = () => {
  if (window.location.pathname === "/dropdown") {
    return <DropDown />
  }
}

const showList = () => {
  if (window.location.pathname === "/list") {
    return <Search />
  }
}

const showTranslate = () => {
  if (window.location.pathname === "/translate") {
    return <Translate />
  }
}

export const App = () => {
  const [selected, setSelected] = useState(options[0])

  return (
    <div>
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <DropDown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  )
}
