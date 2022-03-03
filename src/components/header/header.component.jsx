import React from "react"
import { Link } from "../link"

export const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className="item">
        Acordion
      </Link>
      <Link href="/list" className="item">
        Search
      </Link>
      <Link href="/dropdown" className="item">
        DropDown
      </Link>
      <Link href="/translate" className="item">
        Translate
      </Link>
    </div>
  )
}
