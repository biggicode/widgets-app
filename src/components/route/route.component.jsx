import React, { useEffect, useState } from "react"

export const Route = ({ path, children }) => {
  useEffect(() => {
    const onLocationChange = () => {
      console.log("location changed")
    }

    window.addEventListener("popstate", onLocationChange)

    return window.removeEventListener("popstate", onLocationChange)
  }, [])

  return window.location.pathname === path ? children : null
}
