import React, { useState, useEffect } from "react"

export const Search = () => {
  const [term, setTerm] = useState("")

  useEffect(() => {
    console.log("hey")
  }, [])

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter search term</label>
          <input
            value={term}
            className="input"
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}
