import React, { useState, useEffect } from "react"

export const Convert = ({ language, text }) => {
  useEffect(() => {
    console.log("New lang or text")
  }, [language, text])
  return <div>this is convert</div>
}
