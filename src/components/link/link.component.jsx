import React from "react"

export const Link = ({ className, href, children }) => {
  const onLinkClick = (e) => {
    if (e.metaKey || e.ctrlKey) {
      return
    }

    e.preventDefault()
    window.history.pushState({}, "", href)

    const navEvent = new PopStateEvent("popstate")
    window.dispatchEvent(navEvent)
  }

  return (
    <a onClick={onLinkClick} href={href} className={className}>
      {children}
    </a>
  )
}
