import React, { useState, useEffect } from "react"
import axios from "axios"

export const Search = () => {
  const [term, setTerm] = useState("cars")
  const [results, setResults] = useState([])

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      })

      setResults(data.query.search)
    }

    search()
  }, [term])

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
