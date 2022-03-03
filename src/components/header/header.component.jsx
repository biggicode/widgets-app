import React from "react"

export const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <a href="/" className="item">
        Acordion
      </a>
      <a href="/list" className="item">
        Search
      </a>
      <a href="/dropdown" className="item">
        DropDown
      </a>
      <a href="/translate" className="item">
        Translate
      </a>
    </div>
  )
}
