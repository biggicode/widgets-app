import React from "react"

export const Route = ({ path, children }) => {
  return window.location.pathname === path ? children : null
}
