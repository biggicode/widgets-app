import React from "react"

export const Link = ({ className, href, children }) => {
  const onLinkClick = (e) => {
    e.preventDefault()
  }

  return (
    <a onClick={onLinkClick} href={href} className={className}>
      {children}
    </a>
  )
}
